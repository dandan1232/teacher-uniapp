<template>
	<view style="height: 2000rpx;">
		<!-- 自定义状态栏 -->
		<view class="status_title"  v-show="scrollTop > 60">
			<text class="status_center text-white mt-1">亦安</text>
		</view>
		
		<!-- 顶部个人信息 -->
		<view class="flex flex-column"
		style="margin-bottom: 50rpx;">
			<i
				class="iconfont icon-shezhi"
				style="z-index: 2;
			margin-top: 30rpx;
			font-size: 40rpx;
			margin-left: 696rpx;
			color: #FFFFFF;"
			></i>
			<i
				class="iconfont icon-xingxing"
				style="z-index: 2;
			margin-top: -77rpx;
			font-size: 40rpx;
			margin-left: 590rpx;
			color: #F0AD4E;"
			>
				<view
					style="margin-top: -60rpx;
			margin-left: 42rpx;
			color: #0F6674;
			font-weight: bold;"
				>
					空间
				</view>
			</i>
			<image src="../../static/my/026D8C1F1E8C68BCA1EE8857B2D2137D.jpg" class="bg"></image>
			<image src="http://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/avatar/4174F480579EBD9230DE14A0F9D7AFFB.jpg" class="avatar"></image>
			<button class="huiyuan">
				<i
					class="iconfont icon-tubiaoguifan-19"
					style="z-index: 2;
		margin-top: -10rpx;
		margin-bottom: 20rpx;
		font-size: 40rpx;
		margin-left: -80rpx;
		color: #F0AD4E;
		line-height: 40px;"
				>
					<view
						style="margin-top: -75rpx;
		margin-left: 50rpx;
		color: #FFFFFF;"
					>
						会员
					</view>
				</i>
			</button>
			<text class="name">亦安</text>
			<i
				class="iconfont icon-xingxing1"
				style="z-index: 2;
		margin-top: -62rpx; 
		margin-left: 124rpx;
		color: #155c6a;
		font-size: 40rpx;"
			></i>
			<i
				class="iconfont icon-nv"
				style="z-index: 2;
		margin-top: -75rpx;
		margin-left: 169rpx;
		color: #ff007f;
		font-size: 44rpx;"
			></i>
			<text class="content">如果万事开头难那请结局一定圆满.</text>
			<i
				class="iconfont icon-bi"
				style="z-index: 2;
		margin-top: -55rpx; 
		margin-left: 520rpx;
		color: #ffff7f;
		font-size: 20rpx;"
			></i>
			<text
				style="
		z-index: 2;
		margin-top: -10rpx;
		margin-left: 50rpx;
		color: #FFFFFF;
		font-size: 33rpx;
		margin-top: 18rpx;"
			>
				1.6w
			</text>
			<text
				style="z-index: 2;
		margin-top: -50rpx;
		margin-left: 130rpx;
		color: #FFFFFF;
		font-size: 26rpx;"
			>
				获赞
			</text>
			<text
				style="z-index: 2;
		margin-top: -55rpx;
		margin-left: 290rpx;
		color: #FFFFFF;
		font-size: 33rpx;"
			>
				7
			</text>
			<text
				style="z-index: 2;
		margin-top: -50rpx;
		margin-left: 320rpx;
		color: #FFFFFF;
		font-size: 26rpx;"
			>
				关注
			</text>
			<text
				style="z-index: 2;
		margin-top: -55rpx;
		margin-left: 420rpx;
		color: #FFFFFF;
		font-size: 33rpx;"
			>
				29
			</text>
			<text
				style="z-index: 2;
		margin-top: -50rpx;
		margin-left: 465rpx;
		color: #FFFFFF;
		font-size: 26rpx;"
			>
				粉丝
			</text>
		</view>


<!-- 第二排 -->
<view 
style="margin-top: 10rpx;
margin-left: 10rpx;
margin-bottom: 20rpx;
float: left;
background-color: #FFFFFF;
border-radius: 12rpx;">
	<view style="margin-top: 40rpx;
	margin-left: 10rpx;
	margin-right: 10rpx;
	background-color: #FFFFFF;
	font-size: 40rpx;"
	>
	<i class="iconfont icon-tiezi"
	style="font-size:50rpx;
	color: #8A6DE9;
	float: left;">
	</i>
	</view>

	
