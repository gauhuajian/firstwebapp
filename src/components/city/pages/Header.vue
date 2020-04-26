<template>
	<header class="city-header">
		<div class="header-left">
			<i class="iconfont">&#xe601;</i>
		</div>
		<div class="header-title">
			选择城市
		</div>
	</header>
</template>
<style lang="less" scoped>
@import '~@/assets/css/base.less';
.city-header {
	width: 100%;
	background-color: @base;
	position: relative;
	.header-left {
		position: absolute;
		top: 0.4rem;
		padding: 0 0.3466rem;
		font-size: 0.42666rem;
		color: #fff;
		font-weight: 700;
	}
	.header-title {
		color: #fff;
		line-height: 1.173333rem;
		text-align: center;
		font-size: 0.42rem;
	}
}
</style>
