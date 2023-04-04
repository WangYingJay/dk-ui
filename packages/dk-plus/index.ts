/**-
 * @name index
 * @author fankai16
 * @Time 2023/01/04
 * @description  入口图标文件
 **/
import { dkshadow, dkIcon, dkbutton } from '@dk-plus/components'
//import type { App } from 'vue' // ts中的优化只获取类型
// ....

const components = [dkshadow, dkIcon, dkbutton]
const install = (app: any) => {
  // 每个组件在编写的时候都提供了install方法

  // 有的是组建 有的可能是指令 xxx.install = ()=>{app.directive()}
  components.forEach(component => app.use(component))
}
export default {
  install
}
export * from '@dk-plus/components'
