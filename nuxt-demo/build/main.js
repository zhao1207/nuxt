require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     * Run ESLINT on save
     * 项目中执行严格开发
     */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_user__ = __webpack_require__(8);



var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

router.post('/user/logininInfo', __WEBPACK_IMPORTED_MODULE_1__controllers_user__["a" /* default */].logininInfo);
router.post('/user/save', __WEBPACK_IMPORTED_MODULE_1__controllers_user__["a" /* default */].save);

/* harmony default export */ exports["a"] = router;

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_user__ = __webpack_require__(9);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/* harmony default export */ exports["a"] = {
	logininInfo: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
			var userName, users;
			return __WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							userName = ctx.request.body.userName;
							_context.prev = 1;
							_context.next = 4;
							return __WEBPACK_IMPORTED_MODULE_1__model_user__["a" /* default */].find({ userName: userName });

						case 4:
							users = _context.sent;

							if (!users.length) {
								ctx.body = {
									success: 0,
									msg: '\u7528\u6237\u4FE1\u606F\u4E0D\u5B8C\u6574\uFF0C' + userName + '\u7528\u6237\u4FE1\u606F\u4E3A\u7A7A'
								};
							} else {
								ctx.body = {
									success: 1,
									user: users[0],
									msg: '返回用户信息'
								};
							}
							_context.next = 12;
							break;

						case 8:
							_context.prev = 8;
							_context.t0 = _context['catch'](1);

							ctx.body = {
								success: 0,
								msg: '错误操作'
							};
							throw new Error(_context.t0);

						case 12:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this, [[1, 8]]);
		}));

		function logininInfo(_x) {
			return _ref.apply(this, arguments);
		}

		return logininInfo;
	}(),
	save: function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
			var userInfo, userName, info;
			return __WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							userInfo = ctx.request.body.userInfo;
							_context2.prev = 1;
							userName = userInfo.userName;
							_context2.next = 5;
							return __WEBPACK_IMPORTED_MODULE_1__model_user__["a" /* default */].find({ userName: userName });

						case 5:
							info = _context2.sent;

							if (info.length) {
								_context2.next = 13;
								break;
							}

							console.log(userInfo);
							_context2.next = 10;
							return __WEBPACK_IMPORTED_MODULE_1__model_user__["a" /* default */].update({ userName: userName }, userInfo, { upsert: true });

						case 10:
							ctx.body = {
								success: 1,
								msg: '信息储存成功'
							};
							_context2.next = 14;
							break;

						case 13:
							ctx.body = {
								success: 1,
								msg: '用户已存在'
							};

						case 14:
							_context2.next = 19;
							break;

						case 16:
							_context2.prev = 16;
							_context2.t0 = _context2['catch'](1);
							throw new Error(_context2.t0);

						case 19:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this, [[1, 16]]);
		}));

		function save(_x2) {
			return _ref2.apply(this, arguments);
		}

		return save;
	}()
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


var Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;
var ObjectId = Schema.ObjectId;


var UserSchema = new Schema({
	userName: String, //用户名
	password: String, // 用户密码
	realName: String, // 用户真实姓名
	isDeleted: { //  用户名是否被撤销
		type: Boolean,
		default: false
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
	updatedAt: {
		type: Date,
		default: Date.now()
	}
});

UserSchema.pre('save', function (next) {
	if (this.isNew) {
		this.createdAt = Date.now();
		this.updatedAt = Date.now();
	} else {
		this.updatedAt = Date.now();
	}
	next();
});

UserSchema.pre('update', function () {
	this.update({}, { $set: { updatedAt: new Date() } });
});

/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('user', UserSchema);

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_session__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mongoose__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;

            // Import and Set Nuxt.js options

            config = __webpack_require__(2);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);


            connectMongo().then(function () {
              // koa-bodyparser 解决请求体的中间件，  可以处理 form, json, text类型的请求体
              app.use(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser___default()());
              // 应用处理 session 的中间件
              app.keys = ['nuxt'];
              app.use(__WEBPACK_IMPORTED_MODULE_4_koa_session___default()({
                key: 'koa:sess', // cookie 中存储 session-id 时的键名, 默认为 koa:sess
                maxAge: 86400000, //过期时间
                overwrite: true, // 是否允许重写
                httpOnly: true, //cookie是否应该只通过HTTP协议访问, 属性设置为true，该cookie不会通过脚本语言访问,设为true的目的: 它可以有效地帮助通过XSS攻击，以减少身份盗窃
                signed: true,
                rolling: false
                // store: new MongooseStore({
                //     collection: 'sessions',
                //     expires: 86400, // 1 day is the default
                // }),
              }, app));

              // 引入路由
              app.use(__WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */].routes()).use(__WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */].allowedMethods());
            });

            // Build in development

            if (!config.dev) {
              _context2.next = 11;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 11;
            return builder.build();

          case 11:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 14:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

// 连接数据库mongodb
var connectMongo = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
    return __WEBPACK_IMPORTED_MODULE_0_E_company_nuxt_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            __WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.Promise = global.Promise;
            __WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.connection.on('error', console.error.bind(console, '连接数据库失败'));
            _context3.next = 4;
            return __WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.connect('mongodb://127.0.0.1:27017/nuxt');

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function connectMongo() {
    return _ref3.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








;

start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map