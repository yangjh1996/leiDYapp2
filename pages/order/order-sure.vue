<!-- 确认订单 -->
<script setup>
import { ref, reactive } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
import liveJson from '../live/mock/live-json'
const props = defineProps({
		// 直播id
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
	const showAddressPicker = ref(false)
const address = reactive({
	fullname: '',
	phone: '',
		region: '',
	detail: ''
	})
	// 选择区域
	const onConfirmRegion = (region) => {
	address.region = `${region.province.name} ${region.city.name} ${region.area.name}`;
	}
</script>

<template>
<ua-layout :tabbar="false">
	<template #header>
		<ua-navbar custom title="确认订单" fixed bgcolor="#2979ff">
		<template #back>
		<text class="welive-icon welive-icon-arrL fs-36"></text>
				</template>
			</ua-navbar>
		</template>
	<view class="ulive__wrap-order__wrap">
		<view class="ulive__wrap-ordersure__wrap">
				<view class="ulive__wrap-ordersure__addrinfo">
			<view class="flexbox flex-alignc">
				<uni-icons type="location" size="20" />
					<view class="addr-info flex1 ml-10">
					<view class="name fs-32">啧啧啧啧啧仄仄<text class="c-999 fs-24 ml-10">15620452653</text></view>
			<view class="addr fs-28 mt-10 clamp1">广东省 广州市 天河区 珠江新城保利大厦201</view>
					</view>
				<view class="arrow"><uni-icons type="arrowright" color="#999" size="16" /></view>
					</view>
				</view>
		<view class="ulive__wrap-ordersure__wrapcell">
			<view class="ulive__wrap-ordersure__cell flexbox flex-alignc">
				<view class="lbl">收货人</view>
					<view class="flex1">
				<input class="iptxt" v-model="address.fullname" placeholder="请输入收货人姓名" />
						</view>
					</view>
		<view class="ulive__wrap-ordersure__cell flexbox flex-alignc">
			<view class="lbl">手机号码</view>
				<view class="flex1">
				<input class="iptxt" v-model="address.phone" placeholder="请输入手机号" />
						</view>
					</view>
				<view class="ulive__wrap-ordersure__cell flexbox flex-alignc" @click="showAddressPicker = true">
				<view class="lbl">所在地区</view>
			<view class="flex1">
				<input class="iptxt" v-model="address.region" disabled placeholder="请选择区域" />
						</view>
				<uni-icons type="arrowright" color="#999" size="16" />
					</view>
			<view class="ulive__wrap-ordersure__cell flexbox flex-alignc">
				<view class="lbl">详细地址</view>
					<view class="flex1">
				<input class="iptxt" v-model="address.detail" placeholder="请输入详细收货地址" />
						</view>
					</view>
				</view>
			<view class="ulive__wrap-ordersure__goodsinfo">
				<view class="flexbox">
				<image class="gimg" :src="goodsItem.poster" mode="aspectFill" />
					<view class="ginfo flex1 ml-20">
				<view class="title clamp2 fs-28">
					<u-tag text="到店付" shape="circle" mode="dark" size="mini" bg-color="#f2905b" />
						{{goodsItem.desc}}
							</view>
							<view class="flexbox flex-alignc mt-10">
					<view class="flex1 c-999 fs-28">×10</view><view class="c-333 fs-28 mr-20">￥60.00</view>
						</view>
					</view>
					</view>
				<view class="ulive__wrap-ordersure__cell flexbox flex-alignc mt-25">
					<view class="lbl flex1">商品价格</view>
				<view class="c-eb4868">￥600.00</view>
					</view>
				<view class="ulive__wrap-ordersure__cell flexbox flex-alignc">
					<view class="lbl flex1">优惠券</view>
				<view class="c-999">-￥50.00</view>
					<uni-icons type="arrowright" color="#999" size="16" />
					</view>
			</view>
		</view>
	</view>
		<template #footer>
		<view class="ulive__wrap-goods__detail-footfixed">
			<view class="ulive__wrap-goods__detail-footbar flexbox flex-alignc">
			<view class="flex1 align-r c-eb4868">需附：<text class="fs-36">￥550.00</text></view>
		<u-button type="primary" shape="circle" :custom-style="{margin: '0 25rpx'}">提交订单</u-button>
				</view>
		</view>
		</template>
	</ua-layout>
	
<u-picker
	mode="region"
		v-model="showAddressPicker"
		safe-area-inset-bottom
	@confirm="onConfirmRegion"
	/>
</template>
<style lang="scss" scoped>
.ulive__wrap-ordersure__wrap {
	padding: 25rpx;
	.ulive__wrap-ordersure__addrinfo {
	background-color: #fff; border-radius: 20rpx; box-shadow: 0 1px 1px #eee; overflow: hidden; padding: 30rpx 25rpx; position: relative;
		}
.ulive__wrap-ordersure__wrapcell {
	background-color: #fff; border-radius: 20rpx; box-shadow: 0 1px 1px #eee; margin-top: 25rpx; padding: 0 25rpx;
		}
	.ulive__wrap-ordersure__cell {
	border-bottom: 1px solid #f9f9f9; padding: 25rpx 0; min-height: 40px; width: 100%; position: relative;
		.lbl {font-size: 28rpx; width: 150rpx;}
	.iptxt {font-size: 28rpx;}
		}
		.ulive__wrap-ordersure__cell:last-child {border: 0;}
	.ulive__wrap-ordersure__goodsinfo {
	background-color: #fff; border-radius: 20rpx; box-shadow: 0 1px 1px #eee; margin-top: 25rpx; padding: 25rpx 25rpx 0;
		.gimg {height: 135rpx; width: 135rpx;}
		}
	}
	// 底部固定
.ulive__wrap-goods__detail-footfixed {
	padding-top: 120rpx;
.ulive__wrap-goods__detail-footbar {background-color: #fff; max-width: 750px; height: 120rpx; position: fixed; bottom: 0; width: 100%;}
	}
</style>
