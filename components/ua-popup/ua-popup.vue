<!-- uniapp自定义弹框模板 -->
<template>
	<!-- #ifdef APP-NVUE -->
<view v-if="visible" class="ua__popup" :class="{'ua__popup-closed': closeAnim}">
	<!-- #endif -->
	<!-- #ifndef APP-NVUE -->
<view v-show="visible" class="ua__popup" :class="{'ua__popup-closed': closeAnim}">
	<!-- #endif -->
	<view v-if="opts.shade && opts.shade!='false'" class="uapopup__overlay" @click="handleShadeClick" :style="{'opacity': opts.opacity >= 0 ? opts.opacity : '', 'z-index': oIndex-1}"></view>
<view class="uapopup__wrap" :style="{'z-index': oIndex}">
		<view class="uapopup__child" :id="'uapopup-'+uuid" :class="['anim-'+opts.anim, opts.type&&'popui__'+opts.type, opts.round&&'round', opts.position]" :style="[opts.follow&&positionStyle, opts.customStyle]">
		<view v-if="opts.title || $slots.title" class="uapopup__title">
					<!-- #ifndef APP-NVUE -->
			<template v-if="$slots.title"><slot name="title" /></template>
					<rich-text v-else :nodes="opts.title"></rich-text>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
				<template v-if="$slots.title"><slot name="title" /></template>
				<text class="uapopup__title-text" v-else>{{opts.title}}</text>
					<!-- #endif -->
				</view>
		<image v-if="opts.type=='toast'&&opts.icon" class="toast__icons" :class="['toast__icons-'+opts.icon]" :src="toastIcon[opts.icon]" mode="widthFix"></image>
				<!-- //内容 -->
			<view v-if="opts.content || $slots.content" class="uapopup__content">
					<!-- #ifndef APP-NVUE -->
				<template v-if="$slots.content"><slot name="content" /></template>
					<rich-text v-else :nodes="opts.content"></rich-text>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
				<template v-if="$slots.content"><slot name="content" /></template>
					<text class="uapopup__content-text" v-else>{{opts.content}}</text>
					<!-- #endif -->
				</view>
				<slot />
		<view v-if="opts.btns" class="uapopup__actions">
					<!-- #ifndef APP-NVUE -->
			<view v-for="(btn,index) in opts.btns" :key="index" class="btn" :class="{'disabled': btn.disabled}" :style="btn.style" @click="handleBtnClick($event, index)">
						<rich-text :nodes="btn.text"></rich-text>
					</view>
					<!-- #endif -->
					<!-- #ifdef APP-NVUE -->
			<text v-for="(btn,index) in opts.btns" :key="index" class="btn btn-text" :class="{'disabled': btn.disabled}" :style="btn.style" @click="handleBtnClick($event, index)">{{btn.text}}</text>
					<!-- #endif -->
				</view>
	<view v-if="opts.xclose" class="uapopup__xclose" :class="opts.xposition" :style="{'color': opts.xcolor}" @click="close"></view>
		</view>
	</view>
	</view>
</template>

<script>
	// 控制索引(只能放setup外，计数才准)
let index = 0
</script>
<script setup>
import { onMounted, ref, computed, watch, nextTick, getCurrentInstance } from 'vue'
	const props = defineProps({
		// 接收父组件中v-model的值
	modelValue: { type: Boolean, default: false },
		title: String,
		content: String,
		type: String,
	customStyle: { type: Object, default: null },
		icon: String,
	shade: { type: [Boolean, String], default: true },
	shadeClose: { type: [Boolean, String], default: true },
		opacity: { type: [Number, String], default: '' },
	round: Boolean,
		xclose: Boolean,
	xposition: { type: String, default: 'right' },
		xcolor: { type: String, default: '#333' },
		anim: { type: String, default: 'scaleIn' },
	position: String,
		follow: { type: Array, default: null },
	time: { type: [Number, String], default: 0 },
		zIndex: { type: [Number, String], default: '202107' },
	btns: {
	type: Array, default: null
		},
		// 打开弹框回调
	onOpen: Function,
		// 关闭弹框回调
		onClose: Function
	})
const emit = defineEmits([
	'update:modelValue','open','close'
	])
	
const instance = getCurrentInstance()
	const opts = ref({
	...props
	})
	const visible = ref(false)
const closeAnim = ref(false)
	const stopTimer = ref(null)
const oIndex = ref(props.zIndex)
	const uuid = computed(() => Math.floor(Math.random() * 10000))
