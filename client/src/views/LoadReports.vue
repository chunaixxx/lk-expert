<template>
	<div class="load-reports-page">
		<VAside></VAside>
		<div class="load-reports-page__content">
			<h2 class="load-reports-page__title">Отчеты об оценках</h2>
			<div class="d-flex">
				<div class="load-reports-page__left">
					<h3 class="oad-reports-page__subtitle">Решение</h3>
					<VSelect :options="['Все решения', 'HELMETEXSPORT']" />
				</div>
				<div class="load-reports-page__right">
					<h3 class="oad-reports-page__subtitle">Отчеты об оценках</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.load-reports-page {
	display: flex;

	&__content {
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
}

.d-flex {
	display: flex;
	justify-content: space-between;
}
</style>
