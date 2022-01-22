<template>
	<div @click="toggleOptions" class="select" ref="select">
		<div
			class="select__current-option"
			:class="{ 'select__current-option_active': isVisible }"
		>
			{{ currentOption }}
		</div>
		<div class="select__img-wrapper">
			<img src="../../assets/icons/dropdown.svg" alt="svg" v-if="!isVisible" />
			<img src="../../assets/icons/dropup.svg" alt="svg" v-else />
		</div>
	</div>
	<transition name="drop">
		<div class="options" v-if="isVisible">
			<div
				class="options__option"
				v-for="option in options"
				:key="option"
				@click="setCurrentOption(option)"
			>
				{{ option }}
			</div>
		</div>
	</transition>
</template>
<script setup>
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps({ options: Array })
const select = ref(null)
const currentOption = ref(props.options[0])
const isVisible = ref(false)
const toggleOptions = () => {
	isVisible.value = !isVisible.value
}
const setCurrentOption = option => (currentOption.value = option)

const handleOutsideClick = event => {
	if (!select.value?.contains(event.target)) isVisible.value = false
}
onMounted(() => {
	document.body.addEventListener('click', handleOutsideClick)
})
</script>

<style lang="scss" scoped>
.select {
	display: flex;
	user-select: none;
	cursor: pointer;

	&__img-wrapper {
		padding: 15px;
		border-radius: 0 5px 5px 0;
		width: 80px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: $primary-900;

		img {
			pointer-events: none;
		}
	}

	&__current-option {
		background: $primary-200;
		width: 200px;
		padding: 10px 35px;
		border-radius: 5px 0 0 5px;

		&_active {
			border-radius: 5px 0 0 0;
		}
	}
}
.options {
	width: 200px;
	background: $primary-200;
	position: absolute;
	border-radius: 0 0 5px 5px;

	&__option {
		width: 100%;
		padding: 10px 35px;
		cursor: pointer;

		&:hover {
			background: $secondary;
			color: #fff;
		}
	}
}

.drop-enter-active {
	transition: transform 0.4s ease;
}
.drop-leave-active {
	transition: opacity 0.4s ease;
}
.drop-leave-to {
	opacity: 0;
}

.drop-enter-from {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
