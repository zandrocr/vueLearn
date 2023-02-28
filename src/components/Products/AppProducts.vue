<template>
	<div>
		<AppProduct v-for="product in $store.state.soccer" :key="product.id" :product="product" />
		<div>
			Total: {{ $store.getters.total }}
			<h3 v-for="product in $store.state.cart" :key="product.id">
				{{ product.name }}
				<button @click="removeProduct(product.id)">Deltetar</button>
			</h3>
		</div>
	</div>
</template>

<script>
	import AppProduct from "./AppProduct.vue"

	export default {
		components: { AppProduct },
		methods:{
			removeProduct: function(product){
                this.$store.commit("removeProduct", product)
            }
		}
	}
</script>
