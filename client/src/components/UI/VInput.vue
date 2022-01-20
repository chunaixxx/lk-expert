<template>
	<input
		class="input"
		@input="$emit('update:modelValue', $event.target.value)"
		:value="props.modelValue"
	/>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({ modelValue: String })
</script>
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

	&_search {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-right: 0;
	}
}
</style>
