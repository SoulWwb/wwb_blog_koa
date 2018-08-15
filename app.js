'use strict'

const Koa = require('koa')

const path = require('path')
// const logger = require('koa-logger')
// const bodyParser = require('koa-bodyparser')
const staticServer = require('koa-static')
// const router = require('./router/router')
// const config = require('./config/config')
const moment = require('moment')

const app = new Koa()

// 日志
app.use(async (ctx, next) => {
    console.log(`<- ${ctx.method} ${moment().format('YYYY-MM-DD HH:mm:ss')} ${ctx.url}`);
    let startTime = Date.now()
    await next()
    console.log(`-> ${ctx.method} ${moment().format('YYYY-MM-DD HH:mm:ss')} ${ctx.url} ${Date.now() - startTime}ms`);
})

// 请求体解析
// app.use(bodyParser())

// 路由
// app.use(router.routes())
// app.use(router.allowedMethods())

// 静态资源服务
app.use(staticServer(path.join(__dirname, './public')))

// 端口
app.listen(7999)
console.log(`app is listening on 7999`)