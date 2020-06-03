# eggDemo



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org





```
获取get传值  链接   xxx.com?aid=123
    this.ctx.query
获取动态路由匹配  在router.js设置  /:id    链接xxx.com/123
    this.ctx.parmas    
```

在service中做数据库表查询操作 复杂的数据操作 访问外部的接口操作 注意异步操作
在controller中创建控制器
在router中配置路由


<!-- 创建类别编辑  colums编辑  文章表格curd 在前台展示文章 -->
- 在前台展示文章
