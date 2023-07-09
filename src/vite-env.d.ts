/// <reference types="vite/client" />

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
declare module 'vue' {
  interface ComponentCustomProperties {
    $t: typeof t;
  }
}
