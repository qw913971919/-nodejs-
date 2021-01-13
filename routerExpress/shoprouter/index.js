const express = require('express')
const router = express.Router()//获取路由实例

router.post('/testsss', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

module.exports = router