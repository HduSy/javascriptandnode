const url = require('url')
const obj = url.parse('https://cn.usst.lab607.sy/search?name=宋垚&age=23&height=170', true)
console.log(obj.pathname)
console.log(obj.query)