const positionStyle = ref({ position: 'absolute', left: '-999px', top: '-999px' })
	const toastIcon = {
loading: 'data:image/gif;base64,R0lGODlhJQAlAJECAL3L2AYrTv///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgACACwAAAAAJQAlAAACi5SPqcvtDyGYIFpF690i8xUw3qJBwUlSadmcLqYmGQu6KDIeM13beGzYWWy3DlB4IYaMk+Dso2RWkFCfLPcRvFbZxFLUDTt21BW56TyjRep1e20+i+eYMR145W2eefj+6VFmgTQi+ECVY8iGxcg35phGo/iDFwlTyXWphwlm1imGRdcnuqhHeop6UAAAIfkEBQoAAgAsEAACAAQACwAAAgWMj6nLXAAh+QQFCgACACwVAAUACgALAAACFZQvgRi92dyJcVJlLobUdi8x4bIhBQAh+QQFCgACACwXABEADAADAAACBYyPqcsFACH5BAUKAAIALBUAFQAKAAsAAAITlGKZwWoMHYxqtmplxlNT7ixGAQAh+QQFCgACACwQABgABAALAAACBYyPqctcACH5BAUKAAIALAUAFQAKAAsAAAIVlC+BGL3Z3IlxUmUuhtR2LzHhsiEFACH5BAUKAAIALAEAEQAMAAMAAAIFjI+pywUAIfkEBQoAAgAsBQAFAAoACwAAAhOUYJnAagwdjGq2amXGU1PuLEYBACH5BAUKAAIALBAAAgAEAAsAAAIFhI+py1wAIfkEBQoAAgAsFQAFAAoACwAAAhWUL4AIvdnciXFSZS6G1HYvMeGyIQUAIfkEBQoAAgAsFwARAAwAAwAAAgWEj6nLBQAh+QQFCgACACwVABUACgALAAACE5RgmcBqDB2MarZqZcZTU+4sRgEAIfkEBQoAAgAsEAAYAAQACwAAAgWEj6nLXAAh+QQFCgACACwFABUACgALAAACFZQvgAi92dyJcVJlLobUdi8x4bIhBQAh+QQFCgACACwBABEADAADAAACBYSPqcsFADs=',
	success: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAwCAYAAABHYrdbAAADwElEQVRoQ+Way69URRCHf58xxJ0bYwwu3RjjxpVGjIkLExfGGE1Q8QXIQ0VQkYcgCr7fL0B8i28hNzEmmhBcGRasWPkP8Ae4cuXyZ4qcIXNhzpzuPufMnTtT21tVXfVNVXd1n4vmXGxvl3QTsHqAgnllYvsKSa9J2lwxWBiAmUsotm+ugNx2QVGcAzN3UGyvrYBcXdMlC3MDxfYlFYw9DVvGfXMBxfa1FZB7G4DcDxyfeSi275L0pqTrGoA8ABwLnZmGYnuHpHcTTtg1wC8zfSTbvrJql40JQB4Efh7Wm7lKsX2LpPck3VgCZObax/Z6SV8nwAiVh4CfRunORKXYvrRql92JQB4GfqzTXfZQbMep8pGk2xOBPAL8ME53WUOxfbekODUuSwTyKPB9k+6yhWJ7l6S3mxIc+vta4LsU/VootjcAX6U4maSO7askfSLpnox11wHfpuqPhGI7duU1kqLUDgFnUh32qWf7VkkLkmIOSZX1wNFU5ZFHsu1wEDfJgZyVdBCIzWzJJCpX0peZATwGfJNps3jMt/25pE01Tn6tquav3EXa6NteISniGv6hUlxG+6fOLIv8nW8f2wclbW1Y7Z+qauLFqnexfb2k3yRdk7nYxjb74TkotuPSFJenVPkzbp5Ab1VjO95Mj6cGNKS3Cchts8WVYvtVSfsKFv+vaqfUKTJ5icSqHeVvM/BF8kI1itg+IGl/C0enJb3QRdXYXinpD0k3FMTzOBB7T2sZtE9bMBHIEWBLaUS275B0otD+CeCzQtuLzIY32i7A/C3p6dyqsf26pL2FST0JfFpoO9Js0fDWQSsNFkmqGttxZzkpKYayEtkCHCkxHGdz0UTbIZgY+mKaHHlC2V4l6ZSkeGUvkaeAGPc7l7oxv4tWqq0a23FivdUim63A4Rb2Y03HXQi7BBND3+qoGtu/S7qzRULbgEMt7BtNxz4ddNhKg0D+lXR5Y1T1CrGJx+TdqzS+p/QApjShZ4CPS41z7BqhhLMpAPPsJG/pSVCWGMx24MOcX7qtbjKUJQLzHPBB2yRz7bOgTBjMDuD93IS60M+GMiEwO4H4yrckUgSlZzC7gJSP4r0BK4bSE5jdwDu9ZZvouBWUjsE8D+R8x0lMMV+tNZSOwOwB2tyF8jMfY9EJlJZg9gLxn0ZTI51BKQQTz5hvTA2NKpBOoWSC2QfEi9vUSedQEsG8CEzk21EJ8V6gNIB5CYjPKlMrvUGpAbMfeGVqafS1p1yY8NCzwwHg5WkHEvH1WikDAAEGiOfNZSH/A4EiPTqzdGO9AAAAAElFTkSuQmCC',
	fail: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADUUlEQVRoQ92Zu5MOQRTFz0n5A7AlV0XknRJ4C0gWRUJAUSQEFGVZiiIgoSgCEsojIfAWkHpHtkquPP4A0qO6amarzTfT9/bM7Nr1hbu3u8+v+5xv5utLTPMPp7l+/J8AkmYAmAfgG8mf//KUJM0CMATgC8nfVS0DJyBpPoD7ABYUxetJPv0XEJLWAXhSrP0ZwDDJsVjLXwCSZgJ4E4kva1eSfD2ZEJJWAHhVWTNALCf5q/x7FWApgLcNQicNokF8KWsZyXdNAMFvPxI7PeEQhvggbXacy7oMxL6rY5kwCIf4gTzWfo06JlpN8mWfmZC0CsCL3NNvfA44IDaSfNwHhKQNAB7lig/1yQeZA2IzyYddICRtAvCgjXgTIBQ4ILaQDM+N7I+kYQD32op3ARQQlj93kLydQyBpO4BbiTGunLnfhRw+3UXypgdC0k4ANxK17ny5AYqTsPy6h+T1FISk3QCuJWqycpUFUEBYvj1A8nKdQEn7AVxKiM/OUzZAAWH59xDJi7FQSQcBXEiIz86RO8QNu2n5+AjJ8wXwYQDnEuLd+anO0eoEykkcfh4pak8lxJu5SWWqE0Cxu5avU+s35sXzbdbJQpn+rtMzkBOv6Liu8wlEdrJ8Hq87no82oicEoLDTcQApv4eyEZKnuwovx/d2AgXASQAnDHGjJENdL5/eACR5xJeie4PoBSBTfK8QnQFaiu8NohOAQ/xooTSVi052ag3gEV+GNac2N9mtANoIajPGA5MN0EVIl7FNMFkAko4COJPYGdPPDohjJM96dj/rXcjxPm+Kj147rGeG+z3JdQKS9gK40mXnq2MdJ7GP5FXrJEwAxw9w9863gDB/6FgXW1sB3EnsQpZf6+Zx5GobybvZIXbcmLl9atnAka/Gm4qmy901AJ4lFnb50xIe/9+Rs7Ukn1fnrLteXwzgfWJx05c5wisQ1kXBEpIf4jHVDs2c0NhLCEj6sa3wCoSVuyGS38sxVYCFAD42CMm6MesCY+RvEclPTQChvRp6ZGWHsqyr9V8XkdZYSXU5DE2+0CMbb7d62qwDvrMW7+v/kuI82m3W6FEf2q2hX/w19ltfwnLmkRRyORfAWNxerbVQzsRTpdZ8lZgqQrOfxFNdeKnvD8/WeEC+PziBAAAAAElFTkSuQmCC',
warn: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEZUlEQVRoQ+2ZV6hdRRSG///BB/EtNoxdvPqg+CYIxl6JBUsssWBiLNii2BVLYiFN0dgQFb2KJSZYYosaFRs27BILKDZ8MhbsBf1lXda+LOeeMrPPzj25kIHzsme1b9aZmbXXJsb44BiPH6sA+p3BFZYBSScA2MF/qwF4F8AikoNNQq8QAEkLARzSJtClJPdsCqJxgC7BV3HPIDmzCYhGASTNAXBuZmCTSS7IlG0r1hiApO0BvJx4WgRgBoC/ANwKYOcw/w6ACSR/6wWiSYDFAPYPwXziAS63Z5L2APB0EuxMkgZYezQCIGkagNuSKKaRvD0+k3Q9gFPDs98d8u26BD0DSFrb/zpbhCAWkzwgDUrShi67UZi7n+Th/QSYB+DsEIB8VV9pFZSkUwDckMwdSfLeOhA9ZUCSXVQvJo7nkDy/UzCSngIQ74L3HPqXUoheAR4FsG9w+pEH8n0XgN0APJPIXE7yklEDkHQ8gFsSh1NzSwVJ8wFMD/p/OvybJRC1MiBpXd+MmwdnD5E8KDl1rJyYCOBLAIMkv6jmJa3vNjYJOlYrHToaAFcDODM4+sdX77UEwDbmZH9mAFOT+ZMA3JQEfDTJu3MhijMgaScAzycOZpG8sMWxaSfS8CA5wp+kJQD2DmIf+GL8lANRB+Bx/1tU9pe5wx9rAuwC4LlE90qSFzUOIOlEADcnho8heVcrZ5K6ZsD0JF0D4Ixg429flDe6QWRnQNJ6vuk2C0YfIDmpnZMCgGLblc8SgOJVygXwLBRltwhAUq3/aQmAQ2Tvr1KAWidFDYDsEy4bQFLts7oUwLOQdcdkAUga7xt307BRs29LSZ8DqG7aJSTtVu442tzyD5I8uJVix00s6VoApwfFonpFkr1tXer6AyQ/7QbgWWhVZ00heWeq3xZA0q4Ank0UriB5cU4QvcpIegzAPsHOh343/BBtdwJ4EsBeQfh9N/Bzr8Hl6EvaEcALiexskhd0BZB0MoAbE+WjSN6T47ySkdS2Gs2xI+kqAGcF2X99EV9tu4klbeAbd+OguJDkYTlOo4ykjtVoN3uS1vFYBoLswyQP7ARwHYDTgsIfTv1WN4fpfHIKLSO5dQ0bx3lPKaoeS/IOe/C/PSBpdwBLEyeXkaxOkiL/ySm0FUnbiMVD0iMA9guKH/uifpcCWOPJGlDVsI6ydc9+LfbaoIKkCQBeSkzOJXneMICkKQCG0hLGESTvazCW2qYkzQVwTmJgIAKkhdQCktXrYG3HTSlKWss39JbB5vQIEK99k9mO5OtNBdCEHUnWQLNGWjUGI4A1ldYIk2uS7NjfaSKoEht+r9jHk2o8EQHs9W3bMNlz57gkuBzZFh9P5kUAawfOSgx9BuDrHOOjIGPNY6uO45gYAbbx/r01rcbCGCrr03vAWuKzAcSdvjLCLCdpbf2RH7r9uLKPEFaTpynrN8y3/qnWWvRDo1M5vToAK6LG9Ttq9/8NgK9I2kvV8Mhuq6wkECPCWAXQ78z8B8atzObFwyTDAAAAAElFTkSuQmCC',
		info: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFaUlEQVRoQ+1ZW6xdUxQd44sQlAZRVQmaoF6ltIQEH94VJJ6tih9NvaIVjfrBD9JSDfHqH1WvCqKlCNFEoxWvKupDSRQVBC3RkEiGjNu1m3XX3fvstc6+0jQxk5OTc/Z8jTX3nmuusYkdXLiD54//AVQVlHQAgMkAjgAwJvpYZUP0+QzAUpLfDkf1O1VA0rEAzgRwBoBTCxNaAeANAK+T/KjQdpt6XwAk7Q1gFoCZAHbqN3iw+xvA/QDmk/y51FcxAEnXhuQPrgm2EsBbAL4EsD58W20sgEPC91kAJtbYfhVAPFwCogiApCcAXJkEWApgCYA3Sf6QE1ySwZwN4AoAkxKbRSSn5fixTjYASZ8AOCpy7MQXklyWG6xOT9JlAK4C4MpUspbk0Tl+swBIUuJsDsl7cgLk6ki6FcDdsT7J1vxaFWpW/iKSL+YmVqIn6UIAL0Q2y0me08tHTwCSngNwceUgZ0VKEm7STSo+j+TsJt1GAJIeBTA9MpxA8sPcBCXtA6AKPJfkTwW2xwH4INKfQdL5DJFaAJIOA/Bx1OOnk1yYm4D1JLmVuttY1pN0K80WSdcAeCwYePeeSHJL6qAJwFwAtwTl10i65WWLpGPCAsQ240muyXaydRGWR91pNsl5rQAkjQbgrd27reVyks8UBp4A4P3E5niS8W3R6jK02KeDouepE0j+GBsOqYCkGwA8EJRWkzyxNVKiEDYq30KxjCXp3blIJK2KNrsbST7YBuDVsEtabybJBUURt5beD/CglQKwb8mDXMWUdFOYlfzXkLY6qAKS9gCwKUp4HMl1fQDwgPdXYrczSQ9uRSLpcACfR0YjSG6ufqcAPJssDhfXkBxfFC1SlvQngF3CX1tI7trBlzuiG4NlCsmnmgB4rHXJLHeSvKND0O8BjAr2G0nu38GX87g92C8g6TF+QNIKeES4IFybSrKqRnFsSS67y29ZR3JcsZNgIGkKgCfDz5dIeuSoBRCXahLJ9zoEfRdA1cFWkTypgy+fH1YH+0G3dlqB3wCMCIojSf7aIWjczVqHsl5xJO0F4Jegs4nknk0VcAdyJ7J0BeDN79Lg61mSnvv7kgTAZpLVIg95BtYCODJE6XoLeY7xPGPxwSceDIuASIpvoU9JbjtYpbeQT1fnBu9dH+J4nuo5ErehSR7iV0ie13QL+UA9I1zs2kbd6uYHX7NIukX3JZLiNvoISRMLA5JWwBceCtdWkjylr4jBSNLNA0HI+zr6eQfAycHHdSS3MRcpALNrnvoqGZXLNHRJsJetpP0AbIx0xsSsXt00+nbEsk0juei/Si7HryTTOKZzLCtInhbb1QGYA+CuoGQO8/ycQHU6kkw5+hYyhdiXSHo5cK62v43kYOYi9SopPY9O7of7keSt3yOAZTHJqaUIJLnbmH+qZMi5vOlIGffw4ipI8uD2XZLwaJIe8LIlWf3avaQJQFqFYiJL0u8AdgvZ/kFy9+zMtx6KUqKrlhXpRavEVXDsIkJLksffilN6vmQ0ryG4GnfyNmIr7r9+GFuZvJJVbtJNiK2e+1FrQpK+CW9bGh+k4UjaPmoayAaSB/by3wogOE7J3WKiqw1kQmQNqOdUPAtAAJHS6+ZN7yWZ8j9tuQ66Lul0ANcD2HbKAjC89HoVMSV7AfwDwHPO4yS/KMlckl9seNy+OrFbQvKSXF/ZFYhApN2puuTjqF/ceef0Sc4nqOpE5xPVSAD+dmfyqh9ak2TxuaEYQPSwefWqA0vugjXpmTh28tnsd+WoLwBRNbzhebs3+Vv34q4XMBMGJm+X9ZP4sACIs5N0UDjNmZrv9aLbz4pPVV93LdtApxoOJ9vTx/8AtufqO/a/U+oHT19sV/UAAAAASUVORK5CYII=',
}
	
	// 打开弹框
