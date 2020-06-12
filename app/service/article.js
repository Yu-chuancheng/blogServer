'use strict';

const Service = require('egg').Service;
class ArticleService extends Service {
  async add(body) {
    try {
      body = Object.assign({ date: new Date(), updateTime: new Date() }, body);
      const result = await this.ctx.model.Article.create(body);
      return { message: '添加成功', success: true, result };
    } catch (err) {
      this.logger.error(err);
      return { err, success: false };
    }
  }

  async edit(body) {
    try {
      console.log(body);
      // const { _id } = body
      // delete body._id
      const result = await this.ctx.model.Article.findByIdAndUpdate(body._id, body);
      return { massage: '修改成功', success: true, result };
    } catch (err) {
      this.logger.error(err);
      return { err, success: false };
    }
  }
  async remove(id) {
    try {
      const result = await this.ctx.model.Article.findByIdAndRemove(id);
      return { massage: '删除成功', success: true, result };
    } catch (error) {
      this.logger.error(error);
      return { success: false, error };
    }
  }

  async findById(id) {
    try {
      console.log(id);
      const result = await this.ctx.model.Article.findById(id);
      return { massage: '查找成功', success: true, result };
    } catch (error) {
      this.logger.error(error);
      return { success: false, error };
    }
  }
  async findByCategory(articleCategory, skip) {
    try {
      const result = await this.ctx.model.Article.find({ articleCategory }, null, { skip });
      return { massage: '查找成功', success: true, result };
    } catch (error) {
      this.logger.error(error);
      return { success: false, error };
    }
  }
  async findAll(body) {
    try {
      // let skip = body.skip
      // delete body.skip
      // {"name": {$regex: '测试', $options:'i'}}
      if (body.articleTitle) {
        const title = body.articleTitle;
        body.articleTitle = { $regex: title, $options: 'i' };
      }
      const result = await this.ctx.model.Article.find(body);
      // console.log('查询条件body:' + JSON.stringify(body) + '结果:' + result);
      return { massage: '', success: true, result };
    } catch (error) {
      this.logger.error(error);
      return { success: false, error };
    }
  }

}
module.exports = ArticleService;
