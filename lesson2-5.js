//es6中对象字面量中的属性可以是变量或者表达式
/**
 * let z = 3
 * let obj = {
 *    x,y,
 *    [z] : 5,
 *    [x + y] : 6,
 * 
 *    异步函数
 *    * hello(){}
 * }
 */

//Set
/**
 * Set存储的数据不能是重复的，如果存入的相同的数据会自动过滤掉
 * let s = new Set()
 * Set的构造函数可以传入可遍历的对象
 * let s = new Set([1,2,3])
 * 
 * 添加元素
 * s.add('hello')
 * //删除元素
 * 1.删除某个元素：s.delete('hello')
 * 2.清空：s.clear()
 * 是否包含某个元素
 * s.has('hello')
 * Set中存了多少个数据
 * s.size
 * 遍历（返回的是iterator）,Set的key和value是一样的
 * s.keys()、s.values()、s.entries()
 * s.forEach(item => {}) item就是元素
 * for(let item of s){}  item就是元素
 * 
 * Set没有提供直接修改元素的功能，可以自己先删除再新增
 */

// Map，可以替代Object存储数据
/**
 * let m = new Map()
 * 初始化Map可以传入可遍历的对象，对象中的元素必须是key、value形式
 * Map的key可以是任意的，基本类型、对象、函数等都可以作为key
 * let m = new Map( [[1,2],[3,4]] )  1是key，2是value     3是key，4是value
 * 
 * 编辑或添加元素
 * m.set(1,2)   key是1，value是2
 * 删除元素
 * m.delete(1)  传入key
 * 全部清空
 * m.clear()
 * 获取数据个数
 * m.size()
 * 判断有没有包含某个元素
 * m.has(1)   传入key
 * 获取某个值
 * m.get(1)   传入key
 * 遍历
 * 遍历（返回的是iterator）,Set的key和value是一样的
 * m.keys()、m.values()、m.entries()
 * m.forEach((value,key) => {}) 
 * for(let [key,value] of m){}
 */

/**
 * weekSet:只允许存储对象类型的值
 * weekMap:key只允许为对象类型
 */

//对象的拷贝
/**
 * 将源对象source中的内容复制到目标对象target中
 * let target = {}
 * let source = {b:4,c:5}
 * Object.assign(target,source)
 * 
 * assign是浅复制，对于引用类型的值只会将引用地址替换
 * 如果要实现深拷贝，得使用递归调用assign
 */