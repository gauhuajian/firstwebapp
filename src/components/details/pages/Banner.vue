<template>
	<div class="banner">
		<div class="banner-img" @click="showSwiper">
			<img src="http://img1.qunarzz.com/sight/p0/1609/7a/7ae8ee7831836095a3.water.jpg_600x330_5d562f69.jpg" />
		</div>
		<div class="banner-title">
			金海湖风景区(AAAA景区)
		</div>
		<div class="img-swiper" v-show="showImg" @click="showSwiper">
			<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiper-slide v-for="item in bannerList" :key="item.id">
					<img :src="item.imgUrl" alt="" />
				</swiper-slide>
				<!-- Optional controls -->
			</swiper>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			showImg: false,
			swiperOption: {
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
				},
			},
			bannerList: [
				{
					id: '01',
					imgUrl:
						'http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg',
				},
				{
					id: '02',
					imgUrl:
						'http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg',
				},
				{
					id: '03',
					imgUrl:
						'http://img1.qunarzz.com/sight/p0/1609/e4/e45d9cb483478459a3.water.jpg_r_800x800_a044eb00.jpg',
				},
			],
		};
	},
	methods: {
		showSwiper() {
			this.showImg = !this.showImg;
		},
	},
};
</script>
<style lang="less" scoped>
.banner {
	position: relative;
	.banner-img {
		width: 100%;
		overflow: hidden;
		height: 0;
		padding-bottom: 55%;
		img {
			width: 100%;
		}
	}
	.banner-title {
		position: absolute;
		bottom: 0.4rem;
		left: 2.7rem;
		font-size: 0.37rem;
		color: #fff;
	}
	.img-swiper {
		background: #000;
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 100%;
		}
	}
	.swiper-pagination-fraction,
	.swiper-pagination-custom,
	.swiper-container-horizontal > .swiper-pagination-bullets {
		bottom: 0.6rem;
		font-size: 0.32rem;
		color: #fff;
	}
}
</style>
