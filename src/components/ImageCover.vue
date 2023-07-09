<script setup lang="ts">
interface Props {
  title?: string;
  image?: string;
  dimming?: number;
}
withDefaults(defineProps<Props>(), {
  dimming: 0.7,
  title: undefined,
  image: undefined,
});
</script>

<template>
  <div class="image-cover">
    <img v-if="image" class="bg-image" :src="image" />
    <div class="title-bg" :style="`opacity: ${dimming};`" />
    <div v-if="$slots.top" class="slots-item drop-shadow">
      <slot name="top"></slot>
    </div>
    <div v-if="title" class="title drop-shadow">{{ title }}</div>
    <div v-if="$slots.default" class="slots-item drop-shadow">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-cover {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  overflow: hidden;

  .slots-item {
    position: relative;
  }
  .bg-image {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: scale-bg 20s alternate-reverse ease-in-out infinite;
  }
  .title-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0);
  }
  .title {
    position: relative;
    color: white;
    &::before {
      content: '#';
    }
    &::after {
      content: '_';
      animation: 1s blink infinite steps(1);
    }
  }
}

@keyframes scale-bg {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}

@keyframes blink {
  50% {
    color: transparent;
  }
}
</style>
