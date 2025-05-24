<script setup>
const props = defineProps({
	tabbar: { type: [Boolean, String], default: true },
	})
</script>

<template>
<view class="ulive__container flexbox flex-col flex1">
		<slot name="header" />
		<!-- 内容区 -->
		<view class="ulive__scrollview flex1">
			<slot />
		</view>
	<slot name="footer" />
		<!-- tabbar栏 -->
	<ua-tabbar v-if="tabbar" fixed z-index="1000" />
</view>
</template>
<style lang="scss" scoped></style>
