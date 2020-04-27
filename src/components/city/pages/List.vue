<template>
	<div ref="container" class="container">
		<div>
			<!-- hot -->
			<div class="hot">
				<div class="hot-top">
					热门城市
				</div>
				<ul class="hot-list">
					<li class="hot-item" v-for="item in hotCities" :key="item.id" @click="toHome(item.name)">
						{{ item.name }}
					</li>
				</ul>
			</div>

			<!-- sort -->
			<div class="sort">
				<div class="sort-top">
					字母排序
				</div>
				<ul class="sort-list">
					<li class="sort-item" v-for="(val, key) in cities" :key="val.id" @click="changeSort(key)">
						{{ key }}
					</li>
				</ul>
			</div>
			<!-- list -->
			<div class="list" v-for="(val, key) in cities" :key="val.id">
				<div class="list-top" :ref="key">
					{{ key }}
				</div>
				<ul class="list-list">
					<li class="list-item" v-for="item in val" :key="item.id" @click="toHome(item.name)">
						{{ item.name }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll';
import { mapMutations } from 'vuex';
export default {
	props: ['hotCities', 'cities'],
	data() {
		return {
			scroll: '',
		};
	},
	methods: {
		changeSort(sortName) {
			this.scroll.scrollToElement(this.$refs[sortName][0], 500);
		},
		toHome(cityName) {
			this.$router.push('/');
			this.changeCity(cityName);
		},
		...mapMutations(['changeCity']),
	},
	updated() {
		this.scroll = new BScroll(this.$refs['container']);
	},
};
</script>
<style lang="less" scoped>
.container {
	position: absolute;
	overflow: hidden;
	top: 1.173333rem;
	left: 0;
	right: 0;
	bottom: 0;
	background: #f5f5f5;
}
.hot {
	.hot-top {
		line-height: 0.8533rem;
		font-size: 0.37333rem;
		padding: 0 0.4rem;
	}
	.hot-list {
		overflow: hidden;
		background: #fff;
		position: relative;
		&::before {
			content: ' ';
			position: absolute;
			width: 33.33%;
			height: 100%;
			left: 33.33%;
			border-left: 1px solid #ddd;
			border-right: 1px solid #ddd;
		}
		.hot-item {
			position: relative;
			width: 33.333%;
			line-height: 1rem;
			float: left;
			font-size: 0.42rem;
			color: #212121;
			text-align: center;
			border-bottom: 1px solid #ddd;
		}
	}
}

.sort {
	.sort-top {
		line-height: 0.8533rem;
		font-size: 0.37333rem;
		padding: 0 0.4rem;
	}
	.sort-list {
		overflow: hidden;
		background: #fff;

		.sort-item {
			width: 16.6666%;
			line-height: 1rem;
			float: left;
			font-size: 0.42rem;
			color: #212121;
			text-align: center;
		}
	}
}

.list {
	.list-top {
		line-height: 0.8533rem;
		font-size: 0.37333rem;
		padding: 0 0.4rem;
	}
	.list-list {
		overflow: hidden;
		background: #fff;
		position: relative;
		&::before {
			content: ' ';
			position: absolute;
			width: 25%;
			height: 100%;
			left: 25%;
			border-left: 1px solid #ddd;
			border-right: 1px solid #ddd;
		}
		&::after {
			content: ' ';
			position: absolute;
			width: 0%;
			height: 100%;
			left: 75%;
			border-left: 1px solid #ddd;
		}
		.list-item {
			position: relative;
			width: 25%;
			line-height: 1rem;
			float: left;
			font-size: 0.42rem;
			color: #212121;
			text-align: center;
			border-bottom: 1px solid #ddd;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}
</style>
