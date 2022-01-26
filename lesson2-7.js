//模板字符串
/**
 * 专门处理字符串的函数,可以将复杂的处理字符串的逻辑抽离出来
 * //参数：模板字符串对象，参数1，参数2.....
 * function price(strings,type1,type2){
 *    let s1 = strings[0]   //您此次的
 *    各种处理字符串的逻辑....
 *    return `${s1}${type1}${type2}`
 * }
 * let str = price`您此次的${'retail'}的${'retail1'}`
 */