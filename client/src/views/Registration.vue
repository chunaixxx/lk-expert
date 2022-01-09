<template>
	<div class="registration">
		<VAside></VAside>
		<div class="registration__right">
			<h2 class="registration__title">Регистрация</h2>
			<h3 class="registration__subtitle">Укажите ваши личные данные</h3>
			<form action="#" @submit.prevent class="registration__form">
				<label class="label">
					<h6 class="label__title">Фамилия</h6>
					<VInput
						type="text"
						name="surname"
						placeholder="Введите фамилию"
						class="label__input"
					/>
				</label>
				<label class="label">
					<h6 class="label__title">Имя</h6>
					<VInput
						type="text"
						name="surname"
						placeholder="Введите имя"
						class="label__input"
					/>
				</label>
				<label class="label">
					<h6 class="label__title">Отчество</h6>
					<VInput
						type="text"
						name="surname"
						placeholder="Введите отчество"
						class="label__input"
					/>
				</label>
				<label class="label">
					<h6 class="label__title">Почта</h6>
					<VInput
						type="text"
						name="surname"
						placeholder="Введите почту"
						class="label__input"
					/>
				</label>
				<label class="label">
					<h6 class="label__title">Дата рождения</h6>
					<VInput
						type="text"
						name="surname"
						placeholder="00.00.0000"
						class="label__input"
					/>
				</label>
				<label class="label">
					<h6 class="label__title">Пол</h6>
					<div class="label__radio-group">
						<VRadio
							name="foo"
							v-model="gender"
							value="Мужской"
							class="registration__radio"
						/>
						<VRadio
							name="foo"
							v-model="gender"
							value="Женский"
							class="registration__radio"
						/>
					</div>
				</label>

				<h3 class="registration__subtitle">Придумайте логин и пароль</h3>
				<h3 class="registration__subtitle grid-2-col">
					Дополнительная информация о себе
				</h3>
				<label class="label">
					<h6 class="label__title">Логин</h6>
					<VInput
						type="text"
						name="surname"
						placeholder="Введите логин"
						class="label__input"
					/>
				</label>
				<label class="label grid-2-col grid-2-row label_textarea">
					<h6 class="label__title">Необязательно*</h6>
					<VTextarea
						placeholder="Дополнительная информация о себе..."
						class="label__textarea"
					/>
				</label>
				<label class="label">
					<h6 class="label__title">Пароль</h6>
					<VInput
						type="password"
						name="surname"
						placeholder="Введите пароль"
						class="label__input"
					/>
				</label>
				<div class="registration__footer grid-2-col">
					<VButton class="button_secondary registration__submit"
						>Зарегистрироваться</VButton
					>
					<router-link to="login" class="registration__link">
						Уже есть аккаунт?
					</router-link>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import VRadio from '../components/UI/VRadio.vue'

const gender = ref('')
</script>
<style lang="scss" scoped>
.registration {
	display: flex;
	justify-content: space-between;
	padding-top: 30px;

	&__right {
		background: #fff;
		padding: 33px 68px 82px 68px;
		width: 100%;
	}

	&__submit {
		font-size: 14px;
		text-transform: uppercase;
	}

	&__form {
		color: $primary-400;
		padding-top: 50px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 42px;
	}

	&__title {
		font-size: 40px;
		color: $primary-500;
		font-weight: 400;
		margin-bottom: 50px;
	}

	&__subtitle {
		color: $primary-500;
	}

	&__link {
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	&__footer {
		display: flex;
		gap: 25px;
		align-items: center;
	}
}

.label {
	&__title {
		margin-bottom: 10px;
		font-size: 14px;
		font-weight: normal;
	}

	&_textarea {
		display: flex;
		flex-direction: column;
	}

	&__input {
		width: 100%;
	}

	&__textarea {
		width: 100%;
		height: 100%;
	}

	&__radio-group {
		min-height: 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}

.grid-2-col {
	grid-column-start: span 2;
}

.grid-2-row {
	grid-row-start: span 2;
}
</style>
