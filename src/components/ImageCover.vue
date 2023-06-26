<script setup lang="ts">
interface Props {
  title?: string
  image: string
}
defineProps<Props>()

</script>

<template>
  <div class="image-cover">
    <img
      :src="image"
      alt="cover image"
    >
    <div
      v-if="title"
      class="title"
    >
      {{ title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-cover {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .title {
    position: relative;
    color: white;
  }
}
</style>
