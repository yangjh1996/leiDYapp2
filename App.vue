<script>
export default {
	globalData: {
		statusBarH: 0,customBarH: 0,
		screenWidth: 0,screenHeight: 0,
			menuBar: null
		},
	onLaunch: function() {
			// 隐藏系统tabbar
		uni.hideTabBar()
			this.appInit()
		},
	onShow: function() {
		console.log('App Show')
		},
		onHide: function() {
		console.log('App Hide')
		},
	onPageNotFound: function() {
		uni.redirectTo({
		url: '/pages/index/index'
			})
		},
		methods: {
		appInit: function() {
			uni.getSystemInfo({
				success: (e) => {
					let statusBar = e.statusBarHeight || 0
					let customBar
						let menuBar
						
						// #ifndef MP
					customBar = statusBar + (e.osName === 'android' ? 50 : 45)
						// #endif
						
						// #ifdef MP-WEIXIN
						// 获取微信小程序胶囊按钮信息
					let menu = wx.getMenuButtonBoundingClientRect()
						// 导航栏高度 = 胶囊下距离 + 胶囊上距离 - 状态栏高度
					customBar = menu.bottom + menu.top - statusBar
					menuBar = menu
						// #endif
						
						// // #ifdef MP-ALIPAY
					customBar = statusBar + e.titleBarHeight
						// #endif
						
						// 兼容nvue写法（H5/小程序/APP/APP-Nvue）
						this.globalData.statusBarH = statusBar
					this.globalData.customBarH = customBar
					this.globalData.screenWidth = e.screenWidth
					this.globalData.screenHeight = e.screenHeight
					this.globalData.menuBar = menuBar
					}
				})
				
				// #ifdef APP-NVUE
			var domModule = weex.requireModule('dom');
		domModule.addRule('fontFace', {
			'fontFamily': "nvueicon",
			'src': "url('/static/fonts/iconfont.ttf')"
				});
				// #endif
			}
		}
	}
</script>

<style>
	/* #ifndef APP-NVUE */
@import 'static/fonts/iconfont.css';
	/* #endif */
	.nvueicon {font-family: nvueicon;}
</style>
<style lang="scss">
	// 引入vk-uview-ui基础样式
	@import 'uni_modules/vk-uview-ui/index.scss';
	
	@import 'styles/reset.scss';
	@import 'styles/layout.scss';
</style>
