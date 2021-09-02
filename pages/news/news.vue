<template>
	<view>
		<uni-nav-bar class="nav">
			<view slot="left" @click="gotoSetting">
				<image class="avatar"
					src="../../static/index/avatar1.png">
			</view>
			<view slot="mod">
				<view class="input" @click="gotoSearch">
					<text class="iconfont icon-wddl" style="color: #d1d1d1;" />
				</view>
			</view>
			<view slot="right">
				<i class="iconfont icon-youxi right-icon" style="margin-left:-100rpx;"></i>
				<i class="iconfont icon-xinfeng right-icon" style="margin-left:10px;font-weight:bold;"></i>
			</view>
		</uni-nav-bar>
		<view class="tab-container">
			<tabControl :current="current" :values="tabs" bgc="#fff" :fixed="true" :scrollFlag="true" :isEqually="false"
				@clickItem="onClickItem"></tabControl>
			<swiper class="swiper" style="height: 100%;" @change="scollSwiper" :current="current">
				<swiper-item v-for="(item, index) in tabs" :key="index">
					<scroll-view scroll-y="true" style="height: 100%;">{{ item }}</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<view class="show">
			<view v-show="currentIndex === 0">
				<view class="top" style="background-color: #FFFFFF;">
					<view class="flex flex-column " style="width: 33%;align-items: center;">
						<image class="img" src="../../static/news/tongzhi.jpg" />
						<text>欢迎提醒</text>
					</view>
					<view class="flex flex-column" style="width: 34%;align-items: center;">
						<image class="img" src="../../static/news/pinglun.jpg" />
						<text>收到的@</text>
					</view>
					<view class="flex flex-column" style="width: 33%;margin-right: 0;align-items: center;">
						<image class="img" src="../../static/news/friends.jpg">
							<text>粉丝/好友</text>
					</view>

				</view>
				
				<view style="background-color: #FFFFFF; "> 
				<image class="avatar flex flex-column"
					src="../../static/index/avatar4.png">
					<view style="margin-top: -70rpx;margin-left: 120rpx;" class="flex flex-column">@宇宙波波球、@尘埃</view>
					<view style="margin-top: -48rpx;margin-left: 390rpx; color: #b1acac;">等10人赞了你的评论</view>
					<image src="../../static/setting/Sdianzan.png" style="width: 30rpx; height: 30rpx;
					margin-top: 30rpx;margin-left: 120rpx;">
						<view style="color: #0000FF; margin-top: -55rpx;margin-left: 160rpx;" 
						class="flex flex-column">+18</view>
						<view style="color: #8b8b8b; margin-left: 120rpx;" class="flex flex-column">刚刚</view>
					</image>
				</view>
				
				<view style="background-color: #FFFFFF; margin-top: -40rpx;">
				<image class="avatar flex flex-column"
					src="../../static/index/avatar3.png">
					<view style="margin-top: -70rpx;margin-left: 120rpx;" class="flex flex-column">@养一只月亮</view>
					<view style="margin-top: -48rpx;margin-left: 280rpx; color: #b1acac;">赞了你的动态</view>
					<image src="../../static/index/icon_voice_red.png" style="width: 30rpx; height: 30rpx;
					margin-top: 30rpx;margin-left: 120rpx;">
						<view style="color: #ff0307; margin-top: -55rpx;margin-left: 160rpx;" 
						class="flex flex-column">+1</view>
						<view style="color: #8b8b8b; margin-left: 120rpx;" class="flex flex-column">3分钟前</view>
					</image>
				</view>
				
				<view style="background-color: #FFFFFF; margin-top: -40rpx;">
				<image class="avatar flex flex-column"
					src="../../static/index/avatar6.png">
					<view style="margin-top: -70rpx;margin-left: 120rpx;" class="flex flex-column">@是你的miao</view>
					<view style="margin-top: -48rpx;margin-left: 290rpx; color: #b1acac;">回复：</view>
					<view style="margin-top: -10rpx;margin-left: 120rpx; color: #000000;">可以可以</view>
						<view style="color: #8b8b8b; margin-left: 120rpx;" class="flex flex-column">44分钟前</view>
					</image>
				</view>
				
				<view style="background-color: #FFFFFF; margin-top: -40rpx;">
				<image class="avatar flex flex-column"
					src="../../static/index/avatar5.png">
					<view style="margin-top: -70rpx;margin-left: 120rpx;" class="flex flex-column">@将军</view>
					<view style="margin-top: -48rpx;margin-left: 210rpx; color: #b1acac;">评论:</view>
					<view style="margin-top: -10rpx;margin-left: 120rpx; color: #000000;">说的好！</view>
						<view style="color: #8b8b8b; margin-left: 120rpx;" class="flex flex-column">1小时前</view>
					</image>
				</view>
				<view style="color: #0000FF; font-size: 27rpx; margin-left: 300rpx; margin-top: 10rpx;" >查看已读消息</view>
				
			</view>
			
			
			<view v-show="currentIndex === 1">

	<view style="background-color: #FFFFFF; margin-top: 20rpx;">
	<image class="avatar flex flex-column"
		src="../../static/index/avatar5.png">
		<view style="margin-top: -90rpx;margin-left: 120rpx;" class="flex flex-column">小林要睡觉</view>
		<!-- <view style="margin-top: -48rpx;margin-left: 210rpx; color: #b1acac;">评论:</view> -->
		<view style="margin-top: -10rpx;margin-left: 120rpx; color: #b1acac;">好哦，下次再聊吧</view>
			<view style="color: #8b8b8b; margin-left: 580rpx;" class="flex flex-column">40分钟前</view>
		</image>
	</view>
	
	<view style="background-color: #FFFFFF; margin-top: -30rpx;">
	<image class="avatar flex flex-column"
		src="../../static/index/avatar7.png">
		<view style="margin-top: -90rpx;margin-left: 120rpx;" class="flex flex-column">你相信光吗</view>
		<!-- <view style="margin-top: -48rpx;margin-left: 210rpx; color: #b1acac;">评论:</view> -->
		<view style="margin-top: -10rpx;margin-left: 120rpx; color: #b1acac;">看我变身~~~</view>
			<view style="color: #8b8b8b; margin-left: 580rpx;" class="flex flex-column">1小时前</view>
		</image>
	</view>
	
	<view style="background-color: #FFFFFF; margin-top: -30rpx;">
	<image class="avatar flex flex-column"
		src="../../static/index/avatar6.png">
		<view style="margin-top: -90rpx;margin-left: 120rpx;" class="flex flex-column">风止意难平</view>
		<!-- <view style="margin-top: -48rpx;margin-left: 210rpx; color: #b1acac;">评论:</view> -->
		<view style="margin-top: -10rpx;margin-left: 120rpx; color: #b1acac;">我：记得去拿资料</view>
			<view style="color: #8b8b8b; margin-left: 580rpx;" class="flex flex-column">2小时前</view>
		</image>
	</view>
	
	<view style="background-color: #FFFFFF; margin-top: -30rpx;">
	<image class="avatar flex flex-column"
		src="../../static/index/avatar10.png">
		<view style="margin-top: -90rpx;margin-left: 120rpx;" class="flex flex-column">快乐星球</view>
		<!-- <view style="margin-top: -48rpx;margin-left: 210rpx; color: #b1acac;">评论:</view> -->
		<view style="margin-top: -10rpx;margin-left: 120rpx; color: #b1acac;">教师节快乐~</view>
			<view style="color: #8b8b8b; margin-left: 580rpx;" class="flex flex-column">9/1</view>
		</image>
	</view>
			</view>
			<view style="color: #3f3f3f; font-size: 27rpx; margin-left: 300rpx; margin-top: 10rpx;" >没有更多啦~</view>

		</view>



	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	import tabControl from '@/components/tabControl/tabControl.vue';

	export default {
		components: {
			uniNavBar,
			tabControl
		},
		data() {
			return {

				tabs: ['提醒', '私信'],
				current: 1,
				currentIndex: 1,


			}
		},
		onLoad() {
			uni.request({
				url: 'https://api.bilibili.com/x/web-interface/popular?ps=20&pn=1',
				success: (res) => {
					this.items = res.data.data.list
					console.log(this.items)
					console.log(res);

				}
			});
		},

		methods: {
			onClickItem(val) {
				this.current = val.currentIndex;
			},
			scollSwiper(e) {
				this.current = e.target.current;
				console.log(this.current)
				this.currentIndex = e.target.current;
			},
			gotoSearch() {
				console.log("进入搜索页面")
				uni.navigateTo({
					url: '../search/search',
					success() {
						console.log("#####################")
					},
					fail(err) {
						console.log(err)
						console.log("错误****************************")
					}
				});

			},
			gotoSetting() {
				uni.navigateTo({
					url: '../my/setting/setting'
				})
			},
			play(e) {
				console.log("进入播放页")
				console.log(e)
				let url = e
				plus.runtime.openURL(url, function(res) {
					console.log(res);
				})
			}

		},
	};
