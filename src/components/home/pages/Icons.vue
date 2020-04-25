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
	data() {
		return {
			iconsList: [
				{
					id: '0',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '景点门票',
				},
				{
					id: '1',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '景点门票',
				},
				{
					id: '2',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '景点门票',
				},
				{
					id: '3',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '景点门票',
				},
				{
					id: '4',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '景点门票',
				},
				{
					id: '5',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '景点门票',
				},
				{
					id: '6',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '景点门票',
				},
				{
					id: '7',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '景点门票',
				},
				{
					id: '8',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '景点门票',
				},
				{
					id: '9',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '景点门票',
				},
				{
					id: '10',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '景点门票',
				},
			],
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
