<template>
  <el-config-provider :locale="locale">
    <header>
      <nav-bar fixed>
        <div class="nav-bar-menu">
          <div class="menu">
            <router-link class="menu-button" to="/">
              <icon-home width="20" /> {{ $t('navbar.home') }}</router-link
            >
            <router-link class="menu-button" to="/apps">
              <icon-android width="20" /> {{ $t('navbar.apps') }}</router-link
            >
            <router-link class="menu-button" to="/open-source">
              <icon-code width="20" />
              {{ $t('navbar.openSource') }}</router-link
            >
          </div>
          <el-select v-model="language" class="language-select">
            <el-option
              v-for="item in languages"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>

            <template #prefix>
              <IconTranslate width="25" height="25"></IconTranslate>
            </template>
          </el-select>
        </div>
        <div class="nav-bar-menu-moble">
          <span class="menu-button" @click="menuDrawer = true">
            <icon-menu width="25" />
            {{ $route.meta.title ? $t($route.meta.title as string) : '' }}
          </span>
        </div>
      </nav-bar>
    </header>
    <el-drawer
      v-model="menuDrawer"
      size="300px"
      class="menu-drawer"
      :with-header="false"
      direction="ttb">
      <div class="menu">
        <router-link class="menu-button" to="/" @click="menuDrawer = false">
          <icon-home width="20" /> {{ $t('navbar.home') }}</router-link
        >
        <router-link class="menu-button" to="/apps" @click="menuDrawer = false">
          <icon-android width="20" /> {{ $t('navbar.apps') }}</router-link
        >
        <router-link
          class="menu-button"
          to="/open-source"
          @click="menuDrawer = false">
          <icon-code width="20" />
          {{ $t('navbar.openSource') }}</router-link
        >
        <el-select v-model="language" class="language-select">
          <el-option
            v-for="item in languages"
            :key="item.value"
            :label="item.label"
            :value="item.value"></el-option>

          <template #prefix>
            <IconTranslate width="25" height="25"></IconTranslate>
          </template>
        </el-select>
      </div>
    </el-drawer>
    <div class="app-content">
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
    <div class="icp-info">
      <a href="https://beian.miit.gov.cn/">
        <img src="@/assets/icon/ic-icp.png" alt="渝ICP备17004401号-3" />
        渝ICP备17004401号-3
      </a>

      <a href="https://beian.miit.gov.cn/">
        <img src="@/assets/icon/ic-gongan.png" alt="渝ICP备17004401号-3" />
        渝ICP备17004401号-3
      </a>
    </div>
  </el-config-provider>
</template>
<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue';
import IconHome from '@/assets/icon/ic-home.svg';
import IconMenu from '@/assets/icon/ic-menu.svg';
import IconCode from '@/assets/icon/ic-code.svg';
import IconTranslate from '@/assets/icon/ic-translate.svg';
import IconAndroid from '@/assets/icon/ic-android.svg';
import { computed, ref } from 'vue';
import i18n from './i18n';
import { zhCn } from 'element-plus/lib/locale/index.js';
import { en } from 'element-plus/lib/locale/index.js';

const menuDrawer = ref(false);

const language = computed<'en' | 'zh-CN'>({
  get() {
    return i18n.global.locale.value;
  },
  set(newValue) {
    i18n.global.locale.value = newValue;
  },
});
const locale = computed(() => {
  return ['zh', 'zh-CN'].indexOf(language.value) != -1 ? zhCn : en;
});
const languages = [
  { value: 'en', label: 'English 🇬🇧' },
  { value: 'zh-CN', label: '简体中文 🇨🇳' },
];
</script>
<style lang="scss" scoped>
.nav-bar-menu {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    color: white;
  }
  .language-select {
    width: 170px;
  }
  .router-link-active::after {
    border-bottom: 2px solid white;
  }

  .menu {
    display: flex;
    gap: 15px;
  }

  :deep(.el-input__wrapper) {
    background-color: transparent;
    box-shadow: none;
    input {
      color: white;
    }
    .el-input__prefix {
      color: white;
    }
    .el-select__caret {
      color: white;
    }
  }
  :deep(.el-input__wrapper:hover) {
    box-shadow: 0 0 0 0;
  }
  :deep(.el-select .el-input.is-focus .el-input__wrapper) {
    box-shadow: 0 0 0 0 !important;
  }
  :deep(.el-select .el-input__wrapper.is-focus) {
    box-shadow: 0 0 0 0 !important;
  }
}
.menu-button {
  cursor: pointer;
  min-height: 35px;
  padding-top: 5px;
  padding: 0px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 5px;
    right: 5px;
    height: 2px;
    background-color: transparent;
    transition: border-bottom 0.2s ease-in-out;
    border-bottom: 2px solid transparent;
  }
  &:hover {
    &::after {
      border-bottom: 2px solid #838383;
    }
  }
}
.app-content {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.icp-info {
  padding: 5px;
  background-color: var(--background-color);
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;

  a {
    color: var(--info-text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s color;
    gap: 5px;
    &:hover {
      color: black;
    }

    img {
      width: 16px;
    }
  }
}

.nav-bar-menu-moble {
  display: none;
}

.menu-drawer {
  .menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .menu-button {
    justify-content: flex-start;
    color: var(--main-text-color);
    border-bottom: 1px solid lightgray;
    height: 50px;
    &::after {
      bottom: 0;
      left: 0px;
      right: 0px;
    }
  }
}

@media screen and (max-width: 750px) {
  .nav-bar-menu {
    display: none;
  }
  .nav-bar-menu-moble {
    display: block;
  }
}
</style>
