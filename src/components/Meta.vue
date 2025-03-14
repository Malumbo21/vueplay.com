<template>
	<div v-show="false"></div>
</template>
<script>
	export default {
		props: ['title', 'description', 'keywords', 'author'],
		data: () => ({
			defaults: {
				title: 'Vue Play - A Vue Drag And Drop Website Builder Using Vue.js',
				description: 'Design Components and Websites with Transform Tools and Style Controllers. Drag & Drop Elements and Components into the Playground with Vue Play.',
				keywords: 'Vue Play Playground Vue.js Vuejs Drag Drop Design UI Visual Graphic User Interface',
				author: 'Siglar Development AS'
			}
		}),
		watch: {
			'title'() {
				document.title = this.title ? (this.title + ' - Vue Play') : this.defaults.title
			},
			'description'() {
				this.ensureMeta('description')
				document.head.children.description.content = this.description || this.defaults.description
			},
			'keywords'() {
				this.ensureMeta('keywords')
				document.head.children.keywords.content = this.keywords || this.defaults.keywords
			},
			'author'() {
				this.ensureMeta('author')
				document.head.children.author.content = this.author || this.defaults.author
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				document.title = this.title ? (this.title + ' - Vue Play') : this.defaults.title
				this.ensureMeta('description')
				this.ensureMeta('keywords')
				this.ensureMeta('author')
				document.head.children.description.content = this.description || this.defaults.description
				document.head.children.keywords.content = this.keywords || this.defaults.keywords
				document.head.children.author.content = this.author || this.defaults.author
			},
			ensureMeta(type) {
				if (!document.head.children[type] || document.head.children[type] === undefined) {
					let meta = document.createElement('meta')
					meta.name = type
					document.head.appendChild(meta)
				}
			}
		}
	}

</script>
<style scoped></style>