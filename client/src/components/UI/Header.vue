<template>
	<header class="header">
		<div class="header__top">
			<a href="#" class="header__logo">
				<img src="@/assets/logo.svg" alt="" class="header__logo-img" />
			</a>
			<a href="#" class="header__logo">
				<img src="@/assets/logo2.svg" alt="" class="header__logo-img" />
			</a>
			<nav class="header__nav">
				<router-link to="/" class="header__nav-link">
					<VButton class="button_menu header__button">Каталог решений </VButton>
				</router-link>
				<router-link to="/sam" class="header__nav-link">
					<VButton class="button_menu header__button"
						>Городские запросы</VButton
					>
				</router-link>
				<router-link to="/sama" class="header__nav-link">
					<VButton class="button_menu header__button"
						>Тематические подборки</VButton
					>
				</router-link>
				<router-link to="/samara" class="header__nav-link">
					<VButton class="button_menu header__button"
						>Инновационные закупки</VButton
					>
				</router-link>
			</nav>
		</div>
		<h1 class="header__title">{{ props.title }}</h1>
	</header>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({ title: String })
</script>
<style scoped lang="scss">
.header {
	background: $backgroundHeader;
	padding: 0 0 75px 68px;

	&__top {
		min-height: 125px;
		display: flex;
		align-items: center;
	}

	&__logo:not(:last-child) {
		margin-right: 40px;
	}

	&__nav {
		display: flex;
		margin-left: auto;
		align-items: stretch;
	}

	&__button {
		font-size: 14px;
	}

	&__nav-link {
		text-decoration: none;
		display: grid;
		grid-template-columns: 1fr;
		min-height: 125px;
		width: 200px;

		&_active .header__button {
			color: #fff;
			background: $secondary;
		}
	}

	&__title {
		margin-top: 90px;
		color: #fff;
		font-size: 70px;
		font-weight: 100;
		text-transform: uppercase;
	}
}
</style>
