<template>
	<div class="home">
		<Header />
		<Banner :banner="swiperList" />
		<Icons :iconsList="iconsList" />
		<Location />
		<Activity />
		<Hot :hotList="hotList" />
		<List :list="likeList" />
		<Vacation :vacationList="vacationList" />
	</div>
</template>
<script>
import Header from './pages/Header';
import Banner from './pages/Banner';
import Icons from './pages/Icons';
import Location from './pages/Location';
import Activity from './pages/Activity';
import Hot from './pages/Hot';
import List from './pages/List';
import Vacation from './pages/Vacation';
import { mapState } from 'vuex';
export default {
	components: {
		Header,
		Banner,
		Icons,
		Location,
		Activity,
		Hot,
		List,
		Vacation,
	},
	data() {
		return {
			hotList: [],
			iconsList: [],
			likeList: [],
			swiperList: [],
			vacationList: [],
			cityName: '',
		};
	},
	computed: {
		...mapState(['city']),
	},
	created() {
		this.axios.get('api/dataHome.json').then((res) => {
			res.data.data.forEach((item) => {
				if (item.city != this.city) {
					this.hotList = item.hotList;
					this.iconsList = item.iconsList;
					this.likeList = item.likeList;
					this.swiperList = item.swiperList;
					this.vacationList = item.vacationList;
					this.cityName = item.city;
				}
			});
		});
	},
	activated() {
		if (this.cityName == this.city) {
			// console.log(this.cityName, this.city);
			console.log(1);
			this.axios.get('api/dataHome.json').then((res) => {
				res.data.data.forEach((item) => {
					if (item.city != this.city) {
						this.hotList = item.hotList;
						this.iconsList = item.iconsList;
						this.likeList = item.likeList;
						this.swiperList = item.swiperList;
						this.vacationList = item.vacationList;
						this.cityName = item.city;
					}
				});
			});
		}
	},
};
</script>

<style lang="less" scoped>
.home {
	background: #f5f5f5;
}
</style>
