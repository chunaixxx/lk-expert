<template>
	<div class="expert-list">
		<VAside></VAside>
		<div class="expert-list__list">
			<h2 class="expert-list__title">Список экспертов</h2>
			<VExpertCard
				v-for="expert in experts"
				:key="expert.id"
				:expert="expert"
				class="expert-list__card"
			></VExpertCard>
		</div>
	</div>
</template>

<script setup>
const experts = [
	{
		id: 1,
		img: 'https://img.ubu.ru/gal_v_ofis_trebuetsya_mladshiy_ofisnyy_sotrudnik_100675312.jpg',
		name: 'Иванов Иван Иванович',
		age: 32,
		workExperience: 8,
		advantages: 'Объективно и достойно оценивает инновационные продукты',
		count: 21
	}
]
</script>

<style lang="scss" scoped>
.expert-list {
	padding-top: 30px;
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
