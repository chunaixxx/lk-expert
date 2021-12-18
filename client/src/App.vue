<template>
	<div class="app">
		<Header title="Кабинет экспертов" />
		<router-view />
	</div>
</template>

<script setup>
import Header from '@/components/UI/Header.vue'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&family=Source+Sans+Pro:wght@300&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	font-family: 'Roboto', sans-serif;
	background: $backgroundPage;
	min-height: 100vh;
}
</style>
