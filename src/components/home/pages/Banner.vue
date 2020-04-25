<template>
	<div class="banner">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="item in bannerList" :key="item.id">
				<img :src="item.imgUrl" alt="" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
export default {
	data() {
		return {
			bannerList: [
				{ id: 0, imgUrl: require('@/assets/img/swiper1.jpg') },
				{ id: 1, imgUrl: require('@/assets/img/swiper2.jpg') },
				{ id: 2, imgUrl: require('@/assets/img/swiper3.jpg') },
			],
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
