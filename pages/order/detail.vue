<!-- 订单详情 -->
<script setup>
import { ref } from 'vue'
</script>
<template>
<ua-layout :tabbar="false">
<template #header>
	<ua-navbar custom title="订单详情" fixed bgcolor="#2979ff">
		<template #back>
	<text class="welive-icon welive-icon-arrLeft fs-36"></text>
		</template>
			</ua-navbar>
		</template>
<view class="ulive__wrap-order__wrap">
	<view class="ulive__wrap-orderdetail__body">
		<view class="align-c pb-30">
		<view class="fs-28 flexbox flex-alignc flex-justifyc"><u-icon name="error-circle" size="36" /> 待支付，剩余<uni-countdown :show-day="false" :hour="12" :minute="12" :second="12" color="#eb4868" splitorColor="#eb4868" /></view>
		<view class="c-999 fs-26 mt-10">超过29分钟未支付，订单将自动取消</view>
				</view>
		<view class="ulive__wrap-orderlist__item">
			<view class="ulive__wrap-orderlist__hd flexbox">
			<view class="flex1 flexbox flex-alignc"><image class="ico" src="/static/avatar/uimg2.jpeg" mode="aspectFill" /><text class="title clamp1">南极人阳光城专卖店</text> <uni-icons type="arrowright" color="#999" size="14" /></view>
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
					<view class="flex1 c-333 fs-28 mr-20">￥69.90</view><view class="c-999 fs-28">×10</view>
							</view>
					</view>
					</view>
			</view>
				</view>
		<view class="ulive__wrap-goods__detail-ginfo">
			<view class="fs-32 mb-25">订单信息</view>
			<view class="rowitem"><view class="lbl flex1">订单号</view><view class="fs-26">101245045412301358 <text class="welive-icon welive-icon-copy fs-36"></text></view></view>
				<view class="rowitem"><view class="lbl flex1">下单时间</view><view class="fs-26">2023-12-28 11:12:38</view></view>
					<view class="rowitem"><view class="lbl flex1">购买数量</view><view class="fs-26">x10</view></view>
			<view class="rowitem"><view class="lbl flex1">订单金额</view><view class="fs-32">￥69.90</view></view>
			<view class="rowitem"><view class="lbl flex1">商品优惠</view><view class="fs-26 c-999">暂无优惠</view></view>
		<view class="rowitem"><view class="lbl flex1">实付金额</view><view class="fs-32 c-eb4868">￥690.90</view></view>
				</view>
			</view>
	</view>
	<template #footer>
		<view class="ulive__wrap-goods__detail-footfixed">
		<view class="ulive__wrap-goods__detail-footbar flexbox flex-alignc">
			<u-button shape="circle" plain :custom-style="{margin: 0}">取消订单</u-button>
	<u-button type="primary" shape="circle" :custom-style="{margin: '0 25rpx'}">去支付</u-button>
		</view>
			</view>
	</template>
</ua-layout>
</template>

<style lang="scss" scoped>
.ulive__wrap-orderdetail__body {padding: 25rpx;}
	.ulive__wrap-orderlist__item {
	background-color: #fff; border-radius: 20rpx; box-shadow: 0 1px 1px #eee; padding: 25rpx;
		.ulive__wrap-orderlist__hd {
	.ico {border-radius: 50%; height: 50rpx; width: 50rpx; margin-right: 15rpx;}
		}
.ulive__wrap-orderlist__bdinfo {
	margin-top: 25rpx;
.lsitem-img {height: 135rpx; width: 135rpx; margin-right: 25rpx;}
		}
	}
.ulive__wrap-goods__detail-ginfo {
		background-color: #fff; border-radius: 20rpx; box-shadow: 0 1px 1px #eee; margin-top: 25rpx; padding: 25rpx;
	.rowitem {display: flex; align-items: center; margin: 15rpx 0;}
		.lbl {min-width: 120rpx; color: #999; font-size: 28rpx;}
	}
	// 底部固定
.ulive__wrap-goods__detail-footfixed {
	padding-top: 120rpx;
.ulive__wrap-goods__detail-footbar {justify-content: flex-end; background-color: #fff; max-width: 750px; height: 120rpx; position: fixed; bottom: 0; width: 100%;}
	}
</style>
