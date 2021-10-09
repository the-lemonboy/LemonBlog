const mongoose = require('mongoose') // 引入 mongoose
const url = "mongodb://localhost:27017/blog"; // 本地数据库地址
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
// connect() 返回一个状态待定（pending）的连接，可以用来判断连接成功或失败
const db = mongoose.connection; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Successful connection to "+url)
});
module.exports = mongoose
