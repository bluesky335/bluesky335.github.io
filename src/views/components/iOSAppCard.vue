<template>
  <a :href="app.trackViewUrl" target="_blank">
    <div class="app-card">
      <img class="app-icon" :src="app.artworkUrl512" :alt="app.trackName" />
      <div class="info">
        <div class="title" :content-advisory-rating="app.contentAdvisoryRating">
          <IconApple class="icon-apple" />
          <el-text truncated>
            {{ app.trackName }}
          </el-text>
        </div>
        <div>
          <el-text size="large"
            >{{ $t('apps.version') }}: {{ app.version }}</el-text
          >
        </div>
        <pre class="description">{{ app.description }}</pre>
      </div>
    </div>
  </a>
</template>
<script lang="ts" setup>
import IconApple from '@/assets/icon/ic-apple.svg';
interface Props {
  app: any;
}
defineProps<Props>();
</script>
<style lang="scss" scoped>
.app-card {
  cursor: pointer;
  overflow: hidden;
  display: flex;
  padding: 10px;
  gap: 40px;
  justify-content: center;
  align-items: flex-start;
  transition: filter 0.3s ease-in-out;
  &:hover {
    filter: drop-shadow(10px 10px 5px rgba(76, 76, 76, 0.4));
  }
  .app-icon {
    min-width: 100px;
    width: 200px;
    object-fit: contain;
    border-radius: 20%;
    overflow: hidden;
    box-sizing: border-box;
    border: solid 1px #ddd;
  }
  .info {
    text-align: left;
    padding: 16px 0;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    .title {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      overflow: hidden;
      color: var(--main-text-color);
      width: 100%;
      .icon-apple {
        width: 32px;
        height: 32px;
      }
      .el-text {
        font-weight: bold;
        color: var(--main-text-color);
        font-size: 17px;
      }

      &::after {
        font-size: 14px;
        border: 1px solid #ddd;
        padding: 3px 5px;
        color: var(--info-text-color);
        border-radius: 5px;
        content: attr(content-advisory-rating);
      }
    }
    .description {
      white-space: break-spaces;
      color: var(--sub-text-color);
    }
  }
}

@media screen and (max-width: 750px) {
  .app-card {
    flex-direction: column;
    gap: 5px;
    &:hover {
      filter: none;
    }
    .app-icon {
      min-width: 80px;
      width: 100px;
    }
    .info {
      width: 100%;
    }
  }
}
</style>
