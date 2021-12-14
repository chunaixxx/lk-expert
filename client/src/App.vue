<template>
  <div class="app">
    <VButton class="button_primary-outline-600"> Самара </VButton>
    <VButton class="button_primary-600"> Самара </VButton>
    <VButton class="button_secondary"> Самара </VButton>
    <VButton class="button_primary-400"> Самара </VButton>
    <VInput placeholder="Абоба"/>
  </div>
</template>

<script setup></script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    font-family: "Roboto", sans-serif;
    background: $backgroundPage;
    min-height: 100vh;
  }
</style>