<view style="margin-top: 40rpx;
	background-color: #FFFFFF;
	font-size: 40rpx;"
	 class="">
	<i class="iconfont icon-pinglun"
	style="font-size:50rpx;
	margin-top: 0rpx;
	margin-left: 100rpx;
	float: left;
	color: #E80080;">
	</i>
	</view>
	
	<view style="margin-top: 40rpx;
		background-color: #FFFFFF;
		font-size: 40rpx;"
		 class="">
		<i class="iconfont icon-wenjian"
		style="font-size:50rpx;
		margin-top: -3rpx;
		margin-left: 130rpx;
		float: left;
		color: #D39E00;">
		</i>
		</view>
		
		<view style="margin-top: 40rpx;
			background-color: #FFFFFF;
			font-size: 40rpx;">
			<i class="iconfont icon-yanjing"
			style="font-size:50rpx;
			margin-top: -93rpx;
			margin-left: 310rpx;
			float: left;
			color: #FFC107;">
			</i>
			</view>
			
			<view style="margin-top: 40rpx;
				background-color: #FFFFFF;
				font-size: 40rpx;"
				 class="">
				<i class="iconfont icon-zhidingmianxing"
				style="font-size:50rpx;
				margin-top: -90rpx;
				margin-left: 660rpx;
				color: #007BFF;
				float: left;">
				</i>
				</view>
				
				
				<view style="margin-top: 90rpx;
				margin-left: 10rpx;">
					帖子
				</view>
				
				<view style="margin-top: -90rpx;
				margin-left: 140rpx;">
					评论
				</view>
				
				<view style="margin-top: -90rpx;
				margin-left: 326rpx;">
					收藏
				</view>
				
				<view style="margin-top: -90rpx;
				margin-left: 500rpx;">
					插眼
				</view>
				
				<view style="margin-top: -90rpx;
				margin-left: 660rpx;">
					赞过
				</view>
				
				</view>	
		<!-- 轮播图 -->
		<view class="Img-Swiper">
			<swiper class="swiper" indicator-dots="true" indicator-color="#CFD8DC" indicator-active-color="#ffffff" autoplay="true"
			 interval="5000" duration="1500">
				<swiper-item v-for="(item , index) in homeSlide" :key="index">
					<image class="sImg" :src="item.img" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 一起成长 -->
		<view style="margin-top: 200rpx;
		margin-bottom: 20rpx;
		background-color: #FFFFFF;
		width: 95%;
		margin-left: 10rpx;
		border-radius: 10rpx;">
		<view style="font-size: 34rpx;
		margin-top: 10rpx;
		margin-bottom: 20rpx;
		border-bottom: 1px #007BFF solid;
		font-style: italic;
		font-weight: bold;">一起成长
		</view>
		
		<view
		style="
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
		margin-top: 20rpx;
		margin-left: 0rpx;
		float: left;
		background-color: #FFFFFF;
		border-radius: 12rpx;">
			<view style="margin-top: 40rpx;
			margin-left: 25rpx;
			margin-right: 10rpx;
			background-color: #FFFFFF;
			font-size: 40rpx;"
			>
			<i class="iconfont icon-dengpao"
			style="font-size:60rpx;
			color: #18c8f8;
			margin-top: -20rpx;
			font-size: 60rpx;
			float: left;">
			</i>
			</view>
			
			<view style="margin-top: 40rpx;
			margin-left: 10rpx;
			margin-right: 10rpx;
			background-color: #FFFFFF;
			font-size: 40rpx;"
			>
			<i class="iconfont icon-xunzhang"
			style="font-size:60rpx;
			color: #f8b541;
			margin-top: -20rpx;
			margin-left: 160rpx;
			float: left;">
			</i>
			</view>
			
			<view style="margin-top: 40rpx;
			margin-left: 10rpx;
			margin-right: 10rpx;
			background-color: #FFFFFF;
			font-size: 40rpx;"
			>
			<i class="iconfont icon-fangdajing"
			style="font-size:60rpx;
			margin-left: 170rpx;
			margin-top: -20rpx;
			color: #8A6DE9;
			float: left;">
			</i>
			</view>
			
			<view style="margin-top: 40rpx;
			margin-left: 10rpx;
			margin-right: 10rpx;
			background-color: #FFFFFF;
			font-size: 40rpx;"
			>
			<i class="iconfont icon-youpinlianmeng"
			style="font-size:60rpx;
			color: #ff007f;
			margin-left: 630rpx;
			margin-top: -110rpx;
			float: left;">
			</i>
			</view>
			
			<view style="margin-top:100rpx;
			margin-left: 5rpx;">
				创作中心
			</view>
			
			<view style="margin-top: -60rpx;
			margin-left: 216rpx;">
				正正勋章
			</view>
			
			<view style="margin-top: -90rpx;
			margin-left: 440rpx;">
				审核专区
			</view>
			
			<view style="margin-top: -90rpx;
			margin-left: 600rpx;">
				护正联盟
			</view>
			
			</view>
			
			
			<view style="margin-top: 40rpx; ">
			</view>
			
			<!-- 小正推荐 -->
			<view style="margin-top: 20rpx;
			margin-bottom: 20rpx;">
			<view style="margin-top: 200rpx;
			background-color: #FFFFFF;
			width: 95%;
			margin-left: 10rpx;
			border-radius: 10rpx;">
			<view style="font-size: 34rpx;
			margin-top: 30rpx;
			border-bottom: 1px #007BFF solid;
			font-style: italic;
			font-weight: bold;">小正推荐
			</view>

			<view
			style="
			background-color: #FFFFFF;
			margin-left: 0rpx;
			float: left;
			background-color: #FFFFFF;
			border-radius: 12rpx;">
				<view style="margin-top: 40rpx;
				margin-left: 25rpx;
				margin-right: 10rpx;
				background-color: #FFFFFF;
				font-size: 40rpx;"
				>
				<i class="iconfont icon-yueliang"
				style="font-size:60rpx;
				color: #5555ff;
				margin-top: -20rpx;
				font-size: 60rpx;
				float: left;">
				</i>
				</view>
				
				<view style="margin-top: 40rpx;
				margin-left: 10rpx;
				margin-right: 10rpx;
				background-color: #FFFFFF;
				font-size: 40rpx;"
				>
				<i class="iconfont icon-lishi"
				style="font-size:60rpx;
				color: #ffff00;
				margin-top: -20rpx;
				margin-left: 160rpx;
				float: left;">
				</i>
				</view>
				
				<view style="margin-top: 40rpx;
				margin-left: 10rpx;
				margin-right: 10rpx;
				background-color: #FFFFFF;
				font-size: 40rpx;"
				>
				<i class="iconfont icon-shipin"
				style="font-size:60rpx;
				margin-left: 170rpx;
				margin-top: -20rpx;
				color: #0000ff;
				float: left;">
				</i>
				</view>
				
				<view style="margin-top: 40rpx;
				margin-left: 10rpx;
				margin-right: 10rpx;
				background-color: #FFFFFF;
				font-size: 40rpx;"
				>
				<i class="iconfont icon-san"
				style="font-size:60rpx;
				color: #fc7945;
				margin-left: 630rpx;
				margin-top: -110rpx;
				float: left;">
				</i>
				</view>
				
				<view style="margin-top:100rpx;
				margin-left: 5rpx;">
					夜间模式
				</view>
				
				<view style="margin-top: -60rpx;
				margin-left: 216rpx;">
					浏览历史
				</view>
				
				<view style="margin-top: -90rpx;
				margin-left: 440rpx;">
					视频游戏
				</view>
				
				<view style="margin-top: -90rpx;
				margin-left: 570rpx;">
					青少年模式
				</view>
				
			
				
				</view>
				</view>
				</view>
				
				
				<view style="margin-top: 40rpx; ">
				</view>
				
				<!-- 更多服务 -->
				<view style="margin-top: 20rpx;
				margin-bottom: 20rpx;">
				<view style="margin-top: 200rpx;
				background-color: #FFFFFF;
				width: 95%;
				margin-left: 10rpx;
				border-radius: 10rpx;">
				<view style="font-size: 34rpx;
				margin-top: 30rpx;
				border-bottom: 1px #007BFF solid;
				font-style: italic;
				font-weight: bold;">更多服务
				</view>
				
				<view
				style="
				background-color: #FFFFFF;
				margin-left: 0rpx;
				float: left;
				background-color: #FFFFFF;
				border-radius: 12rpx;">
					<view style="margin-top: 40rpx;
					margin-left: 25rpx;
					margin-right: 10rpx;
					background-color: #FFFFFF;
					font-size: 40rpx;"
					>
					<i class="iconfont icon-hanhan-01-01"
					style="font-size:60rpx;
					color: #aa00ff;
					margin-top: -20rpx;
					font-size: 60rpx;
					float: left;">
					</i>
					</view>
					
					<view style="margin-top: 40rpx;
					margin-left: 10rpx;
					margin-right: 10rpx;
					background-color: #FFFFFF;
					font-size: 40rpx;"
					>
					<i class="iconfont icon-zhangyu"
					style="font-size:60rpx;
					color: #0000ff;
					margin-top: -20rpx;
					margin-left: 160rpx;
					float: left;">
					</i>
					</view>
					
					<view style="margin-top: 40rpx;
					margin-left: 10rpx;
					margin-right: 10rpx;
					background-color: #FFFFFF;
					font-size: 40rpx;"
					>
					<i class="iconfont icon-faxian_jiatingjiaoyu"
					style="font-size:60rpx;
					margin-left: 170rpx;
					margin-top: -20rpx;
					color: #ffaa00;
					float: left;">
					</i>
					</view>
					
					<view style="margin-top: 40rpx;
					margin-left: 10rpx;
					margin-right: 10rpx;
					background-color: #FFFFFF;
					font-size: 40rpx;"
					>
					<i class="iconfont icon-ziyuan131"
					style="font-size:60rpx;
					color: #55ffff;
					margin-left: 630rpx;
					margin-top: -110rpx;
					float: left;">
					</i>
					</view>
					
					<view style="margin-top:100rpx;
					margin-left: 5rpx;">
						简悦游戏
					</view>
					
					<view style="margin-top: -60rpx;
					margin-left: 216rpx;">
						旅游专区
					</view>
					
					<view style="margin-top: -90rpx;
					margin-left: 440rpx;">
						审核专区
					</view>
					
					<view style="margin-top: -90rpx;
					margin-left: 600rpx;">
						简悦家庭
					</view>
					
					
					<view style="margin-top: 40rpx;
					margin-left: 25rpx;
					margin-right: 10rpx;
					background-color: #FFFFFF;
					font-size: 40rpx;"
					>
					<i class="iconfont icon-doctorial-fill"
					style="font-size:60rpx;
					color: #5555ff;
					margin-top: -20rpx;
					font-size: 60rpx;
					float: left;">
					</i>
					</view>
					
					<view style="margin-top: 40rpx;
					margin-left: 10rpx;
					margin-right: 10rpx;
					background-color: #FFFFFF;
					font-size: 40rpx;"
					>
					<i class="iconfont icon-wenhao"
					style="font-size:60rpx;
					color: #00aa00;
					margin-top: -20rpx;
					margin-left: 160rpx;
					float: left;">
					</i>
					</view>
					
					<view style="margin-top: 40rpx;
					margin-left: 10rpx;
					margin-right: 10rpx;
					background-color: #FFFFFF;
					font-size: 40rpx;"
					>
					<i class="iconfont icon-xiazai"
					style="font-size:60rpx;
					margin-left: 170rpx;
					margin-top: -20rpx;
					color: #0000ff;
					float: left;">
					</i>
					</view>
					
					<view style="margin-top: 40rpx;
					margin-left: 10rpx;
					margin-right: 10rpx;
					background-color: #FFFFFF;
					font-size: 40rpx;"
					>
					<i class="iconfont icon-zhidingmianxing"
					style="font-size:60rpx;
					color: #fc7945;
					margin-left: 630rpx;
					margin-top: -110rpx;
					float: left;">
					</i>
					</view>
					
					<view style="margin-top:100rpx;
					margin-left: 5rpx;">
						又有态度
					</view>
					
					<view style="margin-top: -60rpx;
					margin-left: 216rpx;">
						帮助反馈
					</view>
					
					<view style="margin-top: -90rpx;
					margin-left: 440rpx;">
						我的下载
					</view>
					
					<view style="margin-top: -90rpx;
					margin-left: 600rpx;">
						我的收藏
					</view>
					</view>
					
					</view>
					</view>
					</view>
			
		
		</view>

	
