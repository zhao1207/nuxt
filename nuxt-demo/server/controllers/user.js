import User from '../model/user';

export default {
	logininInfo: async(ctx) => {
		const { userName } = ctx.request.body;
		try {
			let users = await User.find({ userName: userName });
			if (!users.length) {
				ctx.body = {
					success: 0,
					msg: `用户信息不完整，${userName}用户信息为空`
				}
			} else {
				ctx.body = {
					success: 1,
					user: users[0],
					msg: '返回用户信息'
				}
			}
		} catch (err) {
			ctx.body = {
				success: 0,
				msg: '错误操作'
			}
			throw new Error(err);
		}
	},
	save: async(ctx) => {
		const {userInfo} = ctx.request.body;
		try {
			let userName = userInfo.userName;
			let info = await User.find({ userName });
			if (!info.length) {
				console.log(userInfo);
				await User.update({ userName }, userInfo, { upsert: true });
				ctx.body = {
					success: 1,
					msg: '信息储存成功'
				}
			} else {
				ctx.body = {
					success: 1,
					msg: '用户已存在'
				}
			}
		} catch (err){
			throw new Error(err);
		}
	}
}