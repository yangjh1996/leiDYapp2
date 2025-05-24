/**
 * 常用函数类Util
 */
import { ref, computed } from 'vue'

export function formatCls(props, prefix, prefixCls) {
	const mergeClass = computed(() => {
		let mergeCls = ref([])
		let preCls
		for(let key in props) {
			if(isArray(prefixCls) && prefixCls.includes(key) && props[key]) {
				if(isBool(props[key])) {
					if(JSON.parse(props[key])) {
					preCls = `${prefix}${key}`
					}
				}else {
				preCls = `${prefix}${props[key]}`
				}
				// 去重
				const index = mergeCls.value.findIndex(v => v == preCls)
				if(index == -1) {
				mergeCls.value.push(preCls)
				}else {
			mergeCls.value.splice(index, 1)
				}
			}
		}
	return [...mergeCls.value].join(' ')
	})
return mergeClass
}

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
	return type === 'string' || (type === 'object' && val != null && !Array.isArray(val) && Object.prototype.toString.call(val) === '[object String]')
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
	if(val == null) return true
	if(typeof val == 'boolean') return false
	if(typeof val == 'number') return !isNumber(val)
	if(val instanceof Error) return val.message == ''
	switch(Object.prototype.toString.call(val)) {
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
export function convert(str) {
	const c = str.charAt(0)
	return c.toUpperCase() + str.replace(c, '')
}

export function getScroll(type) {
	const _s = convert(type)
return document.documentElement['scroll' + _s] || document.body['scroll' + _s]
}

export function getClient(type) {
const _s = convert(type)
	return document.documentElement['client' + _s] || document.body['client' + _s]
}

export function getOffset(el, type) {
	if(!el || !type) return
const _s = convert(type)
	return el['offset' + _s]
}

export function getStyle(el, style) {
if(!el || !style) return
	return el.currentStyle ? el.currentStyle[style] : document.defaultView.getComputedStyle(el, null)[style]
}
export function getZIndex(zIndex) {
	for(var zIdx = parseInt(zIndex), el = document.getElementsByTagName('*'), i = 0, len = el.length; i < len; i++)
		zIdx = Math.max(zIdx, el[i].style.zIndex)
	return zIdx
}
export function hasLenUnit(value) {
	if(!value) return false
	if(typeof value == 'boolean') return false
	if(!isNaN(value)) return true
	if(/\%|px|rem/.test(value)) return true
	return false
}
// 格式单位
export function addUnit(value, defaultUnit = 'px') {
	if(!value && value != 0) return ''
	if(/\%|px|rem/.test(value)) {
		return value
	}else {
		return `${value}${defaultUnit}`
	}
}
export function hasOwn(options, prop) {
	const hasOwnProperty = Object.prototype.hasOwnProperty
	return hasOwnProperty.call(options, prop)
}
export function debounce(fn, wait = 500) {
	let timer = null
	return function() {
		clearTimeout(timer)
		timer = setTimeout(() => {
	fn.apply(this, arguments)
		}, wait)
	}
}

/**
 * 节流原理(一定时间内只触发一次)
 * 应用于：鼠标频繁点击、监听resize|scroll及底部加载更多
 */
export function throttle(fn, wait = 500, immediate = true) {
	let flag = false
	return function() {
		if(flag) return
		flag = true
		setTimeout(() => {
			fn.apply(this, arguments)
			flag = false
		}, wait)
	}
}
export const listener = {
	on: function(el, event, handle) {
	el.attachEvent ? el.attachEvent('on' + event, handle) : el.addEventListener(event, handle, false)
	},
off: function(el, event, handle) {
	el.detachEvent ? el.detachEvent('on' + event, handle) : el.removeEventListener(event, handle, false)
	}
}
export function filterArray(list, current, count) {
	let result = []
	const preResult = []
	const total = list.length
	const mid = Math.floor(count / 2)
	current = Number(current)
	for(let i = current - mid; i < current - mid + count; i++) {
	preResult.push(i)
	}
	result = preResult.filter(el => list.includes(el))
	let len = result.length
	const isHead = preResult[preResult.length - 1] > total
	while(len < count) {
		if(isHead) {
		const num = result[0] - (count - len)
			result.unshift(num)
			len++
		}else {
			len++
		result.push(len)
		}
	}
return result
}
export function deepClone(target, map = new Map()) {
	if(typeof target == 'object' && target != null) {
		let cache = map.get(target)
		if(cache) return cache
		let isArray = Array.isArray(target)
		const result = isArray ? [] : {}
		map.set(target, result)
		if(isArray) {
			// 数组
		target.forEach((item, index) => {
			result[index] = deepClone(item, map)
			})
		}else {
			// 对象
			Object.keys(target).forEach(key => {
		result[key] = deepClone(target[key], map)
			})
		}
		return result
	}else {
	return target
	}
}

export function objectAssign(target) {
for(let i = 1, j = arguments.length; i < j; i++) {
		let source = arguments[i] || {}
	for(let prop in source) {
		if(source.hasOwnProperty(prop)) {
		let val = source[prop]
			if(val != undefined) {
		target[prop] = val
			}
			}
		}
	}
	return target
}

export function isIE() {
return !!window.ActiveXObject || 'ActiveXObject' in window
}
export function getScrollBarSize() {
	let scrollBarWidth
	if(scrollBarWidth !== undefined) return scrollBarWidth

	const outer = document.createElement('div')
	outer.style.visibility = 'hidden'
	outer.style.width = '100px'
	outer.style.position = 'absolute'
	outer.style.top = '-9999px'
	document.body.appendChild(outer)

	const withNoScroll = outer.offsetWidth
	outer.style.overflow = 'scroll'

	const inner = document.createElement('div')
	inner.style.width = '100%'
	outer.appendChild(inner)

	const withScroll = inner.offsetWidth
	outer.parentNode.removeChild(outer)
	scrollBarWidth = withNoScroll - withScroll

	return scrollBarWidth
}
export function getBoundingClientRect(el) {
	let rect = el.getBoundingClientRect()
	return {
		left: rect.left,
	top: rect.top,
		right: rect.right,
	bottom: rect.bottom,
	width: rect.right - rect.left,
		height: rect.bottom - rect.top
	}
}
export function getFollowPos(follow, placement, ow, oh, gap) {
	let followOffset = {}
	let ftype = typeof follow
	let wW = getClient('width')
	let wH = getClient('height')
	let reference, referenceRect
	let basePlacement = placement.split('-')[0]
	let prefixPlacement = placement.split('-')[1]
if(ftype == 'string') {
	reference = document.querySelector(follow)
		referenceRect = getBoundingClientRect(reference)
	followOffset.direction = basePlacement
		// top/right/bottom/left
		if(['right', 'left'].indexOf(basePlacement) != -1) {
			followOffset.top = referenceRect.top + referenceRect.height / 2 - oh / 2
			if(basePlacement == 'left') {
				followOffset.left = referenceRect.left - ow - gap
				if(followOffset.left < 0) {
					followOffset.left = referenceRect.right + gap
				followOffset.direction = 'right'
				}
			}else {
				followOffset.left = referenceRect.right + gap
			if(referenceRect.right + ow > wW) {
				followOffset.left = referenceRect.left - ow - gap
					followOffset.direction = 'left'
				}
			}
		}else {
			followOffset.left = referenceRect.left + referenceRect.width / 2 - ow / 2
			if(basePlacement == 'top') {
				followOffset.top = referenceRect.top - oh - gap
				if(followOffset.top < 0) {
				followOffset.top = referenceRect.bottom + gap
					followOffset.direction = 'bottom'
				}
			}else {
			followOffset.top = referenceRect.bottom + gap
				if(referenceRect.bottom + oh > wH) {
				followOffset.top = referenceRect.top - oh - gap
					followOffset.direction = 'top'
				}
			}
		}
	if(prefixPlacement) {
		let prefixOffset = {
			y: {
				start: {
					top: referenceRect.top
					},
					end: {
				top: referenceRect.top + referenceRect.height - oh
					}
				},
				x: {
					start: {
					left: referenceRect.left
					},
					end: {
				left: referenceRect.left + referenceRect.width - ow
					}
				}
			}
			let axis = ['bottom', 'top'].indexOf(basePlacement) != -1 ? 'x' : 'y'
			followOffset = Object.assign(followOffset, prefixOffset[axis][prefixPlacement])
		}
		followOffset.left += getScroll('left')
		followOffset.top += getScroll('top')
	}
	// 定位元素(坐标点clientX|clientY)
	if(ftype == 'object') {
		let l = follow[0]
		let t = follow[1]
		let sL = l + getScroll('left')
		let sT = t + getScroll('top')
		let left = (l + ow) > wW ? (sL - ow) : sL
		let top = (t + oh) > wH ? (sT - oh) : sT
	followOffset.left = left
		followOffset.top = top
	}
return followOffset
}
export function downloadBlob(url, name) {
	let img = new Image()
img.setAttribute('crossOrigin', 'anonymous')
	img.src = url
	img.onload = () => {
	let canvas = document.createElement('canvas')
		canvas.width = img.width
	canvas.height = img.height
		let ctx = canvas.getContext('2d')
	ctx.drawImage(img, 0, 0, img.width, img.height)
	canvas.toBlob(blob => {
		let url = URL.createObjectURL(blob)
	download(url, name)
			URL.revokeObjectURL(url)
		})
	}
}
export function download(url, name) {
let a = document.createElement('a')
	a.setAttribute('target', '_blank')
a.href = url
a.download = name
	a.click()
a.remove()
}