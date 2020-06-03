'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const UserSchema = new Schema({
        userName: {
            type: String,
            unique: true,
            required: true,
        },
        avatarImg: {
            type: String,
            // default:null
        },
        passWord: {
            type: String,
            required: true
        }
    });
    return mongoose.model('User', UserSchema);
};