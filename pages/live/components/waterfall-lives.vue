<!-- 直播瀑布流组件 -->
<script setup>
import { ref } from 'vue'
	import { onLoad, onReachBottom } from '@dcloudio/uni-app'
const props = defineProps({
		// 直播数据源
	data: {
	type: [Array, Object],
			default: () => []
		}
	})
const emit = defineEmits(['click-item'])
	const loadStatus = ref('loadmore')
const flowList = ref([])
const originList = ref(props.data)
const addFlowList = () => {
	for(let i = 0; i < originList.value.length; i++) {
		// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
	let item = JSON.parse(JSON.stringify(originList.value[i]))
	flowList.value.push(item)
		}
	}
	
onLoad(() => {
	addFlowList()
	})
	
onReachBottom(() => {
	loadStatus.value = 'loading'
	setTimeout(() => {
	addFlowList()
		loadStatus.value = 'loadmore'
		}, 1000)
	})
	
	// 点击选项
const handleClickItem = (item) => {
	emit('click-item', item)
	}
</script>

<template>
<view class="ulive__wrap-waterfall">
	<u-waterfall v-model="flowList">
	<template v-slot:left="{leftList}">
		<view class="ulive__wrap-waterfall__item" v-for="(item, index) in leftList" :key="index" @click="handleClickItem(item)">
			<u-lazy-load threshold="100" :image="item.poster" :index="index" height="300" img-mode="aspctFit"></u-lazy-load>
			<view class="title clamp2">{{item.desc}}</view>
		<view v-if="item.topic" class="tags">
			<view class="tag-text" v-for="(tag, tagidx) in item.topic" :key="tagidx">{{tag}}</view>
				</view>
			<view class="avatar"><image :src="item.logo" />{{item.name}}</view>
				</view>
	</template>
		<template v-slot:right="{rightList}">
		<view class="ulive__wrap-waterfall__item" v-for="(item, index) in rightList" :key="index" @click="handleClickItem(item)">
			<u-lazy-load threshold="100" :image="item.poster" :index="index" height="300" img-mode="aspctFit"></u-lazy-load>
				<view class="title clamp2">{{item.desc}}</view>
					<view v-if="item.topic" class="tags">
			<view class="tag-text" v-for="(tag, tagidx) in item.topic" :key="tagidx">{{tag}}</view>
			</view>
				<view class="avatar"><image :src="item.logo" />{{item.name}}</view>
			</view>
		</template>
	</u-waterfall>
<u-loadmore class="loadmore" :status="loadStatus" margin-top="20" @loadmore="addFlowList"></u-loadmore>
	</view>
</template>

<style lang="scss" scoped>
.ulive__wrap-waterfall {margin-bottom: 50rpx; padding: 15rpx;}
	.ulive__wrap-waterfall__item {
	background-color: #fff;border-radius: 12rpx;box-shadow: 0 2px 3px #f3f3f3;
		margin: 10rpx;padding: 10rpx;position: relative;
		.title {
font-size: 30rpx;margin-top: 5px;color: $u-main-color;
		}
		.price {
		font-size: 30rpx;color: $u-type-error;margin-top: 5px;
		}
	.avatar {
	color: $u-tips-color; display: flex; align-items: center; font-size: 22rpx; margin-top: 5px;
	image {border-radius: 50%; margin-right: 10rpx; height: 40rpx; width: 40rpx;}
		}
	.tags {
		display: flex;flex-wrap: wrap;margin-top: 5px;gap: 10rpx;
	.tag-text {
		border: 1px solid $u-type-primary;color: $u-type-primary;
	border-radius: 50rpx;line-height: 1;padding: 4rpx 14rpx;display: flex;align-items: center;border-radius: 50rpx;font-size: 20rpx;
		}
}
	}
</style>