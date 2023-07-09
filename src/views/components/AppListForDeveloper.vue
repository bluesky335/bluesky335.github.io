<template>
  <div v-loading="loading">
    <div v-for="(app, index) in appList" :key="app.trackId">
      <iOSAppCard :app="app" />
      <el-divider v-if="index !== appList.length - 1"></el-divider>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import iOSAppCard from './iOSAppCard.vue';
import { onMounted } from 'vue';
import { getAppListForDeveloper } from '@/tools/appstore-info';
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';

const i18n = useI18n();
const loading = ref(false);
const appList = ref<any[]>([]);
const loadAppList = async () => {
  loading.value = true;
  try {
    let result = await getAppListForDeveloper('万林 刘');
    appList.value = result.results;
  } finally {
    loading.value = false;
  }
};
onMounted(async () => {
  await loadAppList();
});
watch(i18n.locale, () => {
  loadAppList();
});
</script>
<style lang="scss" scoped></style>
