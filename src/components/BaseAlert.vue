<template>
	<div class="baseAlert">
		<div :class="baseClass">
			<slot />
			<button @click="onClick">X</button>
		</div>
	</div>
</template>

<script>
	export default {
		// props: ["variant", "text"],
		props: {
			variant: {
				type: String,
				default: "",
			},
			text: {
				type: String,
				default: "test",
			},
		},
		computed: {
			baseClass() {
				return ["alert", this.variant ? `alert-${this.variant}` : ""]
			},
		},
		methods: {
			onClick() {
				this.$emit("onClick")
			},
		},
	}
</script>

<style>
	.baseAlert {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.alert {
		width: 70vh;
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		color: #000;
		border-radius: 2vh;
	}
	.alert-success {
		background-color: #003f13;
		color: #fff;
	}
	.alert-dunger {
		background-color: #ec0000;
		color: #fff;
	}
</style>
