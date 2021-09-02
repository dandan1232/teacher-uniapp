<template>
	<view class="ctn">

		<!-- 内容标签 -->
		<swiper class="swiperslct" :current="currentTab" duration="200" @change="huadong">
			
			<!-- 图文 -->
			<swiper-item class="content11">
				<!-- 卡片 -->
				<view style="background-color: #FFFFFF; margin-top: 20rpx;">
					<image class="avatar" src="../../static/index/avatar9.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">瑞思拜</view>
					<view style="color: #969696; margin-left: 105rpx;">刚刚发布</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">教师节快乐!</view>
					<image class="pic" src="../../static/index/pic6.png"></image>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;">#  愿安好</button>
					 
					<view style="margin-top: 30rpx;margin-bottom: 20rpx; height: 70rpx;">
					<image src="../../static/index/share.png" style="height: 20px;width: 30rpx;					
					margin-top: 20rpx; margin-left: 30rpx;"
					class="flex flex-column">
					<view style="margin-left: 10rpx; margin-top: -45rpx;margin-left: 70rpx;"
					class="flex flex-column">分享</view>
					</image>
					
					<image src="../../static/index/pinglun.png" style="height: 20px;width: 35rpx;
					margin-top: -50rpx; margin-left: 210rpx;"
					class="flex flex-column">
					<view style="margin-left: -80rpx; margin-top: -45rpx;margin-left: 260rpx;"
					class="flex flex-column">0</view>
					</image>
					
					<image src="../../static/setting/dianzanS.png" style="height: 20px;width: 35rpx;
					margin-top: -50rpx; margin-left: 420rpx;"
					class="flex flex-column">
					<view style="margin-left: -80rpx; margin-top: -45rpx;margin-left: 350rpx;"
					class="flex flex-column"></view>
					</image>
					
					<image src="../../static/setting/dianzanX.png" style="height: 20px;width: 35rpx;
					margin-top: 0rpx; margin-left: 630rpx;"
					class="flex flex-column">
					<view style="margin-left: -80rpx; margin-top: -45rpx;margin-left: 350rpx;"
					class="flex flex-column"></view>
					</image>
					</view>
				</view>
				
				<view style="background-color: #FFFFFF; margin-top: 20rpx;">
					<image class="avatar" src="../../static/index/avatar9.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">瑞思拜</view>
					<view style="color: #969696; margin-left: 105rpx;">9/1</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">对您的感激千言万语也无法表达，
					对您的祝福百十万年也不会改变――老师，祝您万事如意!</view>
					<image class="pic" src="../../static/index/pic7.png"></image>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;">#  愿安好</button>
					 
					<view style="margin-top: 30rpx;margin-bottom: 20rpx; height: 70rpx;">
					<image src="../../static/index/share.png" style="height: 20px;width: 30rpx;					
					margin-top: 20rpx; margin-left: 30rpx;"
					class="flex flex-column">
					<view style="margin-left: 10rpx; margin-top: -45rpx;margin-left: 70rpx;"
					class="flex flex-column">分享</view>
					</image>
					
					<image src="../../static/index/pinglun.png" style="height: 20px;width: 35rpx;
					margin-top: -50rpx; margin-left: 210rpx;"
					class="flex flex-column">
					<view style="margin-left: -80rpx; margin-top: -45rpx;margin-left: 260rpx;"
					class="flex flex-column">2</view>
					</image>
					
					<image src="../../static/setting/dianzanS.png" style="height: 20px;width: 35rpx;
					margin-top: -50rpx; margin-left: 420rpx;"
					class="flex flex-column">
					<view style="margin-left: -80rpx; margin-top: -45rpx;margin-left: 350rpx;"
					class="flex flex-column"></view>
					</image>
					
					<image src="../../static/setting/dianzanX.png" style="height: 20px;width: 35rpx;
					margin-top: 0rpx; margin-left: 630rpx;"
					class="flex flex-column">
					<view style="margin-left: -80rpx; margin-top: -45rpx;margin-left: 350rpx;"
					class="flex flex-column"></view>
					</image>
					</view>
				</view>
				
				<view style="background-color: #FFFFFF; margin-top: 20rpx;">
					<image class="avatar" src="../../static/index/avatar9.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">瑞思拜</view>
					<view style="color: #969696; margin-left: 105rpx;">8/30</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">我们喜欢你，年轻的老师;您像云杉一般俊秀，
					像蓝天一样深沉;您有学问，还有一颗和我们通融的心。</view>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;">#  奇葩说</button>
					 
					<view style="margin-top: 30rpx;margin-bottom: 20rpx; height: 70rpx;">
					<image src="../../static/index/share.png" style="height: 20px;width: 30rpx;					
					margin-top: 20rpx; margin-left: 30rpx;"
					class="flex flex-column">
					<view style="margin-left: 10rpx; margin-top: -45rpx;margin-left: 70rpx;"
					class="flex flex-column">分享</view>
					</image>
					
					<image src="../../static/index/pinglun.png" style="height: 20px;width: 35rpx;
					margin-top: -50rpx; margin-left: 210rpx;"
					class="flex flex-column">
					<view style="margin-left: -80rpx; margin-top: -45rpx;margin-left: 260rpx;"
					class="flex flex-column">5</view>
					</image>
					
					<image src="../../static/setting/dianzanS.png" style="height: 20px;width: 35rpx;
					margin-top: -50rpx; margin-left: 420rpx;"
					class="flex flex-column">
					<view style="margin-left: -80rpx; margin-top: -45rpx;margin-left: 350rpx;"
					class="flex flex-column"></view>
					</image>
					
					<image src="../../static/setting/dianzanX.png" style="height: 20px;width: 35rpx;
					margin-top: 0rpx; margin-left: 630rpx;"
					class="flex flex-column">
					<view style="margin-left: -80rpx; margin-top: -45rpx;margin-left: 350rpx;"
					class="flex flex-column"></view>
					</image>
					</view>
				</view>
				
				<view style="background-color: #FFFFFF; margin-top: 20rpx;">
					<image class="avatar" src="../../static/index/avatar9.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">瑞思拜</view>
					<view style="color: #969696; margin-left: 105rpx;">搞笑博主</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">
						博学多才是你的专长，无私奉献是你的胸怀，教书育人是你的梦想，望学子成才是你的殷切期望;教师节了，感恩送到，祝老师节日快乐!
					</view>
					<image class="pic" src="../../static/index/pic8.png"></image>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;">#  徐老师</button>
					 
					<view style="margin-top: 30rpx;margin-bottom: 20rpx; height: 70rpx;">
					<image src="../../static/index/share.png" style="height: 20px;width: 30rpx;					
					margin-top: 20rpx; margin-left: 30rpx;"
					class="flex flex-column">
					<view style="margin-left: 10rpx; margin-top: -45rpx;margin-left: 70rpx;"
					class="flex flex-column">分享</view>
					</image>
					
					<image src="../../static/index/pinglun.png" style="height: 20px;width: 35rpx;
					margin-top: -50rpx; margin-left: 210rpx;"
					class="flex flex-column">
					<view style="margin-left: -80rpx; margin-top: -45rpx;margin-left: 260rpx;"
					class="flex flex-column">2530</view>
					</image>
					
					<image src="../../static/setting/dianzanS.png" style="height: 20px;width: 35rpx;
					margin-top: -50rpx; margin-left: 420rpx;"
					class="flex flex-column">
					<view style="margin-left: -80rpx; margin-top: -45rpx;margin-left: 350rpx;"
					class="flex flex-column"></view>
					</image>
					
					<image src="../../static/setting/dianzanX.png" style="height: 20px;width: 35rpx;
					margin-top: 0rpx; margin-left: 630rpx;"
					class="flex flex-column">
					<view style="margin-left: -80rpx; margin-top: -45rpx;margin-left: 350rpx;"
					class="flex flex-column"></view>
					</image>
					</view>
				</view>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentTab: '0',
			showSearch: false,
			showSearch2: false,
			showSearch3: false,
			showSearch4: false
		};
	},
	methods: {
		dianji(e) {
			console.log(e);
			var that = this;
			if (this.currentTab === e.target.dataset.current) {
				return false;
			} else {
				that.currentTab = e.target.dataset.current;
			}
		},
		huadong(e) {
			console.log(e);
			var that = this;
			that.currentTab = e.detail.current;
		},
		showImg() {
			this.showSearch = !this.showSearch;
			this.showSearch2 = false;
			this.showSearch3 = false;
			this.showSearch4 = false;
		},
		showImg2() {
			this.showSearch2 = !this.showSearch2;
			this.showSearch = false;
			this.showSearch3 = false;
			this.showSearch4 = false;
		},
		showImg3() {
			this.showSearch3 = !this.showSearch3;
			this.showSearch = false;
			this.showSearch2 = false;
			this.showSearch4 = false;
		},
		showImg4() {
			this.showSearch4 = !this.showSearch4;
			this.showSearch = false;
			this.showSearch2 = false;
			this.showSearch3 = false;
		},
		getAdress: function() {
			uni.chooseLocation({
				success: function(res) {
					console.log('详细地址：' + res.address);
					this.address = res.address;
					console.log(this.address);
					console.log('纬度：' + res.latitude);
					console.log('经度：' + res.longitude);
				}
			});
		}
	}
};
</script>

