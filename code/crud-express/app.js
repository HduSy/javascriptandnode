const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//引入
const router = require('./routers/student')
//配置
const port = 3000
//配置模板引擎
app.engine('html', require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

//静态资源服务
app.use('/node_modules/', express.static('./node_modules'))
app.use('/public/', express.static('./public'))
//挂在到app服务中
app.use(router)
//监听
app.listen(port, () => {
    console.log('Server is running at port 3000')
})
