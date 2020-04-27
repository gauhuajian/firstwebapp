<template>
	<div>
		<div class="header-return" v-show="showHeader" @click="toHome">
			<i class="iconfont">&#xe601;</i>
		</div>
		<div class="scroll-header" v-show="!showHeader" :style="{ opacity }">
			<div class="scroll-header-left" @click="toHome">
				<i class="iconfont">&#xe601;</i>
			</div>
			<div class="scroll-header-title">
				金海湖风景区(AAAA景区)
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			showHeader: true,
			opacity: '',
		};
	},
	methods: {
		toHome() {
			this.$router.push('/');
		},
	},
	mounted() {
		let This = this;
		window.addEventListener('scroll', function() {
			let top = this.scrollY;
			if (top > 45) {
				let opacity = top / 130;
				This.opacity = opacity > 1 ? 1 : opacity;
				This.showHeader = false;
			} else {
				This.showHeader = true;
			}
		});
	},
	activated() {
		document.documentElement.scrollTop = 0;
	},
};
</script>
<style lang="less" scoped>
@import '~@/assets/css/base.less';
.header-return {
	position: fixed;
	top: 0.1rem;
	left: 0.1rem;
	box-sizing: border-box;
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 50%;
	background: rgba(0, 0, 0, 0.6);
	padding-left: 0.15rem;
	i {
		color: #fff;
		font-size: 0.42rem;
		font-weight: 700;
	}
}
.scroll-header {
	width: 100%;
	opacity: 0;
	background-color: @base;
	position: fixed;
	top: 0;
	z-index: 99;
	.scroll-header-left {
		position: absolute;
		top: 0.4rem;
		padding: 0 0.3466rem;
		font-size: 0.42666rem;
		color: #fff;
		font-weight: 700;
	}
	.scroll-header-title {
		color: #fff;
		line-height: 1.173333rem;
		text-align: center;
		font-size: 0.42rem;
	}
}
</style>