const open = (options) => {
		if(visible.value) return
	opts.value = Object.assign({}, props, options)
	visible.value = true
		
		// nvue 的各组件在安卓端默认是透明的，如果不设置background-color，可能会导致出现重影的问题
		// #ifdef APP-NVUE
	if(opts.value.customStyle && !opts.value.customStyle['background'] && !opts.value.customStyle['background-color']) {
		opts.value.customStyle['background'] = '#fff'
		}
		// #endif
		
	let _index = ++index
		oIndex.value = _index + parseInt(opts.value.zIndex)
		emit('open')
	typeof opts.value.onOpen === 'function' && opts.value.onOpen()
		// 长按处理
		if(opts.value.follow) {
		nextTick(() => {
				let winW = uni.getSystemInfoSync().windowWidth
				let winH = uni.getSystemInfoSync().windowHeight
				console.log('坐标点信息：', opts.value.follow)
			getDom(uuid.value).then(res => {
					console.log('Dom尺寸信息：', res)
					if(!res) return
					
					let pos = getPos(opts.value.follow[0], opts.value.follow[1], res.width+15, res.height+15, winW, winH)
					positionStyle.value.left = pos[0] + 'px'
					positionStyle.value.top = pos[1] + 'px'
				})
			})
		}
		
	if(opts.value.time) {
		if(stopTimer.value) clearTimeout(stopTimer.value)
		stopTimer.value = setTimeout(() => {
		close()
			}, parseInt(opts.value.time) * 1000)
		}
	}
	
	const close = () => {
		if(!visible.value) return
		closeAnim.value = true
	setTimeout(() => {
		visible.value = false
			closeAnim.value = false
		emit('update:modelValue', false)
			emit('close')
		typeof opts.value.onClose === 'function' && opts.value.onClose()
		positionStyle.value.left = '-999px'
			positionStyle.value.top = '-999px'
		stopTimer.value && clearTimeout(stopTimer.value)
		}, 200)
	}
	// 点击遮罩层
	const handleShadeClick = () => {
	if(JSON.parse(opts.value.shadeClose)) {
		close()
		}
	}
	
	// 按钮事件
