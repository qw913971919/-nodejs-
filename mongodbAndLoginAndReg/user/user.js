const express = require("express")
const router = express.Router()
const User = require('../db/index')
const email = require('../../email')
// 正确的使用数据库插入数据的方式是   将建立数据库连接放进最外层入口文件（app.js）
// 建立文件夹引入mongoose，使用mongoose.Schema()生成并保存单个的schema对象
// 将所有单个的schema对象引入一个index文件，然后依次转换为数据模型，然后通过module.exports={}的方式导出，{schema1:1,schema2:2}
// 使用数据模型时通过属性的方式去使用，直接  引入变量.数据模型自定义名.mongoose方法  这样来实现操作数据库的操作
var codes = {}
router.post('/email', (req, res) => {
    var { us, ps, mail } = req.body
    if (us && ps && mail) {
        User.find({ us }).then((data) => {
            // 如果find到的data.length等于0，证明没有重复的us
            if (data.length == 0) {
                let code = parseInt(Math.random() * 10000)
                console.log(codes)
                if (codes[us]) return res.send({ data: '邮件已存在，不要重复发送' })
                email.send(mail, '邮件标题', code).then(() => {
                    console.log('发送邮件成功的回调')
                    codes[us] = { 'code': code }
                    res.send({ data: '邮件已发送' })
                }).catch((err) => {
                    res.send({ data: err })
                })
            } else {
                res.send({ msg: -3, data: '账号重复' })
            }
        }).catch((err) => {
            console.log(err)
        })
    } else {
        res.send('请输入账号或密码')
    }
})
router.post('/register', (req, res) => {
    var { us, ps, id, code } = req.body
    if (us && ps) {
        if (!code) return res.send({ msg: -1, data: '请输入验证码' })
        if (code != codes[us].code) return res.send({ msg: -2, data: '输入的验证码错误' })
        User.find({ us }).then((data) => {
            // 如果find到的data.length等于0，证明没有重复的us
            if (data.length == 0) return User.insertMany({ us, ps, id })
            // 如果没有被上一行return出去，证明一件重复了，回复并抛出异常，停止链式调用
            res.send({ msg: -3, data: '账号或密码重复' })
            throw new Error('账号或密码重复')
        }).then((data) => {
            console.log(data, '插入成功')
            res.send({ msg: 0, data: '注册成功' })
        }).catch((err) => {
            console.log(err)
        })
    } else {
        res.send('请输入账号或密码')
    }
})
module.exports = router