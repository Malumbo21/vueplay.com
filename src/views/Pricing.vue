<template>
	<div class="space-y-0 bg-slate-100 flex flex-col h-screen">
		<Meta
			description="Try out the playground or use the full playground without any limitations."
			title="Pricing"
		>
		</Meta>
		<VueNavigator class="z-10" />
		<header>
			<h1 class="text-6xl mt-12 mb-6">
				Pricing
			</h1>
			<h2
				data-v-d443ee1d=""
				style="padding: 0px;margin:40px 0px 20px;font-size:29px"
			>
				<span
					data-v-d443ee1d=""
					style="color: rgb(227, 68, 124);"
				>
				</span>
				Early Bird Offer
			</h2>
			<p
				data-v-d443ee1d=""
				style="margin-top:10px;margin-bottom:40px;padding-right:20px;padding-left:20px"
			>
				Get
				Premium Access For Just
				$49.00 USD / Yr. (inc.) - Out December 2023!
			</p>
		</header>
		<main class="bg-slate-100 grow">
			<section
				style="text-align:left"
				class="bg-slate-100"
			>
				<Pricing style="margin-bottom:50px;max-width:786px;text-align:left;margin-right:auto;margin-left:auto" />
			</section>
			<p
				data-v-d443ee1d=""
				style="margin-top:80px;margin-bottom:50px"
			>
				Upgrade to Premium on
				your profile in
				Studio
			</p>
			<section
				style="text-align:center;margin-top:50px;margin-bottom:10px"
				class="pb-12 bg-slate-100"
			>
				<button
					@click="$router.push('/features')"
					class="bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow"
				>
					Features
				</button> <button
					@click="open('https://studio.vueplay.com')"
					class="bg-purple-500 from-blue-500 bg-gradient-to-br hover:bg-purple-600 hover:from-blue-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow"
				>
					Get Started
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-4 h-4 ml-1 -mt-1 inline-block"
					>
						<path
							fill-rule="evenodd"
							d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
							clip-rule="evenodd"
						/>
						<path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
					</svg> </button>
			</section>
		</main>
		<Footer class="pb-12" />
	</div>
</template>
<script>
	import VueNavigator from "@/components/Navigator.vue";
	import Pricing from "@/components/Pricing.vue";
	import Footer from "@/components/Footer.vue";
	import Meta from "@/components/Meta.vue";
	export default {
		components: {
			VueNavigator,
			Pricing,
			Footer,
			Meta
		},
		data: () => ({}),
		methods: {
			open(url) {
				location.href = url;
			}
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
		display: inline-block;
		text-align: center;
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		margin-bottom: 50px;
	}

	header {
		text-align: center;
		font-family: verdana;
		padding-top: 10px;
		padding-bottom: 10px;
	}

	p {
		font-size: 20px;
		color: #6b6b6bff;
		margin-top: 50px;
		margin-bottom: 15px;
	}

	em {
		font-style: normal;
		color: rgba(238, 76, 215, 1);
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

</style>