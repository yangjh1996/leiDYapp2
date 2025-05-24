<script setup>
import { onMounted, ref, watch, nextTick, getCurrentInstance } from 'vue'
	import { onLoad, onShow, onHide } from '@dcloudio/uni-app'
	const props = defineProps({
		current: { type: [Number, String], default: 0 },
   showPlayBtn: { type: [Boolean, String], default: true },
		showProgressBar: { type: [Boolean, String], default: true },
	controls: { type: [Boolean, String], default: false },
		circular: { type: [Boolean, String], default: true },
	autonext: { type: [Boolean, String], default: false },
		danmuEnable: { type: [Boolean, String], default: false },
	source: {
		type: Array,
			default: () => []
		}
	})
const emit = defineEmits(['change', 'transition', 'play', 'pause', 'timeupdate', 'ended', 'click', 'videocontext'])
	const { globalData } = getApp()
	console.log(globalData)
	const winWidth = ref(globalData.screenWidth)
	const winHeight = ref(globalData.screenHeight)
  const currentVideo = ref(props.current)
	const isPlaying = ref(false)
   const clickNum = ref(0)
	const clickTimer = ref(null)
	const progressBar = ref(0)
  const pageYStart = ref(0)
	const pageYEnd = ref(0)
	const getVideoContext = () => {
	return uni.createVideoContext(`uplayer${currentVideo.value}`, getCurrentInstance())
	}
	
const handleChange = (e) => {
	const index = e.detail.current
	progressBar.value = 0
		handleReset()
	currentVideo.value = index
		emit('change', e.detail)
		// 播放
		handlePlay()
	}
	
	const handleTransition = (e) => {
	emit('transition', e)
	}
	
	// 播放
	const handlePlay = () => {
	let video = getVideoContext()
		if(!video) return
		video.play()
	isPlaying.value = true
		emit('play')
	}
	
	// 暂停
	const handlePause = () => {
	let video = getVideoContext()
		if(!video) return
		video.pause()
	isPlaying.value = false
	emit('pause')
	}
	
	// 重置播放
	const handleReset = () => {
	let video = getVideoContext()
		if(!video) return
		video.pause()
	video.seek(0)
	video.stop()
		isPlaying.value = false
	}
	// 播放结束
	const handleEnded = (e) => {
		emit('ended', e)
		if(props.autonext) {
			handleReset()
			currentVideo.value++
			if(currentVideo.value == props.source.length) {
				if(props.circular) {
					nextTick(() => {
					currentVideo.value = 0
					})
				}else {
			currentVideo.value = props.source.length - 1
				return
				}
			}
		}
	}
	const handleTimeUpdate = (e) => {
	let { currentTime, duration } = e.detail
		progressBar.value = parseInt((currentTime / duration).toFixed(2) * parseInt(winWidth.value))
		emit('timeupdate', e.detail)
	}
const handleClickVideo = () => {
	clearTimeout(clickTimer.value)
		clickNum.value++
	emit('click', clickNum.value)
	clickTimer.value = setTimeout(() => {
		if(clickNum.value >= 2) {
				console.log('double click')
			}else {
				if(!props.showPlayBtn) return
				if(isPlaying.value) {
					handlePause()
				}else {
					handlePlay()
				}
			}
			clickNum.value = 0
		}, 200)
	}
	const handleTouchStart = (e) => {
	pageYStart.value = e.changedTouches[0].pageY
	}
	const handleTouchEnd = (e) => {
	pageYEnd.value = e.changedTouches[0].pageY
		const os = uni.getSystemInfoSync().osName
		if(os == 'android') {
		if(pageYStart.value - pageYEnd.value > 150) {
			console.log('向上滑动')
			}else if(pageYStart.value - pageYEnd.value < -150) {
			console.log('向下滑动')
			}
		}
	}
	
	watch(() => currentVideo.value, () => {
	emit('videocontext', getVideoContext())
	}, { deep: true, immediate: true })
	
onShow(() => {
		handlePlay()
	})
	
	onHide(() => {
		handleReset()
	})
</script>

<template>
	<view class="ua__swipervideo flex1">
		<swiper
			class="ua__swipervideo-wrap flex1"
			:current="currentVideo"
			vertical
		:circular="circular"
		:duration="200"
			@change="handleChange"
		@transition="handleTransition"
			@touchstart="handleTouchStart"
			@touchmove.prevent.stop
			@touchend="handleTouchEnd"
		>
		<swiper-item v-for="(item, index) in source" :key="index">
			<video
				class="ua__swipervideo-player flex1"
				:id="'uplayer' + index"
					:src="item.src"
					:danmu-list="item.danmu"
				:enable-danmu="danmuEnable"
					:controls="controls"
				:loop="!autonext"
				:autoplay="index == currentVideo"
					:show-center-play-btn="false"
				object-fit="contain"
					@click="handleClickVideo"
				@play="isPlaying=true"
					@ended="handleEnded"
				@timeupdate="handleTimeUpdate"
					:style="{'width': `${winWidth}px`, 'height': `${winHeight}px`}"
				>
				</video>
		<slot :item="item" :index="currentVideo" />
			</swiper-item>
		</swiper>
		<slot name="fixed" />
		<view v-if="showPlayBtn && !isPlaying" class="ua__swipervideo-playbtn" :style="{'left': `${winWidth/2}px`, 'top': `${winHeight/2}px`}" @click="handleClickVideo">
		<text class="ua__swipervideo-playico welive-icon welive-icon-bofang nvueicon">
				<!-- #ifdef APP-NVUE -->
				&#xe607;
				<!-- #endif -->
			</text>
		</view>
	<view v-if="showProgressBar" class="ua__swipervideo-progress" :style="{'width': `${winWidth}px`}"><view class="ua__swipervideo-progressbar" :style="{'width': `${progressBar}px`}"></view></view>
	</view>
</template>

<style lang="scss" scoped>
.ua__swipervideo {
	height: 100%;
		/* #ifdef MP-WEIXIN */
		height: 100vh;
		/* #endif */
	}
.ua__swipervideo-wrap {height: 100%;}
	.ua__swipervideo-player {
		/* #ifndef APP-NVUE */
		height: 100%!important; width: 100%!important;
		/* #endif */
		position: absolute; left: 0; right: 0; top: 0; bottom: 0;
	}
.ua__swipervideo-playbtn {
		/* #ifndef APP-NVUE */
		display:-webkit-box; display:-webkit-flex; display:flex; display:-ms-flexbox; left: 50%!important; top: 50%!important;
		/* #endif */
	border: 1px solid transparent; align-items: center!important; justify-content: center!important; margin-left: -50rpx; margin-top: -50rpx; height: 100rpx; width: 100rpx; position: absolute!important; pointer-events: none;
		.ua__swipervideo-playico {color: rgba(255,255,255,.7); font-size: 100rpx;}
	}
.ua__swipervideo-progress{
	/* #ifndef APP-NVUE */
	width: 100%; z-index: 1001;
		/* #endif */
		/* #ifdef APP-NVUE */
		left: 0; right: 0;
		/* #endif */
	background-color: rgba(255,255,255,.2); height: 1px; position: absolute!important; bottom: 110rpx; z-index: 10;
	.ua__swipervideo-progressbar {
	background-color: #fff; height: 1px; width: 0; transition: all .2s; position: relative;
			&:after {
		content: ''; background-color: #fff; border-radius: 50%; height: 4px; width: 4px; position: absolute; right: 0; top: 50%; transform: translateY(-50%);
			}
		}
	}
::v-deep .uni-video-danmu {margin-top: 50px!important; height: 150px!important;}
</style>
