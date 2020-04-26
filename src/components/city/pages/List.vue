<template>
	<div>
		<div class="list" v-for="(val, key) in cities" :key="val.id">
			<div class="list-top">
				{{ key }}
			</div>
			<ul class="list-list">
				<li class="list-item" v-for="item in val" :key="item.id">{{ item.name }}</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	props: ['cities'],
};
</script>
<style lang="less" scoped>
.list {
	.list-top {
		line-height: 0.8533rem;
		font-size: 0.37333rem;
		padding: 0 0.4rem;
	}
	.list-list {
		overflow: hidden;
		background: #fff;
		position: relative;
		&::before {
			content: ' ';
			position: absolute;
			width: 25%;
			height: 100%;
			left: 25%;
			border-left: 1px solid #ddd;
			border-right: 1px solid #ddd;
		}
		&::after {
			content: ' ';
			position: absolute;
			width: 25%;
			height: 100%;
			left: 75%;
			border-left: 1px solid #ddd;
		}
		.list-item {
			width: 25%;
			line-height: 1rem;
			float: left;
			font-size: 0.42rem;
			color: #212121;
			text-align: center;
			border-bottom: 1px solid #ddd;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}
</style>
