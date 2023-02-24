<template>
	<div>
		<h1>Hollo World</h1>
		{{ name }}
	</div>
</template>

<script>
	export default {
		name: "LiveCycle",
		data() {
			return {
				name: "LiveCycle",
			}
		},
		//Criação do componente
		//Prepara o componente
		//Ajax, inicializa o componente
		//Não tem acesso ao template(DOM)
		//Montagem do componente
		//Inicializar um lib externa
		//Precisa de acesso ao template(DOM)
		//Tem acesso ao template(DOM)
		//Atualização do componente
		//Debug
		//Update
		//Desmontagem do componente
		//Remocer tudo o que for necessário(lib->destroy())
		//Liberar Memória
		//HOOKS

		// beforeCreate() {
		// 	console.log("beforeCreate")
		// 	console.log("Estado:", this.name)
		// 	console.log("Dom:", this.$el) //$el é o elemento raiz do componente
		// },
		// created() {
		// 	console.log("created")
		// 	console.log("Estado:", this.name)
		// 	console.log("Dom:", this.$el)
		// },
		// beforeMount() {
		// 	console.log("beforeMount")
		// 	console.log("Estado:", this.name)
		// 	console.log("Dom:", this.$el)
		// },
		// mounted() {
		// 	console.log("mounted")
		// 	console.log("Estado:", this.name)
		// 	console.log("Dom:", this.$el)
		// },
		// beforeUmounted() {
		// 	console.log("beforeUmounted")
		// 	console.log("Estado:", this.name)
		// 	console.log("Dom:", this.$el)
		// },
		// umounted() {
		// 	console.log("umounted")
		// 	console.log("Estado:", this.name)
		// 	console.log("Dom:", this.$el)
		// },

		watch: {},
		computed: {},
		methods: {},
	}
</script>

<style></style>
