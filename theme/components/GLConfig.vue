<script lang="ts" setup>
import { useAppStore } from 'valaxy'

const appStore = useAppStore()
</script>

<template>
  <button type="button" aria-label="Toggle Dark Mode" @click="appStore.toggleDark()">
    <div v-if="!appStore.isDark" i-ri-sun-line />
    <div v-else i-ri-moon-line />
  </button>
</template>
