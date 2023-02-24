<template>
	<form>
		<label>
			<h4>Inscrição</h4>
			<!-- <span>
				One-way data binding <br />
				Tow-way data binding <br />
			</span> -->
			<div>
				<label>Nome do usuario</label><br />
				<input v-model="name" type="text" /><br />
				<span>{{ name }}</span>
			</div>
			<br />

			<section>
				<select v-model="lingu">
					<option value="">Escolha</option>
					<option value="node">Node</option>
					<option value="react">React</option>
					<option value="python">Python</option>
				</select>
				<br />
				{{ lingu }}
			</section>
			<br />

			<div>
				<label>Select level</label><br />
				Sim>
				<input value="Sim" type="radio" v-model="newLetter" />
				Não>
				<input value="Não" type="radio" v-model="newLetter" /> <br />
				{{ newLetter }}
			</div>
			<br />

			<section>
				Aceita nossos termos
				<input type="checkbox" v-model="contract" /> <br />
				{{ contract === true ? "Aceito" : "Não aceito" }}
			</section>
			<br />

			<section>
				Suas cores preferidas <br />
				Amarelo
				<input type="checkbox" v-model="color" value="Amarelo" /> <br />
				Azul
				<input type="checkbox" v-model="color" value="Azul" /> <br />
				{{ color }}
			</section>
		</label>
	</form>
</template>

<script>
export default {
	data() {
		return {
			name: "",
			lingu: "python",
			newLetter: "Sim",
			contract: false,
			color: [],
		}
	},
}
</script>

<style>
.title {
	color: #c0c0c0;
	background: #f3f3;
}
.title-home {
	font-size: 20;
	color: #ec0000;
	background: rgba(255, 230, 0, 0.2);
}
.text {
	font-size: 3rem;
}
.text-home {
	font-size: 1rem;
	background: rgb(0, 255, 13);
}
</style>
