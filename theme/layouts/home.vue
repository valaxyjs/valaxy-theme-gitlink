<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700" bg="gray-200">
    <GLIntro />

    <!-- <slot>
      <router-view />
    </slot> -->

    <GLFooter class="absolute bottom-0" w="full">
      <slot name="footer" />
    </GLFooter>
  </div>
</template>
