<template>
	<div class="location">
		<div class="location-item border-right">
			<i class="iconfont">&#xe600;</i>
			<span>北京大庆</span>
		</div>
		<div class="location-item">
			<i class="iconfont">&#xe657;</i>
			<span>玩水季</span>
		</div>
	</div>
</template>
<style lang="less" scoped>
.location {
	display: flex;
	border-top: 1px solid #ddd;
	.location-item {
		line-height: 1.3rem;
		// height: ;
		flex: 1;
		text-align: center;
		span {
			font-size: 0.48rem;
		}
	}
	.border-right {
		position: relative;
	}
	.border-right::after {
		content: '';
		position: absolute;
		width: 1px;
		right: 0;
		height: 1.3rem;
		background: #ddd;
	}
}
</style>
