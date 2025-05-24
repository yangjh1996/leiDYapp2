/**
 * 全局类状态管理
 * @author yxy
 */
import { defineStore } from 'pinia'
export const appStore = defineStore('app', {
state: () => ({
	lang: null,
		roles: ['dev'],
		config: {
			// 背景换肤
		skin: null,
			// 暗黑模式
		isDark: false
		}
	}),
	getters: {},
	actions: {
		// 设置多语言
	setLang(data) {
		this.lang = data
	document.querySelector('html').setAttribute('lang', data)
		},

		// 更新配置
	updateConfig(type, data) {
		this.config[type] = data
		},
	changeDark() {
	document.documentElement.setAttribute('class', this.config.isDark ? 'dark' : '')
		},

	initTheme() {
	if(this.config.isDark) this.changeDark()
		}
	},
	// 本地持久化存储(默认存储localStorage)
unistorage: true
})
