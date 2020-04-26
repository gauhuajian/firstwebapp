<template>
	<div class="city">
		<Header />
		<Hot :hotCities="hotCities" />
		<Sort :cities="cities" />
		<List :cities="cities" />
	</div>
</template>
<script>
import Header from './pages/Header';
import Hot from './pages/Hot';
import Sort from './pages/Sort';
import List from './pages/List';
export default {
	components: {
		Header,
		Hot,
		Sort,
		List,
	},
	data() {
		return {
			cities: {},
			hotCities: [],
		};
	},
	created() {
		this.axios.get('api/city.json').then((res) => {
			this.cities = res.data.data.cities;
			this.hotCities = res.data.data.hotCities;
		});
	},
};
</script>
<style lang="less" scoped>
.city {
	background: #f5f5f5;
}
</style>
