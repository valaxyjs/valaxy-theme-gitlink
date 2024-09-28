<script lang="ts" setup>
import { useAppStore, useSiteConfig } from 'valaxy'
// import { computed } from 'vue'
// import { useRoute } from 'vue-router'
import { useThemeConfig } from '../composables'

// const route = useRoute()
// const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')

const config = useSiteConfig()
const themeConfig = useThemeConfig()

const appStore = useAppStore()
</script>

<template>
  <nav w="full" class="flex items-center justify-between py-10 font-bold">
    <a class="text-xl" href="/" :aria-label="config.title">
      <img
        class="mr-2 inline-block"
        style="width: 50px; height: 35px"
        alt="logo"
        :src="config.favicon"
      >
      <span class="hidden md:inline">{{ config.title }}</span>
    </a>
    <div class="text-sm text-gray-500 leading-5">
      <template v-for="(item, i) in themeConfig.nav" :key="i">
        <a
          :href="item.link"
          target="_blank"
          rel="noopener"
        >{{ item.text }}</a>

        <span v-if="i !== themeConfig.nav.length - 1" class="ml-2 mr-2">·</span>
      </template>
    </div>

    <button type="button" aria-label="Toggle Dark Mode" @click="appStore.toggleDark()">
      <div v-if="!appStore.isDark" i-ri-sun-line />
      <div v-else i-ri-moon-line />
    </button>
  </nav>
</template>
