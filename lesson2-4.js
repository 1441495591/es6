//函数参数默认值
/**
 * es6:
 * function add(x,y = 2,z = 3){
 *      return x + y + z
 * }
 * add(1,4,5)
 * 传undefined会触发默认值效果
 * add(1,undefined,5)
 * 
 * 默认值可以是前面参数的表达式
 * function add(x, y, z = x + y){}
 * 
 * es6中不让使用arguments,
 * function add(x, y, z = x + y){}
 * add.lenght   获取函数定义时没有默认值的参数个数
 * 
 */

//剩余参数rest
/**
 * 三个点开头，将函数执行时剩余的参数放进去，是一个数组
 * function sum (...nums){}
 * function sum (base,...nums){}
 */
//剩余参数逆运算spread
/**
 * 将数组拆分对应放入函数的参数中,例子中4不会被接收到
 * function sum(x,y,z){}
 * let datas = [1,2,3,4]
 * sum(...datas)
 */

//箭头函数
/**
 * 如果后面只有一个表达式，那么可以不加花括号，表达式的结果会作为返回值
 * let sum = (x,y,z) => x + y + z
 * 
 * 如果需要直接返回一个对象字面量，则需要加上一对圆括号,作用是运算表达式
 * let sum = (x,y,z) => ({
 *     x,y,z
 * })
 * 
 * this:箭头函数中的this，在定义时指向什么，在箭头函数中就指向什么
 */