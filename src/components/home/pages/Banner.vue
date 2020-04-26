<template>
	<div class="banner">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="item in banner" :key="item.id">
				<img :src="item.imgUrl" alt="" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
export default {
	props: ['banner'],
	data() {
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination',
				},
				loop: true,
				autoplay: true,
			},
		};
	},
};
</script>
<style lang="less" scoped>
@import '~@/assets/css/base.less';
.banner {
	width: 100%;
	height: 0;
	background: #ddd;
	padding-bottom: 26.67%;
	img {
		width: 100%;
		height: 100%;
	}
	/deep/ .swiper-pagination-bullet-active {
		background: @base;
	}
}
</style>
