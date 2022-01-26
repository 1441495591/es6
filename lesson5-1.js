// 异步操作集合  for await... of
funtion Gen(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
    }, time);
  })
}

async function test() {
  //这个是promise数组，就是里面都是异步操作的数组
  let arr = [Gen(2000), Gen(100), Gen(3000)]
  for await (let item of arr) {
    //会等到每一步的异步操作执行完了才会遍历下一个
    console.log(Date.now(), item)
  }
}