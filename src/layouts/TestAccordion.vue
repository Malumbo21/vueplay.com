<template>
	<Accordion>
		<b title="This is the title">
			bold text is awesome
		</b>
	</Accordion>
	<Accordion>
		<b title="This is the title">
			bold text is awesome 2
		</b>
	</Accordion>
	<Accordion>
		<b title="This is the title">
			bold text is awesome 3
		</b>
	</Accordion>
	<Accordion group="group2">
		<b title="This is the title">
			bold text is awesome 3
		</b>
	</Accordion>
	<Accordion group="group2">
		<b title="This is the title">
			bold text is awesome 3
		</b>
	</Accordion>
	<Accordion group="group2">
		<b title="This is the title">
			bold text is awesome 3
		</b>
	</Accordion>
</template>
<script>
	import Accordion from '@/layouts/Accordion.vue';
	export default {
		components: {
			Accordion: Accordion
		},
		data: () => ({})
	};

</script>
<style scoped></style>