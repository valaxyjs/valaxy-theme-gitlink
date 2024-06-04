<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'

const config = useSiteConfig()
</script>

<template>
  <div class="pb-8 pt-6 space-y-2 md:space-y-5" text="center" m="t-10">
    <router-link class="gl-title" to="/">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight md:text-6xl sm:text-4xl md:leading-14 sm:leading-10"
      >
        {{ config.title }}
      </h1>
    </router-link>
    <p class="text-lg text-gray-500 leading-7">
      {{ config.subtitle }}
    </p>
  </div>
</template>

<style lang="scss">
.gl-title {
  color: var(--gl-c-text);
  transition: all 0.2s;
  &:hover {
    color: var(--va-c-primary);
  }
}
</style>
