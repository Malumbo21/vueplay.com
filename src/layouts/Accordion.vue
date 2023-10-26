<template>
	<div
		class="flex-col flex"
		style="height:24px"
	>
		<details
			class="group"
			v-for="(item, i) in Array(5).fill().map(() => ({ open: true }))"
			:open="item.open"
		>
			<summary class="text-slate-800 border-b duration-75 transition-colors hover:bg-slate-50 cursor-pointer bg-slate-100 p-4 place-content-between grow flex list-none">
				<span style="height:18px">
					Accordion {{i + 1}}
				</span><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-5 h-5 group-open:hidden"
				>
					<path
						fill-rule="evenodd"
						d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
						clip-rule="evenodd"
					/>
				</svg><svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-5 h-5 hidden group-open:inline"
				>
					<path
						fill-rule="evenodd"
						d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
						clip-rule="evenodd"
					/>
				</svg>
			</summary>
			<div class="p-4">
				<p>
					Lorem ipsum dolor sit amet
				</p>
			</div>
		</details>
	</div>
</template>
<script>
	export default {
		data: () => ({})
	};

</script>
<style scoped></style>