<template>
	<footer class="footer">
		<div class="footer__left">
			<a href="#" class="footer__logo">
				<img src="@/assets/logo2.svg" alt="" class="header__logo-img" />
			</a>
			<a href="#" class="footer__logo">
				<img src="@/assets/logo.svg" alt="" class="header__logo-img" />
			</a>

			<p class="footer__address">
				innovationmap@develop.mos.ru<br />
				+7 (499) 225-92-52<br />
				125009, Москва, Вознесенский пер. 22
			</p>

			<p class="footer__copyright">© ГБУ «Агентство инноваций Москвы», 2021</p>
		</div>

		<div class="footer__right">
			<div class="footer__wrapper">
				<div class="footer__block footer__about">
					<h4 class="footer__title">О проекте</h4>

					<ul class="footer__block-list">
						<li class="footer__block-list-item">
							<a href="#" class="footer__block-link">Для кого?</a>
						</li>
						<li class="footer__block-list-item">
							<a href="#" class="footer__block-link"
								>Часто задаваемые вопросы</a
							>
						</li>
						<li class="footer__block-list-item">
							<a href="#" class="footer__block-link"
								>Производителям инноваций?</a
							>
						</li>
						<li class="footer__block-list-item">
							<a href="#" class="footer__block-link">Заказчикам инноваций</a>
						</li>
					</ul>
				</div>

				<div class="footer__block footer__services">
					<h4 class="footer__title">Сервисы</h4>

					<ul class="footer__block-list">
						<li class="footer__block-list-item">
							<a href="#" class="footer__block-link">Каталог решений</a>
						</li>
						<li class="footer__block-list-item">
							<a href="#" class="footer__block-link">Городские запросы</a>
						</li>
						<li class="footer__block-list-item">
							<a href="#" class="footer__block-link">Тематические подборки</a>
						</li>
						<li class="footer__block-list-item">
							<a href="#" class="footer__block-link">Инновационные закупки</a>
						</li>
					</ul>
				</div>
			</div>

			<form action="#" class="footer__form">
				<h4 class="footer__title">Хотите быть в курсе новостей?</h4>
				<input class="footer__input" placeholder="YOUR@EMAIL.RU" />
				<button class="footer__submit" type="submit">Подписаться</button>

				<div class="footer__block footer__documents">
					<ul class="footer__block-list">
						<li class="footer__block-list-item">
							<a href="#" class="footer__block-link"
								>Порядок размещения решений на Карте</a
							>
						</li>
						<li class="footer__block-list-item">
							<a href="#" class="footer__block-link"
								>Пользовательское соглашение</a
							>
						</li>
						<li class="footer__block-list-item">
							<a href="#" class="footer__block-link"
								>Согласие на обработку персональных данных</a
							>
						</li>
					</ul>
				</div>
			</form>
		</div>
	</footer>
</template>
<script setup></script>
<style scoped lang="scss">
.footer {
	display: flex;

	&__left {
		padding: 45px 68px;
		max-width: 467px;
		width: 100%;
		min-height: 100%;
		background-color: $primary-900;

		display: flex;
		flex-direction: column;
		font-size: 14px;
	}

	&__logo {
		&:not(:last-child) {
			margin-bottom: 38px;
		}
	}

	&__address {
		color: $secodary-text-200;
		line-height: 25px;
		margin-bottom: 26px;
	}

	&__copyright {
		color: $secodary-text-300;
	}

	&__right {
		background-color: $primary-200;
		width: 100%;
		padding: 36px 57px;

		display: flex;
		justify-content: space-between;
		gap: 30px;
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 30px;
		min-width: 300px;
	}

	&__title {
		font-size: 22px;
		color: $primary-500;
		font-weight: normal;
		margin-bottom: 15px;
	}

	&__block-list {
		list-style-type: none;
		color: $primary-500;
	}

	&__block-list-item {
		margin-bottom: 3px;
	}

	&__form {
		max-width: 950px;
		width: 100%;

		display: flex;
		flex-direction: column;
	}

	&__input,
	&__submit {
		outline: none;
		border: 0;
		font-size: 16px;
		padding: 20px 25px;
		transition: $defaultTransition;
		width: 100%;

		color: $primary-1000;
		&::placeholder {
			color: $primary-500;
		}
	}

	&__submit {
		background-color: $primary-1000;
		color: $secodary-text-100;
		cursor: pointer;
	}

	&__documents {
		margin-top: auto;
	}
}
</style>
