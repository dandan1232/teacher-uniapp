<template>
	<view>
		<view class="content-card" @click="open">
			<view class="content-layout flex flex-row">
				<image class="person-img" src="http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/avatar/16.jpg"></image>
				<text class="pl-2 mt-4">[北宸·篇二、考究城脉，黄金海岸 线下的强毅行精神，千年不朽！</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			open() {
				console.log("click");
				//在子组件my-card.vue中将点击事件传回父组件index.vue
				this.$emit('open');
			}
		}
	}
</script>

<style>
.content-card {
		height: 90px;
		width: 95%;
		margin: auto;
		background-color: white;
	}
	.person-img {
		height: 90px;
		width: 100px;
	}
</style>
