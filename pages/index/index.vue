<template>
	<view class="page">
		<view class="btns">
			<view @click="down('and')" class="btn">
				<image src="https://img.agrimedia.cn/bmsc/apps/andriod.png" mode=""></image>
			</view>
			<view @click="down('ios')" class="btn">
				<image src="https://img.agrimedia.cn/bmsc/apps/ios.png" mode=""></image>
			</view>
		</view>
		<!-- 提示去浏览器打开 -->
		<view class="version">
			<text class="versions">v{{version}}</text>
		</view>
		<view class="wx" v-if="weixin"></view>
	</view>
</template>

<script>
	import { getIosUrl } from "@/config/api.js";
	export default {
		data() {
			return {
				appLogo: 'https://img.agrimedia.cn/bmsc/apps/bm-app-logo.jpeg', //app logo图片路径
				appName: '白马星球', //app名称
				appDes: '白马星球下载页', //app简述
				andHref: '', //安卓app下载地址
				iosHref: '', // IOS下载地址
				version: '',
				weixin: false, //是否为微信内浏览器打开
				scheme: '' //scheme地址 如果已安装app直接打开，置空则不执行
			}
		},
		onLoad() {
			// 设备类型
			this.deviceType = uni.getSystemInfoSync().platform;
			
			this.getData()
			
			// 动态设置页面标题
			this.setTitle()
			
			// 如果需要通过scheme直接打开app
			this.openApp()
		},
		mounted() {
			// 如果是安卓
			if (uni.getSystemInfoSync().platform == 'android') {
				// 判断是否微信登陆
				var ua = window.navigator.userAgent.toLowerCase();
				if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			        return; // 微信中打开
			    } else {
					window.open(this.andHref);
				}
			} else {
				// this.getData();  // 获取IOS地址
			}
			
		},
		methods: {
			async getData () {
				try {
					const res = await getIosUrl();
					this.version = res.data.version;this.version = res.data.version;  // 版本
					this.andHref = res.data.ydy_android_link;  // 安卓
					this.iosHref = 'https://img.agrimedia.cn/bmsc/apps/bmsc_ios.mobileconfig';  // 苹果引导页  （目前这版直接跳转下载页用户手动去下载然后进设置，后续要加一个页面跳转告诉用户如何安装描述文件，不然有的用户不知道泽呢么用）
				} catch (err) {
					uni.showToast({
						title: err,
						icon: 'none'
					});
				}
			},
			setTitle() {
				uni.setNavigationBarTitle({
					title: this.appName + '下载'
				});
			},
			// 如果不是在微信环境打开, 判断设备类型,并且设备类型为IOS.直接自动弹出安装提示
			isWX() {
				let ua = navigator.userAgent.toLowerCase();
				if (ua.match(/MicroMessenger/i) == "micromessenger") {
					this.weixin = true
				} else {
					this.weixin = false
				}
			},
			openApp() {
				if(this.scheme){
					window.location = this.scheme
				}
			},
			down(type) {
				// 选择安卓
				if (type == 'and') {
					if (this.deviceType == 'android') {
						// 判断该页面是否为微信内置浏览器内打开 true>显示浏览器内打开引导, 因为微信浏览器不支持下载apk文件
						this.isWX();
						// 如果被拦截下载,点击再次下载包
						window.open(this.andHref);
					}
				// 选择ios, 直接打开分发下载页
				} else {
					if (this.deviceType == 'ios') {
						if (this.weixin) {
							window.location.href = 'http://ydy.baimajingxuan.com:8080/#/';  // 跳出浏览器
						} else {
							window.location.href = this.iosHref;  // 分发下载页
						}
					}
				}
			}
		}
	}
</script>

<style lang="less">
	@BgColor: #262633; //主题背景色
	.version {
		width: 100%;
		text-align: center;
		opacity: .5;
		text-align: center;
		color: #fff;
		position: fixed;
		bottom: 10rpx;
		font-size: 2rpx;
	}
	.versions {
		margin: 0rpx 10rpx;
	}
	.page {
		background-color: #f8f8f8;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-image: url(https://img.agrimedia.cn/bmsc/apps/main-bg.png);
		background-size: 100%;
		.header {
			width: 100vw;
			height: 350upx;
			background-color: @BgColor;
			padding-top: 110upx;
			display: flex;
			justify-content: center;
			
			.logo {
				border-radius: 20rpx;
			}
			
			image {
				width: 120upx;
				height: 120upx;
				margin-right: 30upx;
			}

			>view {
				height: 120upx;
				color: #fff;
				font-weight: 700;
				display: flex;
				flex-direction: column;
				justify-content: center;

				view:nth-child(1) {
					font-size: 34upx;
				}

				view:nth-child(2) {
					font-size: 28upx;
				}
			}
		}

		.bg {
			width: 100vw;
			height: 210upx;
			background-size: 100%;
			background-position: center bottom;
			background-repeat: no-repeat;
			position: absolute;
			left: 0;
			top: 300upx;
		}

		.content {
			width: 750upx;
			height: 750upx;
			position: absolute;
			top: 50%;
			left: 0upx;
			transform: translateY(-54%);
			overflow: hidden;

			img {
				width: 750upx;
				height: 750upx;
			}
		}
		
		.btn {
			height: 60rpx;
		}
		.btns {
			width: 100vw;
			position: absolute;
			bottom: 10%;
			left: 0;

			>view {
				width: 600rpx;
				height: 110rpx;
				background-color: @BgColor;
				color: #FFFFFF;
				display: flex;
				margin: 0 auto;
				margin-bottom: 40upx;
				border-radius: 15upx;
				box-shadow: 0 10upx 24upx -10upx @BgColor;
				;

				image {
					width: 100%;
					height: auto;
				}
			}

			>view:nth-child(2) {
				margin-bottom: 0upx;
			}
		}

		.wx {
			position: fixed;
			left: 0;
			top: 0;
			background-color: rgba(0, 0, 0, .7);
			width: 100vw;
			height: 100vh;
			background-image: url(../../static/wx.png);
			background-size: 100%;
			background-position: center 100upx;
			background-repeat: no-repeat;
		}
	}
</style>
