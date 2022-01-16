<template>
	<div class="profile">
		<VAside></VAside>
		<div class="profile__info">
			{{ expert }}
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute()
const getExpertById = store.getters.getExpertById
const id = route.params.id
const expert = computed(() => getExpertById(id))
</script>

<style lang="scss" scoped>
.profile {
	display: flex;
}
</style>
