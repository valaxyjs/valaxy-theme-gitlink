<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
import { reactive } from 'vue'
import type { ProjectItem } from '../types'

export type ProjectDataType = Record<string, {
  title: string
  children: ProjectItem[]
}> | ProjectItem[]

const fm = useFrontmatter()
const projects = reactive(fm.value.projects as ProjectDataType)
</script>

<template>
  <Layout>
    <div text="center">
      <h2 class="text-2xl my-5">
        {{ fm.title }}
      </h2>

      <div flex="~ wrap" text="center" justify="center">
        <template v-if="!Array.isArray(projects)">
          <GLProjectCollection
            v-for="([key, collection]) in Object.entries(projects)"
            :key="key"
            :title="collection.title || key"
            :projects="collection.children"
          />
        </template>
        <GLProjectCollection
          v-else
          title=""
          :projects="projects"
        />
      </div>
    </div>
    <router-view />
  </Layout>
</template>
