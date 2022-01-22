<template>
	<div class="reports-page">
		<VAside></VAside>
		<div class="reports-page__list">
			<h2 class="reports-page__title">Отчеты об оценках</h2>
			<div class="reports-page__table table">
				<div class="table__row">
					<div class="table__cell">Решение</div>
					<div class="table__cell">Отчеты об оценках</div>
					<div class="table__cell">Дата</div>
				</div>
				<div class="table__row" v-for="report in reports" :key="report.title">
					<div class="table__cell">{{ report.title }}</div>
					<div class="table__cell">
						<a v-for="item in report.reports" :key="item" class="table__link">
							{{ item }}
						</a>
					</div>
					<div class="table__cell">{{ report.date }}</div>
				</div>
			</div>
			<router-link to="/reports/load">
				<VButton class="button_secondary reports-page__button">
					Загрузить отчеты
				</VButton>
			</router-link>
		</div>
	</div>
</template>

<script setup>
const reports = [
	{
		title: 'HELMETEXSPORT1',
		reports: ['Отчет1.Doc', 'Отчет2.Doc'],
		date: '12.04.2022'
	},
	{
		title: 'HELMETEXSPORT2',
		reports: ['Отчет1.Doc', 'Отчет2.Doc'],
		date: '12.04.2022'
	}
]
</script>

<style lang="scss" scoped>
.reports-page {
	display: flex;

	&__list {
		padding: 30px 70px;
		width: 100%;
		background: #fff;
	}

	&__title {
		font-size: 40px;
		font-weight: 400;
		text-transform: uppercase;
		margin-bottom: 30px;
		color: $primary-500;
	}

	&__button {
		margin: 20px 0 0 auto;
	}
}

.table {
	&__row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);

		&:not(:last-child) {
			border-bottom: 2px solid $primary-400;
		}
	}

	&__cell {
		color: $primary-1000;
		text-transform: uppercase;
		width: 100%;
		text-align: center;
		padding: 20px 0;
	}

	&__link {
		display: block;
		margin-bottom: 10px;
		color: $primary-600;
		text-decoration: underline;
		cursor: pointer;
	}
}
</style>
