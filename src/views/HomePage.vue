<template>
  <div>
    <ImageCover
      class="cover"
      :image="BgCodeImage"
      title="Code Weaves The World" />
    <h1>Code Weaves The World</h1>
  </div>
</template>
<script lang="ts" setup>
import BgCodeImage from '@/assets/bg-code.jpg';
import ImageCover from '@/components/ImageCover.vue';
</script>
<style lang="scss" scoped>
.cover {
  font-size: 70px;
  font-weight: 900;
  padding-top: var(--nav-bar-height);
  filter: drop-shadow(0 10px 10px black);
  width: 100%;
  height: 40vh;
}
</style>
