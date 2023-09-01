<template>
	<div
		class="bg-slate-100 flex flex-col h-screen overflow-auto">
		<Meta />
		<VueNavigator class="z-20" />
		<header class="">
			<div style="padding-top:10px;padding-bottom:10px;margin-top:-10px"
				@click="$router.push('/pricing')"
				class="hover:bg-slate-200 cursor-pointer">
				<h2 data-v-d443ee1d=""
					style="padding: 0px; margin: 0px;;height:23px"
					class="text-slate-700">
					<span
						data-v-d443ee1d=""
						style="color:#eb7c5eff;font-weight:bold">
						Limited Offer!
					</span>
					Get Premium Access
					For Just
					<span
						style="text-decoration: line-through;font-size:14px">
						$199.00
					</span> <span
						style="font-weight:bold;font-size:14px"
						class="ml-1">
						$49.00
					</span>
					USD
					Per Year
				</h2>
			</div>
			<div style="background-size:contain;background-position:center;background-repeat:no-repeat;width:266px;height:125px;margin-right:auto;margin-left:auto;margin-top:40px;position:relative;max-width:calc(100% - 100px);margin-bottom:-20px;left:5px"
				class="logo">
			</div>
			<div style="text-shadow:0px 0px"
				class="text-5xl mt-2">
				<em
					style="margin-top:28px">
					Drag & Drop
				</em>
				<div class="mt-4">
					Builder
				</div>
			</div>
			<h1 style="width:calc(100% - 40px);margin:auto;margin-top:40px;margin-bottom:40px"
				class="text-xl">
				Create Vue Applications
				using a Visual Designer
			</h1>
		</header>
		<main style="width:100%"
			class="grow">
			<section style="width:100%">
				<button
					@click="$router.push('/features')"
					class="hover:bg-slate-300 bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow">
					Features
				</button> <button
					@click="$router.push('/pricing')"
					class="bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow">
					Pricing
				</button><button
					@click="open('https://studio.vueplay.com')"
					class="bg-purple-500 from-blue-500 bg-gradient-to-br hover:bg-purple-600 hover:from-blue-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow">
					Open Studio ⇾
				</button>
			</section>
			<section>
				<div style="background-size:contain;background-position:center;background-repeat:no-repeat;margin-right:auto;margin-left:auto;margin-top:70px;position:relative;margin-bottom:50px;max-width:calc(100% - 40px);aspect-ratio:1/.517;box-sizing:border-box;width:700px"
					class="shadow-slate-200 shadow-xl screenshot">
				</div>
				<section
					style="width:100%;text-align:center">
					<a class="bg-slate-50 hover:bg-slate-100 rounded-lg"
						style="margin:auto;width:250px;display:block;border:1px;border-style:solid;border-color:#4599DF;color:#4599DF"
						href="https://www.facebook.com/groups/vueplay"
						target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 48 48"
							width="48px"
							height="48px"
							style="float:left;padding:5px 0px 5px 5px">
							<path
								fill="#039be5"
								d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
							<path
								fill="#fff"
								d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" />
						</svg> <span
							style="display:inline-block;font-weight:bold;padding-top:13px;padding-bottom:12px">
							Follow us on
							Facebook
						</span></a><a
						class="bg-slate-50 hover:bg-slate-100 rounded-lg"
						style="margin:auto;width:250px;display:block;border:1px;border-style:solid;border-color:#5AB3F0;color:#5AB3F0;margin-top:15px"
						href="https://t.me/vueplay"
						target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 48 48"
							width="48px"
							height="48px"
							style="float:left;padding:5px 0px 5px 5px">
							<path
								fill="#29b6f6"
								d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
							<path
								fill="#fff"
								d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z" />
							<path
								fill="#b0bec5"
								d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z" />
							<path
								fill="#cfd8dc"
								d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z" />
						</svg> <span
							style="padding-top:13px;display:inline-block;font-weight:bold;padding-bottom:12px">
							Follow us on
							Telegram
						</span></a> <a
						href="https://www.producthunt.com/posts/vue-playground?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-vue&#0045;playground"
						target="_blank"
						v-if="false">
						<img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=392346&theme=light"
							alt="Vue&#0032;Playground - Visual&#0032;drag&#0032;and&#0032;drop&#0032;builder&#0032;for&#0032;vue&#0032;components&#0032;and&#0032;apps | Product Hunt"
							style="width: 250px; height: 54px;;margin:auto"
							width="250"
							height="54" /></a>
				</section>
			</section>
		</main>
		<Footer class="" />
	</div>
</template>
<script>
	import VueNavigator from "@/components/Navigator.vue";
	import Footer from "@/components/Footer.vue";
	import Meta from "@/components/Meta.vue";
	export default { components: { VueNavigator,
			Footer, Meta }, data: () =>
		({}), methods: { open(
			url) { location.href =
				url } } };

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
		display: inline-block;
		text-align: center;
		width: 100%;
		margin-bottom: 50px;
	}

	header {
		text-align: center;
		font-family: verdana;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	em {
		font-style: normal;
		color: #74AE86;
		background: linear-gradient(45deg, #394657 0%, #74AE86 100%);
		background-clip: text;
		text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-background-clip: text;
		-moz-text-fill-color: transparent;
	}

	section button {
		border: none;
		padding-top: 10px;
		padding-right: 15px;
		padding-bottom: 10px;
		padding-left: 15px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		font-size: 17px;
		margin-right: 20px;
		cursor: pointer;
		transition: .5s ease background;
	}

	section button:last-child {
		margin-right: 0px;
	}

	.logo {
		background-image: url(@/assets/vueplay-logo-long.webp);
	}

	.screenshot {
		background-image: url(@/assets/screenshot.webp);
	}

	@media only screen and (max-width: 600px) {
		.logo {
			left: 0px;
		}
	}

</style>