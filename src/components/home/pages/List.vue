<template>
	<div class="list">
		<div class="list-top">
			<img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="" />
			<span>猜你喜欢</span>
		</div>
		<div class="list-item" v-for="item in list" :key="item.id" @click="toDetails">
			<div class="item-img">
				<img :src="item.imgUrl" alt="" />
			</div>
			<div class="item-text">
				<p class="item-title">{{ item.title }}</p>
				<p class="item-message">{{ item.msg }}条评论</p>
				<p>
					<span class="item-mark">￥</span>
					<span class="item-pic">{{ item.pre }}</span>
					起
					<span class="item-map">{{ item.map }}</span>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ['list'],
	methods: {
		toDetails() {
			this.$router.push('/details');
		},
	},
};
</script>
<style lang="less" scoped>
.list {
	background: #fff;
	.list-top {
		width: 100%;
		height: 0.976rem;
		box-sizing: content-box;
		padding: 0.2rem 0.2rem;
		img {
			width: 0.4rem;
			height: 0.4rem;
			margin-right: 0.1rem;
		}
		span {
			font-size: 0.42rem;
		}
	}
	.list-item {
		box-sizing: content-box;
		margin-bottom: 0.2rem;
		padding: 0.1rem 0.2rem;
		width: 100%;
		height: 2.666666rem;
		display: flex;
		border-bottom: 1px solid #ddd;
		&:last-child {
			margin-bottom: 0rem;
		}
		.item-img {
			width: 3.6rem;
			height: 2.666666rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.item-text {
			width: 100%;
			height: 2.666666rem;
			padding: 0.2rem 0.2rem;
			p {
				font-size: 0.42rem;
				margin-bottom: 0.5rem;
			}
			.item-title {
				font-size: 0.42rem;
			}
			.item-message {
				font-size: 0.32rem;
			}
			.item-mark {
				font-size: 0.32rem;
				color: #ff8300;
			}
			.item-pic {
				font-size: 0.42rem;
				color: #ff8300;
			}
			.item-map {
				float: right;
				font-size: 0.32rem;
				margin-right: 0.1rem;
			}
		}
	}
}
</style>
