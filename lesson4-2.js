// 对象的遍历
let obj = {
  name: 'zhuqiwen',
  age: 100
}
//返回键的数组
console.log(Object.keys(obj))
//过滤
let keys = Object.keys(obj).filter(item => item === 'zhuqiwen')

//返回值的数组
console.log(Object.values(obj))

//将对象变为key、value的数组
for (let [key, value] of Object.entries(obj)) {

}