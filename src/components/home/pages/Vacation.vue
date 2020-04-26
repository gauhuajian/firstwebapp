<template>
	<div class="vacation">
		<div class="vacation-top">
			周末去哪儿
		</div>
		<div class="vacation-item" v-for="item in vacationList" :key="item.id">
			<div class="item-img">
				<img :src="item.imgUrl" alt="" />
			</div>
			<div class="vacation-msg">
				<p>{{ item.title }}</p>
				<p>{{ item.msg }}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ['vacationList'],
};
</script>
<style lang="less" scoped>
.vacation {
	.vacation-top {
		line-height: 1.06rem;
		font-size: 0.42rem;
		padding: 0 0.2rem;
	}
	.vacation-item {
		margin-bottom: 0.1rem;
		background: #fff;
		font-size: 0.28rem;
		.item-img {
			width: 100%;
			height: 0;
			padding-bottom: 37.4375%;
			img {
				width: 100%;
			}
		}
		.vacation-msg {
			padding: 0 0.1rem;
			p {
				margin-top: 0.2rem;
				font-size: 0.37rem;
			}
			p + p {
				color: #616161;
				font-size: 0.37rem;
			}
		}
	}
}
</style>
