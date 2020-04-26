<template>
	<div class="hot">
		<div class="hot-top">
			热门城市
		</div>
		<ul class="hot-list">
			<li class="hot-item" v-for="item in hotCities" :key="item.id">{{ item.name }}</li>
		</ul>
	</div>
</template>
<script>
export default {
	props: ['hotCities'],
};
</script>
<style lang="less" scoped>
.hot {
	.hot-top {
		line-height: 0.8533rem;
		font-size: 0.37333rem;
		padding: 0 0.4rem;
	}
	.hot-list {
		overflow: hidden;
		background: #fff;
		position: relative;
		&::before {
			content: ' ';
			position: absolute;
			width: 33.33%;
			height: 100%;
			left: 33.33%;
			border-left: 1px solid #ddd;
			border-right: 1px solid #ddd;
		}
		.hot-item {
			width: 33.333%;
			line-height: 1rem;
			float: left;
			font-size: 0.42rem;
			color: #212121;
			text-align: center;
			border-bottom: 1px solid #ddd;
		}
	}
}
</style>
