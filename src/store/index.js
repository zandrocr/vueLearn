import { createStore } from "vuex"

export default createStore({
	state: {
		user: {
			id: 50,
			firstName: "Tomas",
			lastName: "Tuban",
			email: "kenaa@example.com",
			password: "admin",
			role: "admin",
		},
		soccer: [
			{ id: 1, name: "tenis", price: 100 },
			{ id: 2, name: "meia", price: 100 },
			{ id: 3, name: "camisa", price: 100 },
		],
		cart: [],
		products: ["banco", "almofada", "camisa", "barco", "corrego"],
	},
	getters: {
		total(state) {
			//dependec
			// return value
			return state.cart.reduce((total, item) => {
				return (total += item.price)
			}, 0)
		},
	},
	mutations: {
		storeApi(props) {
			props.name
		},
		storeUser(state, data) {
			state.user = data
		},
		newProduct(state, data) {
			state.products.push(data)
		},
		addProduct(state, data) {
			state.cart.push(data)
		},
		removeProduct(state, id) {
			const idx = state.cart.findIndex((item) => item.id === id)
			state.cart.splice(idx, 1)
		},
	},
	actions: {},
	modules: {},
})
