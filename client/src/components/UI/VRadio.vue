<template>
	<label>
		{{ props.value }}
		<input
			type="radio"
			name="rb"
			:id="props.id"
			@input="$emit('update:modelValue', $event.target.value)"
			:value="props.modelValue"
			v-bind="$attrs"
		/>
	</label>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ id: String, modelValue: String, value: String })
</script>

<style lang="scss" scoped>
input {
	margin-left: 10px;
}
</style>
