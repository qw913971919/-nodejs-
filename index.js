/*
var fs=require('fs')
fs.mkdir('./new',(err,data)=>{
    if(err){
        console.log('错误')
    }else{
        console.log(data)
        console.log('创建成功')
    }
})
fs.rmdir('./new',(err,data)=>{
    if(err){
        console.log('错误')
    }else{
        console.log(data)
    }
})
*/
// 一个万恶的邮箱轰炸器
var email=require('./email')
setInterval(()=>{
    email.send('506293710@qq.com','骚扰标题')
},2000)
    
