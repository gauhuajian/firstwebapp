<template>
	<div class="hot">
		<div class="hot-top">
			<img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="" />
			<span>本周热门榜单</span>
			<span class="hot-title">全部榜单 ></span>
		</div>
		<ul class="hot-list">
			<li class="hot-item" v-for="item in hotList" :key="item.id">
				<img :src="item.imgUrl" alt="" />
				<p>{{ item.title }}</p>
				<p class="hot-mark">{{ item.mark }}<span>起</span></p>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	props: ['hotList'],
};
</script>
<style lang="less" scoped>
.hot {
	background: #fff;
	.hot-top {
		box-sizing: content-box;
		padding: 0.1rem 0.2rem;
		width: 100%;
		position: relative;
		img {
			width: 0.4rem;
			height: 0.4rem;
		}
		span {
			font-size: 0.42rem;
			vertical-align: 2%;
		}
		.hot-title {
			position: absolute;
			right: 0.5rem;
			top: 0.37rem;
			font-size: 0.35rem;
		}
	}
	.hot-list {
		padding: 0.2rem 0.2rem;
		height: 4rem;
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
		.hot-item {
			display: inline-block;
			width: 2.6666rem;
			height: 2.666rem;
			text-align: center;
			margin-left: 0.1rem;
			img {
				margin-left: auto;
				margin-right: auto;
				display: block;
				width: 100%;
				height: 100%;
			}
			p {
				margin-top: 0.1rem;
				font-size: 0.37rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.hot-mark {
				color: #ff8300;
				span {
					color: #333;
				}
			}
		}
	}
}
</style>
