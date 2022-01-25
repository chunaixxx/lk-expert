<template>
	<div
		class="drop-down"
		:class="{ 'drop-down_active': isVisible }"
		@click="toggleOptions"
		ref="dropDown"
	>
		<img src="../../assets/icons/select.svg" alt="svg" class="drop-down__img" />
		<div class="drop-down__title">{{ props.title }}</div>
	</div>
	<transition name="drop">
		<div class="options" v-if="isVisible" ref="optionsList">
			<div
				v-for="option in options"
				:key="option"
				class="options__option"
				@click="pushFilter(option)"
				:class="{ options__option_active: checkFilter(option) }"
			>
				{{ option }}
			</div>
		</div>
	</transition>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps({ title: String, options: Array })
const dropDown = ref(null)
const optionsList = ref(null)
const isVisible = ref(false)
const toggleOptions = () => {
	isVisible.value = !isVisible.value
}
const currentFilters = ref([])
const checkFilter = option => currentFilters.value.find(elem => elem === option)
const deleteFilter = option => {
	const index = currentFilters.value.findIndex(elem => elem === option)
	currentFilters.value.splice(index, 1)
}
const pushFilter = option => {
	if (checkFilter(option)) deleteFilter(option)
	else currentFilters.value.push(option)
}

const handleOutsideClick = event => {
	if (
		!dropDown.value?.contains(event.target) &&
		!optionsList.value?.contains(event.target)
	)
		isVisible.value = false
}

onMounted(() => {
	document.body.addEventListener('click', handleOutsideClick)
})
</script>

<style lang="scss" scoped>
.drop-down {
	height: 100%;
	display: flex;
	align-items: center;
	gap: 20px;
	cursor: pointer;
	width: 100%;
	padding: 10px 55px;
	transition: background 0.4s ease;

	&_active {
		background: $primary-200;
	}

	&__title {
		text-transform: uppercase;
		color: $primary-800;
	}

	&__img {
		width: 10px;
	}
}

.options {
	position: absolute;
	z-index: 9999;

	&__option {
		cursor: pointer;
		padding: 8px 5px;
		width: 220px;
		background: $primary-200;

		&:hover {
			background: $secondary;
			color: #fff;
		}

		&_active {
			background: $secondary;
			color: #fff;
		}
	}
}

.drop-enter-active,
.drop-leave-active {
	transition: transform 0.4s ease;
}

.drop-enter-from,
.drop-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}
</style>
