<script lang="ts" setup>
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()
</script>

<template>
  <nav>
    <ul class="flex">
      <li v-for="item in themeConfig.nav" :key="item.link">
        <router-link active-class="active" class="gl-nav-item rounded-full text-black" m="2" p="x-4 y-2" border="~" :to="item.link">
          {{ item.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.gl-nav-item {
  border-color: #ccc;
  background-color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #eee;
  }

  &.active {
    color: white;
    background-color: black;
  }
}

.dark {
  .gl-nav-item {
    color: white;
    border-color: #666;
    background-color: #222;

    &:hover {
      background-color: #333;
    }

    &.active {
      color: black;
      background-color: white;
    }
  }
}
</style>
