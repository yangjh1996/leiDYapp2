<!-- 底部导航栏 -->
<template>
    <view class="ua__tabbar" :class="{'fixed': fixed || transparent, 'transparent': transparent}">
       <view class="ua__tabbar-wrap flexbox flex-alignc" :class="{'is-border': border}" :style="{'background': bgcolor, 'z-index': zIndex}">
           <view v-for="(item, index) in tabs" :key="index" class="ua__tabbar-item flexbox flex-col" :class="currentTabIndex == index ? 'on' : ''" @click="switchTabs(index, item)">
              <view v-if="item.icon" class="ua__tabbar-icon" :class="{'dock': item.dock}">
                 <template v-if="dock && item.dock">
                      <view class="dock-bg flexbox" :style="{'z-index': item.zIndex+1}">
					<template v-if="isImg(item.icon)">
								<!-- #ifdef APP-NVUE -->
							<image class="iconimg" :src="tabIcon(index)" :style="{'height': item.iconSize, 'width': item.iconSize}" mode="widthFix" />
								<!-- #endif -->
								<!-- #ifndef APP-NVUE -->
							<image class="iconimg" :src="tabIcon(index)" :style="{'font-size': item.iconSize}" />
								<!-- #endif -->
							</template>
				<text v-else class="nvueicon iconfont" :class="[customPrefix, tabIcon(index)]" :style="{'color': tabColor(index), 'font-size': item.iconSize}">{{tabIconUnicode(index)}}</text>
                        </view>
					<view class="dock-cover flexbox" :class="{'is-border': border}" :style="{'background': item.bgcolor || bgcolor, 'z-index': item.zIndex}"></view>
                    </template>
                 <template v-else>
				<template v-if="isImg(item.icon)">
							<!-- #ifdef APP-NVUE -->
						<image class="iconimg" :src="tabIcon(index)" :style="{'height': item.iconSize, 'width': item.iconSize}" mode="widthFix" />
							<!-- #endif -->
							<!-- #ifndef APP-NVUE -->
							<image class="iconimg" :src="tabIcon(index)" :style="{'font-size': item.iconSize}" />
							<!-- #endif -->
						</template>
				<text v-else class="nvueicon iconfont" :class="[customPrefix, tabIcon(index)]" :style="{'color': tabColor(index), 'font-size': item.iconSize}">{{tabIconUnicode(index)}}</text>
                    </template>
                </view>
                <view v-if="item.title" class="ua__tabbar-title"><text class="ua__tabbar-title__text" :style="{'color': tabColor(index)}">{{item.title}}</text></view>
				<!-- 圆点 -->
		<template v-if="item.icon && item.title">
				<text v-if="item.badge" class="ua__badge ua__tabbar-badge">{{item.badge}}</text>
					<text v-if="item.dot" class="ua__badge-dot ua__tabbar-badgeDot"></text>
				</template>
			<template v-else>
			<text v-if="item.badge" class="ua__badge ua__tabbar-only__badge">{{item.badge}}</text>
				<text v-if="item.dot" class="ua__badge-dot ua__tabbar-only__badgeDot"></text>
				</template>
            </view>
        </view>
    </view>
</template>

<script setup>
	import { onMounted, onUnmounted, ref, computed, watch, nextTick } from 'vue'

	const props = defineProps({
		current: { type: [Number, String], default: 0 },
	bgcolor: { type: String, default: '#fff' },
		color: { type: String, default: '#9d9ea5' },
		// 激活颜色
		activeColor: { type: String, default: '#2979ff' },
	fixed: { type: [Boolean, String], default: false },
		transparent: { type: [Boolean, String], default: false },
		// 是否中间凸起按钮
		dock: { type: [Boolean, String], default: true },
	zIndex: { type: [Number, String], default: '2023' },
		customPrefix: { type: String, default: 'welive-icon' },
	border: { type: [Boolean, String], default: true },
		// 是否隐藏原生tabbar
	hideTabBar: { type: Boolean, default: true },
		// tab选项
	tabs: {
		type: Array,
		default: () => [
				{
				path: `/pages/index/index`,
					icon: `\ue76e`,
					title: `首页`
				},
				{
			path: `/pages/video/index`,
					icon: `\ue87b`,
					title: `短视频`
				},
				{
				path: `/pages/live/index`,
					icon: `/static/logo.png`,
					dock: true,
					iconSize: `70rpx`,
				},
				{
			path: `/pages/cart/index`,
					icon: `\ue734`,
				title: `购物车`,
					badge: 3
				},
				{
				path: `/pages/my/index`,
					icon: `\ue712`,
			title: `我的`,
					dot: true
				}
			]
		}
	})
	const emit = defineEmits(['change'])
	// #ifdef APP-NVUE
	var domModule = weex.requireModule('dom');
	domModule.addRule('fontFace', {
		'fontFamily': "nvueicon",
		'src': "url('/static/fonts/iconfont.ttf')"
	});
	// #endif
	
	// 是否隐藏原生tabbar
	if(props.hideTabBar) uni.hideTabBar();
	const currentTabIndex = ref(props.current)
	
	// 是否图片类型
	const isImg = computed(() => {
		return str => {
		if(typeof str !== 'string') return
			return /\.(gif|jpg|jpeg|png|bmp|webp|svg|tiff|psd)$/i.test(str)
		}
	})
const tabIcon = computed(() => {
		return index => {
		const item = props.tabs[index]
			return currentTabIndex.value === index ? (item.activeIcon || item.icon) : item.icon
		}
	})
