<template class="">
	<div>
		<details
			class="group"
			:open="isOpen"
		>
			<summary
				@click.prevent="isOpen = !isOpen"
				class="hover:bg-slate-50 text-slate-800 border-b duration-75 transition-colors cursor-pointer bg-slate-100 p-4 place-content-between grow flex list-none"
			>
				<span
					style="height:18px"
					class=""
				>
					Title
				</span> <svg
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
				</svg> <svg
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
				<slot class="">
					Lorem ipsum dolor sit amet
				</slot>
			</div>
		</details>
	</div>
</template>
<script>
	export default {
		props: {
			open: {
				default: false,
				type: Boolean
			}
		},
		data: () => ({
			isOpen: false
		}),
		created() {
			this.isOpen = this.open;
		},
		watch: {
			open(open) {
				this.isOpen = open;
			},
			isOpen(open) {
				if (open !== this.open) this.$emit(open ? 'open' : 'close');
			}
		}
	};

</script>
<style scoped></style>