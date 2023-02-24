<template>
	<sectiton>
		<!-- <button @click="click">Press</button> -->
		{{ user.firstName }} {{ user.lastName }}
		<div>
			<div :key="obj.id" v-for="obj in Todos">
				<img v-if="obj.src" :src="obj.src" alt="obj.alt" />
				{{ obj.title }}
			</div>
			{{ fullName }}
		</div>

		<div class="todo" v-for="todo in uncompletedTodos" :key="todo.id">
			<span>{{ todo.title }}</span>
			<span>{{ todo.completed }}</span>
		</div>
	</sectiton>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					firstName: "John",
					lastName: "Doe",
				},
				todos: [
					{
						"userId": 1,
						"id": 1,
						"title": "delectus aut autem",
						"completed": false,
					},
					{
						"userId": 1,
						"id": 4,
						"title": "delectus aut autem",
						"completed": true,
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
			}
		},
		computed: {
			fullName() {
				return `${this.user.firstName} ${this.user.lastName}`
			},
			uncompletedTodos() {
				return this.todos.filter((todo) => !todo.completed)
			},
		},
		methods: {
			click() {
				console.log(this.user)
			},
		},
	}
</script>

<style>
	.todo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
		margin-top: 5vh;
		background: black;
	}
</style>
