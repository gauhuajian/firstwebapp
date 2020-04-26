<template>
	<div class="icons">
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide v-for="(item, index) in page" :key="index">
				<div class="item-icons" v-for="item2 in item" :key="item2.id">
					<img :src="item2.imgUrl" alt="" />
					<p>{{ item2.title }}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
export default {
	props: ['iconsList'],
	data() {
		return {
			swiperOption: {},
		};
	},
	computed: {
		page() {
			let pages = [];
			this.iconsList.forEach((item, index) => {
				let x = Math.floor(index / 8);
				if (!pages[x]) pages[x] = [];
				pages[x].push(item);
			});
			return pages;
		},
	},
};
</script>
<style lang="less" scoped>
.icons {
	width: 100%;
	background: #fff;
	overflow: hidden;
	.item-icons {
		padding: 0.2rem 0;
		width: 25%;
		float: left;
		img {
			width: 1.25rem;
			height: 1.25rem;
			display: block;
			margin: 0 auto;
		}
		p {
			margin-top: 0.1rem;
			font-size: 0.28rem;
			text-align: center;
			color: #212121;
		}
	}
}
</style>
