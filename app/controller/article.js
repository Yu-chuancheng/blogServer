'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async add() {
    this.ctx.body = await this.ctx.service.article.add(this.ctx.request.body);
  }
  async edit() {
    this.ctx.body = await this.ctx.service.article.edit(this.ctx.request.body);
  }
  async removeById() {
    this.ctx.body = await this.ctx.service.article.remove(this.ctx.query._id);
  }
  async findOne() {
    console.log(this.ctx.params);
    this.ctx.body = await this.ctx.service.article.findById(this.ctx.params._id);
  }
  async findById() {
    this.ctx.body = await this.ctx.service.article.findById(this.ctx.query._id);
  }
  async findAll() {
    this.ctx.body = await this.ctx.service.article.findAll(this.ctx.query);
  }
  async findByCategory() {
    const { articleCategory, skip } = this.ctx.query;
    this.ctx.body = await this.ctx.service.article.findByCategory(articleCategory, skip);
  }
}

module.exports = ArticleController;