</view>
</template>

<script>
export default {
	data() {
			return {
				title: 'Hello',
				scrollTop: 0,
				homeSlide: [{
						index: 1,
						img: "http://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/zuiyou/scroll2.png"
					},
					{
						index: 2,
						img: "http://pic-ldd-test.oss-cn-hangzhou.aliyuncs.com/zuiyou/scroll.png"
					},
				]
			}
	},
	methods: {}
};
</script>

<style>
.bg {
	width: 100%;
	height: 580rpx;
	margin-top: -99rpx;
	float: left;
}
.avatar {
	border-radius: 50%;
	margin-left: 20rpx;
	margin-top: -370rpx;
	width: 140rpx;
	height: 140rpx;
	background-color: #ffffff;
	float: left;
}
.name {
	color: #70554d;
	margin-top: 40rpx;
	margin-left: 60rpx;
	z-index: 2;
	size: 120rpx;
	font-size: 35rpx;
	font-style: inherit;
}
.content {
	color: #70554d;
	margin-top: 0rpx;
	margin-left: 60rpx;
	z-index: 2;
	size: 99rpx;
	font-style: inherit;
}
.huiyuan {
	background-color: #0e151d;
	height: 50%;
	margin-left: 580rpx;
	margin-top: -90rpx;
	border-radius: 10px;
	position: relative;
	font-weight: bold;
	text-align: center;
	line-height: 40px;
}
.sImg{
	width: 100%;
	height: 100rpx;
}
	.swiper {
		height: 155rpx;
		margin-bottom: 15px;
	}
</style>