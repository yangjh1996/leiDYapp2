<script setup>
import { ref } from 'vue'
import { authStore } from '@/store/modules/auth'
	const { globalData } = getApp()
	const customBarH = ref(globalData.customBarH)
const authState = authStore()
	const uapopRef = ref()
	const toOrdList = () => {
	uni.navigateTo({
	url: '/pages/order/list'
		})
	}
	
	// 关于
const handleAbout = () => {
	const ua = uapopRef.value
ua.open({
	content: `<div style="text-align:center; padding:25px 10px;">
			<img src="/static/logo.png" height="50" />
				<h2 class="c-19be6b fs-42 mt-20">uniapp-welive</h2>
			<div class="c-2979ff fs-28 mt-10">基于<em>Uniapp+Vue3+Pinia+vkuview</em>跨多端仿微信/抖音短视频直播</div>
			<p class="c-aaa fs-24 mt-20">Create by Andy @2023/12</p>
				<p class="c-aaa fs-24 mt-10">282310962@qq.com</p>
			</div>`,
		customStyle: {'border-radius': '6px', 'max-width': '70%', 'overflow': 'hidden'},
			xclose: true
	})
	}
	// 退出登录
const handleLogout = () => {
	const ua = uapopRef.value
	ua.open({
		type: 'android',
		content: '确认要退出账号吗?',customStyle: {'border-radius': '6px', 'max-width': '70%', 'overflow': 'hidden'},
		btns: [
			{
				text: '取消',
				click: () => {
						ua.close()
					}
				},
			{
				text: '退出',
			style: 'color: #fa3535',
				click: () => {
					ua.close()
					uni.redirectTo({
					url: '/pages/auth/login'
						})
						// authState.$reset()
					authState.logout()
					}
				}
			]
		})
	}
</script>

<template>
<ua-layout>
	<template #header>
		<ua-navbar back="false" custom title="我的" size="36rpx" transparent bgcolor="transparent">
		<template #right>
		<u-icon name="info-circle" size="36" @click="handleAbout" />
			<text class="welive-icon welive-icon-peizhi fs-36 ml-25"></text>
	</template>
		</ua-navbar>
		</template>
		
		<!-- 背景图 -->
	<view class="ulive__ucenter-hdbg" :style="{'height': `${customBarH+10}px`}"></view>
<view class="ulive__ucenter">
		<view class="avatarinfo flexbox flex-alignc">
		<image class="uimg" src="/static/avatar/uimg1.jpeg" mode="aspectFill" />
			<view class="flex1 ml-20">
			<view class="uname flexbox flex-alignc">Andy<text class="welive-icon welive-icon-renzheng c-2979ff ml-10 mr-10"></text><u-tag text="体验版" mode="dark" size="mini" color="#fff" bg-color="#ccc" /></view>
		<view class="uid">UID: 982125</view>
				</view>
			</view>
		<view class="balancewrap">
			<view class="balanceinfo flexbox flex-alignc">
		<view class="flex1"><text class="welive-icon welive-icon-wallet mr-10"></text>个人收益<text class="ml-30">￥168.00</text></view>
			<u-button shape="circle" :custom-style="{margin: 0, height: '28px'}">去提现</u-button>
				</view>
		<view class="balancegrid flexbox">
			<view class="flex1"><text class="c-999 fs-28">抖币</text><view class="fs-32">0</view></view><view class="flex1"><text class="c-999 fs-28">卡券</text><view class="fs-32">0</view></view><view class="flex1"><text class="c-999 fs-28">银行卡</text><view class="fs-32">2</view></view>
				</view>
		</view>
	<view class="mt-25"><image src="/static/icon_mine_vip.png" mode="widthFix" style="width: 100%;" /></view>
		<view class="orderwrap" @click="toOrdList">
		<view class="fs-32 flexbox flex-alignc"><view class="flex1">我的订单</view><uni-icons type="right" color="#999" size="16" /></view>
		<view class="ordlist flexbox">
				<view class="flex1"><image class="ordimg" src="/static/order1.png" mode="widthFix" /><view>待付款</view></view>
			<view class="flex1"><image class="ordimg" src="/static/order2.png" mode="widthFix" /><view>待拼团</view></view>
		<view class="flex1"><image class="ordimg" src="/static/order3.png" mode="widthFix" /><view>待发货</view></view><view class="flex1"><image class="ordimg" src="/static/order4.png" mode="widthFix" /><view>待收货</view></view><view class="flex1"><image class="ordimg" src="/static/order5.png" mode="widthFix" /><view>退款/售后</view></view>
				</view>
			</view>
		<view style="margin: 50rpx auto; width: 350rpx;">
	<u-button shape="circle" @click="handleLogout">退出</u-button>
		</view>
		</view>
	<!-- //函数式弹框 -->
	<ua-popup ref="uapopRef" />
</ua-layout>
</template>

<style lang="scss" scoped>
.ulive__ucenter-hdbg {
	background: url(/static/bg_mine.png) no-repeat center bottom; background-size: cover; max-width: 750px; height: 130rpx; width: 100%;
	}
.ulive__ucenter {
	padding: 25rpx;
.avatarinfo {
		padding: 15rpx;
	.uimg {border-radius: 50%; height: 100rpx; width: 100rpx;}
		.uname {font-size: 32rpx;}
	.uid {font-size: 24rpx; margin-top: 10rpx;}
		}
	.balancewrap {
		background-color: #fff; border-radius: 20rpx; box-shadow: 0 1px 1px #eee; overflow: hidden; margin: 25rpx 0;
	.balanceinfo {
		background-color: #41414e; color: #b9a993; padding: 25rpx;
			}
		.balancegrid {padding: 25rpx;}
		}
.orderwrap {
	background: #fff; border-radius: 20rpx; box-shadow: 0 1px 1px #eee; margin-top: 25rpx; padding: 25rpx;
	.ordlist {font-size: 28rpx; margin-top: 35rpx; text-align: center;}
		.ordimg {width: 60rpx; margin-bottom: 15rpx;}
		}
	}
</style>
