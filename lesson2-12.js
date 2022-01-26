//Generator
/**
 * 在es5中，循环一旦开始就无法停止，只能退出或者跳过
 * es6中，Generator可以让循环停下来
 */

//es5
function loop() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
loop()

//es6
function* loop() {
    for (let i = 0; i < 5; i++) {
        yield console.log(i)
    }
}
let l = loop()
//如果最后一次循环执行完了再调用next()则不会执行
l.next()


//yield
/**
 * yield后面直接跟表达式
 * 当调用next的时候，会执行到yield后跟的语句，执行完yield后面的语句就会暂停，等下下次调用next才会执行剩下的代码，
 * 直到遇到下一个yield暂停或者Generator函数执行完毕(Generator函数执行完毕next返回的done就是true了)
 * next没有传参的话，yield表达式不会返回任何东西，val永远是undefined
 */
function* gen() {
    let val = yield [1, 2, 3]
    console.log(val)
}
const l = gen()
/**
 * l.next()返回一个对象{value:当前遍历的值}
 * (因为yield后没有*，所以不会继续遍历yield后的值，所以next返回的值就是[1,2,3])，done:遍历是否结束}
 */
console.log(l.next())
console.log(l.next())


/**
 * yield * 可遍历对象
 * 这种情况执行next时会遍历yield *后面的对象，直到调用多次next遍历完这个对象，
 * 没有遍历完这个对象是不会继续向下执行代码的
 * next()会返回一个对象{value:当前遍历的值，done:遍历是否结束}
 */
function* gen() {
    //yield * 之后跟一个可遍历的对象或者Generator函数
    let val = yield*[1, 2, 3]
    console.log(val)
}
const l = gen()
l.next()


/**
 * next()传递的参数会作为yield表达式的返回值
 * 这个例子console.log(val)输出的是20
 * l.next(10)执行的时候，只执行yield后面的代码，然后就暂停了，并没有执行左边的赋值操作
 * l.next(20)执行的时候，才会继续执行左边的赋值操作，这时候传递的参数是20，所以yield的返回值就是20
 */
function* gen() {
    let val = yield [1, 2, 3]
    console.log(val)
}
const l = gen()
console.log(l.next(10))
console.log(l.next(20))


/**
 * 提前结束遍历
 * 执行了return()后，在执行next就会返回done是true，并且不会再向下执行Generator函数了
 */
function* gen() {
    let val = yield [1, 2, 3]
    console.log(val)
}
const l = gen()
console.log(l.next(10))
l.return()
console.log(l.next(20))


/**
 * 抛出异常的方式
 * 抛出异常后继续调用l.next()还可以继续向下执行，就像continues一样
 */
function* gen() {
    while (true) {
        try {
            yield 1
        } catch (error) {
            console.log(error.message)
        }
    }
}
const l = gen()
console.log(l.next())
console.log(l.throw(new Error('error')))
console.log(l.next())


//实际场景
//抽奖(一等奖一个，二等奖三个，三等奖5个)
//es5写法
function draw(first = 1, second = 3, third = 5) {
    let firstPrize = ['1A', '1B', '1C']
    let secondPrize = ['2A', '2B', '2C', '2D', '2E']
    let thirdPrize = ['3A', '3B', '3C', '3D', '3E', '3F', '3G', '3H']

    let result = []
    let random
    //生成一等奖
    for (let i = 0; i < first; i++) {
        //生成随机索引
        random = Math.floor(Math.random() * firstPrize.length)
        result = result.concat(firstPrize.splice(random, 1))
    }
    //生成二等奖
    for (let i = 0; i < second; i++) {
        //生成随机索引
        random = Math.floor(Math.random() * secondPrize.length)
        result = result.concat(secondPrize.splice(random, 1))
    }
    //生成三等奖
    for (let i = 0; i < third; i++) {
        //生成随机索引
        random = Math.floor(Math.random() * thirdPrize.length)
        result = result.concat(thirdPrize.splice(random, 1))
    }
}

//es6，使用Generator
//Generator函数中遇到return语句就会结束循环，done返回true，value返回return的值
function* draw(first = 1, second = 3, third = 5) {
    let firstPrize = ['1A', '1B', '1C']
    let secondPrize = ['2A', '2B', '2C', '2D', '2E']
    let thirdPrize = ['3A', '3B', '3C', '3D', '3E', '3F', '3G', '3H']

    let random
    //用于计数，判断现在是抽几等奖
    let count = 0

    while (true) {
        if (count < first) {
            random = Math.floor(Math.random() * firstPrize.length)
            yield firstPrize[random]
            count++
            //将获取到的元素从数组中删除
            firstPrize.splice(random, 1)
        } else if (count < first + second) {
            random = Math.floor(Math.random() * secondPrize.length)
            yield secondPrize[random]
            count++
            //将获取到的元素从数组中删除
            secondPrize.splice(random, 1)
        } else if (count < first + second + third) {
            random = Math.floor(Math.random() * thirdPrize.length)
            yield thirdPrize[random]
            count++
            //将获取到的元素从数组中删除
            thirdPrize.splice(random, 1)
        } else {
            return false
        }
    }
}


//用Generator实现斐波那契数列
function* getFibonacci() {
    let fi = [0, 1]
    let index = 2
    while (true) {
        let result = fi[index - 1] + fi[index - 2]
        yield result
        index++
        fi.push(result)
    }
}
let d = getFibonacci()
console.log(d.next().value)