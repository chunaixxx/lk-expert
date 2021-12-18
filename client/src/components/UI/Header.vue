<template>
  <header class="header">
    <img src="@/assets/logo.svg" alt="" />
    <img src="@/assets/logo2.svg" alt="" />

    <h1 class="header__title">{{ props.title }}</h1>
  </header>
</template>
<script setup>
  import { defineProps } from "vue"

  const props = defineProps({ title: String })
</script>
<style scoped lang="scss">
  .header {
    background: $backgroundHeader;

    &__title {
      color: #fff;
    }
  }
</style>
