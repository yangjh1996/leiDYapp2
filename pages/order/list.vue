<!-- 订单列表 -->
<script setup>
import { ref } from 'vue'
	const tabList = ref([
	{ name: "全部" },{ name: "待付款" },{ name: "待发货" },
	{ name: "待收货" },{ name: "已完成" },{ name: "取消" }
	])
const tabCur = ref(0)
	const swiperCur = ref(0)
const isrefresh = ref(false)
	const uTabs = ref()
	// 获取匹配订单列表
const orderList = ref([
	{
		list: [],
	page: 1,
			status: "", // loading-加载 nomore-没有数据 loaded-已请求数据
		},
		{
		list: [],
			page: 1,
			status: "",
		},
		{
	list: [],
			page: 1,
		status: "",
		},
	{
		list: [],
		page: 1,
			status: "",
		},
	{
		list: [],page: 1,
			status: "",
		},
		{
		list: [],
			page: 1,
			status: "",
		}
	])
	// tabs通知swiper切换
const tabsChange = (index) => {
	swiperCur.value = index
	}
	
	// swiper-item左右移动，通知tabs的滑块跟随移动
	const transition = (e) => {
		let dx = e.detail.dx
		uTabs.value.setDx(dx)
	}
	// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
	// swiper滑动结束，分别设置tabs和swiper的状态
	const animationfinish = (e) => {
	let current = e.detail.current
		uTabs.value.setFinishCurrent(current)
		swiperCur.value = current
		tabCur.value = current
	}
	const onChange = (e) => {
	let current = e.detail.current
		console.log(`🚀 - current:`, current)
		swiperCur.value = current
	}
	// 下拉刷新
const onRefresher = () => {
	if (isrefresh.value) return
		isrefresh.value = true
	setTimeout(() => {
		isrefresh.value = false
		}, 1000)
	}
	
	const onreachBottom = () => {
	}
	
	const toDetail = () => {
		uni.navigateTo({
			url: '/pages/order/detail'
		})
	}
</script>

<template>
<ua-layout :tabbar="false">
	<template #header>
		<ua-navbar custom title="我的订单" fixed bgcolor="#2979ff">
		<template #back>
		<text class="welive-icon welive-icon-arrLeft fs-36"></text>
				</template>
			</ua-navbar>
	</template>
<view class="ulive__wrap-orderlist__wrap flexbox flex-col">
		<u-tabs-swiper
			ref="uTabs"
				:list="tabList"
			:current="tabCur"
			:is-scroll="false"
				bg-color="#fff"
			active-color="#388ae9"
				@change="tabsChange"
			>
		</u-tabs-swiper>
	<swiper
			class="flex1"
			:current="swiperCur"
				@transition="transition"
			@animationfinish="animationfinish"
			@change="onChange"
			>
		<swiper-item v-for="(item, index) in tabList" :key="index">
			<scroll-view
				class="ulive__wrap-orderlist__scrollview"
					scroll-y
					refresher-background="transparent"
						:refresher-enabled="true"
					:refresher-triggered="isrefresh"
					@refresherrefresh="onRefresher"
						@scrolltolower="onreachBottom"
					style="height: 100%; width: 100%;"
					>
				<view class="ulive__wrap-orderlist__body">
				<view class="ulive__wrap-orderlist__item" @click="toDetail">
					<view class="ulive__wrap-orderlist__hd flexbox">
						<view class="flex1 flexbox flex-alignc"><image class="ico" src="/static/avatar/uimg2.jpeg" mode="aspectFill" /><text class="title clamp1">南极人阳光城专卖店</text> <uni-icons type="arrowright" color="#999" size="14" /></view>
							<view class="c-eb4868 fs-26">待付款</view>
							</view>
								<view class="ulive__wrap-orderlist__bdinfo">
							<view class="bd-listbox flexbox">
								<image class="lsitem-img" src="https://img14.360buyimg.com/n7/jfs/t1/190110/28/40216/146211/653f24f1Fc5d462e6/0bf0311e647339b4.jpg" mode="aspectFill" />
										<view class="lsitem-mid flex1">
										<view class="title clamp2">
									<u-tag text="到店付" shape="circle" mode="dark" size="mini" bg-color="#f2905b" />
								<text class="pl-10">南极人外套男春秋冬季潮流韩版宽松休闲衣服男潮牌假两件工装连帽夹克男</text>
											</view>
									<view class="flexbox flex-alignc mt-15">
								<view class="flex1 c-333 fs-28 mr-20">￥69.90.00</view><view class="c-999 fs-28">×10</view>
											</view>
								</view>
									</view>
						<view class="bd-infobox">
								<view class="pintuan flexbox flex-alignc">
									<view class="avatar-group">
							<image src="/static/avatar/uimg3.jpeg" mode="aspectFill" /><image src="/static/avatar/uimg5.jpeg" mode="aspectFill" /><image src="/static/avatar/uimg7.jpeg" mode="aspectFill" />
											</view>
							<text class="fs-24">已拼团3人，还差1人</text>
										</view>
							<view class="price flex1">
								实付款：<text class="c-eb4868">￥690.90</text>
										</view>
									</view>
								</view>
						<view class="ulive__wrap-orderlist__ftinfo flexbox">
						<u-button class="ulive__ord-btn" type="default" shape="circle" @click.stop>取消订单</u-button>
					<u-button class="ulive__ord-btn" type="primary" shape="circle" @click.stop>去支付</u-button>
							</view>
					</view>
						<!-- <u-empty mode="order"></u-empty> -->
					</view>
				</scroll-view>
			</swiper-item>
			</swiper>
		</view>
	</ua-layout>
</template>

<style lang="scss" scoped>
.ulive__wrap-orderlist__wrap {height: 100%;}
.ulive__wrap-orderlist__scrollview {}
	.ulive__wrap-orderlist__body {padding: 25rpx;}
.ulive__wrap-orderlist__item {
	background-color: #fff; border-radius: 20rpx; box-shadow: 0 1px 1px #eee; padding: 25rpx;
.ulive__wrap-orderlist__hd {
	.ico {border-radius: 50%; height: 50rpx; width: 50rpx; margin-right: 15rpx;}
		}
	.ulive__wrap-orderlist__bdinfo {
		margin-top: 25rpx;
	.lsitem-img {height: 135rpx; width: 135rpx; margin-right: 25rpx;}
		.bd-infobox {
			background-color: #f8f8f8; display: flex; align-items: center; margin-top: 25rpx; padding: 15rpx;
		.avatar-group {
			margin-right: 25rpx;
		image {border-radius: 50%; height: 50rpx; width: 50rpx; margin-right: -15rpx; object-fit: cover;}
				}
		.price {display: flex; justify-content: flex-end; font-size: 28rpx;}
			}
		}
	.ulive__wrap-orderlist__ftinfo {
		align-items: center; justify-content: flex-end; gap: 25rpx; margin-top: 25rpx;
	.ulive__ord-btn {margin: 0; height: 32px;}
		}
	}
</style>
