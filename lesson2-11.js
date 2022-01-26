/**
 * proxy:代理
 * 保护原始信息，保证原始信息的安全
 * 可以监听整个对象了，而不是像defineProperty那样只能监听一个属性了
 * 而且proxy可以监听对象属性的新增和删除以及数组的新增修改删除
 */
let obj = {
    name: 'zhuqiwen',
    price: 190
}

//场景1：获取属性时操作属性，不让对象或某个属性被修改
let d = new Proxy(obj, {
    //target是代理的obj对象，key是读取的属性名
    get(target, key) {
        if (key === 'name') {
            return target[key] + 20
        } else {
            return target[key]
        }
    },
    //不让对象被修改
    set(target, key, value) {
        return false
    }
})

//es5中不让对象被修改
for (let [key] of Object.entries(obj)) {
    Object.defineProperty(obj, key, {
        //是否可被赋值
        writable: false
    })
}
//proxy是做一层代理，原始对象没有动，而es5则是直接修改对象的属性描述符为不可编辑


//场景2：用户输入参数校验,用proxy可以从降低耦合度，参数校验可以不写在业务逻辑中了
//validator可以放入不同的模块下，在需要的时候引入
let validator = (target, key, value) => {
    //不让用户新增属性并且price不能超过300，超过300不让写入
    if (Reflect.has(target, key)) {
        if (key === 'price') {
            if (value > 300) {
                //可以加入提示功能
                return false
            } else {
                target[key] = value
            }
        } else {
            target[key] = value
        }
    } else {
        return false
    }
}
let d = new Proxy(obj, {
    //如果读取了为undefined的属性则返回空
    get(target, key) {
        return target[key] || ''
    },
    set: validator
})


//场景3：监控
//思路：用抛出错误触发监控逻辑
let validator = (target, key, value) => {
    //不让用户新增属性并且price不能超过300，超过300不让写入
    if (Reflect.has(target, key)) {
        if (key === 'price') {
            if (value > 300) {
                throw new TypeError('price exceed 300')
            } else {
                target[key] = value
            }
        } else {
            target[key] = value
        }
    } else {
        return false
    }
}
let d = new Proxy(obj, {
    //如果读取了为undefined的属性则返回空
    get(target, key) {
        return target[key] || ''
    },
    set: validator
})
window.addEventListener('error', e => {
    console.log(e.message)
    //监控或者提醒用户逻辑(这样就解耦了，无论有什么校验，都只要监听一个error事件就可以了)
}, true)


//场景4：监控每个组件的的id，随机且唯一且只读
class Component {
    constructor() {
        //将属性id用一个proxy对象代理了，再用get方法读取proxy中的id，
        //如果修改的话，会在com1自身中加个id，而不是改的proxy中的id，proxy是实例的一个属性
        this.proxy = new Proxy({
            id: Math.random().toString(36).slice(-8)
        }, {})
    }
    get id() {
        return this.proxy.id
    }
}
let com1 = new Component()
let com2 = new Component()

//撤销代理(Proxy.revocable)
//d包含代理数据和撤销操作
let d = Proxy.revocable(obj, {
    get(target, key) {
        if (key === 'price') {
            return target[key] + 20
        } else {
            return target[key]
        }
    }
})
//d.proxy相当于new Proxy返回的代理数据
console.log(d.proxy.price)
//撤销操作(撤销之后就无法使用d.proxy进行操作了)
d.revoke()