<template>
  <div>
    <el-dialog v-model="show"
      ><h1>{{ message }}</h1></el-dialog
    >
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
defineProps<{ message: string }>();
const show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>
<style lang="scss" scoped></style>
