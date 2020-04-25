<template>
	<div>
		<Header />
		<Banner />
		<Icons />
		<Location />
	</div>
</template>
<script>
import Header from './pages/Header';
import Banner from './pages/Banner';
import Icons from './pages/Icons';
import Location from './pages/Location';
export default {
	components: {
		Header,
		Banner,
		Icons,
		Location,
	},
};
</script>
