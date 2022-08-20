<script lang="ts" setup>
import { useConfig } from 'valaxy'

const config = useConfig()
</script>

<template>
  <div class="pt-6 pb-8 space-y-2 md:space-y-5" text="center" m="t-10">
    <router-link class="gl-title" to="/">
      <h1
        class="
          text-3xl
          leading-9
          font-extrabold
          tracking-tight
          sm:text-4xl sm:leading-10
          md:text-6xl md:leading-14
        "
      >
        {{ config.title }}
      </h1>
    </router-link>
    <p class="text-lg leading-7 text-gray-500">
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
