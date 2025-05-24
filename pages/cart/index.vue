<script setup>
import { ref } from 'vue'
	// 引入购物车模拟数据
	import cartJson from './mock/cart-json'
	const cartList = ref(cartJson)
	const searchText = ref('')
	const tabsList = ref([
	{ name: '全部', count: 3 },{ name: '跨店满减' },{ name: '降价' },{ name: '折扣' }
	])
	const tabsCurrent = ref(0)
const checkAll = ref(false)
</script>
<template>
<ua-layout>
	<template #header>
		<ua-navbar back="false" custom fixed bgcolor="#fff" color="#333" z-index="1000">
			<template #left>
		<view class="fs-36 ml-25">购物车</view>
				</template>
				<template #title>
			<view class="ulive__wrap-cart__sear">
				<ua-input v-model="searchText" search placeholder="加绒毛衣">
					<template #suffix>
				<text class="welive-icon welive-icon-search fs-36"></text>
					</template>
						</ua-input>
					</view>
			</template>
			<template #right>
		<view class="fs-30 ml-25">编辑</view>
				</template>
		</ua-navbar>
<u-tabs v-model="tabsCurrent" :list="tabsList" :is-scroll="true" bg-color="#fff" />
		</template>
	<view class="ulive__wrap-cart__list">
		<view v-for="(item, index) in cartList" :key="index" class="ulive__wrap-cart__item">
			<view class="ulive__wrap-cart__shopinfo flexbox flex-alignc">
		<u-checkbox v-model="item.checkAll" shape="circle" />
			<view class="flex1 flexbox flex-alignc"><u-tag v-if="item.type" :text="item.type" mode="dark" bg-color="#ff0000" shape="circle" size="mini" /><text class="fs-30 ml-10">{{item.shopname}}</text><uni-icons type="right" size="12" /></view>
		<text v-if="item.isCoupon"><u-tag text="领券" mode="dark" shape="circle" color="#f00" bg-color="#fee" /></text>
				</view>
			<view v-for="(gitem, gindex) in item.list" :key="gindex" class="ulive__wrap-cart__goodsinfo flexbox">
	<u-checkbox v-model="gitem.checked" shape="circle" />
			<image class="gpic" :src="gitem.image" mode="aspectFill" />
				<view class="ginfo flex1">
				<view class="title clamp1">{{gitem.title}}</view>
			<view class="guige flexbox flex-alignc">{{gitem.guige}} <uni-icons type="bottom" size="12" color="#999" style="margin-left: 10rpx;" /></view>
				<view v-if="gitem.tags" class="tags">
				<block v-for="(tag, idx) in gitem.tags" :key="idx">
					<u-tag :text="tag" mode="plain" :color="idx == 0 ? '#f00' : '#f90'" :border-color="idx == 0 ? '#f00' : '#f90'" size="mini" />
						</block>
						</view>
			<view class="foot flexbox flex-alignc">
				<view class="price flex1 c-eb4868">￥<text class="fs-36">{{gitem.price}}</text></view>
			<u-number-box :min="1" :max="100" />
					</view>
					</view>
		</view>
	</view>
		</view>
<template #footer>
		<view class="ulive__wrap-cart__footbar flexbox flex-alignc">
	<u-checkbox v-model="checkAll" shape="circle">全选</u-checkbox>
			<view class="infos flex1 flexbox flex-alignc">
			<view class="price mr-20">
			<view class="fs-28">合计：<text class="c-eb4868 fs-32">￥6785.00</text></view><view class="fs-24 c-999">优惠减: ￥636.00</view>
				</view>
	<u-button type="error" shape="circle" :custom-style="{margin: 0}">去结算</u-button>
		</view>
	</view>
	</template>
</ua-layout>
</template>

<style lang="scss" scoped>
.ulive__wrap-cart__sear {
	padding: 0 10rpx 0 25rpx;
	::v-deep .ve__input-wrapper {
		background-color: #eee;border-color: #fff;border-radius: 50rpx;
		}
	::v-deep .ve__input.is-focus .ve__input-wrapper, ::v-deep .ve__input-wrapper:focus-within {
box-shadow: 0 0 0 2px rgba(155,155,155,.15);
		}
	}
.ulive__wrap-cart__list {
	.ulive__wrap-cart__item {
		background-color: #fff; box-shadow: 0 1px 3px #f3f3f3; border-radius: 20rpx; margin: 20rpx; padding: 20rpx;
			.ulive__wrap-cart__shopinfo {}
	.ulive__wrap-cart__goodsinfo {
		margin-top: 25rpx;
			.gpic {height: 135rpx; width: 135rpx;}
		.ginfo {
			margin-left: 20rpx;
			.title {font-size: 28rpx;}
			.guige {display: inline-flex; background-color: #f3f3f3; border-radius: 20rpx; color: #999; font-size: 26rpx; margin-top: 5rpx; padding: 5rpx 10rpx;}
			.tags {display: flex; flex-wrap: wrap; gap: 5rpx; margin-top: 10rpx;}
		.foot {margin-top: 15rpx;}
				.price {font-size: 28rpx;}
			}
		}
		}
}
.ulive__wrap-cart__footbar {
margin-bottom: 35rpx; padding: 20rpx 20rpx 20rpx 40rpx;
		.infos {justify-content: flex-end;}
	}
</style>
