<template>
	<nav :data-menu="toggleButton == true ? '' : 'open'">
		<button :data-button="toggleButton == true ? '' : 'open'" @click="menuClick">Menu</button>
		<div v-for="nav in routesNav" :key="nav.name">
			<router-link :to="nav.path" @click="menuClick">{{ nav.name }}</router-link>
		</div>
	</nav>
	<router-view />
</template>

<script>
	import routes from "./router/index"

	export default {
		data() {
			return { toggleButton: true, routesNav: routes.options.routes }
		},
		methods: {
			menuClick() {
				this.toggleButton = !this.toggleButton
			},
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #fefeff;
	}

	[data-menu] {
		padding: 1vh;
		position: fixed;
		top: 0;
		left: -35vh;
		height: 100vh;
		width: 30vh;
		display: flex;
		justify-content: space-around;
		background-color: black;
		flex-direction: column;
		align-items: center;
		z-index: 5;
		transition: 0.5s ease-in;
	}

	[data-menu="open"] {
		left: 0;
	}

	nav a {
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
	}

	nav a.router-link-exact-active {
		color: #42b983;
	}
	body {
		background: #141414;
	}
	[data-button] {
		z-index: 10;
		position: fixed;
		top: 2vh;
		left: 0;
		color: #fff;
		padding: 1vh;
		border-radius: 1vh;
		transition: 0.5s ease-in;
		cursor: pointer;
		background-color: #42b983;
	}
	[data-button="open"] {
		left: 32vh;
	}

	[data-button]:hover {
		background: #1c583d;
	}
</style>
