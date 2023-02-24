<template>
	<header class="header">
		<h1 v-if="$slots.title">
			<slot name="title" />
		</h1>
		<div>
			<slot name="descripiton" />
		</div>
		<h6>
			<slot />
		</h6>
	</header>
</template>

<script>
	export default {
		mounted() {
			// console.log(this.$el, this.$slots)
		},
		data() {
			return {}
		},
	}
</script>

<style>
	.header {
		background: #5e0000;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
	}
</style>
