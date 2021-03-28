let str ="adsaf"
let num=233
let bool = true
let arr = [123,234,456,3,456]
let obj = {a:12,b:23,c:'ddfrvgf'}
let fun = function () {
    console.log('yay')
}
console.log('=============Type===========')
console.log(typeof string)
console.log('typeof string',typeof string)
console.log('typeof boolean',typeof Boolean)
console.log('typeof number',typeof Number)
console.log('typeof array',typeof Array)
console.log('typeof object',typeof Object)
console.log('typeof function',typeof function(){})

console.log('============Proto chain========')
console.log(str._proto_==obj._proto_)
console.log(num._proto_== obj._proto_)
console.log(arr._proto_== obj._proto_)
console.log(fun._proto_== obj._proto_)
console.log(obj._proto_== obj._proto_)

console.log('=========Prototype===========')
console.log(obj._proto_=Object.prototype)
console.log(str._proto_=String.prototype)
console.log(bool._proto_=Boolean.prototype)
console.log(arr._proto_=Array.prototype)
console.log(num._proto_=Number.prototype)
console.log(fun._proto_=Function.prototype)