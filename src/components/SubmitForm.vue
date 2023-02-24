<template>
	<button @click.stop="onClick">Enviar</button> <br />
	<div @mouseover.once="onMouseOver">Passe o mouse aqui</div>
	<br />
	<form action="https://google.com" @submit.prevent="onSubmit">
		<input type="text" name="name" placeholder="Nome"  @keyup.enter="onkeyup"/>
		<button>Envio</button>
	</form>

</template>

<script>
export default {
	methods: {
		onClick($evt) {
			console.log("Clicked!", $evt)
		},
		onMouseOver($evt) {
			console.log("Mouse over!", $evt)
		},
		onSubmit() {
			console.log("Form submitted!")
		},
		onkeyup(props) {
			console.log("Form submitted!", props)
		},

	},
}
</script>

<style></style>
