<script lang="ts" setup>
defineProps<{
  title: string;
  description?: string;
}>();
</script>

<template>
  <div class="container">
    <h1 class="container__title">
      {{ title }}
    </h1>
    <p class="container__description">
      {{ description }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1280px;
  height: 630px;
  background-color: white;
  color: black;
  padding: 40px;
  box-sizing: border-box;
  text-align: center;

  &__title {
    font-size: 48px;
    font-weight: bold;
    margin: 0;
  }

  &__description {
    font-size: 28px;
    margin-top: 20px;
  }
}
</style>
