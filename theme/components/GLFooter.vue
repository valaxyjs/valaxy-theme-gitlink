<script lang="ts" setup>
import { computed } from 'vue'
import { useSiteConfig } from 'valaxy'
import { useThemeConfig } from '../composables'

const siteConfig = useSiteConfig()
const themeConfig = useThemeConfig()

const year = new Date().getFullYear()

const isThisYear = computed(() => {
  return year === themeConfig.value.footer.since
})

const footerIcon = computed(() => themeConfig.value.footer.icon!)
</script>

<template>
  <footer class="va-footer p-4" text="center sm $va-c-text-light">
    <div v-if="themeConfig.footer.beian?.enable && themeConfig.footer.beian.icp" class="beian" m="y-2">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">
        {{ themeConfig.footer.beian.icp }}
      </a>
    </div>

    <div class="copyright flex items-center justify-center" p="1">
      <span>
        &copy;
        <template v-if="!isThisYear">
          {{ themeConfig.footer.since }} -
        </template>
        {{ year }}
      </span>

      <a m="x-2" class="inline-flex animate-pulse" :href="footerIcon.url" target="_blank" :title="footerIcon.title">
        <div :class="footerIcon.name" />
      </a>

      <span>{{ siteConfig.author.name }}</span>
    </div>

    <!-- <GLFooterPowered v-if="themeConfig.footer.powered" /> -->

    <slot />
  </footer>
</template>
