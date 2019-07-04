const a = 'str'

function f(x, y) {
    return x + y
}

//node 底层
// var modules = {
//     exports: {}
// }
//对modules.exports的引用[对象引用 默认指向同一个对象 对任一重新赋值 都会'断开'两者联系but return的是modules.exports]
// var exports = modules.exports
//最后返回 所以直接给exports赋值无效 exports = 'str' 无效
// return modules.exports

// 导出多个
// exports.a = a
// exports.f = f
// 导出单个 后者覆盖前者 也可以导出多个
// module.exports = a
// module.exports = f
module.exports = {
    a: a,
    f: f
}
