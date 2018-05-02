import mongoose from 'mongoose';

const {Schema} = mongoose;
const {ObjectId} = Schema;

const UserSchema = new Schema({
	userName: String,    //用户名
	password: String,    // 用户密码
	realName: String,    // 用户真实姓名
	isDeleted: {         //  用户名是否被撤销
		type: Boolean,
		default: false
	},
	createdAt:{
		type: Date,
		default: Date.now()
	},
	updatedAt:{
		type: Date,
		default: Date.now()
	}
});

UserSchema.pre('save', function(next){
	if (this.isNew) {
        this.createdAt = Date.now();
        this.updatedAt = Date.now();
    } else {
        this.updatedAt = Date.now();
    }
    next();
});

UserSchema.pre('update', function(){
	this.update({}, {$set: {updatedAt: new Date()}});
});

export default mongoose.model('user', UserSchema);