<template>
	<header>TheHeader</header>
	<button @click="toggleHeader">Toggle</button>
	<section v-if="toggleButton">
		<p :style="{ color: '#f2f2f2', backgroundColor: '#ffff' }">
			Para colocar parágrafo no Word, ou recuar a primeira linha do texto, a maneira mais simples é
			colocar o cursor no início do parágrafo e pressione a tecla tab. Quando você pressiona “Enter”
			para iniciar o próximo, sua primeira linha do texto será recuada.
		</p>
		<p :class="['text', { 'title': true, 'text-home': isHome }]">
			Para colocar parágrafo no Word, ou recuar a primeira linha do texto, a maneira mais simples é
			colocar o cursor no início do parágrafo e pressione a tecla tab. Quando você pressiona “Enter”
			para iniciar o próximo, sua primeira linha do texto será recuada.
		</p>
		<h3 :class="{ 'title': true, 'title-home': isHome }">Test</h3>
		<img src="https://via.placeholder.com/150" :alt="imageAlt" />
		<div>
			<div :key="obj.id" v-for="obj in Todos">
				<img v-if="obj.src" :src="obj.src" alt="obj.alt" />
				{{ obj.title }}
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return { toggleButton: true }
		},
		components: {},
		pClass: "text",
		isHome: false,
		classVar: "title",
		imageAlt: "Foto de alguem",
		todos: [
			{
				"userId": 1,
				"id": 1,
				"title": "delectus aut autem",
				"completed": false,
			},
			{
				"userId": 1,
				"id": 2,
				"title": "quis ut nam facilis et officia qui",
				"completed": false,
				"alt": "Foto de alguem",
				"src": "https://via.placeholder.com/150",
			},
		],
		beforeUmounted() {
			console.log("beforeUmounted")
			console.log("Estado:", this.name)
			console.log("Dom:", this.$el)
		},
		umounted() {
			console.log("umounted")
			console.log("Estado:", this.name)
			console.log("Dom:", this.$el)
		},
		beforeUpdate() {
			console.log("beforeUpdate")
		},
		updated() {
			console.log("updated")
		},
		methods: {
			toggleHeader() {
				this.toggleButton = !this.toggleButton
			},
		},
	}
</script>

<style>
	header {
		color: #fff;
	}
</style>
