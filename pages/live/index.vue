<!-- 直播列表模板 -->
<script setup>
import { ref } from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'
	import WaterfallLives from './components/waterfall-lives.vue'
	// 引入直播模拟数据
import liveJson from './mock/live-json'
	const searchText = ref('')
const tabsList = ref([
	{ name: '大家在看', count: 5 },{ name: '购物' },{ name: '颜值' },{ name: '游戏' },{ name: '虚拟主播' },{ name: '聊天交友' },{ name: 'KTV' },
		{ name: '唱歌' }
	])
const tabsCurrent = ref(0)
	const goodsList = ref([
	{ image: 'https://img10.360buyimg.com/n7/jfs/t1/226168/23/3411/118733/65537e5fF2db2d109/7d1d11a8013d6e8f.jpg', price: 1.00 },
	{ image: 'https://img14.360buyimg.com/n7/jfs/t1/161308/15/37369/235862/649e95b2Fc5a04c60/3cf66104aa7b1b0c.jpg', price: 10.90 },{ image: 'https://img14.360buyimg.com/n7/jfs/t1/190110/28/40216/146211/653f24f1Fc5d462e6/0bf0311e647339b4.jpg', price: 79.00 },
	{ image: 'https://img12.360buyimg.com/n7/jfs/t1/192495/8/41694/55778/654ded4eF138ec2ac/953fc6e1f5b3531d.jpg', price: 1199.00 },{ image: 'https://img10.360buyimg.com/n7/jfs/t1/232669/13/4985/171607/65669688F10439b91/cdee52c0b6929794.jpg', price: 129.90 },{ image: 'https://img10.360buyimg.com/n7/jfs/t1/155306/32/25324/231912/62d22fb8E4ffab855/c6001ee702fb240a.jpg', price: 22.90 }
	])
const scrollTop = ref(0)
	const tabsChange = (index) => {
		console.log(index)
	}
	
const handleClickItem = (item) => {
	uni.navigateTo({
	url: '/pages/live/live?roomid=' + item.id
		})
	}
	
onPageScroll((e) => {
		scrollTop.value = e.scrollTop
	})
</script>

<template>
<ua-layout class="scrolling">
	<template #header>
	<ua-navbar back="false" custom fixed bgcolor="linear-gradient(45deg, #d122b2 25%, #e1f516)" z-index="1000">
		<template #left>
			<view class="flexbox flex-alignc ml-25">
		<image src="/static/logo.png" mode="widthFix" style="height: 60rpx; width: 60rpx;" />
				</view>
				</template>
		<template #title>
			<view class="ulive__wrap-header__sear">
			<ua-input v-model="searchText" search placeholder="男士加绒卫裤">
					<template #prefix><text class="welive-icon welive-icon-search mr-20"></text></template>
					<template #suffix>
				<text class="welive-icon welive-icon-tupian fs-36 mr-25"></text>
							</template>
						</ua-input>
			</view>
	</template>
			</ua-navbar>
	</template>
		<view class="pad25"><image src="/static/coupon.png" mode="widthFix" style="width: 100%;" /></view>
	<view class="ulive__scrolllist-goods">
		<uv-scroll-list indicatorColor="#ffe4dd" indicatorActiveColor="#f56c6c" indicatorStyle="margin-top: 10px;">
		<view class="ulive__scrolllist-wrap flexbox flex-row">
			<view class="ulive__scrolllist-left">
				<view class="welive-icon welive-icon-shouyi fs-50 c-eb4868"></view>
			<view class="mt-10">超值购</view>
					<text class="fs-24 c-eb4868">双12补贴</text>
					</view>
				<view class="ulive__scrolllist-goositem flexbox flex-col" v-for="(item, index) in goodsList" :key="index">
			<image class="ulive__scrolllist-goositem__image" :src="item.image"></image>
			<text class="ulive__scrolllist-goositem__price">￥{{ item.price }}</text>
					</view>
			<view class="ulive__scrolllist-right">查看更多</view>
		</view>
			</uv-scroll-list>
	</view>
	<u-tabs v-model="tabsCurrent" :list="tabsList" :is-scroll="true" bg-color="#fff" @change="tabsChange" />
		<waterfall-lives :data="liveJson" @click-item="handleClickItem" />
	<u-back-top :scroll-top="scrollTop" top="1000"></u-back-top>
</ua-layout>
</template>

<style lang="scss" scoped>
.ulive__wrap-header__sear {
	padding: 0 10rpx 0 25rpx;
		::v-deep .ve__input-wrapper {
			border-color: #fff;border-radius: 50rpx;
		}
::v-deep .ve__input.is-focus .ve__input-wrapper, ::v-deep .ve__input-wrapper:focus-within {
	box-shadow: 0 0 0 2px rgba(255,255,255,.5);
		}
	}
.ulive__scrolllist-goods {
	padding: 0 25rpx;
.ulive__scrolllist-wrap {flex-grow: 0; flex-shrink: 0; flex-basis: auto; background-color: #fff; border-radius: 20rpx; padding: 25rpx; gap: 30rpx;}
	.ulive__scrolllist-left {text-align: center;}
		.ulive__scrolllist-goositem {}
	.ulive__scrolllist-goositem__image {height: 120rpx; width: 120rpx;}
.ulive__scrolllist-goositem__price {color: #eb4868; font-size: 28rpx; margin-top: 10rpx; text-align:center;}
	.ulive__scrolllist-right {color: #999; font-size: 24rpx; width: 20px;}
	}
</style>
