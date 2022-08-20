<template>
  <div bg="gray-200 dark:dark-800">
    <GLIntro />

    <!-- <slot>
      <router-view />
    </slot> -->

    <GLFooter class="absolute bottom-0" w="full">
      <slot name="footer" />
    </GLFooter>
  </div>
</template>
