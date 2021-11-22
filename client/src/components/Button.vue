<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 15px 24px;
  font-size: 18px;
  background: $red;
  border: none;
  outline: none;
  color: $white;
  min-width: 184px;
}
</style>