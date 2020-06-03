'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async add() {
    this.ctx.body = await this.ctx.service.user.add(this.ctx.request.body);
  }
  async edit() {
    this.ctx.body = await this.ctx.service.user.edit(this.ctx.request.body);
  }
  async userList() {
    this.ctx.body = await this.ctx.service.user.userList();
  }
  async login() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    const token = app.jwt.sign(data, app.config.jwt.secret);
    ctx.body = { token, success: true };
  }
  async info() {
    const { ctx } = this;
    console.log(ctx.state.user);
    this.ctx.body = await this.ctx.service.user.info(ctx.state.user);
  }
  async logout() {
    this.ctx.body = { success: true };
  }
}

module.exports = UserController;
