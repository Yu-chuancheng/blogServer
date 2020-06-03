'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async add() {
    this.ctx.body = await this.ctx.service.category.add(this.ctx.request.body);
  }
  async edit() {
    this.ctx.body = await this.ctx.service.category.edit(this.ctx.request.body);
  }
  async removeById() {
    this.ctx.body = await this.ctx.service.category.remove(this.ctx.query._id);
  }
  // async findById() {
  //     this.ctx.body = await this.ctx.service.category.findById(this.ctx.query._id);
  // }
  async findByCategory() {
    // articleCategory, skip
    this.ctx.body = await this.ctx.service.category.findByCategory(this.ctx.query);
  }
  async findAllCategory() {
    this.ctx.body = await this.ctx.service.category.findAllCategory(this.ctx.query);
  }
}

module.exports = CategoryController;
