<template>
  <div>
    <div>
      <ImageCover
        :title="$t('openSource.title')"
        :dimming="0"
        :bg-random-seed="200">
        <IconGithub width="62px" height="62px" />
      </ImageCover>
    </div>
    <div class="repo-list">
      <div v-for="repo in repositoryList" :key="repo.repo" class="repo-item">
        <div class="repo-title">
          <a
            class="repo-name"
            :href="`https://github.com/bluesky335/${repo.repo}`"
            target="_blank">
            {{ repo.name }}
          </a>
          <iframe
            :src="`https://ghbtns.com/github-btn.html?user=bluesky335&repo=${repo.repo}&type=star&count=true&size=large`"
            frameborder="0"
            scrolling="0"
            width="300"
            height="30"
            title="GitHub"></iframe>
        </div>
        <div class="repo-info">
          <span>
            {{ $t('openSource.language') }}:
            <span
              class="repo-language"
              :style="`background-color:${repo.languageColor};`">
              {{ repo.language }}
            </span>
          </span>
          <span> </span>
        </div>
        <el-text class="description" size="large">
          {{ $t(repo.description) }}
        </el-text>
        <el-divider></el-divider>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import IconGithub from '@/assets/icon/ic-github.svg';
interface Repo {
  name: string;
  repo: string;
  language: string;
  description: string;
  languageColor: string;
}
const repositoryList: Repo[] = [
  {
    name: 'IDCheck',
    repo: 'IDCheck',
    language: 'Go',
    description: 'openSource.description.idCheck',
    languageColor: 'rgb(75, 171, 212)',
  },
  {
    name: 'Toaster',
    repo: 'Toaster',
    language: 'Swift',
    description: 'openSource.description.Toaster',
    languageColor: 'rgb(223, 92, 68)',
  },
];
</script>
<style lang="scss" scoped>
.image-cover {
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
      rgb(189, 255, 248),
      rgba(189, 195, 235, 0) 70%
    ),
    linear-gradient(207deg, rgb(180, 190, 255), rgba(189, 195, 235, 0) 70%),
    linear-gradient(297deg, rgb(138, 185, 255), rgba(189, 195, 235, 0) 70%);
}

.repo-list {
  max-width: 1280px;
  margin: 50px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.repo-item {
  text-align: left;
  .repo-title {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
  }
  .repo-name {
    font-size: 35px;
    color: var(--main-text-color);
    border-bottom: 1px solid var(--main-text-color);
  }
  .repo-info {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 15px 0;
  }
  .repo-language {
    color: white;
    background-color: gray;
    padding: 2px 8px;
    border-radius: 5px;
  }
}

@media (prefers-color-scheme: dark) {
  .image-cover {
    background: linear-gradient(
        117deg,
        rgb(80, 152, 145),
        rgba(189, 195, 235, 0) 70%
      ),
      linear-gradient(207deg, rgb(71, 58, 131), rgba(189, 195, 235, 0) 70%),
      linear-gradient(300deg, rgb(46, 76, 121), rgba(189, 195, 235, 0) 70%);
  }
}
</style>
