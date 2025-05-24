/**
 * 常用函数类Util
 * @author yxy
 */

// 转换int
export function Int(v) {
return parseInt(v)
}
export function isBool(str) {
return /^true|false$/i.test(str)
}
export function isTrue(str) {
	return /^true$/i.test(str)
}

export function isString(val) {
const type = typeof val
return type === 'string' || (type === 'object' && val != null && !Array.isArray(val) && Object.prototype.toString
		.call(val) === '[object String]')
}

export function isNumber(val) {
return !isNaN(parseFloat(val)) && isFinite(val)
}

export function isFunction(str) {
return typeof str == 'function'
}

export function isArray(str) {
	return isObject(str) || Array.isArray(str)
}

export function isObject(str) {
return str != null && typeof str == 'object'
}

export function isPromise(str) {
return isObject(str) && isFunction(str.then) && isFunction(str.catch)
}

export function isEmpty(val) {
if (val == null) return true
	if (typeof val == 'boolean') return false
	if (typeof val == 'number') return !isNumber(val)
	if (val instanceof Error) return val.message == ''
switch (Object.prototype.toString.call(val)) {
		// String or Array
	case '[object String]':
		case '[object Array]':
			return !val.length

		// Map or Set or File
		case '[object File]':
		case '[object Map]':
		case '[object Set]':
			return !val.size

		// Plain Object
		case '[object Object]':
			return !Object.keys(val).length;
	}
	return false
}

export function isImg(str) {
if (!isString(str)) return
return /\.(gif|jpg|jpeg|png|bmp|webp|svg|tiff|psd|avif)$/i.test(str)
}

// 随机字符串
export function uuid(len = 32) {
let $chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	let $lens = $chars.length
let str = ''
	for (var i = 0; i < len; i++) {
str += $chars.charAt(Math.floor(Math.random() * $lens))
	}
	return str
}
export function guid(len, firstU = true, radix = null) {
	const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
	const uuid = []
	radix = radix || chars.length
	if (len) {
	// 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
	for (let i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
	} else {
		let r
		// rfc4122标准要求返回的uuid中,某些位为固定的字符
	uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
	uuid[14] = '4'

	for (let i = 0; i < 36; i++) {
		if (!uuid[i]) {
		r = 0 | Math.random() * 16
	uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
			}
		}
	}
	// 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
	if (firstU) {
	uuid.shift()
		return 'u' + uuid.join('')
	} else {
		return uuid.join('')
	}
}

export function clipboard(text) {
if (navigator.clipboard && navigator.clipboard.writeText) {
	return navigator.clipboard.writeText(text).catch((err) => {
		throw err !== undefined ?
			err :
				new DOMException('The request is not allowed', 'NotAllowedError');
		});
	}

const span = document.createElement('span');
	span.textContent = text;
	span.style.whiteSpace = 'pre';
document.body.appendChild(span);

const selection = window.getSelection();
	const range = window.document.createRange();
selection?.removeAllRanges();
	range.selectNode(span);
selection?.addRange(range);
	let success = false;
	try {
	success = window.document.execCommand('copy');
	} catch (err) {
		// eslint-disable-next-line
	console.log('error', err);
	}

	selection?.removeAllRanges();
window.document.body.removeChild(span);
	return success ?
	Promise.resolve() :
		Promise.reject(
			new DOMException('The request is not allowed', 'NotAllowedError')
		);
}

export function getRandomColor() {
	const rgb = []
	for (let i = 0; i < 3; ++i) {
	let color = Math.floor(Math.random() * 256).toString(16)
		color = color.length == 1 ? '0' + color : color
		rgb.push(color)
	}
return '#' + rgb.join('')
}

export function getDate() {
const date = new Date().toLocaleDateString()
	const time = new Date().toLocaleTimeString()
return `${date} ${time}`
}

// 验证手机号
export function checkTel(val) {
var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
	if (val == '' || !reg.test(val)) {
return false
	}
return true
}

// 外链验证
export function isExternal(url) {
const reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/
	return reg.test(url)
}

// 跳转网页
export function openLink(url) {
	// #ifdef APP-PLUS
plus.runtime.openURL(url)
	// #endif
	// #ifdef H5
	window.open(url)
	// #endif
	// #ifdef MP
uni.setClipboardData({
	data: url,
	success: () => {
		uni.showToast({
		icon: 'none',title: '复制成功，请使用浏览器打开链接',
	position: 'bottom'
		})
		}
	})
	// #endif
}

/**
 * 防抖原理(一定时间只有最后一次操作被执行)
 * 应用于：搜索框、商品下单支付
 */
export function debounce(fn, wait = 500) {
	let timer = null
return function() {
	clearTimeout(timer)
	timer = setTimeout(() => {
fn.apply(this, arguments)
		}, wait)
	}
}

export function throttle(fn, wait = 500, immediate = true) {
	let flag = false
	return function() {
if (flag) return
	flag = true
		setTimeout(() => {
	fn.apply(this, arguments)
			flag = false
		}, wait)
	}
}

export function formatDate(timestamp, format) {
	if (timestamp != undefined && timestamp != '' && timestamp > 0) {
	let date = new Date()
	date.setTime(timestamp * 1000)
		let y = date.getFullYear()
		let m = date.getMonth() + 1
	let d = date.getDate()
	let h = date.getHours()
		let minute = date.getMinutes()
		let second = date.getSeconds()
		m = m < 10 ? '0' + m : m
		d = d < 10 ? '0' + d : d
		h = h < 10 ? '0' + h : h
		minute = minute < 10 ? '0' + minute : minute
	second = second < 10 ? '0' + second : second
		// 日期格式化
	if (format) {
		let fmt = format.toUpperCase()
			// 获取年月日
		if (fmt == 'YY-MM-DD') return y + '-' + m + '-' + d
			// 获取年月
			if (fmt == 'YY-MM') return y + '-' + m
			// 获取月日
		if (fmt == 'MM-DD') return m + '-' + d
			// 获取月日 时分
			if (fmt == 'MM-DD hh:mm') return m + '-' + d + ' ' + h + ':' + minute
			// 获取时分秒
		if (fmt == 'hh:mm:ss' || fmt == 'hh-mm-ss') return h + ':' + minute + ':' + second
		}

	return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
	} else {
		return ''
	}
}