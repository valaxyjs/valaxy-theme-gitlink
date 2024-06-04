<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useFrontmatter, usePostList } from 'valaxy'

const frontmatter = useFrontmatter()

const route = useRoute()
const posts = usePostList()

function findCurrentIndex() {
  return posts.value.findIndex(p => p.href === route.path)
}

const nextPost = computed(() => posts.value[findCurrentIndex() - 1])
const prevPost = computed(() => posts.value[findCurrentIndex() + 1])
</script>

<template>
  <article class="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
    <header class="pt-6 text-center space-y-1 xl:pb-10">
      <StarterDate :date="frontmatter.date" />
      <h1
        class="st-text text-3xl font-extrabold leading-9 tracking-tight md:text-5xl sm:text-4xl md:leading-14 sm:leading-10"
      >
        {{ frontmatter.title }}
      </h1>
    </header>

    <div
      class="pb-16 xl:grid xl:grid-cols-4 xl:gap-x-10 divide-y divide-gray-200 xl:pb-20 xl:divide-y-0 dark:divide-gray-700"
      style="grid-template-rows: auto 1fr"
    >
      <StarterAuthor v-if="frontmatter.author" :frontmatter="frontmatter" />
      <div class="xl:col-span-3 xl:row-span-2 divide-y divide-gray-200 xl:pb-0 dark:divide-gray-700">
        <router-view />
      </div>

      <footer
        class="text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 divide-y divide-gray-200 dark:divide-gray-700"
      >
        <div v-if="nextPost" class="py-8">
          <h2 class="text-xs text-gray-500 tracking-wide uppercase">
            Next Article
          </h2>
          <div class="link">
            <a :href="nextPost.href">{{ nextPost.title }}</a>
          </div>
        </div>
        <div v-if="prevPost" class="py-8">
          <h2 class="text-xs text-gray-500 tracking-wide uppercase">
            Previous Article
          </h2>
          <div class="link">
            <a :href="prevPost.href">{{ prevPost.title }}</a>
          </div>
        </div>
        <div class="pt-8">
          <a class="link" href="/">← Back to the blog</a>
        </div>
      </footer>
    </div>
  </article>
</template>
