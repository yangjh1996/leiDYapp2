/**
 * 验证状态管理
 * @author yxy
 */

import { defineStore } from 'pinia'
export const authStore = defineStore('authState', {
state: () => ({
		// 登录验证key
	authorization: null,
	userInfo: null
	}),
	getters: {},
actions: {
	setAuthorization(data) {
	this.authorization = data
		},
		
		// 设置登录信息
	setUserInfo(data) {
	this.userInfo = data
		},
		
		// 退出登录
		logout() {
		this.authorization = null
			this.userInfo = null
		}
	},
	// 本地持久化存储(默认存储localStorage)
unistorage: true
})
