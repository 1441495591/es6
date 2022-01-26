/**
 * async修饰的函数执行后返回的是Promise实例，他的状态是resolve
 * async修饰的函数如果本身返回的是Promise实例，则不做处理
 * 加了async,相当于return Promise.resolve(27)
 */
async function firstAsync() {
  return 27
}
firstAsync().then(val => {
  console.log(val)
})

// async函数体内部还有异步操作
// 例子：先执行promise，在执行后面的
async function firstAwait() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('now it is doen')
    }, 1000)
  })
  // await是一个表达式，返回值是promise返回的值
  // await后跟着一个promise实例，也可以直接接其他值，会自动转为Promise.resolve(val)的形式
  // await必须和async配合使用
  console.log(await promise)
  console.log(await 30)
  console.log(11)
  return 27
}