<!-- 首页商城模板 -->
<script setup>
import { ref } from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'
	// 引入瀑布流商品
	import WaterfallGoods from './components/waterfall-goods.vue'
const searchText = ref('')
const tabsList = ref([
	{ name: '推荐', count: 6 },{ name: '手机' },
	{ name: '酒水饮料' },{ name: '男装' },
		{ name: '女装' },{ name: '腕表珠宝' },{ name: '生鲜' },{ name: '医药健康' },{ name: '工业品' },
	{ name: '图书' }
	])
	const tabsCurrent = ref(0)
	const cateList = ref([
	{
		id: 1,
		list: [
		{ name: 'order', label: '我的订单', count: '待发货3' },{ name: 'red-packet', label: '手机充值', count: '减10元' },{ name: 'integral', label: '品牌会员' },{ name: 'gift', label: '乐购小店' }
			]
		},
	{
		id: 2,
	list: [
	{ name: 'coupon', label: '优惠券' },{ name: 'scan', label: '扫码好物' },{ name: 'shopping-cart', label: '购物车' },{ name: 'tags', label: '试用领取' }
			]
		},
		{
		id: 3,
		list: [
		{ name: 'star', label: '收藏' },{ name: 'kefu-ermai', label: '客服消息' },{ name: 'map', label: '地址' }
		]
		}
	])
	const cateCurrent = ref(0)
const scrollTop = ref(0)
	const tabsChange = (index) => {
	console.log(index)
	}
	const cateChange = (e) => {
	cateCurrent.value = e.detail.current
	}
	onPageScroll((e) => {
		scrollTop.value = e.scrollTop
	})
</script>

<template>
<ua-layout class="scrolling">
	<template #header>
		<ua-navbar back="false" custom size="32rpx" fixed bgcolor="#2979ff" z-index="1000">
		<template #left>
			<view class="flexbox flex-alignc ml-25">
				<text class="welive-icon welive-icon-livevideo fs-60 mr-20"></text>
			<view class="flex1">
				<view class="fs-32">uni-welive直播商城</view><view class="fs-24">直播不停 • 乐购无忧</view>
					</view>
				</view>
				</template>
				<template #right>
				<text class="welive-icon welive-icon-qiandao fs-36 mr-25"></text>
					<text class="welive-icon welive-icon-xiaoxi fs-36"></text>
			</template>
	</ua-navbar>
		<view class="ulive__wrap-header__sear">
			<ua-input v-model="searchText" search placeholder="大家都在搜手机">
				<template #prefix><text class="welive-icon welive-icon-scancode mr-20"></text></template>
			<template #suffix>
				<text class="welive-icon welive-icon-yinliang fs-36 mr-25"></text>
				<text class="welive-icon welive-icon-search fs-36 mr-10"></text>
					</template>
		</ua-input>
			</view>
	</template>
		<view class="ulive__home-banner__swiper">
		<swiper :indicator-dots="true" :autoplay="true" indicator-color="rgba(255,255,255,.5)" indicator-active-color="#fff">
			<swiper-item>
		<image src="https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000366/10029424278029/FocusFullshop/CkBqZnMvdDEvMjQ1Nzk4LzQvNTA2LzU2OTc0LzY1ODczMzkwRmZlODYzMTg0L2JjZTBlOGVjNzhkYWUxYmQucG5nEgkzLXR5XzBfNTQwAjjui3pCEwoP5rW35bCU56yU6K6w5pysEAFCDQoJ6LSt6L-H55i-EAJCEAoM56uL5Y2z5oqi6LStEAZCCgoG6LaF5YC8EAdYjfSVwvKjAg/cr/s/q.jpg" mode="widthFix" />
				</swiper-item>
				<swiper-item>
		<image src="https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000366/100011534754/FocusFullshop/CkNqZnMvdDEvMjM2ODA4LzIxLzgxMTUvMzY2MTg0LzY1ODA5YTI5Rjc4YzE0MTFjLzQzZDE0ZDk5OGY1ZWE0NmQucG5nEgk1LXR5XzBfNTYwAjjui3pCFgoS5Yac5aSr5bGx5rOJ6aWu5paZEAFCEAoM5aW96LSn5rGH6IGaEAJCEAoM56uL5Y2z5oqi6LStEAZCCgoG5Yqb6I2QEAdYotObyfQC/cr/s/q.jpg" mode="widthFix" />
				</swiper-item>
			</swiper>
		</view>
		
	<view class="ulive__home-cate__swiper">
		<view class="ulive__home-cate__list">
		<swiper @change="cateChange">
			<swiper-item v-for="(item, index) in cateList" :index="index" :key="index">
			<u-grid :col="4" :border="false">
					<u-grid-item v-for="(item2, index2) in item.list" :index="index2" :key="index2" bg-color="transparent">
					<u-badge v-if="item2.count" :count="item2.count" :offset="[20, -10]" size="mini" />
				<u-icon :name="item2.name" :size="60"></u-icon>
					<text class="mt-10">{{ item2.label }}</text>
					</u-grid-item>
						</u-grid>
			</swiper-item>
				</swiper>
		<view class="ulive__home-cate__indicator-dots">
			<view v-for="(item, index) in cateList" :key="index" class="ulive__home-cate__indicator-dots-item" :class="[cateCurrent == index ? 'ulive__home-cate__indicator-dots-active' : '']"></view>
			</view>
			</view>
	</view>
		<u-tabs v-model="tabsCurrent" :list="tabsList" :is-scroll="true" bg-color="#fff" @change="tabsChange" />
	<waterfall-goods />
<u-back-top :scroll-top="scrollTop" top="1000"></u-back-top>
	</ua-layout>
</template>

<style lang="scss" scoped>
.ulive__wrap-header__sear {
	background-color: #2979ff; padding: 25rpx;
		::v-deep .ve__input-wrapper {
		border-color: #fff;border-radius: 50rpx;
		}
	::v-deep .ve__input.is-focus .ve__input-wrapper, ::v-deep .ve__input-wrapper:focus-within {
			box-shadow: 0 0 0 2px rgba(255,255,255,.5);
		}
	}
.ulive__home-banner__swiper {
	background: linear-gradient(180deg, #2979ff, transparent 50%); height: 360rpx; padding: 0 25rpx 25rpx;
	swiper {border-radius: 20rpx; overflow: hidden; height: 360rpx;}
		image {width: 100%;}
	}
.ulive__home-cate__swiper {
	padding: 25rpx;
swiper {height: 180rpx;}
	.ulive__home-cate__list {background: #fff; border-radius: 20rpx; padding-bottom: 15rpx;}
	.ulive__home-cate__indicator-dots {display: flex; justify-content: center; align-items: center;}
.ulive__home-cate__indicator-dots-item {background-color: #999; border-radius: 10rpx; margin: 0 3px; height: 4px; width: 4px; transition: all .3s;}
.ulive__home-cate__indicator-dots-active {background-color: #2979ff; width: 15px;}
	}
</style>
