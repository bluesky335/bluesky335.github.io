<template>
  <div>
    <ImageCover
      :image="BgCodeImage"
      title="Code Weaves The World"
      :dimming="0.8">
      <template #top>
        <div class="domain-name">coderx.xyz</div>
      </template>
    </ImageCover>
    <div class="about-me">
      <div class="title">{{ $t('home.findMe') }}</div>
      <div class="social-media">
        <div class="media-item blog">
          <a
            href="https://juejin.cn/user/1169536104531720/posts"
            target="_blank">
            <div class="item-icon">
              <IconJuejin />
            </div>
            <div class="item-name">
              {{ $t('home.blog') }} <br />
              @BlueSky335
            </div>
          </a>
        </div>
        <div class="media-item github">
          <a href="https://github.com/bluesky335" target="_blank">
            <div class="item-icon">
              <IconGithub />
            </div>
            <div class="item-name">
              {{ $t('home.github') }} <br />
              @bluesky335
            </div>
          </a>
        </div>
        <div class="media-item bilibili">
          <a href="https://space.bilibili.com/4200969" target="_blank">
            <div class="item-icon">
              <IconBiliBili />
            </div>
            <div class="item-name">
              {{ $t('home.BiliBili') }} <br />
              @Blue★Sky
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import BgCodeImage from '@/assets/bg-code.jpg';
import IconBiliBili from '@/assets/icon/ic-bilibili.svg';
import IconGithub from '@/assets/icon/ic-github.svg';
import IconJuejin from '@/assets/icon/ic-juejin.svg';
import ImageCover from '@/components/ImageCover.vue';
</script>
<style lang="scss" scoped>
.image-cover {
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 900;
  padding: 20px;
  padding-top: var(--nav-bar-height);
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.4));
  width: calc(100% - 40px);
  height: 45vh;
  color: white;
}
.domain-name {
  font-size: 3rem;
  border-bottom: 1px solid white;
}
.about-me {
  position: relative;
  .title {
    position: absolute;
    width: 100%;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 15px;
    font-size: 30px;
  }
}
.social-media {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.media-item {
  display: inline-block;
  color: var(--main-text-color);
  width: calc(100% / 3);
  background-color: aquamarine;
  height: 350px;
  // transform: skewX(-25deg);
  transition: height 0.2s ease-in-out;
  padding-top: 20px;
  > a {
    color: white;
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    height: 400px;
  }
  .item-icon {
    width: 100%;
    > svg {
      max-width: 100%;
    }
  }
  .item-name {
    border-top: 1px rgba(255, 255, 255, 0.4) solid;
    padding-top: 10px;
    width: 130px;
  }
}

.blog {
  background: linear-gradient(-30deg, rgb(59, 130, 247), rgb(31, 70, 132));
}

.bilibili {
  background: linear-gradient(-30deg, rgb(235, 123, 153), rgb(220, 49, 94));
}

.github {
  background: linear-gradient(-30deg, rgb(32, 35, 40), rgb(44, 65, 99));
}

@media screen and (max-width: 750px) {
  .social-media {
    flex-direction: column;
    .media-item {
      width: 100%;
      height: 200px;
    }
  }
}
</style>
