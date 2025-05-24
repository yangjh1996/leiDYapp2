/**
 * 本地存储
 * @author YXY
 */

export default {
	// 写入缓存
	set(key, val) {
	uni.setStorageSync(key, val)
	},
	// 读取缓存
	get(key) {
	return uni.getStorageSync(key)
	},
	// 移除缓存
del(key) {
	uni.removeStorageSync(key)
	},
	// 判断缓存是否存在
	has(key) {
	let res = uni.getStorageInfoSync()
		return res.keys.includes(key)
	},
	// 清除缓存
	clear() {
	uni.clearStorageSync()
	}
}