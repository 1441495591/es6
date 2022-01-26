/**
 * 默认导出的变量才可以不用{}，否则都要写在{}中
 * 默认导出的变量可以再导入的时候重命名
 * {}中的变量想要重命名可以使用as
 */
import addr, {
  name,
  age,
  a,
  b,
  say
} from './lesson2-14-mod'

// 导入全部的对象,默认导出的值在Mod.default中
import * as Mod from './lesson2-14-mod'