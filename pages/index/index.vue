<template>
	<view class="ctn">
		<!-- 顶部导航选项 -->
		<view class="topctn">
			<view class="input1">
				<div @click="showImg" class="showSearch">
					<view class="slct1" style="width: 180rpx;">
						<button class="slct" :class="{ act: currentTab == 0 }" :data-current="0" @click="dianji">关注</button>
						<!-- <i class="iconfont icon-chenggong" ></i> -->
						<image v-if="showSearch" src="../../static/publish/icon_gouxuan.png" class="gouxuan"></image>
					</view>
				</div>
			</view>

			<view class="input1">
				<div @click="showImg2" class="showSearch2">
					<view class="slct1" style="width: 180rpx;">
						<button class="slct" :class="{ act: currentTab == 1 }" :data-current="1" @click="dianji">推荐</button>
						<image v-if="showSearch2" src="../../static/publish/icon_gouxuan.png" class="gouxuan"></image>
					</view>
				</div>
			</view>

			<view class="input1">
				<div @click="showImg3" class="showSearch3">
					<view class="slct1" style="width: 180rpx;">
						<button class="slct" :class="{ act: currentTab == 2 }" :data-current="2" @click="dianji">图文</button>
						<image v-if="showSearch3" src="../../static/publish/icon_gouxuan.png" class="gouxuan"></image>
					</view>
				</div>
			</view>

			<view class="input1">
				<div @click="showImg4" class="showSearch4">
					<view class="slct1" style="width: 180rpx;">
						<button class="slct" :class="{ act: currentTab == 3 }" :data-current="3" @click="dianji">匿名</button>
						<image
							v-if="showSearch4"
							src="../../static/publish/icon_gouxuan.png"
							class="gouxuan"
							style="
						color: #007AFF;"
						></image>
					</view>
				</div>
			</view>
		</view>
		<!-- 内容标签 -->
		<swiper class="swiperslct" :current="currentTab" duration="200" @change="huadong">
			<!-- 关注 -->
			<swiper-item class="content">
				<view>你可能感兴趣的人</view>
				<!-- 1 -->
				<scroll-view class="uni-swiper" scroll-x>
					<view class="scrollx"><view class="title">
					<image class="avatar"
							src="../../static/index/avatar1.png">
					<view>热爱学习</view>
					<view style="font-size: 20rpx;color: #a1a1a1;">教师节快乐！！</view>
					
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 200rpx; font-size: 27rpx;
					padding-top: -40rpx; margin-top: 20rpx;">
						+ 关注</button>
					</view>
				</view>
				<!-- 2 -->
					<view class="scrollx"><view class="title"><image class="avatar"
							src="../../static/index/avatar2.png">
					<view>亦安</view>
					<view style="font-size: 20rpx;color: #a1a1a1;">近期20人关注了TA</view>
					
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 200rpx; font-size: 27rpx;
					padding-top: -40rpx; margin-top: 20rpx;">
						+ 关注</button></view></view>
					<!-- 3 -->
					<view class="scrollx"><view class="title"><image class="avatar"
							src="../../static/index/avatar3.png">
					<view>柒柒miao~</view>
					<view style="font-size: 20rpx;color: #a1a1a1;">大话超v</view>
					
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 200rpx; font-size: 27rpx;
					padding-top: -40rpx; margin-top: 20rpx;">
						+ 关注</button></view></view>
					<!-- 4 -->
					<view class="scrollx"><view class="title"><image class="avatar"
							src="../../static/index/avatar4.png">
					<view>A4纸老师</view>
					<view style="font-size: 20rpx;color: #a1a1a1;">专注考研20年...</view>
					
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 200rpx; font-size: 27rpx;
					padding-top: -40rpx; margin-top: 20rpx;">
						+ 关注</button></view></view>
				</scroll-view>
				
				<!-- 卡片 -->
				<view style="background-color: #FFFFFF; margin-top: 20rpx;">
					<image class="avatar" src="../../static/index/pic3.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">史迪仔~</view>
					<view style="color: #969696; margin-left: 105rpx;">2小时前</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">三尺鲜青春，粉笔染白头。</view>
					<image class="pic" src="../../static/index/pic.png"></image>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;">#  赞美TA</button>
					 
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
					class="flex flex-column">20</view>
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
					<image class="avatar" src="../../static/index/pic1.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">喝奶茶吗~</view>
					<view style="color: #969696; margin-left: 105rpx;">9/1  学霸</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">在这个蓝色星球中，每一个人都是星辰，不同的是，你是星辰，也是星辰的点亮者。。</view>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;"># 感谢师恩</button>
					 
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
					class="flex flex-column">30</view>
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
					<image class="avatar" src="../../static/index/pic2.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">秃头姐妹</view>
					<view style="color: #969696; margin-left: 105rpx;">8/30 想开学的仔仔</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">一支粉笔写尽天下事，三尺讲台讲尽师生情。</view>
					<image class="pic" src="../../static/index/pic4.png"></image>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;">#  那些老师</button>
					 
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
					class="flex flex-column">50</view>
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

			<!-- 推荐 -->
			<swiper-item class="content">
				<!-- 卡片 -->
				<view style="background-color: #FFFFFF; margin-top: 20rpx;">
					<image class="avatar" src="../../static/index/avatar6.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">可以有月亮吗</view>
					<view style="color: #969696; margin-left: 105rpx;">知识技能博主</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">一个平凡的称谓，一生不平凡的使命。</view>
					<image class="pic" src="../../static/index/pic7.png"></image>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;">#  赞美TA</button>
					 
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
					class="flex flex-column">290</view>
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
					<image class="avatar" src="../../static/index/avatar7.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">屁屁龙</view>
					<view style="color: #969696; margin-left: 105rpx;">搞笑领域 Yo主</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">我们的学习是化合反应，
