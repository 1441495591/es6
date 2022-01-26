//Reflect
//反射：在编译阶段不知道哪个类被加载，而是在运行时才加载、执行
//使用场景就是根据业务逻辑的需要在运行时才确定需要调哪个方法，需要声明哪个实例，主要就是动态化

/**
 * 没有反射时，如果要使用apply，必须指定方法去调用
 */
Math.floor.apply(null, [1.72])

/**
 * 使用反射
 */
Reflect.apply(Math.floor, null, [1.72])

//使用场景，比如当购买价格大于100则向下取整，小于等于100则向上取整
//不使用反射
let price = 100.1
if (price > 100) {
    price = Math.floor.apply(null, [price])
} else {
    price = Math.ceil.apply(null, [price])
}

//使用反射
price = Reflect.apply(price > 100 ? Math.floor : Math.ceil, null, [price])


//使用反射实例化类,实例化的时候如果不需要向类的构造函数中传参数则Reflect.construct也要传个空数组
let date = Reflect.construct(Date, [])
console.log(date.getTime())


//为对象添加属性
//不使用反射
let student = {}
Object.defineProperty(student, 'name', {
    value: 'zhuqiwen'
})
console.log(student)

//使用反射,效果一样，不同的就是Object.defineProperty返回的是对对象修改后的对象，Reflect.defineProperty返回的是布尔值
//尽量使用Reflect，因为w3c标准推荐使用Reflect，Object的一些操作对象的方法都被迁移到了Reflect，以后新增的方法也会放到Reflect中
let student = {}
Reflect.defineProperty(student, 'name', {
    value: 'zhuqiwen'
})
console.log(student)

//删除属性
Reflect.deleteProperty(student, 'name')
console.log(student)

//获取对象属性的描述符等信息(值、是否只读、是否可枚举、是否可配置)
Reflect.getOwnPropertyDescriptor(student, 'name')
// 获取对象中所有属性的描述符信息(Reflext中还没有这个方法)
Object.getOwnPropertyDescriptors(student)
//获取对象的原型对象
Reflect.getPrototypeOf(student)
//设置对象的原型对象
Reflect.setPrototypeOf(student, {
    a: '111'
})
//判断对象中有没有一个属性或者方法,返回布尔值，has不是Object中的方法
Reflect.has(student, 'name')
//判断对象是否可扩展
Reflect.isExtensible(student)
//关联方法，将对象设置为不可扩展(不能修改和新增删除属性等，对象被冻结了)
Object.freeze(student)
//Reflect提供的将对象设置为不可扩展
Reflect.preventExtensions(student)
//获取对象的自有属性(不是原型链中的属性),返回数组
Reflect.ownKeys(student)