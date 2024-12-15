<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'

const config = useSiteConfig()
</script>

<template>
  <div class="gl-intro flex items-center" justify="center" w="full" h="screen">
    <div
      class="gl-card relative rounded shadow-md transition hover:shadow-lg" flex="~ col"
      min-w="300px"
      items="center" justify="center" m="2" p="4" bg="white dark:dark-900"
    >
      <div class="avatar" flex="~ col" justify="center" items="center" m="t-2">
        <img class="gl-avatar border-width-3px border-white shadow transition" rounded="full" :src="config.author.avatar" width="100" height="100" alt="avatar">
        <small v-if="config.author.name" opacity="70">
          {{ config.author.name }}
        </small>
      </div>
      <h1 font="black" text="2xl" m="t-4">
        {{ config.title }}
      </h1>
      <h2 opacity="75" m="y-2">
        {{ config.subtitle }}
      </h2>
      <blockquote m="y-4" p="y-2" opacity="80" text="sm" class="border-y border-b-gray-200 border-t-gray-200">
        {{ config.author.intro }}
      </blockquote>

      <GLNav m="y-2" />
      <GLSocial m="t-2" />
    </div>

    <GLConfig class="absolute right-5 top-5" />
  </div>
</template>
