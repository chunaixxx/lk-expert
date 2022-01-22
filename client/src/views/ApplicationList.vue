<template>
	<div class="application-list">
		<VAside></VAside>
		<div class="application-list__list">
			<h2 class="application-list__title">Заявки экспертов</h2>
			<div class="application-list__subtitles">
				<div class="application-list__subtitle">Эксперт</div>
				<div class="application-list__subtitle">Решение</div>
			</div>
			<VExpertCard
				v-for="expert in experts"
				:expert="expert"
				:key="expert.id"
				class="application-list__card"
				type="application"
			/>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const experts = computed(() => store.getters.getExperts)
</script>

<style lang="scss" scoped>
.application-list {
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

	&__subtitles {
		display: grid;
		padding: 0px 0px 10px 8px;
		grid-template-columns: repeat(3, 1fr);
	}

	&__subtitle {
		text-transform: uppercase;

		&:not(:first-child) {
			margin-left: 40px;
		}
	}
}
</style>
