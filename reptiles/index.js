const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const request = require('request')
var rwData = ''
https.get('https://luo3.info/list?cityCode=510100', (res) => {
    // node.js中键值为字符串
    // 监听，当接收到data时触发下面的函数
    res.on('data', (chunk) => {
        // 每当流式文件下载一部分，将转换好的字符串新增至Data中
        // console.log(chunk.toString('utf8'))
        rwData += chunk.toString('utf8')
        console.log('rwData', rwData)
    })
    // 监听，当到结束时触发下面的函数
    res.on('end', () => {
        // 导出最终的文件
        // console.log(Data)
        // console.log(Data)
        // fs.writeFileSync('./acfun.html',rwData)
        // let obj=fs.readFileSync('./acfun.html').toString('utf8')
        let $ = cheerio.load(rwData)
        $('img').each((index, el) => {

            // fs.writeFileSync('./'+$(el).attr('src').split('/').pop(),$(el).attr('src'))
            // request($(el).attr('src'))
            fs.appendFileSync('./acfun.txt', $(el).attr('src'))
            console.log($(el).attr('src'))
            // console.log($(el).attr('src'))  
            // console.log(index)
        })
    })
}).on('error', err => {
    console.log(err)
})
