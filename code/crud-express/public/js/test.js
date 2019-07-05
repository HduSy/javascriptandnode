function fn(callback) {
    // var callback = function(data){console.log(data)}
    setTimeout(() => {
        let data = 'Hello'
        callback(data)
    }, 1000)
}


//undefined
console.log(fn(function (data) {
    console.log(data)
}))

//想获取异步函数操作结果，必须通过回调函数来获取
