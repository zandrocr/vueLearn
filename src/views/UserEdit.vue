<template>
	<div style="display: flex; flex-direction: column; margin-top: 10vh">
		<!-- page user -->
		<div>
			User
			{{ $route.params.id }}
			page
			{{ $route.query.page }}
		</div>
		<button @click="login()">Login</button>
		<form @submit.prevent="onSubmit" class="formUser">
			<input type="text" name="firstName" placeholder="Name" v-model="newUser.firstName" />
			<input type="text" name="lastName" placeholder="Last Name" v-model="newUser.lastName" />
			<button>Update user</button>
			<input type="text" name="email" placeholder="Email" v-model="newUser.email" />
		</form>

		{{ $store.state.user.firstName }}
		{{ $store.state.user.lastName }} <br />
		{{ $store.state.user.email }}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				newUser: {
					firstName: "",
					lastName: "",
					email: "",
				},
			}
		},
		created() {
			// console.log(this.$store.state.user)
		},
		createdThis() {
			console.log(this.$route)
			console.log(this.$router)
		},
		methods: {
			login() {
				// ajax login
				this.$router.push("/")
				console.log("chego")
			},
			onSubmit() {
				console.log(this.newUser)
				// const userAtt = { firstName: "Marrlo", lastName: "Carib", email: "marlo@example.com" }
				this.$store.commit("storeUser", this.newUser)
			},
		},
	}
</script>

//http://localhost:8080/#/user/50?page=5

<style>
	.formUser {
		align-items: center;
		margin-top: 10vh;
		display: flex;
		flex-direction: column;
		margin-bottom: 10vh;
	}
	input{
		width: 50%;
        height: 30px;
        border: 1px solid black;
        border-radius: 5px;
        margin-top: 10px;
	}
</style>
