<template>
	<details
		class="group"
		:class="'vp-accordion-' + this.group"
		:open="isOpen"
	>
		<summary
			@click.prevent="isOpen = !isOpen"
			class="font-medium text-slate-900 hover:bg-slate-50 border-b duration-75 transition-colors cursor-pointer bg-slate-100 p-4 place-content-between grow flex list-none"
		>
			<span class="overflow-hidden whitespace-nowrap text-ellipsis">
				{{ title }}
			</span> <svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="min-w-max w-5 h-5 group-open:hidden"
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
				class="min-w-max w-5 h-5 hidden group-open:inline"
			>
				<path
					fill-rule="evenodd"
					d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
					clip-rule="evenodd"
				/>
			</svg>
		</summary>
		<div class="bg-slate-50 p-4">
			<slot>
				Lorem ipsum dolor sit amet
			</slot>
		</div>
	</details>
</template>
<script>
	export default {
		props: {
			title: {
				type: String,
				default: 'Title'
			},
			open: {
				type: Boolean,
				default: false
			},
			group: {
				type: String,
				default: 'accordion'
			}
		},
		emits: ['open', 'close'],
		data: () => ({
			isOpen: false,
			id: 1
		}),
		mounted() {
			if (!document.accordion) document.accordion = {};
			let i = 1;
			for (const element of document.querySelectorAll('.vp-accordion-' + this.group)) {
				if (this.$el === element) this.id = i;
				i++;
			}
			if (document.accordion[this.group]) {
				this.isOpen = document.accordion[this.group] === this.id;
			} else {
				this.isOpen = this.open;
			}
			document.body.addEventListener(this.group, this.listen);
		},
		beforeUnmount() {
			document.body.removeEventListener(this.group, this.listen);
		},
		watch: {
			isOpen(open) {
				if (open) {
					document.accordion[this.group] = this.id;
					this.$emit('open');
				} else {
					this.$emit('close');
				}
				this.emit({
					id: this.id,
					open
				});
			}
		},
		methods: {
			emit(event) {
				document.body.dispatchEvent(new CustomEvent(this.group, {
					detail: event
				}));
			},
			listen(event) {
				if (event.detail.open && event.detail.id !== this.id) {
					this.isOpen = false;
				}
			}
		}
	};

</script>