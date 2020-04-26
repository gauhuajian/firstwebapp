<template>
	<div class="sort">
		<div class="sort-top">
			字母排序
		</div>
		<ul class="sort-list">
			<li class="sort-item" v-for="(val, key) in cities" :key="val.id">
				{{ key }}
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	props: ['cities'],
};
</script>
<style lang="less" scoped>
.sort {
	.sort-top {
		line-height: 0.8533rem;
		font-size: 0.37333rem;
		padding: 0 0.4rem;
	}
	.sort-list {
		overflow: hidden;
		background: #fff;

		.sort-item {
			width: 16.6666%;
			line-height: 1rem;
			float: left;
			font-size: 0.42rem;
			color: #212121;
			text-align: center;
		}
	}
}
</style>
