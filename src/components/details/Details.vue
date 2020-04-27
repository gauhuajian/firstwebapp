<template>
	<div>
		<Banner />
		<Header />
		<div style="height:800px"></div>
	</div>
</template>
<script>
import Banner from './pages/Banner';
import Header from './pages/Header';
export default {
	components: {
		Banner,
		Header,
	},
};
</script>
