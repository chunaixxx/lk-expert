<template>
	<input type="text" name="" id="" class="input" />
</template>
<script setup></script>
<style scoped lang="scss">
.input {
	outline: none;
	border: 1px solid $primary-200;
	border-radius: 7px;
	padding: 13px;
	color: $primary-300;
	transition: $defaultTransition;

	&:focus {
		color: $primary-500;
	}
}
</style>
