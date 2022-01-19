<template>
	<button class="button">
		<slot></slot>
	</button>
</template>

<script setup></script>

<style lang="scss" scoped>
.button {
	text-align: center;
	padding: 15px 24px;
	border: none;
	outline: none;
	color: #fff;
	cursor: pointer;
	display: block;
	background: none;

	&_primary-outline-600 {
		background: transparent;
		color: $primary-600;
		box-shadow: 0px 0px 0px 1px $primary-600 inset;
	}
	&_primary-900 {
		color: $primary-900;
	}
	.header__nav-link_active &_primary-900 {
		background: $primary-900;
		color: #fff;
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

	&_menu {
		background: $primary-200;
		color: $primary-700;
		transition: $defaultTransition;

		&:hover {
			background: $secondary;
			color: #fff;
		}
	}
}
</style>
