'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);
  router.post('/upload', controller.upload.index);
  // 用户相关 userList
  router.post('/api/user/add', controller.user.add);
  router.get('/api/user/userList', controller.user.userList);
  router.post('/api/user/edit', controller.user.edit);
  router.post('/api/user/login', controller.user.login);
  router.get('/api/user/info', jwt, controller.user.info);
  router.post('/api/user/logout', controller.user.logout);
  // 文章相关
  router.post('/api/article/add', controller.article.add);
  router.post('/api/article/edit', controller.article.edit);
  router.get('/api/article/removeById', controller.article.removeById);
  router.get('/api/article/id/:_id', controller.article.findOne);
  router.get('/api/article/findById', controller.article.findById);
  router.get('/api/article/findAll', controller.article.findAll);
  router.get('/api/article/findByCategory', controller.article.findByCategory);
  // 类别相关
  router.post('/api/category/add', controller.category.add);
  router.post('/api/category/edit', controller.category.edit);
  router.get('/api/category/removeById', controller.category.removeById);
  router.get('/api/category/findAllCategory', controller.category.findAllCategory);
  router.get('/api/category/findByCategory', controller.category.findByCategory);
  // 专栏
  router.post('/api/column/add', controller.column.add);
  router.post('/api/column/edit', controller.column.edit);
  router.get('/api/column/removeById', controller.column.removeById);
  router.get('/api/column/findAllColumn', controller.column.findAllColumn);
  router.get('/api/column/findByColumn', controller.column.findByColumn);
};
