'use strict';

const Controller = require('egg').Controller;

class ColumnController extends Controller {
    async add() {
        this.ctx.body = await this.ctx.service.column.add(this.ctx.request.body);
    }
    async edit() {
        this.ctx.body = await this.ctx.service.column.edit(this.ctx.request.body);
    }
    async removeById() {
            this.ctx.body = await this.ctx.service.column.remove(this.ctx.query._id);
        }
        // async findById() {
        //     this.ctx.body = await this.ctx.service.column.findById(this.ctx.query._id);
        // }
    async findByColumn() {
        //articleCategory, skip
        this.ctx.body = await this.ctx.service.column.findByColumn(this.ctx.query);
    }
    async findAllColumn() {
        this.ctx.body = await this.ctx.service.column.findAllColumn();
    }
}

module.exports = ColumnController;