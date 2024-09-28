<script lang="ts" setup>
import { useLocale } from 'valaxy'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const { toggleLocales } = useLocale()
</script>

<template>
  <button class="yun-icon-btn text-$va-c-text" :title="t('button.toggle_langs')" @click="toggleLocales">
    <div i-ri-translate class="transform transition" :class="locale === 'en' ? 'rotate-y-180' : ''" />
  </button>
</template>
