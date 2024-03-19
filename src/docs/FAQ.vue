<template>
	<section class="p-6 pt-20 md:pt-6 pb-40">
		<Meta
			title="Frequently Asked Questions"
			description="Vue Play was created to simplify web development in a visual way, inspired by several tools like Elementor, Adobe Photoshop, Adobe Flash and GameMaker."
		>
		</Meta>
		<article class="py-6 max-w-2xl mx-auto mb-6 px-12 overflow-auto">
			<h1 class="mb-12 text-4xl">
				Frequently Asked Questions
			</h1>
			<Accordion title="Why was Vue Play created?">
				<p
					class="text-lg"
					style="margin-bottom:10px"
				>
					Vue Play was created to simplify web development in a visual way, inspired by several tools like
					<a
						href="https://elementor.com/"
						target="_blank"
						class="hover:text-emerald-700 text-emerald-600"
					>
						Elementor,
					</a> <a
						href="https://www.adobe.com/no/products/photoshop"
						target="_blank"
						class="hover:text-emerald-700 text-emerald-600"
					>
						Adobe Photoshop,
					</a> <a
						href="https://www.adobe.com/no/products/flash"
						target="_blank"
						class="hover:text-emerald-700 text-emerald-600"
					>
						Adobe Flash
					</a>
					and
					<a
						href="https://gamemaker.io"
						target="_blank"
						class="hover:text-emerald-700 text-emerald-600"
					>
						GameMaker.
					</a>
				</p>
				<p
					class="text-lg"
					style="margin-bottom:10px"
				>
					The main difference is that it is built up the "Vue.js" way which opens up alot of opportunities, like building everything from ground up with components.
				</p>
				<p class="text-lg">
					It also opens possibilities to connect Vue Play with frameworks like
					<a
						href="https://www.electronjs.org/"
						target="_blank"
						class="hover:text-emerald-700 text-emerald-600"
					>
						Electron
					</a>
					to create Native Software for Windows, Mac & Linux or
					<a
						href="https://capacitorjs.com/"
						target="_blank"
						class="hover:text-emerald-700 text-emerald-600"
					>
						Capacitor
					</a>
					by Ionic to build IOS and Android apps in the future!
				</p>
			</Accordion>
			<Accordion title="What are Components in Vue Play?">
				<p class="text-lg">
					Vue Play is built up using Vue.js SFC's (Vue Single File Components) which are files ending with the .vue extension. This files houses specific functionalities + templates and works like modules in a webpage. This modules will be available as Components in Vue Play, to be dragged into any playground. It can be authored by developers from us or the community.
				</p>
			</Accordion>
			<Accordion title="How can I insert HTML snippets?">
				<span class="text-lg">
					You can paste any HTML block into the playground using the Context Menu (Three Dots) or Keyboard Shortcut
				</span><span
					class="px-1.5 rounded-md p-1 text-emerald-800 bg-emerald-300 text-lg"
					style="white-space:nowrap"
				>
					{{ isMac ? 'CMD + V' : 'CTRL + V' }}
				</span><span class="text-lg">
					while you are in the playground.
				</span>
			</Accordion>
			<Accordion title="I have a question, found a bug or have a feature request. What do I do?">
				<p class="text-lg">
					Feedback can be reported
					<router-link
						to="/feedback"
						class="hover:text-emerald-700 text-emerald-600"
					>
						on the feedback page
					</router-link>
					or on
					<a
						href="https://github.com/vueplayground/vueplay.com"
						target="_blank"
						class="hover:text-emerald-700 text-emerald-600"
					>
						GitHub issues.
					</a>
				</p>
			</Accordion>
		</article>
	</section>
</template>
<script>
	import Meta from "@/components/Meta.vue";
	import Accordion from "@/vueplay/Accordion.vue";
	export default {
		components: {
			Meta,
			Accordion
		},
		data: () => ({}),
		computed: {
			isMac() {
				return /(Mac|iPhone|iPod|iPad)/i.test(navigator?.userAgentData?.platform || navigator?.platform);
			}
		}
	};

</script>
<style scoped></style>