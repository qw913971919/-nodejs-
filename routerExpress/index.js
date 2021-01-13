const express = require('express')
const app = express()
const path = require('path')
// 第三方插件，用来解析post请求body值
const bodyParser = require('body-parser')
// 静态资源目录的处理
// location:3000/public下的  img文件     这里是组合路径锁定图片文件夹，绝对路径加文件夹的相当路径名
console.log(__dirname)
app.use('/public', express.static(path.join(__dirname,'./img')))
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())等价于 app.user('/',bodyParser.json())是中间件的使用
app.use('/',(req,res,next)=>{
    console.log(req.url)
}) 
// 可以省略第一个参数效果等同。默认就是根目录的拦截器  判断req的数据， 调用next()是否放行,例如可以在这里验证token信息，
app.use(bodyParser.json())

const userroute = require('./userrouter/useradd')
const shoproute = require('./shoprouter/index')
// 使用路由，模块化的写法。
app.use('/user', userroute)
app.use('/shop', shoproute)
app.listen('3000', () => {
    console.log('服务开启端口号3000')
})