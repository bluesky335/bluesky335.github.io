<script setup lang="ts"></script>

<template>
  <header>
    <nav class="nav-bar"></nav>
  </header>
  <div class="app-content">
    <router-view />
  </div>
  <div class="icp-info">
    <a href="https://beian.miit.gov.cn/">
      <img src="@/assets/ic-icp.png" alt="渝ICP备17004401号-3" />
      渝ICP备17004401号-3
    </a>

    <a href="https://beian.miit.gov.cn/">
      <img src="@/assets/ic-gongan.png" alt="渝ICP备17004401号-3" />
      渝ICP备17004401号-3
    </a>
  </div>
</template>
<style lang="scss" scoped>
.nav-bar {
  z-index: 1;
  position: fixed;
  border-bottom: rgba(128, 128, 128, 0.4) 0.5px solid;
  width: 100%;
  height: var(--nav-bar-height);
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
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
</style>
