import Router from 'koa-router';
import User from './controllers/user';

const router = new Router();

router.post('/user/logininInfo',User.logininInfo);
router.post('/user/save', User.save);

export default router;