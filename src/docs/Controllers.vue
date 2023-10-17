<template>
	<section class="p-6 pt-20 md:pt-6 pb-40">
		<Meta title="Deployment">
		</Meta>
		<article class="py-6 max-w-2xl mx-auto mb-6 px-12 overflow-auto">
			<h1 class="mb-6 text-4xl">
				Controllers
			</h1>
			<p
				style="margin-top:15px"
				class="text-xl py-2 font-medium"
			>
				Properties can be controlled in Vue Play or Elementor by defining a controller type on the property object.
			</p>
			<p
				style="margin-top:15px"
				class="text-lg"
			>
				When building components to be imported in Vue Play or Elementor, you have the options to define specific controllers by using the built in Vue Play or
				<a
					class="hover:text-blue-700 text-blue-600"
					href="https://developers.elementor.com/docs/editor-controls/"
					target="_blank"
				>
					Elementor Editor Controls
				</a>
				.
			</p>
			<p
				style="margin-top:15px"
				class="pt-8 text-xl font-medium"
			>
				Example:
			</p>
			<pre>
<code style="margin-top:15px" class="text-lg">
export default {
  props: {
    color: {
      type: String,
      default: '#fff',
      ElementorController: 'COLOR',
      VuePlayController: 'InputColor'
    }
  }
}
</code> </pre>
			<p
				style="margin-top:15px"
				class="pb-3 text-xl py-2 font-medium"
			>
				List of all available Vue Play Controls:
			</p>
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th
							scope="col"
							class="px-6 py-3"
							style="max-width:400px"
						>
							Controller
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-right"
						>
							Description
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT
							</var>
						</th>
						<td class="px-6 py-4 text-right">
							<p class="text-gray-500 dark:text-gray-400">
								Description
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT
							</var>
						</th>
						<td class="px-6 py-4 text-right">
							<p class="text-gray-500 dark:text-gray-400">
								Description
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT
							</var>
						</th>
						<td class="px-6 py-4 text-right">
							<p class="text-gray-500 dark:text-gray-400">
								Description
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT
							</var>
						</th>
						<td class="px-6 py-4 text-right">
							<p class="text-gray-500 dark:text-gray-400">
								Description
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT
							</var>
						</th>
						<td class="px-6 py-4 text-right">
							<p class="text-gray-500 dark:text-gray-400">
								Description
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT
							</var>
						</th>
						<td class="px-6 py-4 text-right">
							<p class="text-gray-500 dark:text-gray-400">
								Description
							</p>
						</td>
					</tr>
				</tbody>
			</table>
			<p
				style="margin-top:15px"
				class="pb-3 pt-8 text-xl font-medium"
			>
				List of all available Elementor Controls:
			</p>
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th
							scope="col"
							class="px-6 py-3"
							style="max-width:400px"
						>
							Controller
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-right"
						>
							Description
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT
							</var>
						</th>
						<td class="px-6 py-4 text-right">
							<p class="text-gray-500 dark:text-gray-400">
								Description
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT
							</var>
						</th>
						<td class="px-6 py-4 text-right">
							<p class="text-gray-500 dark:text-gray-400">
								Description
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT
							</var>
						</th>
						<td class="px-6 py-4 text-right">
							<p class="text-gray-500 dark:text-gray-400">
								Description
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT
							</var>
						</th>
						<td class="px-6 py-4 text-right">
							<p class="text-gray-500 dark:text-gray-400">
								Description
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT
							</var>
						</th>
						<td class="px-6 py-4 text-right">
							<p class="text-gray-500 dark:text-gray-400">
								Description
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT
							</var>
						</th>
						<td class="px-6 py-4 text-right">
							<p class="text-gray-500 dark:text-gray-400">
								Description
							</p>
						</td>
					</tr>
				</tbody>
			</table>
		</article>
	</section>
</template>
<script>
	import Meta from "@/components/Meta.vue";
	export default {
		components: {
			Meta
		}
	};

</script>
<style scoped></style>