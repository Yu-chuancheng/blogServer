'use strict';

const Service = require('egg').Service;
class CategoryService extends Service {
    async add(category) {
        try {
            const result = await this.ctx.model.Category.create(category);
            return { message: '添加成功', success: true, result };
        } catch (err) {
            this.logger.error(err);
            return { success: false, err };
        }
    }

    async edit(body) {
        try {
            const { _id } = body
            delete body._id
            const result = await this.ctx.model.Category.findByIdAndUpdate(_id, body)
            return { massage: '修改成功', success: true, body }
        } catch (err) {
            this.logger.error(err);
            return { success: false, err };
        }
    }

    async remove(id) {
        try {
            const result = await this.ctx.model.Category.findByIdAndRemove(id)
            return { massage: '删除成功', success: true, result }
        } catch (error) {
            this.logger.error(error);
            return { success: false, err };
        }
    }
    async findByCategory(value, skip) {
        try {
            if (!skip) { skip = 1 }
            const result = await this.ctx.model.Category.find({ value }, null, { skip })
            return { massage: '查找成功', success: true, result }
        } catch (error) {
            this.logger.error(error);
            return { success: false, err };
        }
    }

    async findAllCategory(body) {
        try {
            let parmas = body
            let skip = 1
            if (parmas.skip) {
                skip = +parmas.skip
                delete parmas.skip
            }
            // , null, { skip }
            const result = await this.ctx.model.Category.find(parmas)
            return { massage: '查找成功', success: true, result }
        } catch (error) {
            this.logger.error(error);
            return { success: false, error };
        }
    }

}
module.exports = CategoryService;