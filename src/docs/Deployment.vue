<template>
	<section class="p-6 pt-20 md:pt-6 pb-40">
		<Meta
			title="Deployment"
			description="Vue Play can generate a production-ready distribution folder from your application or publish directly to GitHub Pages using GitHub Actions."
		>
		</Meta>
		<article class="py-6 max-w-2xl mx-auto mb-6 px-12 overflow-auto">
			<h1 class="mb-6 text-4xl">
				Deployment
			</h1>
			<p
				style="margin-top:15px"
				class="text-xl py-2 font-medium"
			>
				Vue Play can generate a production-ready distribution folder from your application or publish directly to GitHub Pages using GitHub Actions.
			</p>
			<p
				style="margin-top:15px"
				class="text-lg"
			>
				By connecting your project to GitHub, it's simple to create publishing pipelines by integrating with third-party services like
				<a
					class="hover:text-emerald-700 text-emerald-600"
					href="https://www.netlify.com/"
					target="_blank"
				>
					Netlify
				</a>
				or
				<a
					target="_blank"
					href="https://www.heroku.com/"
					class="hover:text-emerald-700 text-emerald-600"
				>
					Heroku.
				</a>
			</p>
			<p
				style="margin-top:15px"
				class="text-lg"
			>
				This allows you to effortlessly establish various staging and development environments with complete control over your deployment pipeline.
			</p>
			<p
				style="margin-top:15px"
				class="text-lg"
			>
				Furthermore, Vue Play offers the option to export a production-ready distribution folder, enabling you to host your site on your own server using FTP.
			</p>
			<p
				style="margin-top:15px"
				class="text-lg"
			>
				This flexibility ensures that you are not tied to any specific hosting provider and have the freedom to host your site wherever you prefer.
			</p>
		</article>
	</section>
</template>
<script>
	import Meta from "@/components/Meta.vue";
	export default {
		components: {
			Meta
		},
		data: () => ({})
	};

</script>
<style scoped></style>