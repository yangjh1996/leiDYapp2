/**
 * 入口配置
 */

import { createSSRApp } from 'vue'
import App from './App'
import Pinia from '@/store'
import VKuview from '@/uni_modules/vk-uview-ui'
export function createApp() {
	const app = createSSRApp(App)
app.use(Pinia)
	app.use(VKuview)
return {
	app,
Pinia
	}
}
