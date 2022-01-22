<template>
	<!-- <input
		type="checkbox"
		name="rb"
		:id="props.id"
		@input="$emit('update:modelValue', $event.target.value)"
		:value="props.modelValue"
		v-bind="$attrs"
		class="checkbox"
	/> -->

	<div class="container">
		<input type="checkbox" />
		<span class="checkmark"></span>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
	display: flex;
	align-items: center;
	align-items: center;
	position: relative;
	cursor: pointer;
	font-size: 17px;
	user-select: none;
}

.container input {
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
}

.checkmark {
	position: relative;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	border: 2px solid $secondary;
	border-radius: 5px;
}

.container:hover input ~ .checkmark {
	background-color: #ccc;
}

.checkmark:after {
	content: '';
	position: absolute;
	display: none;
}

.container input:checked ~ .checkmark:after {
	display: block;
}

.container .checkmark:after {
	left: 7px;
	top: 3px;
	width: 5px;
	height: 10px;
	border: solid #504f7e;
	border-width: 0 2px 2px 0;
	-webkit-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	transform: rotate(45deg);
}
</style>
