<template>
	<div class="bg-slate-100">
		<Meta
			description="24.07.2023 - Release 1.0.5 | Drag and drop Tailwind Hero Icons into the Playground with Vue Play"
			title="Drag and drop Tailwind Hero Icons into the Playground"
		>
		</Meta>
		<VueNavigator class="z-10" />
		<header>
			<h1 class="text-6xl mt-12 mb-6">Roadmap</h1>
		</header>
		<main class="p-6 m-auto max-w-xl container">
			<section class="shadow border mb-6 rounded-lg bg-white p-6">
				<h3>Rebuild vueplay.com</h3><Text
					fontSize="{`default`:{`xs`:{`light`:`16px`}}}"
					color="{`default`:{`xs`:{`light`:`#0a0a0aff`}}}"
					style="margin:0px;margin-top:10px;margin-bottom:10px"
				>Create a new remake of vueplay.com using Theme Arctic with design & SEO improvements.</Text><img
					src="@/assets/arctic.png"
					width="100"
					height="100"
					style="width:100%;height:250px;border-radius:11px;object-fit:cover"
				/>
			</section>
		</main>
		<Footer />
	</div>
</template>
<script>
	import Text from '@vueplayio/text';
	import VueNavigator from "@/components/Navigator.vue";
	import Footer from "@/components/Footer.vue";
	import Meta from "@/components/Meta.vue";
	export default {
		components: {
			Text: Text,
			VueNavigator,
			Footer,
			Meta
		}
	};

</script>
<style scoped>
	body,
	html,
	#app {
		margin-top: 0px;
		margin-left: 0px;
		margin-bottom: 0px;
		margin-right: 0px;
	}

	main {
		font-family: verdana;
	}

	header {
		text-align: center;
		font-family: verdana;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	h2 {
		font-size: 30px;
		margin-top: 100px;
		text-align: left;
	}

	h3 {
		font-weight: bold;
	}

	p {
		font-size: 20px;
		color: #6b6b6bff;
		margin-top: 50px;
		margin-bottom: 15px;
	}

	ul {
		display: inline-block;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	li {
		padding-bottom: 5px;
	}

</style>