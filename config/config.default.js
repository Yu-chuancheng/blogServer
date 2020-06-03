/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
  const config = exports = {};
  config.multipart = {
    mode: 'stream',
    fileSize: '5mb', // 最大5mb
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586912881745_7055';

  // add your middleware config here
  config.middleware = [];
  config.jwt = {
    secret: '123456',
  };
  // add your user config here
  config.cors = {
    origin: '*', // 访问白名单,根据你自己的需要进行设置
    allowMethods: 'GET,HEAD,PUT,POST,DELETE',
  };
  config.security = {
    csrf: {
      enable: false, // 通过 query 传递 CSRF token 的默认字段为 _csrf
    },
  };
  config.bodyParser = {
    jsonLimit: '50mb',
    formLimit: '50mb',
  };
  config.mongoose = {
    url: 'mongodb+srv://ycc:19971011ycc@cluster0-zak08.mongodb.net/blog?retryWrites=true&w=majority',
    // url: 'mongodb://localhost:27017/blogApi',
    options: {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  };

  const userConfig = {
    myAppName: 'egg',
  };

  config.onerror = {
    all(err, ctx) {
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      ctx.body = 'error';
      ctx.status = 500;
    },
    html(err, ctx) {
      // html hander
      ctx.body = '<h3>error</h3>';
      ctx.status = 500;
    },
    json(err, ctx) {
      // json hander
      ctx.body = { message: 'error' };
      ctx.status = 500;
    },
    jsonp(err, ctx) {
      // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
