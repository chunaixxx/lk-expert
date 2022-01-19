<template>
	<aside class="aside">
		<nav class="aside__nav">
			<router-link to="/registration">
				<VButton class="button_primary-900 aside__button">
					Личный кабинет
				</VButton>
			</router-link>
			<router-link to="/s">
				<VButton class="button_primary-900 aside__button">
					Каталог решений
				</VButton>
			</router-link>
			<router-link to="/s">
				<VButton class="button_primary-900 aside__button">
					Заявки экспертов
				</VButton>
			</router-link>
			<router-link to="/s">
				<VButton class="button_primary-900 aside__button">
					Отчеты об оценках
				</VButton>
			</router-link>
			<router-link to="/experts">
				<VButton class="button_primary-900 aside__button">
					Список экспертов
				</VButton>
			</router-link>
		</nav>
		<slot></slot>
	</aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.aside {
	max-width: 467px;
	width: 100%;
	padding: 0 40px;

	&__button {
		width: 100%;
	}

	&__nav {
		top: 20px;
		left: 0;
		position: sticky;
	}
}
</style>
