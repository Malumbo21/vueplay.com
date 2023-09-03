<template>
	<nav style="min-height:80px"
		class="relative text-right shadow bg-slate-50 w-full top-0 block">
		<div style="width:216px;background-size:contain;background-repeat:no-repeat;margin-left:15px;cursor:pointer;float:left;height:35px;margin-top:23px;margin-bottom:7px"
			@click="$router.push('/')"
			class="sm:inline hidden logo">
		</div><button @click="to('/')"
			:class="{active: route === '/'}"
			class="hover:text-green-700 text-slate-700 pr-2 sm:hidden">
			Home
		</button><button @click="to('/features')"
			:class="{active: route === '/features'}"
			class="hover:text-green-700 text-slate-700 px-2">
			Features
		</button><button @click="to('/pricing')"
			:class="{active: route === '/pricing'}"
			class="hover:text-green-700 text-slate-700 px-2">
			Pricing
		</button> <button @click="submenu=true"
			:class="{active: subRoute}"
			class="relative hover:text-green-700 text-slate-700 pr-2"
			@mouseenter="submenu=true"
			@mouseleave="submenu=false">
			<span class="">
				More
			</span><svg xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24" fill="currentColor"
				class="w-4 h-4 inline-block">
				<path fill-rule="evenodd"
					d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
					clip-rule="evenodd" />
			</svg>
			<div class="bg-slate-50 border-y-slate-100 border-t border-b-2 right-0 top-full absolute shadow pb-2"
				v-if="submenu">
				<button
					@click="submenu=false, to('/feedback')"
					:class="{active: route.includes('/feedback')}"
					class="px-4 py-2 w-full hover:text-green-700 text-slate-700 text-right">
					Feedback
				</button> <button
					@click="submenu=false, to('/search')"
					:class="{active: route.includes('/search')}"
					class="px-4 py-2 w-full hover:text-green-700 text-slate-700 text-right">
					Components
				</button><button
					@click="submenu=false, to('/documentation')"
					:class="{active: route.includes('/documentation')}"
					class="px-4 py-2 w-full hover:text-green-700 text-slate-700 text-right focus:text-green-700 active:font-bold focus:font-bold">
					Documentation
				</button>
			</div>
		</button> <a :class="{active: route === '/app'}"
			style="font-weight:bold;border-top-left-radius:4px;border-bottom-left-radius:4px;height:29px;border-top-right-radius:4px;border-bottom-right-radius:4px;margin-right:10px;padding-top:7px;padding-bottom:7px"
			class="px-3 hover:bg-violet-600 bg-violet-500 from-blue-500 bg-gradient-to-br hover:from-blue-600 text-white duration-300 transition hover:drop-shadow-lg drop-shadow"
			href="https://studio.vueplay.com">
			Studio ⇾
		</a>
	</nav>
</template>
<script>
	export default { data: () => ({ submenu: false,
			next: "" }), computed: { route() { return this
					.next || this.$route.path },
		subRoute() { const routes = ["/documentation",
					"/feedback"
				]; for (const route of routes) { if (this
						.$route.path.includes(route))
					return true } return false } },
		methods: { open(url) { location.href = url }, to(
			to) { this.next = to;
				this.$router.push(to) } } };

</script>
<style scoped>
	nav {
		height: 50px;
	}

	a {
		border-style: none;
		cursor: pointer;
		transition: .3s ease color;
		height: 100%;
	}

	button {
		border-style: none;
		cursor: pointer;
		transition: .3s ease color;
		height: 100%;
	}

	button.active {
		font-weight: bold;
	}

	button.active div {
		font-weight: normal;
	}

	.logo {
		background-image: url(@/assets/vueplay-logo-long.webp);
	}

</style>