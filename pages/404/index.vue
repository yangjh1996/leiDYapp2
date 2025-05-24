<script setup>
const handleBack = () => {
	uni.switchTab({
	url: '/pages/index/index'
		})
	}
</script>

<template>
<view class="ulive__error flexbox flex-col flex-alignc flex-justifyc">
	<view class="ltimg"><image src="/static/404.svg" mode="widthFix" /></view>
	<view class="rtcnt">
		<h2>404出错啦</h2><h4>您访问的页面不存在...</h4>
	<p>请检查网址是否正确，或点击返回首页。</p>
	<u-button type="primary" shape="circle" plain @click="handleBack" style="margin: 20px 0;">返回首页</u-button>
		</view>
</view>
</template>
<style lang="scss" scoped>
.ulive__error {
	height: calc(100vh);
	.ltimg {width: 60%;}
	.rtcnt {
		text-align: center;
	h2 {color: #f56c6c; font-size: 28px;}
		h4 {font-size: 16px; font-weight: 700; margin-top: 10px;}
p {color: #999; font-size: 12px; margin-top: 10px;}
		}
	}
</style>
