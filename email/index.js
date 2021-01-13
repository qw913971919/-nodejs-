const nodemailer = require("nodemailer")
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: '913971919@qq.com', // generated ethereal user
        pass: 'ywfjjnvnvmuvbbec', // generated ethereal password SMTP
    },
});
function send(email, title, code) {
    return new Promise((resolve, reject) => {
        transporter.sendMail({
            from: '"Fred Foo 👻" <913971919@qq.com>', // sender address
            to: email, // list of receivers
            subject: title, // Subject line
            html: "<b>验证码是" + code + ",五分钟后失效</b>", // html body
        }, (err, data) => {
            if (err) {
                reject('发送邮件失败')
            } else {
                resolve('发送邮件成功')
            }
        });
    })

}
//导出一个函数
module.exports.send = send