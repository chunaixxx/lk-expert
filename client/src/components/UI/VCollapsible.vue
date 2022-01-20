<template>
	<div class="collapsible">
		<button
			type="button"
			class="collapsible__button"
			:class="{ collapsible__button_active: isOpen }"
			@click="handlerClick()"
		>
            <div class="collapsible__wrapper">
                <img v-if="isOpen" src="@/assets/icons/minus.svg" alt="Закрыть">
                <img v-else src="@/assets/icons/plus.svg" alt="Открыть">
                {{ props.title }}
            </div>

            <span class="collapsible__count">{{ props.count }}</span>
		</button>

		<div
			class="collapsible__content"
			:style="{ maxHeight: maxHeightContent + 'px' }"
			ref="content"
		>
			<p>Lorem ipsum...</p>
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps } from 'vue'
const isOpen = ref(false)

const props = defineProps({ title: String, count: Number })

const handlerClick = () => (isOpen.value = !isOpen.value)

const content = ref(null)
const maxHeightContent = ref(0)

onMounted(() => {
	watch(isOpen, () => {
		if (isOpen.value) {
			maxHeightContent.value = content?.value?.scrollHeight
		} else {
			maxHeightContent.value = 0
		}
	})
})
</script>

<style lang="scss" scoped>
.collapsible {
    &__wrapper {
        display: flex;
        align-items: center;
        gap: 24px;
    }

	&__button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        padding: 5px 0;

		width: 100%;
		font-size: 15px;
        font-weight: bold;
        text-transform: uppercase;
        color: $primary-1000;
        margin-bottom: 10px;

        background-color: transparent;
		cursor: pointer;
		border: none;
		outline: none;
	}

    &__count {
        font-weight: bold;
        color: $secodary-text-200
    }

	&__content {
		padding: 0 40px;

		max-height: 0;
		overflow: hidden;
		transition: all 0.2s;
	}
}
</style>
