import Koa from 'koa';
import { Nuxt, Builder } from 'nuxt';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session';
import router from './router';
import mongoose from 'mongoose';

async function start () {
  const app = new Koa();
  const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 3000;

  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js');
  config.dev = !(app.env === 'production');

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  connectMongo().then(() => {
    // koa-bodyparser 解决请求体的中间件，  可以处理 form, json, text类型的请求体
    app.use(bodyParser());
     // 应用处理 session 的中间件
    app.keys = ['nuxt'];
    app.use(session({
        key: 'koa:sess', // cookie 中存储 session-id 时的键名, 默认为 koa:sess
        maxAge: 86400000, //过期时间
        overwrite: true, // 是否允许重写
        httpOnly: true,   //cookie是否应该只通过HTTP协议访问, 属性设置为true，该cookie不会通过脚本语言访问,设为true的目的: 它可以有效地帮助通过XSS攻击，以减少身份盗窃
        signed: true,
        rolling: false,
        // store: new MongooseStore({
        //     collection: 'sessions',
        //     expires: 86400, // 1 day is the default
        // }),
    }, app));

    // 引入路由
    app.use(router.routes()).use(router.allowedMethods());
  })


  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.use(async (ctx, next) => {
    await next();
    ctx.status = 200; // koa defaults to 404 when it sees that status is unset
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve);
      ctx.res.on('finish', resolve);
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject);
      });
    });
  });

  app.listen(port, host);
  console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console
};

// 连接数据库mongodb
async function connectMongo() {
  mongoose.Promise = global.Promise;
  mongoose.connection.on('error', console.error.bind(console, '连接数据库失败'));
  await mongoose.connect(`mongodb://127.0.0.1:27017/nuxt`);
}

start();