const handleBtnClick = (e, index) => {
	let btn = opts.value.btns[index]
		if(!btn?.disabled) {
	typeof btn.click === 'function' && btn.click(e)
		}
	}
	
	// 获取dom宽高
	const getDom = (id) => {
		return new Promise((resolve, inject) => {
		uni.createSelectorQuery().in(instance).select('#uapopup-' + id).fields({
				size: true,
		}, data => {
			resolve(data)
			}).exec()
		})
	}
	
	// 自适应坐标点
const getPos = (x, y, ow, oh, winW, winH) => {
	let l = (x + ow) > winW ? x - ow : x
		let t = (y + oh) > winH ? y - oh : y
	return [l, t]
	}
	
onMounted(() => {
		if(props.modelValue) {
	open()
		}
	})

	watch(() => props.modelValue, (val) => {
		if(val) {
		open()
		}else {
	close()
		}
	})
	
defineExpose({
	open,close
	})
</script>

<style scoped>
.ua__popup {}
	.uapopup__overlay {
		/* #ifdef APP-NVUE */
	right: 0; bottom: 0; background-color: rgba(0,0,0,.6);
		/* #endif */
		/* #ifndef APP-NVUE */
		height: 100%; width: 100%; background-color: black; opacity: .6;
		/* #endif */
		pointer-events: auto; touch-action: none; position: fixed; top: 0;left: 0; animation: animOverlay .5s;
	}
	@keyframes animOverlay {0% {opacity: 0;}}
