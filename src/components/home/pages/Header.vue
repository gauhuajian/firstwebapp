<template>
	<div class="home-header">
		<div class="header-left">
			<i class="iconfont">&#xe601;</i>
		</div>
		<div class="header-search">
			<i class="iconfont">&#xe613;</i>
			<div class="search">输入城市/景点/游玩主题</div>
		</div>

		<div class="header-right">
			<span @click="toCity">{{ city }}</span>
			<i class="iconfont">&#xe606;</i>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	methods: {
		toCity() {
			this.$router.push('/city');
		},
	},
	computed: {
		...mapState(['city']),
	},
};
</script>
<style lang="less" scoped>
@import '~@/assets/css/base.less';
.home-header {
	width: 100%;
	height: 1.173333rem;
	background-color: @base;
	display: flex;
	justify-content: center;
	align-items: center;
	.header-left {
		padding: 0 0.3466rem;
		width: 1.06666rem;
		font-size: 0.42666rem;
		color: #fff;
		font-weight: 700;
	}
	.header-search {
		display: flex;
		flex: 1;
		height: 0.8rem;
		padding: 0 0.3466rem;
		border-radius: 0.15rem;
		background: #fff;
		justify-content: center;
		align-content: center;
		color: #e4e7ea;
		i {
			flex: 1;
			line-height: 0.8rem;
			font-size: 0.42666rem;
		}
		.search {
			flex: 9;
			line-height: 0.8rem;
			font-size: 0.37rem;
		}
	}
	.header-right {
		padding: 0 0.3466rem;
		font-size: 0.42666rem;
		font-size: 0.37rem;
		vertical-align: baseline;
		color: #fff;
	}
}
</style>