</script>
<style>
	.nav {
		position: sticky;
		top: 44px;
		top: 0;
		z-index: 3;
	}

	.avatar {
		border-radius: 50%;
		margin: 50rpx 20rpx 20rpx 20rpx;
		width: 90rpx;
		height: 90rpx;
	}

	.title {
		font-size: 22px;
		margin-top: 5rpx;
		margin-left: 30rpx;
	}

	.right-icon {
		font-size: 22px;

	}

	.input {
		float: left;
		height: 30px;
		margin-top: 10px;
		width: 400rpx;
		border-radius: 30px;
		background-color: #f6f6f6;
	}

	.border {
		width: 100%;
		position: absolute;
		z-index: 3;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #e5e5e5
	}

	.show {
		margin-top: 3px;
	}

	.tab-container {
		width: 100%;
		margin-top: 78rpx;
		border-bottom: 1px solid #d1d1d1;
	}

	.top {
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: center;
		margin-top: 20rpx;
	}
	.top2 {
		background-color: #F5F2F0;
		height: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
		align-items: center;
		margin-top: 20rpx;
	    border-radius: 5px;
	}

	.img {
		background-color: #FFFFFF;
		width: 100rpx;
		height: 100rpx;
	}

	.card {

		margin-top: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		height: 240rpx;
		border-bottom: 1px solid #d1d1d1;
	}

	.card2 {
		background-color: #FFFFFF;
		margin-left:3%;
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 45.5%;
		height: 400rpx;
		border-radius: 5px;
	}

	.card-img {
		margin-left: 20rpx;
		margin-right: 30rpx;
		width: 95%;
		height: 90%;
		border-radius: 5px;
	}

	.card2-img {
		border-radius: 5px 5px 0 0 ;
		margin-bottom: 30rpx;
		width: 100%;
		height: 100%;

	}

	.card-text {
		color: #BBBBBB;
		font-size: 26rpx;
		width: 95%;

	}

	.card-title {
		color: #000000;
		margin-top: -50rpx;
		overflow: hidden;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}

	.card-text-img {

		background-color: #FFFFFF;
		width: 30rpx;
		height: 30rpx;
	}

	.card-lable {
		height: 30rpx;
		margin-bottom: 8rpx;

	}

	.card-lable-text {
		font-size: 26rpx;
		color: #2c6ec5;
		margin-bottom: 20rpx;
	}

	.swiper {
		margin-left: 15rpx;
		border-radius: 10rpx;
		margin-top: 40rpx;
		height: 300rpx;
		width: 95%;

	}

	.img-swiper {
		width: 100%;
		height: 300rpx;
		align-items: center;
		border-radius: 10rpx
	}
</style>
