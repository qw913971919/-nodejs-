var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '123456',
  database: 'test'
});
// mysql的使用大失败！！  
// 装不上，装上了又出问题
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});