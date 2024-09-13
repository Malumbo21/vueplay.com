<template>
	<div class="comparison">
		<div class="bg-emerald-500 shadow-lg free drop-shadow">
			<h2>Free</h2>
			<p>
				Try out the playground
				with only a few
				limitations.
			</p>
			<div class="price">
				0.00 USD / mo
			</div>
			<div class="feature-list">
				<div>Drag & Drop</div>
				<div>1 Application</div>
				<div>Basic styling</div>
				<div>Basic elements
				</div>
				<div>
					Basic transform
					tools
				</div>
				<div>Build distribution
				</div>
			</div>
		</div>
		<div class="shadow-slate-300 shadow-lg early-bird drop-shadow from-fuchsia-400 bg-purple-400 bg-gradient-to-br hover:bg-purple-500 hover:from-fuchsia-500 text-white duration-300 transition hover:drop-shadow-lg drop-shadow">
			<h2 style="color:#ffffffff">

				Premium
				<span style="display:inline-block;color:#ffe100ff">
					★
				</span>
			</h2>
			<p>
				Use the full playground
				without any limitations.
			</p>
			<div class="price">
				9.00 USD / mo
			</div>
			<div
				class="price"
				style="margin-top:-16px;font-size:25px;text-decoration:line-through;text-decoration-thickness:3px;text-decoration-color:rgb(112, 7, 7)"
				v-if="false"
			>
				59.00 USD / Year
			</div>
			<div class="feature-list">
				<div>Everything in Free
				</div>
				<div>Unlimited
					Applications</div>
				<div>All styles</div>
				<div>All elements</div>
				<div>Push to GitHub
				</div>
				<div>Deploy to GitHub
					pages</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data: () => ({}),
		methods: {
			redirect(url) {
				location.href = url;
			}
		}
	};

</script>
<style scoped>
	.comparison {
		position: relative;
		display: flex;
		width: 100%;
		color: white;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.comparison>div {
		display: inline-flex;
		margin-right: 10px;
		padding: 30px;
		width: calc((100% / 2) - (10px / 2));
		box-sizing: border-box;
		border-radius: 4px;
		flex-direction: column;
		transition: filter linear .3s;
		filter: brightness(100%);
	}

	.comparison>div:hover {
		filter: brightness(110%);
	}

	.comparison>div>p {
		font-weight: 500;
		color: #ffffffff;
	}

	.comparison>div:last-child {
		margin-right: 0px;
	}

	h2 {
		display: block;
		width: 100%;
		margin: 0px;
		color: #394657;
		text-transform: uppercase;
		font-size: 25px;
	}

	.feature-list>div {
		background-image: url(@/assets/check.png);
		background-position: 0px 6px;
		background-repeat: no-repeat;
		background-size: auto 20px;
		padding: 5px 30px;
	}

	.price {
		width: 100%;
		font-size: 30px;
		font-weight: 900;
		margin: 5px 0px 15px;
	}

	@media only screen and (max-width: 600px) {
		.comparison {
			display: block;
		}

		.comparison>div {
			width: 100%;
			display: block;
			margin-bottom: 20px;
		}
	}

</style>