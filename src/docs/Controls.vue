<template>
	<section class="p-6 pt-20 md:pt-6 pb-40">
		<Meta title="Deployment">
		</Meta>
		<article class="py-6 max-w-2xl mx-auto mb-6 px-12 overflow-auto">
			<h1 class="mb-6 text-4xl">
				Controls
			</h1>
			<p
				style="margin-top:15px"
				class="text-xl py-2 font-medium"
			>
				Properties can be controlled in Vue Play or Elementor by defining a controller type on the property object. For select controller type you can also define an 'option' property with key/value pairs.
			</p>
			<p
				style="margin-top:15px"
				class="text-lg"
			>
				When building components to be imported in Vue Play or as an Elementor Addon, you have the options to define specific controllers by using the built in Vue Play or
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
				class="mb-2 pt-8 text-xl font-medium"
			>
				Example:
			</p>
			<pre>
<code class="shadow-lg drop-shadow-xl rounded language-javascript">
export default {
  props: {
    color: {
      type: String,
      default: '#fff',
      controller: 'color'
    },
    size: {
      type: String,
      default: 'lg',
      controller: 'select',
      options: [
        { key: 'Small', value: 'sm' },
        { key: 'Medium', value: 'md' },
        { key: 'Large', value: 'lg' },
      ]
    }
  }
}
</code> </pre>
			<p
				style="margin-top:15px"
				class="pt-10 pb-10 text-xl font-medium"
			>
				List of all available Controls:
			</p>
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th
							scope="col"
							class="px-6 py-3"
							style="max-width:400px"
						>
							Controllers
						</th>
						<th
							scope="col"
							class="px-6 py-3"
							style="max-width:400px"
						>
							Description
						</th>
						<th
							scope="col"
							class="whitespace-nowrap px-6 py-3"
							style="max-width:400px"
						>
							Vue Play
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-right"
						>
							Elementor
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
								TEXTAREA
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Multiline text area
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Default
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Default
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
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Simple text input
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								NUMBER
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Simpler number input
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								WYSIWYG
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Rich text editor
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								CODE
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Code editor
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								HIDDEN
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Hide controller for property
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								SWITCHER
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Boolean switcher
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								POPOVER_TOGGLE
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Text style
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								SELECT
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Dropdown selection
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								SELECT2
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Select box
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								CHOOSE
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Radio buttons
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								COLOR
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Color selector
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								FONT
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Google fonts selector
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								HIDDEN
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Hide controller for property
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								DATE_TIME
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Date time selector
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								GALLERY
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Multi image selection
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								REPEATER
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Multi WYSIWYG
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								ANIMATION
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Entrance animation effect
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								EXIT_ANIMATION
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Exit animation effect
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								HOVER_ANIMATION
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Hover animation effect
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								URL
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								URL insert
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								MEDIA
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Single image selector
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								IMAGE_DIMENSIONS
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Image width & height
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								ICONS
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Icon selector
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								TEXT_SHADOW
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Text shadow
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								BOX_SHADOW
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Box shadow
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								SLIDER
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Unit slider
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								DIMENSIONS
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Dimension selector
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								HEADING
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Heading between controls
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								RAW_HTML
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								HTML editor
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								BUTTON
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Button to trigger event
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								DIVIDER
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Separator
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								DEPRECATED_NOTICE
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Deprecated notice
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								SLIDER_CLIP
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Unit slider for clip
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								SLIDER_FILTER
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Unit slider for filter
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								CONIC_GRADIENT
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Conic gradient color
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								LINEAR_GRADIENT
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Linear gradient color
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
							</p>
						</td>
					</tr>
					<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
						<th
							scope="row"
							class="px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							<var class="inline-block my-0.5 px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
								RADIAL_GRADIENT
							</var>
						</th>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Radial gradient color
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								Yes
							</p>
						</td>
						<td class="px-6 py-4">
							<p class="text-gray-500 dark:text-gray-400">
								No
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
	import hljs from 'highlight.js';
	export default {
		components: {
			Meta
		},
		mounted() {
			hljs.highlightAll();
		}
	};

</script>
<style>
	pre code.hljs {
		display: block;
		overflow-x: auto;
		padding: 1em;
	}

	code.hljs {
		padding: 3px 5px;
	}

	.hljs {
		background: #333;
		color: #fff;
	}

	.hljs-doctag,
	.hljs-meta-keyword,
	.hljs-name,
	.hljs-strong {
		font-weight: bold;
	}

	.hljs-code,
	.hljs-emphasis {
		font-style: italic;
	}

	.hljs-section,
	.hljs-tag {
		color: #62c8f3;
	}

	.hljs-selector-class,
	.hljs-selector-id,
	.hljs-template-variable,
	.hljs-variable {
		color: #ade5fc;
	}

	.hljs-meta-string,
	.hljs-string {
		color: #a2fca2;
	}

	.hljs-attr,
	.hljs-quote,
	.hljs-selector-attr {
		color: #7bd694;
	}

	.hljs-tag .hljs-attr {
		color: inherit;
	}

	.hljs-attribute,
	.hljs-title,
	.hljs-type {
		color: #ffa;
	}

	.hljs-number,
	.hljs-symbol {
		color: #d36363;
	}

	.hljs-bullet,
	.hljs-template-tag {
		color: #b8d8a2;
	}

	.hljs-built_in,
	.hljs-keyword,
	.hljs-literal,
	.hljs-selector-tag {
		color: #fcc28c;
	}

	.hljs-code,
	.hljs-comment,
	.hljs-formula {
		color: #888;
	}

	.hljs-link,
	.hljs-selector-pseudo,
	.hljs-regexp {
		color: #c6b4f0;
	}

	.hljs-meta {
		color: #fc9b9b;
	}

	.hljs-deletion {
		background: #fc9b9b;
		color: #333;
	}

	.hljs-addition {
		background: #a2fca2;
		color: #333;
	}

	.hljs-subst {
		color: #fff;
	}

	.hljs a {
		color: inherit;
	}

	.hljs a:focus,
	.hljs a:hover {
		color: inherit;
		text-decoration: underline;
	}

	.hljs mark {
		background: #555;
		color: inherit;
	}

</style>