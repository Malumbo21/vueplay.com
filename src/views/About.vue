<template>
	<div class="bg-slate-100 flex flex-col h-screen overflow-auto">
		<Meta />
		<VueNavigator class="mb-5 z-20" />
		<div
			class="header"
			style="l"
		>
			<div
				style="background-size:contain;background-position:center;background-repeat:no-repeat;width:266px;height:125px;margin-right:auto;margin-left:auto;margin-top:0px;position:relative;max-width:calc(100% - 100px);margin-bottom:-20px;left:5px"
				class="logo"
			>
			</div>
			<div
				style="text-shadow:0px 0px"
				class="text-5xl mt-2"
			>
				<em style="margin-top:28px">Drag & Drop</em>
				<div class="mt-4">
					Builder
				</div>
			</div>
			<h1
				style="width:calc(100% - 40px);margin-top:40px;margin-bottom:40px;margin-left:20px;height:37.99406433105469px"
				class="text-xl"
			>
				Create Vue Applications
				using a Visual Designer
			</h1>
		</div>
		<main
			style="width:100%"
			class="grow"
		>
			<section style="width:100%">
				<button
					@click="$router.push('/features')"
					class="hover:bg-slate-300 bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow"
				>
					Features
				</button> <button
					@click="$router.push('/pricing')"
					class="bg-slate-200 transition-shadow hover:drop-shadow-lg drop-shadow"
				>
					Pricing
				</button> <button
					@click="open('https://studio.vueplay.com')"
					class="bg-purple-500 from-blue-500 bg-gradient-to-br hover:bg-purple-600 hover:from-blue-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow"
				>
					Open Studio
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
			<section data-allow-mismatch="">
				<iframe
					src="https://www.youtube.com/embed/videoseries?si=s6G0b6IipaV4VZIg&amp;list=PLwvel81e87FywGrpfv_1qoruzBnHV9zZ5"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen=""
					class="shadow-slate-200 shadow-xl mx-auto"
					style="margin-right:auto;margin-left:auto;margin-top:70px;position:relative;margin-bottom:50px;max-width:calc(100% - 40px);aspect-ratio:16/9;width:700px"
				></iframe>
				<section
					style="width:100%;text-align:center"
					class="pb-16 bg-white"
				>
					<div class="justify-center mb-10 pb-5 bg-gradient-to-b from-slate-100 pt-10 bg-white flex">
						<div class="md:scale-100 sm:scale-90 sm:text-sm text-sm scale-75 md:text-base font-bold uppercase text-indigo-900 items-center place-content-between inline-flex p-5 max-w-screen-sm grow mx-auto">
							<div class="items-center place-content-between flex-col inline-flex h-28 p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="fill-emerald-500 animate-none w-10 h-10"
								>
									<path
										fill-rule="evenodd"
										d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
										clip-rule="evenodd"
									/>
								</svg>
								<h3 class="whitespace-nowrap mt-3">
									Vue Play
								</h3>
							</div>
							<div class="mb-11 h-9">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="animate-pulse fill-slate-400 w-6 h-6"
								>
									<path
										fill-rule="evenodd"
										d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div class="items-center place-content-between flex-col inline-flex h-28 p-2"><svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="animate-pulse fill-teal-500 h-9 w-9"
								>
									<path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
								</svg>
								<h3 class="mt-3">
									Element
								</h3>
							</div>
							<div class="mb-11 h-9">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="animate-pulse fill-slate-400 w-6 h-6"
								>
									<path
										fill-rule="evenodd"
										d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div class="items-center place-content-between flex-col inline-flex h-28 p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="fill-cyan-500 animate-pulse h-9 w-9"
								>
									<path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
								</svg>
								<h3 class="mt-3">
									Component
								</h3>
							</div>
							<div class="mb-11 h-9">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="animate-pulse fill-slate-400 w-6 h-6"
								>
									<path
										fill-rule="evenodd"
										d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div class="items-center place-content-between flex-col inline-flex h-28 p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="h-9 w-9 fill-sky-500 animate-pulse"
								>
									<path
										fill-rule="evenodd"
										d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z"
										clip-rule="evenodd"
									/>
								</svg>
								<h3 class="mt-3">
									Layout
								</h3>
							</div>
							<div class="mb-11 h-9">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="animate-pulse fill-slate-400 w-6 h-6"
								>
									<path
										fill-rule="evenodd"
										d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div class="items-center place-content-between flex-col inline-flex h-28 p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="fill-blue-500 mt-1 w-8 h-8"
								>
									<path d="M10.5 18a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
									<path
										fill-rule="evenodd"
										d="M7.125 1.5A3.375 3.375 0 003.75 4.875v14.25A3.375 3.375 0 007.125 22.5h9.75a3.375 3.375 0 003.375-3.375V4.875A3.375 3.375 0 0016.875 1.5h-9.75zM6 4.875c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125h-9.75A1.125 1.125 0 016 19.125V4.875z"
										clip-rule="evenodd"
									/>
								</svg>
								<h3 class="mt-3">
									App
								</h3>
							</div>
						</div>
					</div>
					<h2
						style="margin-bottom:100px;color:#15244fff;margin-top:75px;width:calc(100% - 40px);margin-left:20px"
						class="text-4xl md:text-slate-900 font-bold"
						data-allow-mismatch=""
					>
						{{new Intl.NumberFormat('en-US', { useGrouping: true }).format(count).replace(/,/g, ' ')}} Registered Users 🚀
					</h2>
					<h2
						style="margin-bottom:50px;max-width:450px;color:#15244fff"
						class="decoration-slate-500 mx-auto md:text-slate-900 text-3xl font-bold"
					>
						Export Vue.js Single File Components to WordPress Elementor Addons
					</h2>
					<div
						class="items-center place-content-between justify-center flex"
						style="margin-bottom:70px"
					>
						<img
							src="@/assets/vue-logo.png"
							width="70"
							height="70"
						/>
						<div class=""><svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="mx-2 fill-slate-500 w-10 h-10"
							>
								<path
									fill-rule="evenodd"
									d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								/>
							</svg></div><img
							src="@/assets/wordpress-logo.png"
							width="70"
							height="70"
						/><svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="mx-2 fill-slate-500 w-10 h-10"
						>
							<path
								fill-rule="evenodd"
								d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
								clip-rule="evenodd"
							/>
						</svg><img
							src="@/assets/elementor-logo.svg"
							width="70"
							height="70"
						/>
					</div>
					<h2
						style="margin-bottom:40px;max-width:340px;margin-top:100px;color:#0b1329ff"
						class="font-semibold mx-auto text-lg"
					>
						Release your full potential with Vue Play, a Vue.js Drag and Drop Component / Website Builder.
					</h2> <button
						@click="open('https://studio.vueplay.com')"
						class="inline-block mx-auto bg-purple-500 from-blue-500 bg-gradient-to-br hover:bg-purple-600 hover:from-blue-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow"
						style="width:260px;margin-left:8px;margin-top: 20px; margin-bottom:20px"
					>
						Start building for free
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
						</svg> </button> <a
						class="bg-slate-50 hover:bg-slate-100 rounded-lg"
						style="width:250px;display:block;border:1px;border-style:solid;border-color:#333;color:#333;margin-top:15px;margin-left:auto;margin-right:auto"
						href="https://github.com/marketplace/vue-play-studio"
						target="_blank"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="40"
							height="40"
							viewBox="0 0 24 24"
							style="float:left;padding:5px 0px 5px 12px"
							class="mt-1"
						>
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg> <span style="padding-top:13px;display:inline-block;font-weight:bold;padding-bottom:12px;margin-left:-10px">
							GitHub marketplace
						</span></a><a
						href="https://madewithvuejs.com/p/vue-play/shield-link"
						target="_blank"
						class="inline-block mt-12 mx-auto"
						data-allow-mismatch=""
					><img src="https://madewithvuejs.com/storage/repo-shields/4476-shield.svg" /></a> <a
						href="https://www.producthunt.com/posts/vue-playground?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-vue&#0045;playground"
						target="_blank"
						v-if="false"
					>
						<img
							src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=392346&theme=light"
							alt="Vue&#0032;Playground - Visual&#0032;drag&#0032;and&#0032;drop&#0032;builder&#0032;for&#0032;vue&#0032;components&#0032;and&#0032;apps | Product Hunt"
							style="width: 250px; height: 54px;;margin:auto"
							width="250"
							height="54"
						/></a>
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
	export default {
		inject: ['authUsers'],
		components: {
			VueNavigator,
			Footer,
			Meta
		},
		data: () => ({
			count: '2500+'
		}),
		async mounted() {
			try {
				this.count = (await this.authUsers.service('users')
						.count({}))
					?.count;
			} catch (e) {
				console.log('err', e);
			}
		},
		methods: {
			open(url) {
				location.href = url;
			}
		},
		head() {
			return {
				title: 'About',
				titleTemplate: '%s | Health Tips',
				meta: [{
					property: 'og:title',
					content: 'My Awesome About'
				}, {
					property: 'og:description',
					content: 'This is an amazing website!'
				}, {
					property: 'og:image',
					content: 'https://example.com/image.jpg'
				}, {
					property: 'og:url',
					content: 'https://example.com/page'
				}, {
					property: 'og:type',
					content: 'website'
				}, {
					name: 'twitter:card',
					content: 'summary_large_image'
				}, {
					name: 'twitter:title',
					content: 'My Awesome Page'
				}, {
					name: 'twitter:description',
					content: 'This is an amazing website!'
				}, {
					name: 'twitter:image',
					content: 'https://example.com/image.jpg'
				}]
			};
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
	}

	.header {
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
		padding-right: 10px;
		padding-bottom: 10px;
		padding-left: 10px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		font-size: 17px;
		margin-right: 10px;
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