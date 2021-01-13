const express = require('express')
const app = express()
const bodyparser = require('body-parser')
// 引入中间件（插件）
// create application/json parser
// bodyParser.json() json格式的处理
// create application/x-www-form-urlencoded 表单格式的处理
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

// 开启3000端口服务
app.listen('3000', () => {
    console.log('服务器开启成功')
})
// ipconfig 查看本地ip,localhost:3000或ip:3000
// 一个最简单的get接口
app.get('/home', (req, res) => {
    // req前端发送的数据
    console.log(req.query)
    //  获取键值，es6写法
    let { id, name } = req.query
    // res响应
    // res.send,返回前端消息
    if (id == 1 || name == '笨蛋') {
        // get 从req.query获取数据,post请求从req.body中获取数据
        res.send(req.query)
    } else {
        res.send({ state: -1, error: '请求错误' })
    }
    console.log('成功的发起了一次请求')
})

app.post('/testpost', (req, res) => {
    console.log('请求成功了')
    // 因为express这个框架无法自己解析req.body所以得引入一个第三方的插件body-parser，需要用它进行一次解析
    res.send({ msg: '请求成功了', dataMsg: req.body })
    // 未引入插件之前无法解析，引入插件后解析成功了。
})