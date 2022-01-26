//数组的解构赋值
/**
 * let arr = [1,2]
 * let [first,second] = arr
 * 
 * 取第一项和第三项赋值
 * 左侧是中括号包起来，右侧是可遍历的对象都可以被解构赋值，如字符串、对象、Set、Map、实现iterator接口的自定义对象等
 * let arr = [1,2,3,4,5]
 * let [first,,third] = arr
 * 这种解构赋值还可以用来获取Set的值，因为set没有提供通过索引获取元素的方法，只能遍历，所以如果要获取
 * Set中某一位置的元素就可以用这种方法
 * let s = new Set([1,2,3])
 * let [first,,second] = s
 * 
 * 还可以直接为对象的属性赋值,这样写记得加分号
 * let user = {name:'1',age:2};
 * [user.name,user.age] = [1,2]
 * 
 * 循环中赋值
 * let user = {name:'1',age:2}
 * for(let [key,value] of Object.entries(user)){}
 * 
 * 结合剩余参数赋值
 * let arr = [1,2,3,4,5,6,7]
 * let [first,second,...last] = arr
 * 
 * let arr = [1]
 * let [first,second,...last] = arr   //second是undefined,last是[],没有匹配到的时候就是undefined
 * 
 * 还可以加上默认值
 * let arr = [1]
 * let [first,second = '默认值',...last] = arr
 */

//对象的解构赋值
/**
 * let obj = {
 *     name: 'zhuqiwen',
 *     age: 10
 * }
 * 左边是花括号，右边是对象，简写形式中花括号中的变量必须和要接收的属性名一致
 * let {name,age} = obj
 * 不简写可以用不同的变量接收(例子中copyName接收到了值，name是没有值的，name只是用来匹配的key)
 * let {name: copyName} = obj
 * 
 * 加上默认值
 * let {name,width=100,age} = obj
 * 
 * 对象解构赋值中的剩余参数
 * let {name,...last} = obj   last是个对象，包含剩余的属性
 * 
 * 嵌套的对象
 * let obj = {
 *     size: {
 *         width: 100,
 *         height: 200
 *     },
 *     item: [1,2],
 *     flag: true
 * }
 * 左右两边的结构要一致才能正确赋值,item就是和之前的数组的解构赋值一样的操作
 * let {size: {width},item: [a,b]} = obj
 */

//函数参数也可以进行解构赋值