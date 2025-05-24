<!-- 商品详情模板 -->
<script setup>
import { ref } from 'vue'
	import { onLoad, onPageScroll } from '@dcloudio/uni-app'
	import liveJson from '../live/mock/live-json'
const props = defineProps({
	rid: { type: [Number, String] }
	})
	onLoad((option) => {		
	liveJson.map((item, index) => {
		if(parseInt(item.id) == parseInt(props.rid)) {
	goodsItem.value = item
			}
		})
	})
	const goodsItem = ref({})
const navbarBg = ref('transparent')
	onPageScroll(e => {
	let scrollTop = e.scrollTop
		if(scrollTop < 200) scrollTop = 200
navbarBg.value = 'rgba(41, 121, 255, '+(scrollTop - 200) / 100+')'
	})
	
const handleGoodsNavClick = (e) => {
	if(e.index == 1) {
	uni.switchTab({
		url: '/pages/cart/index'
			})
		}
	}
const handleGoodsNavButtonClick = (e) => {
	if(e.index == 1) {
		uni.navigateTo({
		url: '/pages/order/order-sure?rid=' + props.rid
			})
		}
	}
</script>

<template>
<ua-layout class="scrolling" :tabbar="false">
	<template #header>
		<ua-navbar custom transparent :bgcolor="navbarBg">
		<template #back>
	<text class="welive-icon welive-icon-arrLeft fs-36"></text>
				</template>
		<template #right>
		<text class="welive-icon welive-icon-share fs-36"></text>
		</template>
			</ua-navbar>
		</template>
		
	<view class="ulive__wrap-goods__detail">
		<view class="ulive__wrap-goods__detail-swiper">
		<swiper :indicator-dots="true" :autoplay="true" indicator-color="rgba(255,255,255,.5)" indicator-active-color="#fff">
			<swiper-item><image class="gpic" :src="goodsItem.poster" mode="aspectFill" /></swiper-item>
		<swiper-item><image class="gpic" :src="goodsItem.poster" mode="aspectFill" /></swiper-item>
				</swiper>
			</view>
		<view class="ulive__wrap-goods__detail-price flexbox flex-alignc">
			<view class="realprice flexbox flex-col">
				<view class="real"><text class="fs-24">￥</text>1678.00</view>
		<view class="del">原价￥4000.00</view>
				</view>
		<view class="mprice flex1">限时秒杀<view class="flexbox flex-justifyb">距离结束 <uni-countdown :show-day="false" :hour="12" :minute="12" :second="12" color="#fff" splitorColor="#fff" /></view></view>
			</view>
		<view class="ulive__wrap-goods__detail-item ulive__wrap-goods__detail-ginfo">
			<view class="fs-32 bold">{{goodsItem.desc}}</view>
		<view class="rowitem"><view class="lbl">服务</view><view class="flex1">随时退-过期自动退<uni-icons type="help" size="16" /></view></view>
		<view class="rowitem"><view class="lbl">须知</view><view class="flex1 clamp1">周一至周日09:30-18:00 至少提前1天预订信息</view><uni-icons type="right" color="#999" size="16" /></view>
		<view class="rowitem"><view class="lbl">门店</view><view class="flex1">最近12.3km 武汉爱尔眼科</view><uni-icons type="right" color="#999" size="16" /></view>
				<view class="rowitem"><view class="lbl">活动</view><view class="flex1">元旦大促销</view></view>
			</view>
	<view class="ulive__wrap-goods__detail-item ulive__wrap-goods__detail-gdetail">
			{{goodsItem.desc}}
		<image :src="goodsItem.poster" />
			<image :src="goodsItem.poster" />
			</view>
		</view>
	<template #footer>
		<view class="ulive__wrap-goods__detail-footfixed">
			<view class="ulive__wrap-goods__detail-footbar flexbox flex-alignc">
	<goods-nav @click="handleGoodsNavClick" @buttonClick="handleGoodsNavButtonClick" />
		</view>
			</view>
		</template>
	</ua-layout>
</template>

<style lang="scss" scoped>
.ulive__wrap-goods__detail {
	.ulive__wrap-goods__detail-swiper {height: 700rpx; position: relative;}
		.ulive__wrap-goods__detail-swiper swiper {height: 100%;}
	.ulive__wrap-goods__detail-swiper .gpic {height: 700rpx; width: 100%;}
	.ulive__wrap-goods__detail-price {
	background: linear-gradient(45deg, #fbe0ca, #f5b089); height: 140rpx;
	.realprice {background: linear-gradient(45deg, #f5b089, #ff007f); justify-content: center; padding-left: 30rpx; padding-right: 80rpx; height: 140rpx;}
	.real {color: #fff; font-size: 50rpx;}
			.del {color: #fff; font-size: 28rpx; text-decoration: line-through;}
	.mprice {color: #fff; text-align: right; padding-right: 30rpx;}
		}
	.ulive__wrap-goods__detail-item {background-color: #fff; border-radius: 20rpx; margin: 25rpx; padding: 25rpx;}
.ulive__wrap-goods__detail-ginfo {
	.rowitem {display: flex; align-items: center; margin-top: 25rpx;}
		.lbl {min-width: 120rpx; color: #999; font-size: 28rpx;}
		}
.ulive__wrap-goods__detail-gdetail {
image {max-width: 100%; width: 100%; margin-top: 15rpx;}
		}
	}
	// 底部固定
.ulive__wrap-goods__detail-footfixed {
	padding-top: 120rpx;
.ulive__wrap-goods__detail-footbar {background-color: #fff; height: 120rpx; position: fixed; bottom: 0; width: 100%;}
	}
</style>
