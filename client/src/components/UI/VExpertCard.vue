<template>
	<div class="expert-card">
		<div class="expert-card__left">
			<img :src="props.expert.img" alt="" class="expert-card__img" />
		</div>
		<div class="expert-card__right">
			<h2 class="expert-card__name">{{ props.expert.name }}</h2>
			<p class="expert-card__info">
				Возраст - {{ props.expert.age }} {{ ageSuffix }}
			</p>
			<p class="expert-card__info">
				Стаж работы - {{ props.expert.workExperience }}
				{{ workExperienceSuffix }}
			</p>
			<p class="expert-card__info">{{ props.expert.advantages }}</p>
		</div>
		<div class="expert-card__count">
			{{ props.expert.count }}
		</div>
	</div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import numberSuffix from '../../utils/numberSuffix'

const props = defineProps({ expert: Object })
const ageSuffix = ref(numberSuffix(props.expert.age))
const workExperienceSuffix = ref(numberSuffix(props.expert.workExperience))
</script>

<style lang="scss" scoped>
.expert-card {
	background: $primary-100;
	border-radius: 5px;
	min-height: 115px;
	padding: 8px;
	box-sizing: border-box;
	display: flex;

	&__name {
		color: $primary-500;
	}

	&__img {
		width: 120px;
		height: 120px;
	}

	&__info {
		color: $primary-400;
	}

	&__right {
		margin-left: 10px;
		p {
			margin-top: 6px;
		}
	}

	&__count {
		color: #fff;
		background: $secondary;
		width: 38px;
		height: 38px;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: center;
		margin-left: auto;
		margin-right: 38px;
	}
}
</style>