<style>
.ctn {
	width: 100%;
	height: 1300px;
	overflow: scroll;
	background-color: #e5e5e5;
}
.topctn {
	width: 100%;
	height: 30px;
	display: flex;
	background-color: #e5e5e5;
	padding: 20rpx 0;
}
.slct {
	background-color: #ffffff;
	width: 160rpx;
	height: 80rpx;
	font-size: 30rpx;
	font-weight: bold;
	border-radius: 10px;
	position: relative;
}

.slct1 {
	background-color: #e5e5e5;
	width: 430rpx;
	height: 100rpx;
	font-size: 30rpx;
	font-weight: bold;
	border-radius: 10px;
	position: relative;
}
.gouxuan {
	width: 30rpx;
	height: 30rpx;
	background-color: #e5e5e5;
	position: absolute;
	top: 30px;
	right: 0px;
	filter: alpha(opacity=50);
	-moz-opacity: 0.5;
	-khtml-opacity: 0.5;
	opacity: 1.5;
	position: absolute;
	background-attachment: fixed;
}

.icongou {
	width: 30rpx;
	height: 30rpx;
	/* background-color: #00aaff; */
	color: #0000ff;
	position: absolute;
	top: 25px;
	right: 0px;
	filter: alpha(opacity=50);
	-moz-opacity: 0.5;
	-khtml-opacity: 0.5;
	opacity: 1.5;
	position: absolute;
	background-attachment: fixed;
}
.act {
	border: 5rpx solid #0000ff;
	color: #0000ff;
}
.swiperslct {
	height: 1300px;
}


/* 左右滑动 */
.uni-swiper {
	white-space: nowrap;
	background-color: #FFFFFF;
	
}

.scrollx {
	padding: 50rpx 10rpx;
	text-align: center;
	display: inline-block;
	width: 210rpx;
	border: 1rpx solid #ccc;
}
	.avatar {
		border-radius: 50%;
		margin: 20rpx 0rpx 0rpx 0rpx;
		width: 90rpx;
		height: 90rpx;
	}
	.pic{
		margin-left: 40rpx;
		width: 460rpx;
		height: 460rpx;
	}
</style>
