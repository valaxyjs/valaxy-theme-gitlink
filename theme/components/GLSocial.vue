<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'

const config = useSiteConfig()
</script>

<template>
  <ul class="gl-social-container" flex="~ wrap" justify="center">
    <li v-for="item in config.social" :key="item.name" class="inline-flex">
      <a :href="item.link" class="gl-social-icon" m="1" p="2" :alt="item.name" :style="{ '--gl-c-icon': item.color }" target="_blank">
        <div :class="item.icon" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
.gl-social-container {
  --gl-c-border: rgba(0, 0, 0, 0.08);
  // border-top: 1px solid var(--gl-c-border);
  // border-bottom: 1px solid var(--gl-c-border);
}

.gl-social-icon {
  border-radius: 50%;
  color: var(--gl-c-icon);
  transition: all 0.2s;

  &:hover {
    color: white;
    background-color: var(--gl-c-icon);
  }
}
</style>
