<template>
	<Accordion title="Carousel">
		<Carousel></Carousel>
	</Accordion>
	<Accordion title="Description">
	</Accordion>
</template>
<script>
	import Carousel from '@/vueplay/Carousel.vue';
	import Accordion from '@/vueplay/Accordion.vue';
	export default {
		components: {
			Carousel: Carousel,
			Accordion: Accordion
		},
		data: () => ({})
	};

</script>
<style scoped></style>