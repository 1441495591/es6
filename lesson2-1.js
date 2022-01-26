/**
 1.全局变量，不通过var声明的全局变量是作为window的属性（因为window是全局对象，所以通过该变量也具有全局作用域），
 而通过var声明的变量则不是，无法作为window属性进行删除，但是他们都具有全局作用域
 2.在函数中不通过var声明的变量也是会作为window的属性
 */
var a = 123
b = 1234

/**
 es5及其之前只有全局作用域和函数作用域
 es6加了块级作用域，就是一个{}里的都是块级作用域
 let、const定义的变量具有块级作用域
 **js中函数的作用域是在函数定义时就确定了，被称为词法作用域，
 在函数被调用时会去他定义时就确定的作用域中寻找变量
 */