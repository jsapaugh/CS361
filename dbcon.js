var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host  : 'classmysql.engr.oregonstate.edu',
  user  : 'cs361_schmidlc',
  password: '0945',
  database: 'cs361_schmidlc'
});


module.exports.pool = pool;