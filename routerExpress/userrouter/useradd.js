const express = require('express')
const router = express.Router()//获取路由实例

// 这里的第二个参数时局部中间键，跟全局中间建做一个区分使用，next调用才会，调用第三个回调
router.post('/test', (req, res, next) => {
    console.log('局部中间键')
    next()
}, (req, res) => {
    console.log(req.body)
    res.send(req.body)
})
router.post('/testbiubiu', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})
module.exports = router