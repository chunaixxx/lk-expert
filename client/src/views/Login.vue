<template>
	<div class="login-wrapper">
		<VAside></VAside>
		<div class="login login-wrapper__right">
			<h1 class="login__title">Авторизация</h1>
			<form action="#" @submit.prevent class="login__form">
				<label class="login__label label">
					<h6 class="label__title">Логин</h6>
					<VInput
						v-model="email"
						type="text"
						placeholder="Введите почту"
						class="login__input"
					/>
				</label>
				<label class="login__label label">
					<h6 class="label__title">Пароль</h6>
					<VInput
						v-model="password"
						type="password"
						placeholder="Введите пароль"
						class="login__input"
					/>
				</label>
				<!-- <router-link to="registration">Забыли логин или пароль?</router-link> -->
				<div class="login__bottom">
					<VButton class="login__button button_secondary">Войти</VButton>
					<router-link to="registration" class="login__link">
						Зарегистрироваться
					</router-link>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<style lang="scss" scoped>
.login-wrapper {
	padding-top: 30px;
	display: flex;

	&__right {
		padding-left: 68px;
	}
}
.login {
	background: #fff;
	width: 100%;
	padding: 54px 68px;

	&__title {
		font-size: 40px;
		font-weight: 400;
		color: $primary-500;
		margin-bottom: 45px;
	}

	&__link {
		color: $primary-400;
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	&__button {
		min-width: 206px;
		margin-right: 16px;
	}

	&__input {
		max-width: 206px;
		width: 100%;
	}

	&__bottom {
		padding-top: 20px;
		display: flex;
		align-items: center;
	}
}

.label {
	display: block;

	&:not(:first-child) {
		margin-top: 20px;
	}

	&__title {
		color: $primary-400;
		margin-bottom: 10px;
	}
}
</style>
