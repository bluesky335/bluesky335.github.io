<script setup lang="ts">
import { randomWithSeed } from '@/tools/seed-random';
import { ref, onMounted } from 'vue';
import kaomoji from './kaomoji';

interface Props {
  title?: string;
  image?: string;
  dimming?: number;
  bgRandomSeed?: number;
}
const props = withDefaults(defineProps<Props>(), {
  dimming: 0.7,
  title: undefined,
  image: undefined,
  bgRandomSeed: undefined,
});

const bgCanvas = ref();

function point(p: number): number {
  const dpr = window.devicePixelRatio;
  return Math.round(p * dpr);
}

const drawBg = () => {
  const seed = props.bgRandomSeed;
  if (seed === undefined || seed === null) {
    return;
  }
  const canvas = bgCanvas.value as HTMLCanvasElement;
  const canvasWidth = point(canvas.clientWidth);
  const canvasHeight = point(canvas.clientHeight);
  const width = point(screen.width);
  const height = point(screen.height);
  const liheHeight = 50;
  const itemSpace = 20;
  const offsetX = 50;
  canvas.setAttribute('width', `${canvasWidth}`);
  canvas.setAttribute('height', `${canvasHeight}`);
  const ctx = canvas.getContext('2d');
  if (ctx == null) {
    return;
  }
  ctx.font = `${point(
    15,
  )}px Inter, system-ui, Avenir, Helvetica, Arial, sans-serif`;
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.globalCompositeOperation = 'darken';
  let x = point(-10);
  let y = point(5);
  let line = 0;
  const random = randomWithSeed(seed);
  while (y < height) {
    while (x < width) {
      const index = random({ min: 0, max: kaomoji.length });
      let item = kaomoji[index];
      const size = ctx.measureText(item);
      ctx.fillText(item, x + random() * 20, y + (random() * 40 - 20));
      x += size.width + point(itemSpace);
    }
    line += 1;
    x = offsetX * (line % 2) + point(-10);
    y += point(liheHeight);
  }
};

onMounted(() => {
  drawBg();
});
</script>

<template>
  <div class="image-cover">
    <canvas v-if="bgRandomSeed" ref="bgCanvas" class="bg-canvas"></canvas>
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

.bg-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
