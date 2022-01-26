/**
 * es5中的遍历方法
 * 
 * for 循环
 * forEach(无法使用break、continues)
 * 
 * arr.every( item => {return true})  返回true才会继续向下遍历(无法使用break、continues)
 * 如果回调函数的每一次返回都为 truthy 值，返回 true ，否则返回 false。
 * 与之相对应的就是some函数，只要有一个匹配到了就会返回true
 * 
 * map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
 * arr.map(item => item + 1)
 * 
 * for (let key in object)   循环对象,对象的key值都是字符串(可以使用break、continues)
 */

/**
 * es6中遍历方法
 * 
 * for(let item of arr)  可以遍历所有实现了iterator接口的数据结构，可以改变内置的循环机制
 */

//转换
/**
 * 伪数组：具备length，按索引方式存储数据(例如{0:'a',2:'b',length:2} )。（可以被遍历，但是不能调用数组的方法（arguments、Nodelist））
 * 
 * es5中将伪数组转换为数组(slice不写参数默认会提取数组全部元素)
 * let args = [].slice.call(arguments)
 * 
 * es6中将伪数组转换为数组
 * let args = Array.from(arguments)
 * Array.from(伪数组,循环的map方法(返回的值是该索引处的值)，map方法中this的指向)
 * 
 * let arr = Array.from( {length:5},(item,index)=>{return 1} )  //[1,1,1,1,1]
 */


//生成新数组
/**
 * es5:
 * let arr = Array(5)  生成的是长度为5的空数组，没有索引，所以不能用forEach，只能用for循环
 * let arr = [1,2,3,4,5]
 * 
 * es6:
 * let arr = Array.of(1,2,3,4,5)
 */
//填充数组（可用于初始化数组，以及指定位置替换数组内元素）
/**
 * array.fill(填充的值，开始位置(选填)，结束位置(选填，不包含))
 * let arr = Array(5).fill(1)
 * 
 */

// 查找数组中的元素
/**
 * es5:
 * filter:
 * 返回一个数组，将匹配到的元素放入这个数组中，如果没有匹配到，则返回一个空数组(会全部匹配一遍，将所有符合的都放入数组中)
 * let arr = array.filter(item => {
 *      return item === 6
 * })
 * 
 * es6:
 * Array.prototype.find:将匹配到的第一个元素返回，如果没有匹配到，则返回undefined
 * let find = array.find(item => {
 *      return item === 2
 * })
 * 
 * Array.prototype.findIndex:与find作用一致，但是返回的是匹配到的元素的索引
 */

// 数组去重
/**
 * console.log([...new Set(arr)])
 */