汲取知识加上努力化合成功，
而老师的教导却是分解反应，
分解了您的知识，一丝不剩。
感谢老师，您辛苦了！</view>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;">#  师恩</button>
					 
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
					class="flex flex-column">1110</view>
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
					<image class="avatar" src="../../static/index/avatar8.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">哎呦喂啊</view>
					<view style="color: #969696; margin-left: 105rpx;">女艺人</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">感谢您，让我知道，对的方向比努力更重要。</view>
					<image class="pic" src="../../static/index/pic6.png"></image>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;">#  那些年</button>
					 
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
					class="flex flex-column">1250</view>
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
			<!-- 图文 -->
			<swiper-item class="content11">
				<!-- 卡片 -->
				<view style="background-color: #FFFFFF; margin-top: 20rpx;">
					<image class="avatar" src="../../static/index/avatar9.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">瑞思拜</view>
					<view style="color: #969696; margin-left: 105rpx;">搞笑博主</view>
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
					class="flex flex-column">8782</view>
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
					<image class="avatar" src="../../static/index/avatar10.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">早点睡觉</view>
					<view style="color: #969696; margin-left: 105rpx;">情感Yo主</view>
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
					class="flex flex-column">3720</view>
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
					<image class="avatar" src="../../static/index/avatar1.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">秃头姐妹</view>
					<view style="color: #969696; margin-left: 105rpx;">在线出道姊妹花</view>
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
			<!-- 匿名 -->
			<swiper-item class="content">
				<!-- 卡片 -->
				<view style="background-color: #FFFFFF; margin-top: 20rpx;">
					<image class="avatar" src="../../static/index/avatar11.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">*******</view>
					<view style="color: #969696; margin-left: 105rpx;">2小时前</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">
						您是蜡烛，燃烧自己照亮我们，您是大树，撑开身体呵护我们，您是春蚕，奉献自己关怀我们，感谢您亲爱的老师，教师节祝您开心快乐永远年轻!
					</view>
					<image class="pic" src="../../static/index/pic2.png"></image>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;">#  语文</button>
					 
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
					class="flex flex-column">2320</view>
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
					<image class="avatar" src="../../static/index/avatar11.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">*******</view>
					<view style="color: #969696; margin-left: 105rpx;">9/1</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">
						我是蛮不讲理的小孩，您就是让我的妈妈羡慕嫉妒恨的人，您像天使出现在我的生命，您说的话是真理、是圣旨，必须服从!
						教师节到了，老师，有何指示吗?
					</view>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;">#  难忘</button>
					 
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
					class="flex flex-column">1230</view>
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
					<image class="avatar" src="../../static/index/avatar12.png" style="box-shadow: #000000;">
					<view class="flex flex-column" style="margin-top: -110rpx; margin-left: 110rpx;">*******</view>
					<view style="color: #969696; margin-left: 105rpx;">8/30</view>
					<view style="margin-left: 60rpx;margin-top: 30rpx;font-size: 30rpx;">
						大家都说您是蜡烛，我不然;大家都说您是春蚕，我也不然;大家都说您是园丁，我还是不然;我只知道，您是我心中永远敬爱的老师。节日快乐!
					</view>
					<image class="pic" src="../../static/index/pic5.png"></image>
					<button style="background-color: #23a7ff;color: #ffffff;height: 50rpx; width: 170rpx; font-size: 27rpx;
					 margin-top: 20rpx;margin-left: 20rpx;">#  赞美TA</button>
					 
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
					class="flex flex-column">50</view>
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
