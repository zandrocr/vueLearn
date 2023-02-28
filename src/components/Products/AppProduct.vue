<template>
	<div class="container">
		<pre class="product">
            <h1>{{ product.name }}</h1>
            <h4>{{ product.price }}</h4>
			<button @click="addProduct()">Add</button>
        </pre>
	</div>
</template>

<script>
	export default {
		props: {
			product: Object,
		},
		methods: {
			addProduct() {
				this.$store.commit("addProduct", this.product)
			},
		},
	}
</script>

<style src="./style.sass" lang="sass" scoped />
