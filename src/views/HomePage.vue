<template>
  <div>
    <ImageCover
      class="cover"
      :image="BgCodeImage"
    />
    <h1>Code Weaves The World</h1>
  </div>
</template>
<script lang="ts" setup>
import BgCodeImage from '@/assets/bg-code.jpg'
import ImageCover from '@/components/ImageCover.vue'
</script>
<style lang="scss" scoped>
.cover {
  font-size: 40px;
  width: 100%;
  height: 60vh;
}
</style>