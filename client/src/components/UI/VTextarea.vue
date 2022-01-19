<template>
	<textarea
		type="text"
		name=""
		id=""
		class="textarea"
		@input="$emit('update:modelValue', $event.target.value)"
		:value="props.modelValue"
	></textarea>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({ modelValue: String })
</script>
<style scoped lang="scss">
.textarea {
	outline: none;
	border: 1px solid $primary-200;
	border-radius: 7px;
	padding: 13px;
	color: $primary-300;
	transition: $defaultTransition;
	resize: none;

	&:focus {
		color: $primary-500;
	}
}
</style>
