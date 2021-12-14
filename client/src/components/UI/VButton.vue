<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
  .button {
    padding: 15px 24px;
    font-size: 18px;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;

    &_primary-outline-600 {
      background: transparent;
      color: $primary-600;
      box-shadow: 0px 0px 0px 1px $primary-600 inset;
    }

    &_primary-600 {
      background: $primary-600;
    }

    &_secondary {
      background: $secondary;
    }

    &_primary-400 {
      background: $primary-400;
    }
  }
</style>
