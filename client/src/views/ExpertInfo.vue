<template>
	<div class="profile">
		<VAside></VAside>
		<div class="profile__info">
			<div class="profile__left">
				<h2 class="profile__title">Данные об эксперте</h2>
				<div class="profile__info-item">
					<div class="profile__subtitle">ФИО:</div>
					<div>
						{{ expert.name }}
					</div>
				</div>
				<div class="profile__info-item">
					<div class="profile__subtitle">День рождения:</div>
					<div>
						{{ expert.birthday }}
					</div>
				</div>
				<div class="profile__info-item">
					<div class="profile__subtitle">Почта:</div>
					<div>
						{{ expert.email }}
					</div>
				</div>
				<div class="profile__info-item">
					<div class="profile__subtitle">Сертефикаты экспертности:</div>
					<img
						v-for="(item, i) in expert.certificates"
						:key="i"
						:src="item"
						alt=""
						class="profile__certificate"
					/>
				</div>
				<div class="profile__advantages">
					<div>
						{{ expert.advantages }}
					</div>
				</div>
			</div>
			<div class="profile__right">
				<img :src="expert.img" alt="" class="profile__img" />
				<div class="profile__top">
					Входит в топ {{ expert.top }} % активных профилей
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute()
const getExpertById = store.getters.getExpertById
const id = route.params.id
const expert = computed(() => getExpertById(id))
</script>

<style lang="scss" scoped>
.profile {
	display: flex;

	&__info {
		width: 100%;
		padding: 30px 70px;
		background: #fff;
		display: flex;
	}

	&__title {
		font-size: 40px;
		font-weight: 400;
		text-transform: uppercase;
		margin-bottom: 30px;
		color: $primary-500;
	}

	&__info-item {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 10px;
		padding: 10px 10px;
		border-bottom: 2px solid $primary-200;
		color: $primary-800;

		&:not(:first-child) {
			margin-top: 15px;
		}
	}

	&__subtitle {
		color: $primary-400;
	}

	&__right {
		padding-top: 20px;
		margin-left: 80px;
	}

	&__img {
		width: 216px;
		height: 250px;
	}

	&__advantages {
		margin-top: 15px;
		border: 2px solid $primary-200;
		padding: 16px;
		border-radius: 7px;
	}

	&__certificate {
		width: 122px;
	}

	&__top {
		width: 216px;
		color: #fff;
		background: $secondary;
		padding: 6px;
		box-sizing: border-box;
		border-radius: 7px;
		text-transform: uppercase;
		margin-top: 20px;
		text-align: center;
	}
}
</style>
