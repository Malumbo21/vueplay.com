<template>
	<footer
		style="width:100%;text-align:center;box-sizing:border-box;display:inline-block"
		class="py-20 text-sky-100 bg-sky-950 text-xs md:text-md sm:text-sm px-6">

		<p class="pb-3">
			© All rights reserved -
			Siglar Development AS {{
new Date().getUTCFullYear()
}}
		</p> <router-link
			to="/release-log">
			Release log
		</router-link>
		-
		<router-link
			to="/terms-of-service">
			Terms of Service
		</router-link>-<router-link
			to="/privacy-policy">
			Privacy Policy
		</router-link>
	</footer>
</template>
<script>
	export default { data: () => ({}) };

</script>
<style scoped>
	footer {
		font-family: verdana;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		color: #ffffffff;
	}

</style>