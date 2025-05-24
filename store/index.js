/**
 * uniapp状态管理Pinia
 * @author yxy
 */
import { createPinia } from 'pinia'
import { createUnistorage } from '@/uni_modules/pinia-plugin-unistorage'
const Pinia = createPinia()
Pinia.use(createUnistorage())
export default Pinia