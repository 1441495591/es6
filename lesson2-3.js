//类
/*
    1.构造函数
    创建一个新对象，this指向这个新对象，执行代码为this赋值，返回this
    构造函数结尾默认会有一个return this;
    用instanceof通过原型链一层层向上判断一个变量的__proto__是否能向上找到对应构造函数的protitype arr instanceof Array

    2.原型
    所有的引用类型(数组、对象、函数)除了null，都具有对象特性，即可以自由扩展属性
    所有的引用类型(数组、对象、函数)都有一个__proto__属性(隐式原型)，是一个对象
    所有的函数都有一个prototype属性(显式原型)，是一个对象
    函数的prototype中有constructor属性指向函数本身
    所有的引用类型(数组、对象、函数)，__proto__属性指向他构造函数的prototype属性
    当试图得到一个引用类型的某个属性时，如果对象本身没有这个属性，则会去他的__proto__即他的构造函数的prototype中寻找
    Object的prototype是null

    f.hasOwnPrototype(key):判断key是不是f自己的属性，原型上的属性会返回false

    加入obj的构造函数的原型有个name属性，当obj.name = '1111'时，并不会修改原型中的值，而是会新增一个对象的属性
*/


/**
 * es5:
 * let Animal = function(type){
 *  this.type = type
 * }
 * Animal.prototype.eat = function(){
 *      console.log('eat food')
 * }
 * 每个函数都有prototype，每个实例都有__proto__，指向同一个对象就是原型对象
 * 每个实例的原型中都有一个constructor指向了实例的构造函数
 * 
 * 
 * es6:
 * class Animal(){
 *      type
 *      //构造器，用来传参的
 *      constructor(type){
 *          this.type = type
 *      }
 *          
 *      直接定义的属性在每个对象中都会存在
 *      name = 'zhuqiwen'
 * 
 *      //定义属性的getter、setter(可以进行拦截、控制读写权限等各种操作，可以是任意的还未定义的属性)
 *      get age (){
 *          return 10
 *      }
 *      set age (val){
 *          this.realAge = val
 *      }
 * 
 *      公共方法，相当于原型中的方法
 *      eat(){
 *          console.log('eat food')
 *      }
 *      
 *      //静态方法
 *      static walk(){
 *          console.log('walk')
 *      }
 *      如果方法需要用到实例对象中的属性时就定义为实例方法，否则就定义为静态方法
 * }
 * 
 * es5实现继承
 * 1.在子类的构造函数中执行父类的构造函数.call(this,父类构造函数需要的参数),作用：将子类实例传入父类构造器，这样子类就拥有了父类构造时的所有属性了
 * 2.子类的构造函数.prototype = 父类的构造函数.prototype，作用，继承父类原型中的所有方法
 * 
 * es6实现继承
 * 使用extends，然后在子类的构造器constructor(参数)中执行super(父类构造器需要传的参数)，就是执行了父类的构造函数
 * 如果子类的构造函数中没有任何操作，则可以不写constructor，也能正常继承，因为extends默认会执行下面代码
 * constructor(父类构造器需要传的参数){
 *     super(父类构造器需要传的参数)
 * }
 * 
 * 数字字符串*1，可以自动转换为数字类型
 */