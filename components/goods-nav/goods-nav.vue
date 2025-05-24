<!-- 底部商品导航栏 -->
<script setup>
	import { ref } from 'vue'
	const emit = defineEmits(['click', 'buttonClick'])
const goodsNavOptions = ref([
	{ icon: 'heart', text: '收藏' },{ icon: 'cart', text: '购物车', info: 3, infoBackgroundColor: '#ff007f', infoColor: '#fff' },
	])
	const goodsNavButtonGroups = ref([
	{ text: '加入购物车', backgroundColor: '#e0eeff', color: '#2979ff' },{ text: '立即购买', backgroundColor: '#2979ff', color: '#fff' },
	])
	
	const handleGoodsNavClick = (e) => {
	emit('click', e)
	}
const handleGoodsNavButtonClick = (e) => {
	emit('buttonClick', e)
	}
</script>

<template>
<uni-goods-nav
	:options="goodsNavOptions"
		:button-group="goodsNavButtonGroups"
	:fill="true"
		@click="handleGoodsNavClick"
	@buttonClick="handleGoodsNavButtonClick"
	style="width: 100%;"
	/>
</template>
<style lang="scss" scoped></style>
