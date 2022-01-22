<template>
	<div class="load-reports-page">
		<VAside></VAside>
		<div class="load-reports-page__content">
			<h2 class="load-reports-page__title">Отчеты об оценках</h2>
			<div class="d-flex">
				<div class="load-reports-page__left">
					<h3 class="load-reports-page__subtitle">Решение</h3>
					<VSelect :options="['Все решения', 'HELMETEXSPORT']" />
				</div>
				<div class="load-reports-page__right">
					<h3 class="load-reports-page__subtitle">Отчеты об оценках</h3>
					<VButton class="button_primary-400 load-reports-page__button">
						<span class="load-reports-page__button-title">
							Загрузить
							<img src="../assets/icons/download.svg" alt="" />
						</span>
					</VButton>
					<VButton
						class="button_secondary load-reports-page__button load-reports-page__button_bottom"
					>
						Сохранить
					</VButton>
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
		padding: 30px 170px 30px 70px;
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

	&__right {
		display: flex;
		flex-direction: column;
	}

	&__subtitle {
		text-transform: uppercase;
		color: $primary-1000;
		margin-bottom: 20px;
		font-weight: 400;
	}

	&__button-title {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	&__button {
		width: 200px;

		&_bottom {
			margin-top: auto;
		}
	}
}

.d-flex {
	display: flex;
	justify-content: space-between;
	min-height: 50vh;
}
</style>
