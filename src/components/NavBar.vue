<template>
  <nav class="nav-bar" v-bind="$attrs" :class="navbarClass">
    <slot></slot>
  </nav>
  <div v-if="fixed && placeholder" class="nav-bar-placeholder"></div>
</template>
<script lang="ts" setup>
// import { computed } from 'vue';

interface Props {
  fixed?: boolean;
  placeholder?: boolean;
  blur?: boolean;
  borderBottom?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  fixed: false,
  placeholder: false,
  blur: true,
  borderBottom: true,
});

const navbarClass = {
  'border-bottom': props.borderBottom,
  fixed: props.fixed,
  blur: props.blur,
};
</script>
<style scoped lang="scss">
.nav-bar {
  z-index: 1;
  left: 0;
  right: 0;
  height: var(--nav-bar-height);
  background-color: var(--nav-bar-background-color);
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 20px;
  color: var(--nav-bar-text-color);
}
.border-bottom {
  border-bottom: rgba(128, 128, 128, 0.4) 0.5px solid;
}
.fixed {
  position: fixed;
}

.blur {
  backdrop-filter: blur(10px);
}
.nav-bar-placeholder {
  left: 0;
  right: 0;
  height: var(--nav-bar-height);
  background-color: rebeccapurple;
}
</style>
