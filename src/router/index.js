import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
	{
		path: "/",
		name: "The Header",
		component: () => import("../components/TheHeader.vue"),
	},
	{
		path: "/submitForm",
		name: "Submit Form",
		component: () => import("../components/SubmitForm.vue"),
	},
	{
		path: "/baseAlert",
		name: "Base Alert",
		component: () => import("../components/BaseAlert.vue"),
	},
	{
		path: "/baseCard",
		name: "Base Card",
		component: () => import("../components/BaseCard.vue"),
	},
	{
		path: "/componentsSlots",
		name: "Components Slots",
		component: () => import("../components/ComponentsSlots.vue"),
	},
	{
		path: "/formUser",
		name: "Form User",
		component: () => import("../components/FormUser.vue"),
	},
	{
		path: "/liveCycle",
		name: "Live Cycle",
		component: () => import("../components/LiveCycle.vue"),
	},
	{
		path: "/propsComput",
		name: "Props Comput",
		component: () => import("../components/PropsComput.vue"),
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
