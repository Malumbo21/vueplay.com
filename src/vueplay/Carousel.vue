<template>
	<div
		:class="{'dark': darkmode}"
		class="vp-carousel relative"
	>
		<div
			@click="previous"
			class="vp-previous"
			:style="{ backgroundColor: color}"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.75 19.5L8.25 12l7.5-7.5"
				/>
			</svg>
		</div>
		<div
			class="vp-carousel-wrapper"
			ref="carousel"
			@scroll="scroll"
		>
			<slot>
				<img
					v-for="image in images"
					:src="image"
				/>
			</slot>
		</div>
		<div class="vp-nodes">
			<div
				v-for="(node, i) in nodes"
				@click="goto(i)"
				:active="active === i"
				class="vp-node"
			/>
		</div>
		<div
			@click="next"
			class="vp-next"
			:style="{ backgroundColor: color}"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M8.25 4.5l7.5 7.5-7.5 7.5"
				/>
			</svg>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			images: {
				type: Array,
				default: ['https://images.wallpaperscraft.com/image/single/pool_building_columns_990136_1600x900.jpg', 'https://images.wallpaperscraft.com/image/single/path_clouds_landscape_237076_1600x900.jpg', 'https://images.wallpaperscraft.com/image/single/starry_sky_night_tree_117028_1600x900.jpg']
			},
			dark: {
				type: Boolean,
				default: false
			},
			color: {
				type: String,
				default: 'rgba(200, 200, 200, .8)',
				VuePlayController: 'InputColor',
				ElementorController: 'COLOR'
			},
			background: {
				type: String,
				default: 'rgba(240,240,240,1)'
			},
			hover: {
				type: String,
				default: 'rgba(220,220,220,1)'
			},
			border: {
				type: String,
				default: 'rgba(251,178,60,1)'
			},
			colorDark: {
				type: String,
				default: 'rgba(240,240,240,1)'
			},
			backgroundDark: {
				type: String,
				default: 'rgba(75,75,75,1)'
			},
			hoverDark: {
				type: String,
				default: 'rgba(50,50,50,1)'
			},
			borderDark: {
				type: String,
				default: 'rgba(130,130,130,1)'
			}
		},
		data: () => ({
			open: false,
			mobile: false,
			to: null,
			timeout: null,
			inited: false,
			blocked: false,
			nodes: [],
			active: 0
		}),
		computed: {
			darkmode() {
				return this.dark;
			}
		},
		mounted() {
			const interval = setInterval(() => {
				if (this.$refs.carousel) {
					this.init();
					clearInterval(interval);
				}
			}, 10);
		},
		methods: {
			init() {
				if (this.inited) return;
				this.inited = true;
				this.nodes = [...this.$refs.carousel.childNodes].filter(n => n?.nodeName?.toLowerCase() !== '#text');
				if (this.nodes.length) {
					this.$refs.carousel.prepend(this.nodes[this.nodes.length - 1].cloneNode(true));
					this.$refs.carousel.append(this.nodes[0].cloneNode(true));
					this.$refs.carousel.scrollLeft = this.$refs.carousel.clientWidth;
				}
				const resizeObserver = new ResizeObserver(entries => {
					this.scrollend({
						target: this.$refs.carousel
					});
				});
				resizeObserver.observe(this.$refs.carousel);
			},
			previous() {
				if (this.blocked) return;
				this.blocked = true;
				const previous = this.$refs.carousel.scrollLeft - this.$refs.carousel.clientWidth;
				if (previous <= 0) {
					this.$refs.carousel.scrollLeft = this.$refs.carousel.scrollWidth;
					this.$refs.carousel.scrollTo({
						left: this.$refs.carousel.scrollWidth - this.$refs.carousel.clientWidth * 2,
						behavior: 'smooth'
					});
				} else {
					this.$refs.carousel.scrollTo({
						left: previous,
						behavior: 'smooth'
					});
				}
				setTimeout(() => this.blocked = false, 700);
				if (this.active === 0) this.active = this.nodes.length - 1;
				else this.active--;
			},
			next() {
				if (this.blocked) return;
				this.blocked = true;
				const next = this.$refs.carousel.scrollLeft + this.$refs.carousel.clientWidth;
				if (next >= this.$refs.carousel.scrollWidth - this.$refs.carousel.clientWidth) {
					this.$refs.carousel.scrollLeft = 0;
					this.$refs.carousel.scrollTo({
						left: this.$refs.carousel.scrollLeft + this.$refs.carousel.clientWidth,
						behavior: 'smooth'
					});
				} else {
					this.$refs.carousel.scrollTo({
						left: this.$refs.carousel.scrollLeft + this.$refs.carousel.clientWidth,
						behavior: 'smooth'
					});
				}
				setTimeout(() => this.blocked = false, 700);
				if (this.active === this.nodes.length - 1) this.active = 0;
				else this.active++;
			},
			goto(node) {
				if (this.blocked) return;
				this.blocked = true;
				this.$refs.carousel.scrollTo({
					left: node * this.$refs.carousel.clientWidth + this.$refs.carousel.clientWidth,
					behavior: 'smooth'
				});
				this.active = node;
				setTimeout(() => this.blocked = false, 700);
			},
			scroll(e) {
				if (this.blocked) return;
				const startOfLastImage = e.target.scrollWidth - e.target.clientWidth;
				const halfImage = e.target.clientWidth / 2;
				if (e.target.scrollLeft < halfImage - 10) {
					e.target.scrollLeft = startOfLastImage - halfImage;
				} else if (e.target.scrollLeft > startOfLastImage - halfImage + 10) {
					e.target.scrollLeft = halfImage;
				}
				this.active = Math.ceil((e.target.scrollLeft - e.target.clientWidth) / (e.target.scrollWidth - e.target.clientWidth * 3));
				this.scrollend(e);
			},
			scrollend(e) {
				if (this.timeout) clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					// Get scroll data
					const startOfLastImage = e.target.scrollWidth - e.target.clientWidth;
					const halfImage = e.target.clientWidth / 2;
					const currentPos = e.target.scrollLeft;
					const modulus = currentPos % e.target.clientWidth;
					if (modulus < halfImage) {
						e.target.scrollTo({
							left: currentPos - modulus,
							behavior: 'smooth'
						});
					} else if (modulus > halfImage) {
						e.target.scrollTo({
							left: currentPos + (e.target.clientWidth - modulus),
							behavior: 'smooth'
						});
					}
					this.timeout = null;
				}, 100);
			}
		}
	};