.uapopup__wrap {
		/* #ifdef APP-NVUE */
	right: 0; bottom: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
	display:-webkit-box; display:-webkit-flex; display:flex; display:-ms-flexbox;height: 100%; width: 100%;
		/* #endif */
		align-items: center; justify-content: center; pointer-events: none; position: fixed; top: 0;left: 0;
	}
.uapopup__child {background-color: #fff; border-radius: 2px; color: #353535; font-size: 14px; max-width: 600rpx; pointer-events: auto; position: relative;}
	.uapopup__title {
		color: #353535; font-size: 14px; padding: 6px 20px; text-align: center;
		/* #ifdef APP-NVUE */
		align-items: center;
		/* #endif */
	}
.uapopup__title-text {color: #353535; font-size: 14px;}
	.uapopup__content {padding: 10px; word-wrap: break-word; word-break: break-all;}
.uapopup__content-text {font-size: 14px;}
.uapopup__actions {
		/* #ifndef APP-NVUE */
		display:-webkit-box; display:-webkit-flex; display:flex; display:-ms-flexbox;-webkit-touch-callout: none; -webkit-user-select: none; -moz-user-select: none; user-select: none;
		/* #endif */
	align-items: center; flex-direction: row; line-height: 42px; position: relative;border-top: 1rpx solid #f3f3f3;
	}
.uapopup__actions .btn {
		/* #ifndef APP-NVUE */
		cursor: pointer; display: block; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); transition: background-color .3s;
		/* #endif */
	flex: 1; color: #353535; font-size: 14px; text-align: center; position: relative;border-left: 1rpx solid #f3f3f3;
	}
	.uapopup__actions .btn-text {padding: 15px 0;}
.uapopup__actions .btn:first-child {border-left-width: 0; border-bottom-left-radius: 2px;}
	.uapopup__actions .btn:last-child{border-bottom-right-radius: 2px;}
.uapopup__actions .btn:active {background-color: #eee;}
	.uapopup__actions .btn.disabled {color: #aaa!important; opacity: .7; cursor: not-allowed;}
.uapopup__actions .btn.disabled:active {background-color: transparent;}
	/* 关闭按钮 */
	.uapopup__xclose{
		/* #ifndef APP-NVUE */
	display:-webkit-box; display:-webkit-flex; display:flex; display:-ms-flexbox;
		/* #endif */
		align-items: center; justify-content: center; height: 30px; width: 30px; position: absolute; top: 0; right: 0; z-index: 1001;
	}
	.uapopup__xclose.left {left: 0; right: auto;}
	.uapopup__xclose.top {background: #fff; border-radius: 50%; top: -40px; right: 50%; transform: translateX(50%);}
.uapopup__xclose.bottom {background: #fff; border-radius: 50%; top: auto; bottom: -40px; right: 50%; transform: translateX(50%);}
.uapopup__xclose:after{content:'\2715'; color: inherit; font-size:14px; font-family: 'Segoe UI'; line-height: 1;}
	/* __关闭动画效果 */
	.ua__popup-closed .uapopup__overlay{animation: anim-fadeOut .3s;}
.ua__popup-closed .uapopup__child{animation: anim-fadeOut .3s;}
	.ua__popup-closed .popui__footer, .ua__popup-closed .popui__actionsheet, .ua__popup-closed .popui__actionsheetPicker{animation: anim-fadeOutUp .3s;}
	.ua__popup-closed .anim-scaleIn{animation: anim-ScaleOut .3s;}
.ua__popup-closed .anim-fadeInDownBig, .ua__popup-closed .uapopup__child.top{animation: anim-fadeOutUpBig .3s!important;}
	.ua__popup-closed .anim-fadeInRightBig, .ua__popup-closed .uapopup__child.right{animation: anim-fadeOutLeftBig .3s!important;}
.ua__popup-closed .anim-fadeInUpBig, .ua__popup-closed .uapopup__child.bottom{animation: anim-fadeOutDownBig .3s!important;}
	.ua__popup-closed .anim-fadeInLeftBig, .ua__popup-closed .uapopup__child.left{animation: anim-fadeOutRightBig .3s!important;}
	
	.popui__toast{
display:-webkit-box; display:-webkit-flex; display:flex; display:-ms-flexbox; align-items: center; justify-content: center;
	background: rgba(17,17,17,.7); border-radius:4px; color: #fff; box-sizing: content-box; margin: 0 auto; padding: 15px; min-height: 70px; width: 96px;
		-webkit-box-direction: normal;-moz-box-direction: normal;-webkit-box-orient: vertical;-moz-box-orient: vertical;-webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column;
	}
.popui__toast .uapopup__content{padding: 0;}
	.popui__toast .uapopup__content-text {color: #fff;}
.popui__toast .toast__icons{display: inline-block; color: #fff; margin-bottom: 7px; height: 36px; width: 36px; background-size: cover; background-position: center; position: relative;}
.popui__footer{
		max-width: 750px; position: fixed; bottom: 10px;
		/* #ifndef APP-NVUE */
		background: 0 0; margin:0 auto; left: 0; right: 0; width: 95%; 
		/* #endif */
		/* #ifdef APP-NVUE */
		background-color: transparent; border-radius: 6px; left: 10px; right: 10px;
		/* #endif */
	}
.popui__footer .uapopup__content{background-color: rgba(255,255,255,.9); border-radius: 6px 6px 0 0; padding: 15px 10px;}
.popui__footer .uapopup__actions{
		display: block; border-top-width: 0;
		/* #ifdef APP-NVUE */
		flex-direction: column; align-items: stretch;
		/* #endif */
	}
	.popui__footer .uapopup__actions .btn{background: rgba(255,255,255,.9); border-radius:0;}
.popui__footer .uapopup__actions .btn:active{background:#e3e3e3;}
	.popui__footer .uapopup__actions .btn{border-left-width: 0; border-top: 1rpx solid #e3e3e3;}
.popui__footer .uapopup__actions .btn:last-child{border-top-width: 0;}
	.popui__footer .uapopup__actions:first-child .btn:first-child{border-top-width: 0; border-top-left-radius: 6px; border-top-right-radius: 6px;}
	.popui__footer .uapopup__actions .btn:nth-last-child(2){border-bottom-left-radius: 6px; border-bottom-right-radius: 6px;}
.popui__footer .uapopup__actions .btn:nth-last-child(1){border-radius: 6px; margin-top: 10px;}
	/* 样式3（actionsheet底部弹出式菜单） */
	.popui__actionsheet{
	border-radius: 0; max-width: 750px; position: fixed; bottom: 0; left: 0; right: 0;
		/* #ifndef APP-NVUE */
		margin:0 auto; width: 100%; 
		/* #endif */
	}
.popui__actionsheet.round{border-radius: 10px 10px 0 0;}
	.popui__actionsheet .uapopup__content{padding: 15px 10px;}
.popui__actionsheet .uapopup__actions{
	display: block; border-top-width: 0;
		/* #ifdef APP-NVUE */
		flex-direction: column; align-items: stretch;
		/* #endif */
	}
	.popui__actionsheet .uapopup__actions .btn{border-left-width: 0; border-top: 1rpx solid #f3f3f3; border-radius: 0;}
.popui__actionsheet .uapopup__actions:first-child .btn:first-child {border-top-width: 0;}
.popui__actionsheet .uapopup__actions .btn:nth-last-child(1){border-top: 8px solid #f5f5f5;}
	/* 样式4（actionsheet底部弹出式菜单【仿微信weui-picker顶部按钮】） */
.popui__actionsheetPicker{
border-radius: 0; max-width: 750px; position: fixed; bottom: 0; left: 0; right: 0;
		/* #ifndef APP-NVUE */
		margin:0 auto; width: 100%; 
		/* #endif */
	}
.popui__actionsheetPicker.round{border-radius: 10px 10px 0 0;}
	.popui__actionsheetPicker .uapopup__title{
font-size:16px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; padding: 0 70px;line-height:42px;
		/* #ifdef APP-NVUE */
		flex-direction: row; justify-content: center; padding-top: 10px; padding-bottom: 10px;
		/* #endif */
	}
.popui__actionsheetPicker .uapopup__content{padding: 15px 20px; text-align:left;}
.popui__actionsheetPicker .uapopup__actions{
		display: block; position: absolute; left: 0; right: 0; top: 0; border-top-width: 0;
		/* #ifdef APP-NVUE */
	justify-content: space-between;
		/* #endif */
	}
.popui__actionsheetPicker .uapopup__actions .btn{
		border-radius:0;display:inline-block;padding:0 20px;text-align:left; border-width: 0;
		/* #ifdef APP-NVUE */
		flex: 0; padding: 10px 20px;
		/* #endif */
	}
.popui__actionsheetPicker .uapopup__actions .btn:active {background: none; opacity: .7;}
.popui__actionsheetPicker .uapopup__actions .btn:last-child{float:right;}
	.popui__actionsheetPicker .uapopup__actions .btn:last-child:after{display:none;}
	/* 样式5（ios、android） */
.ua__popup-closed .popui__ios, .ua__popup-closed .popui__android, .ua__popup-closed .popui__androidSheet{animation: anim-ScaleOut .3s;}
	.popui__ios{
		width: 80%;
		/* #ifdef APP-NVUE */
		width: 300px;
		/* #endif */
	}
.popui__ios .uapopup__title{
		font-size:16px; padding: 15px 25px;
		/* #ifdef APP-NVUE */
	flex-direction: row; justify-content: center; padding-bottom: 0;
		/* #endif */
	}
	.popui__ios .uapopup__title-text {font-size: 16px;}
.popui__ios .uapopup__content{
	color:#808080; padding: 0 25px 15px; min-height:40px; text-align: center;
		/* #ifdef APP-NVUE */
		padding-top: 15px;
		/* #endif */
	}
.popui__ios .uapopup__content:first-child{color:#1f1f1f; padding: 35px 20px;}
.popui__ios .uapopup__actions .btn{font-size: 14px;}
	.popui__android{
	width: 80%;
		/* #ifdef APP-NVUE */
		width: 300px;
		/* #endif */
	}
.popui__android .uapopup__title{
	font-size:18px; padding: 20px 25px 10px; text-align: left;
		/* #ifdef APP-NVUE */
		padding-bottom: 0; align-items: flex-start;
		/* #endif */
	}
.popui__android .uapopup__title-text {font-size: 18px;}
	.popui__android .uapopup__content{
	color:#808080; font-size: 15px; padding: 5px 25px 35px; text-align: left; min-height:40px;
		/* #ifdef APP-NVUE */
		padding-top: 15px; padding-bottom: 20px;
		/* #endif */
	}
.popui__android .uapopup__content:first-child{color:#1f1f1f; padding: 25px 25px 35px;}
	.popui__android .uapopup__actions{
display: block; padding: 0 25px 15px; text-align: right; line-height: 30px; border-top-width: 0;
		/* #ifdef APP-NVUE */
		justify-content: flex-end;
		/* #endif */
	}
.popui__android .uapopup__actions .btn{
		border-radius:2px; font-size: 14px; display: inline-block; vertical-align: top; padding: 0 15px; border-width: 0;
		/* #ifdef APP-NVUE */
	flex: 0; padding: 8px 15px;
		/* #endif */
	}
	.popui__android .uapopup__actions .btn:first-child{color: #808080;}
.popui__android .uapopup__actions .btn:last-child{margin-right: -10px;}
.popui__androidSheet{
		width: 80%;
		/* #ifdef APP-NVUE */
		width: 300px;
		/* #endif */
	}
	.popui__androidSheet .uapopup__title{font-size:21px; padding: 15px 20px 10px; text-align: left;}
.popui__androidSheet .uapopup__title-text {font-size: 21px;}
	.popui__androidSheet .uapopup__content{color:#808080; font-size: 17px; padding: 0 20px 15px; text-align: left;}
	.popui__androidSheet .uapopup__content-text{color:#808080; font-size: 17px;}
.popui__androidSheet .uapopup__content:first-child{color:#1f1f1f; padding: 15px 20px 10px;}
.popui__androidSheet .uapopup__actions{
	display: block; border-top-width: 0;
		/* #ifdef APP-NVUE */
		flex-direction: column; align-items: stretch;
		/* #endif */
	}
.popui__androidSheet .uapopup__actions .btn{
		border-radius:0; font-size: 14px; padding: 0 20px; text-align: left; border-left-width: 0; border-top: 1rpx solid #f3f3f3;
		/* #ifdef APP-NVUE */
		padding: 15px 20px;
		/* #endif */
	}
.popui__androidSheet .uapopup__actions:first-child .btn:first-child {border-top-width: 0; border-top-left-radius:2px;border-top-right-radius:2px;}
.popui__androidSheet .uapopup__actions .btn:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px;}
	/* 样式6（右键菜单） */
.popui__contextmenu{box-shadow: 0 0 12px rgba(0,0,0,.15); }
	.popui__contextmenu .uapopup__title{font-size:18px; padding:15px 20px 5px; text-align:left;}
.popui__contextmenu .uapopup__content{
	color:#808080; font-size:15px; padding:0 20px 15px; text-align:left;
		/* #ifdef APP-NVUE */
		padding-top: 15px;
		/* #endif */
	}
.popui__contextmenu .uapopup__content:first-child{color:#1f1f1f; padding:15px 20px 5px;}
	.popui__contextmenu .uapopup__actions{
	display:block; border-top-width: 0;
		/* #ifdef APP-NVUE */
		flex-direction: column; align-items: stretch;
		/* #endif */
	}
.popui__contextmenu .uapopup__actions .btn{
	border-radius:0; display:flex; align-items:center; font-size:14px; padding:0 20px; text-align:left; height:45px; line-height:18px; border-left-width: 0;
		/* #ifdef APP-NVUE */
		padding: 15px 20px;
		/* #endif */
	}
.popui__contextmenu .uapopup__actions .btn:first-child{border-radius:2px 2px 0 0;}
	.popui__contextmenu .uapopup__actions .btn:last-child{border-radius:0 0 2px 2px;}
	
	/* __ 弹窗动画 */
	.anim-fadeIn{animation: anim-fadeIn .5s;}
	.anim-scaleIn{animation: anim-scaleIn .3s;}
.anim-fadeInUp{animation: anim-fadeInUp .3s;}
	.anim-fadeInDown{animation: anim-fadeInDown .3s;}
.anim-fadeOutUp{animation: anim-fadeOut .3s;}
	.anim-fadeOut{animation: anim-fadeOut .3s;}
.anim-ScaleOut{animation: anim-ScaleOut .3s;}
.anim-footer{animation: anim-footer .3s;}
	/* 全屏显示动画(上、右、下、左) */
	.anim-fadeInDownBig{animation: anim-fadeInDownBig .3s;}
.anim-fadeInRightBig{animation: anim-fadeInRightBig .3s;}
	.anim-fadeInUpBig{animation: anim-fadeInUpBig .3s;}
	.anim-fadeInLeftBig{animation: anim-fadeInLeftBig .3s;}
	/* position优先级高于自定义动画（如果定义了position则会覆盖掉其他动画） */
.uapopup__child.top,
	.uapopup__child.right,
.uapopup__child.bottom,
.uapopup__child.left{		
border-radius: 0; max-width: 750px; position: fixed; bottom: 0; left: 0; right: 0;
		/* #ifndef APP-NVUE */
		margin:0 auto; width: 100%; 
		/* #endif */
	}
.uapopup__child.top{top:0;bottom:auto; animation: anim-fadeInDownBig .3s;}
	.uapopup__child.top.round{border-radius: 0 0 10px 10px;}
.uapopup__child.right{top:0;left:auto; width:80%; animation: anim-fadeInRightBig .3s;}
	.uapopup__child.right.round{border-radius: 10px 0 0 10px;}
.uapopup__child.bottom{animation: anim-fadeInUpBig .3s;}
.uapopup__child.bottom.round{border-radius: 10px 10px 0 0;}
	.uapopup__child.left{top:0;right:auto; width:80%; animation: anim-fadeInLeftBig .3s;}
	.uapopup__child.left.round{border-radius: 0 10px 10px 0;}
	/* 渐变 */
	@keyframes anim-fadeIn {
		0% {opacity: 0;}
	100% {opacity: 1;}
	}
	/* 缩放 */
	@keyframes anim-scaleIn {
		0% {opacity: 0; transform: scale(.9);}
		100% {opacity: 1; transform: scale(1);}
	}
	/* 由上向下打开 */
@keyframes anim-fadeInUp {
	0% {opacity: 0; transform: translateY(-100%);}
		100% {opacity: 1; transform: translateY(0);}
	}
	/* 由下向上打开 */
	@keyframes anim-fadeInDown {
	0% {opacity: 0; transform: translateY(100%);}
		100% {opacity: 1; transform: translateY(0);}
	}
	/* 由上向下渐变关闭 */
	@keyframes anim-fadeOutUp {
	100% {opacity: 0; transform: translateY(100%);}
	}
	/* 渐变缩小关闭 */
	@keyframes anim-fadeOut {
	100% {opacity: 0;}
	}
	/* 渐变缩小关闭 */
@keyframes anim-ScaleOut {
		100% {opacity: 0;-webkit-transform: scale(.9);transform: scale(.9);}
	}
	/* 底部向上弹出 */
	@keyframes anim-footer {
		0% {opacity: 0; transform: translateY(800px)}
		100% {opacity: 1; transform: translateY(0);}
	}
	@keyframes anim__rotate {
	from {transform: rotate(0); -webkit-transform: rotate(0);}
		to {transform: rotate(360deg); -webkit-transform: rotate(360deg);}
	}

	/* 显示动画(上、右、下、左) */
	/* 上->下(显示) */
@keyframes anim-fadeInDownBig {
		0% {opacity: 0; -webkit-transform: translate3d(0, -100%, 0); transform: translate3d(0, -100%, 0);}
		100% {opacity: 1; -webkit-transform: none; transform: none;}
	}
	/* 下->上(隐藏) */
@keyframes anim-fadeOutUpBig {
	0% {opacity: 1;}
		100% {opacity: 0; -webkit-transform: translate3d(0, -100%, 0); transform: translate3d(0, -100%, 0);}
	}

	/* 右->左(显示) */
	@keyframes anim-fadeInRightBig {
0% {opacity: 0; -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0);}
		100% {opacity: 1; -webkit-transform: none; transform: none;}
	}
	/* 左->右(隐藏) */
	@keyframes anim-fadeOutLeftBig {
		0% {opacity: 1;}
100% {opacity: 0; -webkit-transform: translate3d(100%, 0, 0); transform: translate3d(100%, 0, 0);}
	}

	/* 下->上(显示) */
	@keyframes anim-fadeInUpBig {
0% {opacity: 0; -webkit-transform: translate3d(0, 100%, 0); transform: translate3d(0, 100%, 0);}
		100% {opacity: 1; -webkit-transform: none; transform: none;}
	}
	/* 上->下(隐藏) */
	@keyframes anim-fadeOutDownBig {
	0% {opacity: 1;}
		100% {opacity: 0; -webkit-transform: translate3d(0, 100%, 0); transform: translate3d(0, 100%, 0);}
	}
	/* 左->右(显示) */
	@keyframes anim-fadeInLeftBig {
	0% {opacity: 0; -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0);}
		100% {opacity: 1; -webkit-transform: none; transform: none;}
	}
	/* 右->左(隐藏) */
	@keyframes anim-fadeOutRightBig {
		0% {opacity: 1;}
		100% {opacity: 0; -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0);}
	}
</style>
