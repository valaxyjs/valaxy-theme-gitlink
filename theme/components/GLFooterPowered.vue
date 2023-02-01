<script lang="ts" setup>
import { capitalize, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import pkg from 'valaxy/package.json'

import { useThemeConfig } from '../composables'

const { t } = useI18n()

const themeName = 'gitlink'
const themeConfig = useThemeConfig()

const poweredHtml = computed(() => t('footer.powered', [`<a href="${pkg.repository}" target="_blank" rel="noopener" mx="1">Valaxy</a> v${pkg.version}`]))
</script>

<template>
  <div class="powered flex-center" m="2">
    <div class="inline-flex" v-html="poweredHtml" />
    <span mx="1">|</span>
    <div class="inline-flex-center">
      <a :href="themeConfig.pkg.repository.url" :title="themeConfig.pkg.name" target="_blank">
        {{ capitalize(themeName) }}
      </a>
      <span ml="1">v{{ themeConfig.pkg.version }}</span>
    </div>
  </div>
</template>
