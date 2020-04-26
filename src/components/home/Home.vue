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
		};
	},
	created() {
		this.axios.get('api/dataHome.json').then((res) => {
			this.hotList = res.data.data[0].hotList;
			this.iconsList = res.data.data[0].iconsList;
			this.likeList = res.data.data[0].likeList;
			this.swiperList = res.data.data[0].swiperList;
			this.vacationList = res.data.data[0].vacationList;
		});
	},
};
</script>

<style lang="less" scoped>
.home {
	background: #f5f5f5;
}
</style>
