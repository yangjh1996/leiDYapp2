<!-- 顶部导航栏 -->
<template>
   <view class="ua__navbar" :style="!transparent ? navH : ''">
     <view class="ua__navbar-wrap flexbox flex-alignc" :class="{'custom': custom, 'fixed': fixed || transparent}" :style="{'height': customBarH + 'px', 'padding-top': (custom ? statusBarH : 0) + 'px', 'background': bgcolor, 'color': color, 'z-index': zIndex}">
            <view class="action navbar-action__left" v-if="back && back!='false'" @click="onBack">
					<template v-if="$slots.back"><slot name="back" /></template>
			<template v-else><text class="iconfont nvuefont" :style="{'color': color}">{{'\ue892'}}</text></template>
				<slot name="backText" />
                </view>
			<slot name="left" />
                <view v-if="!search" class="navbar-title" :class="{'center': center, 'notback': !back}">
                   <template v-if="$slots.title">
				<slot name="title" />
					</template>
                  <template v-else><text :style="{'color': color, 'font-size': size}">{{title}}</text></template>
                </view>
               <view v-if="search" class="action navbar-action__search">
                 <slot name="search" />
               </view>
            <view class="action navbar-action__right">
               <slot name="right" />
              </view>
         </view>
      </view>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
	const props = defineProps({
	custom: { type: [Boolean, String], default: false },
		back: { type: [Boolean, String], default: true },
	title: { type: String, default: '' },
		// 标题颜色
	color: { type: String, default: '#fff' },
		bgcolor: { type: String, default: '#42b983' },
		size: { type: String, default: null },
	center: { type: [Boolean, String], default: false },
		// 是否搜索
		search: { type: [Boolean, String], default: false },
		// 是否固定
	fixed: { type: [Boolean, String], default: false },
		transparent: { type: [Boolean, String], default: false },
		// 设置层级
	zIndex: { type: [Number, String], default: '2023' }
	})
	
	const { globalData } = getApp()
	const statusBarH = ref(0)
	const customBarH = ref(0)
	
	statusBarH.value = globalData.statusBarH
	customBarH.value = props.custom ? globalData.customBarH : globalData.customBarH - statusBarH.value
const navH = computed(() => `height: ${customBarH.value}px;`)
	
	// #ifdef APP-NVUE
	var domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', {
		'fontFamily': "nvueIcon",
		'src': "url('/static/fonts/iconfont.ttf')"
	});
	// #endif
	
const onBack = () => {
	uni.navigateBack({
		delta: 1
		})
	}
</script>

<style scoped>
.nvuefont {font-family: nvueIcon;}
	.ua__navbar {
		/* #ifndef APP-NVUE */
	display:-webkit-box; display:-webkit-flex; display:flex; display:-ms-flexbox;
		/* #endif */
		flex-direction: row;
	}
.ua__navbar-wrap {
flex: 1; flex-direction: row; align-items: center; background-color: #fff; color: #333; justify-content: space-between; position: relative; z-index: 2023;
	}
.ua__navbar-wrap.custom {
		/* #ifdef MP-WEIXIN */
		padding-right: 200rpx;
		/* #endif */
		/* #ifdef MP-ALIPAY */
		padding-right: 150rpx;
		/* #endif */
	}
.ua__navbar-wrap.fixed {
		/* #ifdef APP-NVUE */
	left: 0; right: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		max-width: 750px; position: fixed; top: 0;
	}
.ua__navbar-wrap .action {
		/* #ifndef APP-NVUE */
	display:-webkit-box; display:-webkit-flex; display:flex; display:-ms-flexbox; height: 100%; max-width: 100%;
		/* #endif */
		flex-direction: row; align-items: center; justify-content: center;
	}
	/*左侧*/
	.navbar-action__left {font-size: 32rpx; padding: 0 24rpx;}
.navbar-action__left .iconfont {font-size: 42rpx;}
	/*标题*/
	.ua__navbar-wrap .navbar-title {flex: 1; font-size: 32rpx;}
.ua__navbar-wrap .navbar-title:first-child {font-size: 36rpx; margin-left: 24rpx;}
.ua__navbar-wrap .navbar-title.center {
		/* #ifdef APP-NVUE */
		left: 0; right: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
	width: 100%; z-index: -1;
		/* #endif */
	    align-items: center; text-align: center; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; margin-left: auto;
	    position: absolute;
	}
.ua__navbar-wrap.custom .navbar-title.center {
		/* #ifdef MP */
	width: auto; align-items: auto; text-align: left; position: static;
		/* #endif */
	}
.ua__navbar-wrap.custom .navbar-title.notback {
		/* #ifdef MP */
	margin-left: 24rpx;
		/* #endif */
	}
	
	/*搜索条*/
.navbar-action__search.action {flex: 1; justify-content: flex-start;}
	.navbar-action__right {font-size: 32rpx; padding-right: 24rpx;}
	.navbar-action__right .iconfont {font-size: 42rpx;}
</style>
