<template>
	<div class="activity">
		<div class="activity-item border-right">
			<img src="http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png" alt="" />
		</div>
		<div class="activity-item">
			<img src="http://img1.qunarzz.com/piao/fusion/1806/36/e89032c5f7714f02.png" alt="" />
		</div>
	</div>
</template>

<style lang="less" scoped>
.activity {
	margin-top: 0.42666rem;
	margin-bottom: 0.42666rem;
	display: flex;
	background: #fff;
	border-top: 1px solid #ddd;
	.activity-item {
		flex: 1;
		width: 1.8666rem;
		height: 1.8666rem;
		img {
			width: 100%;
			height: 100%;
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
		height: 1.8rem;
		background: #ddd;
	}
}
</style>
