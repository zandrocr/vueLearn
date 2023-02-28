<template>
	<h1>Pokemons</h1>
	<div v-for="pokemon in pokemons.results" :key="pokemon.id">
		<h2>{{ pokemon.name }}</h2>
	</div>
	<button @click="count++">More</button>
</template>

<script>
	import { defineComponent, onMounted, ref } from "vue"
	import api from "@/services/api"

	export default defineComponent({
		data() {
			return {
				count: 5,
			}
		},
		mounted() {
			// console.log(this.pokemons)
		},
		methods: {
			morePokemons() {},
		},
		setup() {
			const pokemons = ref([])

			const fetchPokemons = async () => {
				await api
					.get(`/pokemon?limit=10`)
					.then((response) => ((pokemons.value = response.data), console.log(pokemons.value)))
					.catch((error) => console.log(error))
			}

			onMounted(fetchPokemons)

			return { pokemons }
		},
	})
</script>
