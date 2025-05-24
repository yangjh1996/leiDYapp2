<!-- 商品瀑布流组件 -->
<script setup>
import { ref } from 'vue'
	import { onLoad, onReachBottom } from '@dcloudio/uni-app'
	const loadStatus = ref('loadmore')
const flowList = ref([])
const originList = ref([
	{
		price: 488.00,
			title: '皮尔卡丹男装羽绒服男女同款冬季新款长款过膝加长加厚情侣款外套 黑色（可拆卸帽） 2XL',
		shop: '皮尔卡丹专卖店',
	image: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/39114/14/20805/86340/638b4940E942d72fb/348e214e2d5c22f1.jpg',
		},
	{
		price: 388.00,
	title: '罗蒙（ROMON）羽绒服男外套爸爸装长款工作服装过膝加 厚中老年户 绿咖 M',
		shop: '罗蒙（ROMON）',
	image: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/172036/27/38888/54333/64ddd0f3Fa45b1afd/16bab41480f69947.jpg',
		},
	{
		price: 42.00,
	title: '美的（Midea）LED便携充电小台灯书桌学习阅读灯学生宿舍卧室床头灯学习台灯',
		shop: '美的（Midea）旗舰店',
			image: 'https://img14.360buyimg.com/mobilecms/s360x360_jfs/t1/226233/4/10194/156936/658e8f88Fcfc9cb40/cea4a48783f11a7a.jpg',
		},
	{
		price: 1199.00,
	title: 'Redmi Note11T Pro 5G 天玑8100 144HzLCD旗舰直屏 67W快充',
		shop: '小米京东自营旗舰店',
	image: 'https://img12.360buyimg.com/n7/jfs/t1/192495/8/41694/55778/654ded4eF138ec2ac/953fc6e1f5b3531d.jpg',
		},
		{
		price: 4599.00,
	title: '小米14 徕卡光学镜头 光影猎人900 徕卡75mm浮动长焦 骁龙8Gen3 16+512 黑色',
		shop: '小米京东自营旗舰店',
	image: 'https://img14.360buyimg.com/n7/jfs/t1/227814/23/5514/38906/65682d3fF0f273d30/02864fac06c402dc.jpg',
		},
	{
		price: 159.00,
	title: '百草味全肉大礼包超3斤鸭脖牛肉肉干肉脯卤味肉类休闲零食礼盒中秋送',
		shop: '百草味京东自营旗舰店',
			image: 'https://img12.360buyimg.com/n7/jfs/t1/235711/30/5438/256809/65695004F5e7b7158/c9abb3266adcce23.jpg',
		},
		{
	price: 22.90,
		title: '蒙都 羊杂500g 加热即食 京东超市肉干肉脯及礼包11.11真便宜',
		shop: '蒙都旗舰店',
			image: 'https://img10.360buyimg.com/n7/jfs/t1/155306/32/25324/231912/62d22fb8E4ffab855/c6001ee702fb240a.jpg',
		},
		{
	price: 10.90,
			title: '趣小馋兰州牛肉面非油炸兰州拉面方便速食冲泡面125g*12桶/6桶整箱批发',
		shop: '辰方食品专营店',
	image: 'https://img14.360buyimg.com/n7/jfs/t1/161308/15/37369/235862/649e95b2Fc5a04c60/3cf66104aa7b1b0c.jpg',
		},
		{
		price: 89.90,
	title: '康新牧场内蒙酱牛肉150g×5袋即食牛肉健身代餐熟食牛腱子下酒菜',
		shop: '康新牧场京东自营旗舰店',
			image: 'https://img13.360buyimg.com/n7/jfs/t1/219054/36/29956/250174/646d73b9F0b077b00/f1cb3349892defb1.jpg',
		},
	{
		price: 1.00,
	title: '圣菲尔伯爵法国红酒Saintfilcount干红葡萄酒珍藏13.5度单瓶送礼红酒 一元试饮',
		shop: '小森葡萄酒专营店',
			image: 'https://img10.360buyimg.com/n7/jfs/t1/226168/23/3411/118733/65537e5fF2db2d109/7d1d11a8013d6e8f.jpg',
		},
		{
	price: 129.90,
		title: '芝洛洛盒子蛋糕甜品零食110g*10罐千层慕斯罐子蛋糕休闲食品',
			shop: '芝洛洛京东自营旗舰店',
	image: 'https://img10.360buyimg.com/n7/jfs/t1/232669/13/4985/171607/65669688F10439b91/cdee52c0b6929794.jpg',
		}
	])
	
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
</script>

<template>
	<view class="ulive__home-waterfall">
	<u-waterfall v-model="flowList">
		<template v-slot:left="{leftList}">
		<view class="ulive__home-waterfall__item" v-for="(item, index) in leftList" :key="index">
			<u-lazy-load threshold="100" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
		<view class="title clamp2">{{item.title}}</view>
				<view class="price">￥{{item.price.toFixed(2)}}</view>
			<view class="tags">
			<view class="tag-owner">自营</view>
			<view class="tag-text">放心购</view>
					</view>
			<view class="shop">{{item.shop}}</view>
				</view>
			</template>
	<template v-slot:right="{rightList}">
		<view class="ulive__home-waterfall__item" v-for="(item, index) in rightList" :key="index">
			<u-lazy-load threshold="100" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
			<view class="title clamp2">{{item.title}}</view>
				<view class="price">￥{{item.price.toFixed(2)}}</view>
			<view class="tags">
				<view class="tag-owner">自营</view><view class="tag-text">放心购</view>
			</view>
		<view class="shop">{{item.shop}}</view>
			</view>
			</template>
	</u-waterfall>
<u-loadmore class="loadmore" :status="loadStatus" margin-top="20" @loadmore="addFlowList"></u-loadmore>
	</view>
</template>

<style lang="scss" scoped>
.ulive__home-waterfall {margin-bottom: 50rpx; padding: 15rpx;}
.ulive__home-waterfall__item {
	background-color: #ffffff;border-radius: 20rpx;margin: 10rpx;padding: 10rpx;
		position: relative;
	.title {
		font-size: 30rpx;margin-top: 5px;color: $u-main-color;
		}
	.price {
	font-size: 30rpx;color: $u-type-error;margin-top: 5px;
		}
.shop {
	font-size: 22rpx;
		color: $u-tips-color;margin-top: 5px;
		}
		.tags {
		display: flex;margin-top: 5px;
			gap: 20rpx;
		.tag-owner {
			background-color: $u-type-error;
	color: #FFFFFF;display: flex;align-items: center;padding: 4rpx 14rpx;border-radius: 50rpx;font-size: 20rpx;
				line-height: 1;
			}
		.tag-text {
	border: 1px solid $u-type-primary;color: $u-type-primary;border-radius: 50rpx;line-height: 1;padding: 4rpx 14rpx;display: flex;align-items: center;border-radius: 50rpx;
		font-size: 20rpx;
		}
	}
	}
</style>