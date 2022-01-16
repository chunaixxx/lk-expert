<template>
	<div class="expert-list">
		<VAside></VAside>
		<div class="expert-list__list">
			<h2 class="expert-list__title">Список экспертов</h2>
			<router-link
				v-for="expert in experts"
				:to="'/experts/' + expert.id"
				:key="expert.id"
			>
				<VExpertCard :expert="expert" class="expert-list__card"></VExpertCard>
			</router-link>
		</div>
		{{ expertOne }}
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const experts = computed(() => store.getters.getExperts)
</script>

<style lang="scss" scoped>
.expert-list {
	display: flex;

	&__list {
		width: 100%;
		padding: 30px 70px;
		background: #fff;
	}

	&__title {
		font-size: 40px;
		font-weight: 400;
		text-transform: uppercase;
		margin-bottom: 30px;
	}

	&__card:not(:first-child) {
		margin-top: 20px;
	}
}
</style>
