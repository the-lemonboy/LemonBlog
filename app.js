// 引入express模块
const express = require('express');

// 创建app对象
const app = express();
const router = require('./server/router');
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
// 使用
app.use('/api', router);
app.use(router)
// 定义服务器启动端口 
app.listen(3001, () => {
  console.log('app listening on port 3001');
});
