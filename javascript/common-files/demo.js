// this指向创建的实例
function Point(x, y) {
    this.x = x
    this.y = y
}

const pointA = new Point(1, 2)
const pointB = new Point(3, 4)
// 定义Object实例方法
// this指向调用方法的实例
Object.prototype.r = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
}
console.log(pointB.r())
