<template>
  <div>
    <ImageCover class="cover" :title="$t('apps.title')" :dimming="0">
      <icon-android width="90" />
    </ImageCover>
    <AppListForDeveloper class="app-list"></AppListForDeveloper>
  </div>
</template>
<script lang="ts" setup>
import IconAndroid from '@/assets/icon/ic-android.svg';
import AppListForDeveloper from './components/AppListForDeveloper.vue';
</script>
<style lang="scss">
.cover {
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 900;
  padding: 20px;
  padding-top: var(--nav-bar-height);
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.4));
  width: calc(100% - 40px);
  height: 45vh;
  color: white;
  background: linear-gradient(
      117deg,
      rgba(201, 179, 236, 1),
      rgba(189, 195, 235, 0) 70%
    ),
    linear-gradient(207deg, rgba(234, 184, 220, 1), rgba(189, 195, 235, 0) 70%),
    linear-gradient(297deg, rgba(138, 185, 255, 1), rgba(189, 195, 235, 0) 70%);
}

.app-list {
  max-width: 1280px;
  margin: 50px auto;
  padding: 20px;
}

@media (prefers-color-scheme: dark) {
  .cover {
    background: linear-gradient(
        117deg,
        rgb(116, 95, 148),
        rgba(189, 195, 235, 0) 70%
      ),
      linear-gradient(207deg, rgb(137, 82, 121), rgba(189, 195, 235, 0) 70%),
      linear-gradient(297deg, rgb(46, 80, 132), rgba(189, 195, 235, 0) 70%);
  }
}
</style>