</script>
<style>
	.vp-carousel {
		--bg-color: v-bind(background);
		--button-bg-color: var(--bg-color);
		--button-bg-hover-color: v-bind(hover);
		--button-text-color: v-bind(color);
		--border-color: v-bind(border);
		--dark-bg-color: v-bind(backgroundDark);
		--dark-button-bg-color: var(--dark-bg-color);
		--dark-button-bg-hover-color: v-bind(hoverDark);
		--dark-button-text-color: v-bind(colorDark);
		--dark-border-color: v-bind(borderDark);
		display: block;
		width: 100%;
		aspect-ratio: 1.777/1;
		background-color: var(--bg-color);
	}

	.vp-carousel-wrapper {
		display: block;
		width: 100%;
		height: 100%;
		overflow: auto;
		white-space: nowrap;
		scroll-behavior: auto;
		-ms-overflow-style: none;
		/* Hide scrollbar Edge */
		scrollbar-width: none;
		/* Hide scrollbar Firefox */
	}

	/* Hide scrollbar Chrome, Safari and Opera */
	.vp-carousel-wrapper::-webkit-scrollbar {
		display: none;
	}

	.vp-previous:hover,
	.vp-next:hover {
		background-color: rgba(255, 255, 255, 0.8);
	}

	.vp-previous,
	.vp-next {
		position: absolute;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		top: 50%;
		left: 10px;
		transform: translateY(-50%);
		z-index: 10;
		background-color: rgba(255, 255, 255, 0.5);
		cursor: pointer;
		border-radius: 4px;
	}

	.vp-next {
		left: auto;
		right: 10px;
	}

	.vp-carousel-wrapper {
		background-color: black;
	}

	.vp-carousel-wrapper>* {
		display: inline-block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.vp-nodes {
		position: absolute;
		display: inline-flex;
		width: 100%;
		bottom: 10px;
		justify-content: center;
		gap: 10px;
	}

	.vp-node {
		width: 20px;
		height: 20px;
		background-color: rgba(255, 255, 255, 0.5);
		border-radius: 50%;
		cursor: pointer;
	}

	.vp-node:hover,
	.vp-node[active=true] {
		background-color: rgba(255, 255, 255, 0.8);
	}

</style>