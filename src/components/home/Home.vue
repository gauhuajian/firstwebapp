<template>
	<div class="home">
		<Header />
		<Banner />
		<Icons />
		<Location />
		<Activity />
	</div>
</template>
<script>
import Header from './pages/Header';
import Banner from './pages/Banner';
import Icons from './pages/Icons';
import Location from './pages/Location';
import Activity from './pages/Activity';
export default {
	components: {
		Header,
		Banner,
		Icons,
		Location,
		Activity,
	},
};
</script>

<style lang="less" scoped>
.home {
	background: #f5f5f5;
}
</style>
