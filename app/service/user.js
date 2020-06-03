'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  // 添加用户信息
  async add(user) {
    try {
      const result = await this.ctx.model.User.create(user);
      return { message: '添加成功', success: true, result };
    } catch (err) {
      this.logger.error(err);
      return { success: false, err };
    }
  }
  async userList() {
    try {
      const result = await this.ctx.model.User.find({});
      return { message: '查找成功', success: true, result };
    } catch (err) {
      this.logger.error(err);
      return { success: false, err };
    }
  }
  async edit(body) {
    try {
      const { _id, userName, passWord, avaterImg } = body;
      const result = await this.ctx.model.User.findByIdAndUpdate(_id, { userName, passWord, avaterImg });
      return { massage: '修改成功', success: true, _id, userName, passWord, avaterImg };
    } catch (err) {
      this.logger.error(err);
      return { success: false, err };
    }
  }
  async login(body) {
    try {
      const { userName, passWord } = body;
      const result = await this.ctx.model.User.findOne({ userName, passWord });
      return { massage: '登录成功', success: true, result };
    } catch (err) {
      this.logger.error(err);
      return { success: false, err };
    }
  }
  async info(body) {
    try {
      const { userName, passWord } = body;
      const result = await this.ctx.model.User.findOne({ userName, passWord });
      return { massage: '验证成功', success: true, result };
    } catch (err) {
      this.logger.error(err);
      return { success: false, err };
    }
  }


}
module.exports = UserService;
