export const name = 'zhuqiwen'
export let age = 10

const a = '11'
let b = 11
//导出多个对象
export {
  a,
  b
}

//一个js只能有一个默认导出的变量
const addr = 22
export default addr

export function say() {
  console.log('111')
}

//如果想要直接导出一个没有用变量接收的对象，只能用export default
//导入export default的内容时是无法进行解构赋值的，因为和接收的{}冲突了
/**
  export default {
    name: 'zhuqiwen',
    age: 14
  }
 */

//想要导出多个默认值(导入的时候只能用一个对象接收)
export default {
  a,
  b
}

//导出类
class Test {
  constructor(name) {
    this.name = name
  }
}
export {
  Test
}

//或者
export class Test1 {
  constructor(name) {
    this.name = name
  }
}

//默认导出一样的
export default Test

//不命名的话需要在import的时候重命名
export default class {
  constructor(name) {
    this.name = name
  }
}