const express = require('express')
const port = 3000
const app = express()
const router = require('./router/router')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('server is running on 3000')
})
app.engine('html', require('art-template'))
/**
 * param1:请求参数 param2:文件路径
 * alias
 */
app.use('/admin', express.static('./views/admin'))

app.use(router)
