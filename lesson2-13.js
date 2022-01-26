// Iterator
// 作用：自定义遍历方式以及返回值，可以从业务逻辑中抽离，用于解耦

/**
 * 要想使不可遍历的数据类型可遍历，就必须要让这个数据类型实现Iterator接口
 */
let authors = {
  allAuthors: {
    fiction: ['f1', 'f2', 'f3'],
    scienceFiction: ['s1', 's2', 's3'],
    fantasy: ['a1', 'a2', 'a3']
  }
}

// authors实现iterator接口
// 必须返回一个对象，这个对象里有个next函数
// 这个函数必须返回一个对象，这个对象包含done(遍历是否结束)和value(当前遍历返回的值)两个属性

/**
 * 思路：每次通过shift取出第一个元素
 */
authors[Symbol.iterator] = function () {
  // 这里的this就是指向当前被遍历的对象
  let allAuthors = this.allAuthors
  let keys = Reflect.ownKeys(allAuthors)
  // 把自己想要遍历返回的值放进这个数组中，通过取出这个数组的值以及判断这个数组是否为空来控制遍历是否结束
  let values = []
  return {
    next() {
      if (values.length === 0) {
        if (keys.length > 0) {
          values = allAuthors[keys[0]]
          keys.shift()
        }
      }
      return {
        done: values.length === 0,
        value: values.shift()
      }
    }
  }
}
// 每次遍历返回的值就是value的值
for (let v of authors) {
  console.log(v)
}


// 使用Generator实现iterator接口,不用自己写return的对象了
authors[Symbol.iterator] = function* () {
  let allAuthors = this.allAuthors
  let keys = Reflect.ownKeys(allAuthors)
  let values = []
  while (true) {
    if (values.length === 0) {
      if (keys.length > 0) {
        values = allAuthors[keys[0]]
        keys.shift()
        yield values.shift()
      } else {
        return false
      }
    } else {
      yield values.shift()
    }
  }
}