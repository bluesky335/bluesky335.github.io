<template>
  <div>
    <div class="place-holder"></div>
    <h1>{{ $t('privacyPolicy.codeScanner.title') }}</h1>
    <div>
      {{ $t('privacyPolicy.codeScanner.detail') }}
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.place-holder {
  height: var(--nav-bar-height);
}
</style>
