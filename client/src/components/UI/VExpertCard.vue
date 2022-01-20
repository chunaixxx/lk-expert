<template>
	<div class="expert-card" v-if="props.type === 'simple'" v-bind="$attrs">
		<div class="expert-card__info-wrapper grid-2-col">
			<img :src="props.expert.img" alt="" class="expert-card__img" />
			<div>
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
		</div>
		<div class="expert-card__count">
			{{ props.expert.count }}
		</div>
	</div>
	<div v-if="props.type === 'application'" class="expert-card" v-bind="$attrs">
		<div class="expert-card__info-wrapper">
			<img :src="props.expert.img" alt="" class="expert-card__img" />
			<div>
				<h2 class="expert-card__name">{{ props.expert.name }}</h2>
				<p class="expert-card__info">
					Возраст - {{ props.expert.age }} {{ ageSuffix }}
				</p>
				<p class="expert-card__info">
					Стаж работы - {{ props.expert.workExperience }}
					{{ workExperienceSuffix }}
				</p>
			</div>
		</div>
		<div class="expert-card__solution">
			<p class="expert-card__solutions">
				{{ props.expert.needAccept }}
			</p>
		</div>
		<div class="expert-card__buttons">
			<VButton class="button_secondary expert-card__button">Принять</VButton>
			<VButton class="button_primary-600 expert-card__button">
				Отклонить
			</VButton>
		</div>
	</div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import numberSuffix from '../../utils/numberSuffix'

const props = defineProps({ expert: Object, type: String })
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
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;

	&__name {
		color: $primary-500;
		font-size: 16px;
	}

	&__img {
		width: 120px;
		height: 120px;
		border-radius: 3px;
	}

	&__info-wrapper {
		display: flex;
		gap: 10px;
	}

	&__info {
		color: $primary-400;
	}

	&__info-wrapper {
		align-self: flex-start;

		p {
			margin-top: 6px;
		}
	}

	&__solution {
		margin-left: 40px;
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

	&__buttons {
		margin-left: auto;
	}

	&__button {
		min-width: 242px;

		&:not(:first-child) {
			margin-top: 20px;
		}
	}
}

.grid-2-col {
	grid-column-start: span 2;
}
</style>
