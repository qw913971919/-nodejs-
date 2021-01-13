var url = require('url')
var qs = require('querystring')
// url.parse将url转换为一个json对象，.query获取url中携带的参数
let obj = url.parse('https://www.bilibili.com/video/BV147411W7Yo?p=8').query
// 将query字符串转换为一个对象，获取其中参数的值
    obj = qs.parse(obj)
    console.log(obj.p)