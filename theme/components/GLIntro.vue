<script lang="ts" setup>
import { useConfig } from 'valaxy'

const config = useConfig()
</script>

<template>
  <div class="gl-intro flex items-center" justify="center" w="screen" h="screen">
    <div
      class="gl-card transition shadow-md hover:shadow-lg rounded relative" flex="~ col"
      min-w="300px"
      items="center" justify="center" m="2" p="4" bg="white dark:dark-900"
    >
      <div class="avatar" flex="~ col" justify="center" items="center" m="t-2">
        <img class="gl-avatar transition shadow border-white border-width-3px" rounded="full" :src="config.author.avatar" width="100" height="100" alt="avatar">
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
      <blockquote m="y-4" p="y-2" opacity="80" text="sm" class="border-y border-t-gray-200 border-b-gray-200">
        {{ config.author.intro }}
      </blockquote>

      <GLNav m="y-2" />
      <GLSocial m="t-2" />
    </div>

    <GLConfig class="absolute top-5 right-5" />
  </div>
</template>