const tabIconUnicode = computed(() => {
		return index => {
		const item = props.tabs[index]
		return currentTabIndex.value === index && item.activeIcon ? (item.activeIcon.charAt(1) == '' ? item.activeIcon : '') : (item.icon.charAt(1) == '' ? item.icon : '')
		}
	})
	// tab文字颜色
const tabColor = computed(() => {
	return index => {
		const item = props.tabs[index]
			return currentTabIndex.value === index ? (item.activeColor || props.activeColor) : (item.color || props.color)
		}
	})
	
	const route = computed(() => {
	let pages = getCurrentPages()
		return pages[pages.length - 1].route
	})
	
	onMounted(() => {
	selectRoute(route.value)
	})
onUnmounted(() => {
	uni.removeInterceptor('switchTab')
	})
	
	// 监听tabBar跳转
	uni.addInterceptor('switchTab', {
		success(e) {
		selectRoute(route.value)
		}
	})
	
	const selectRoute = (curPath) => {
	curPath = curPath.substr(0, 1) == '/' ? curPath : '/' + curPath
		props.tabs.map((item, index) => {
		if(item.path == curPath) {
		currentTabIndex.value = index
			}
		})
	}
	
const switchTabs = (index, item) => {
	emit('change', index)
		if(item.path) {
		uni.switchTab({
		url: item.path
			})
		}else {
		currentTabIndex.value = index
		}
	}
</script>

<style scoped>
.nvueicon {font-family: nvueicon;}
	.ua__tabbar {
		/* #ifndef APP-NVUE */
		display:-webkit-box; display:-webkit-flex; display:flex; display:-ms-flexbox;
		/* #endif */
		flex-direction: row;
	}
.ua__tabbar-wrap {flex: 1; flex-direction: row; background-color: #fff; border: 1rpx solid transparent; color: #333; height: 110rpx; position: relative; z-index: 2023;}
	.ua__tabbar-wrap:after {content: ''; background: inherit; height: 100%; width: 100%; position: absolute; left: 0; right: 0; z-index: -1;}
.ua__tabbar-wrap.is-border {border-top-color: rgba(171,171,171,.1); box-shadow: 0 -1px 2px rgba(171,171,171,.05);}
	.ua__tabbar.fixed{padding-top: 110rpx;}
.ua__tabbar.transparent{padding-top: 0;}
	.ua__tabbar.fixed .ua__tabbar-wrap{
		/* #ifdef APP-NVUE */
	left: 0; right: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
		width: 100%;
		/* #endif */
		max-width: 750px; position: fixed; bottom: 0;
	}
.ua__tabbar-item{flex: 1; align-items: center; justify-content: center; height: 110rpx; position: relative;}
	/* 图标 */
	.ua__tabbar-icon{display: flex; align-items: center; justify-content: center; margin: 0 auto; min-height: 50rpx; position: relative;}
	/* dock菜单 */
.ua__tabbar-icon.dock {
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
	}
.ua__tabbar-icon.dock .dock-bg {
		border-radius: 1000rpx; align-items: center; justify-content: center; height: 100rpx; width: 100rpx; 
		/* #ifndef APP-NVUE */
		position: absolute; top: -70rpx; left: 50%; z-index: 11; transform: translateX(-50%);
		/* #endif */
	}
.ua__tabbar-icon.dock .dock-cover {
	background-color: #2979ff; border-radius: 1000rpx; align-items: center; justify-content: center; height: 100rpx; width: 100rpx; 
		/* #ifdef APP-NVUE */
		height: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
	position: absolute; top: -70rpx; left: 50%; z-index: -1; transform: translateX(-50%);
		/* #endif */
	}
	.ua__tabbar-icon.dock .dock-cover.is-border {border: 1px solid rgba(171,171,171,.1); box-shadow: 0 -1px 2px rgba(171,171,171,.1);}
	/* 字体图标/图片 */
.ua__tabbar-item .iconfont{color:#9d9ea5; font-size: 40rpx; transition: color .3s;}
	.ua__tabbar-item .iconimg{
	display: block; font-size: 36rpx; height: 1em; width: 1em;
		/* #ifdef APP-NVUE */
		height: 36rpx; width: 36rpx;
		/* #endif */
	}
.ua__tabbar-item.on .iconfont{color:#2979ff;}
	/* 标题 */
.ua__tabbar-title{
position: relative; transition: color .3s;
	}
	.ua__tabbar-title__text {color: #9d9ea5; font-size: 24rpx; }
	.ua__tabbar-item.on .ua__tabbar-title__text{color: #2979ff;}
	/* icon+title上圆点 */
.ua__tabbar-badge{
	position: absolute; top: 5rpx; left: 50%; margin-left: 10rpx;
		/* #ifdef APP-NVUE */
		margin-left: -10rpx;
		/* #endif */
	}
.ua__tabbar-badgeDot{
	position: absolute; top: 10rpx; left: 50%; margin-left: 5rpx;
		/* #ifdef APP-NVUE */
		margin-left: -15rpx;
		/* #endif */
	}
	/* icon或title上圆点 */
.ua__tabbar-only__badge{
		position: absolute; top: 50%; left: 50%; margin-left: 10rpx; margin-top: -40rpx;
		/* #ifdef APP-NVUE */
	margin-left: -10rpx; margin-top: -80rpx;
		/* #endif */
	}
.ua__tabbar-only__badgeDot{
	position: absolute; top: 50%; left: 50%; margin-left: 5rpx; margin-top: -20rpx;
		/* #ifdef APP-NVUE */
		margin-left: -15rpx; margin-top: -60rpx;
		/* #endif */
	}
</style>
