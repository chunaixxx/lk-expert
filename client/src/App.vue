<template>
	<div class="app">
		<Header title="Кабинет экспертов" />
		<main class="app__main">
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&family=Source+Sans+Pro:wght@300&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

a {
	text-decoration: none;
	color: inherit;
}

.app {
	font-family: 'Roboto', sans-serif;
	background: $backgroundPage;
	min-height: 100vh;

	&__main {
		min-height: calc(100vh - 374px);
		padding-top: 30px;
	}
}
img {
	-webkit-user-drag: none;
}
</style>
