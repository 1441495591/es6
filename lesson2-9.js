//Promise
/**
 * new Promise的时候。promise实例会有一个状态和结果，分别是pending和undefined
 * 执行resolve时状态变为fulfilled,结果变为resolve传入的参数
 * 执行reject时状态变为rejected,结果变为reject传入的参数
 */
function loadImg(src) {
    return new Promise((resolve, reject) => {
        let img = document.createElement('img')
        img.onload = () => resolve(img)
        img.onerror = () => reject(img)
        img.src = src
    })
}
const src = 'https://www.imooc.com/static/img/index/logo-recommended.png'
/**
 * then(onFulfilled,onRejected),接收两个函数类型的对象，
 * 如果onFulfilled,onRejected没有返回promise,则then会自己返回一个空的fulfilled状态的promise实例用于链式调用
 * 如果onFulfilled,onRejected返回了promise，则then返回的就是这个promise
 */
loadImg(src)
    .then((img) => {
        loadImg(src)
    })
    .then((img) => {
        loadImg(src)
    })


/**
 * 场景：某些条件下才需要异步操作，但是不需要异步操作的也得返回promise,因为代码都是用then的
 * 需要使用Promise.resolve()或者Promise.reject()返回promise实例
 */
function test(flag) {
    if (flag) {
        return new Promise()
    } else {
        return Promise.resolve(4)
    }
}
test(false).then((value) => {
    console.log(value)
})

/**
 * 捕获异常
 * 如果then中不写reject的回调，也可以用catch(function(ex){})捕获reject，相当于执行了reject然后就会被catch
 * catch就是用来捕获reject的，不要用throw new Error()的方式触发catch
 */

//all、race，接收promise实例数组，返回一个promise实例
Promise.all([loadTest1(), loadTest2()]).then(datas => {
    //datas是一个数组，依次包含了多个promise返回的内容，也就是resolve()带的参数
})
Promise.race([loadTest1(), loadTest2()]).then(data => {
    //只要有一个完成就会执行，data是完成的promise返回的内容，也就是resolve()带的参数
})