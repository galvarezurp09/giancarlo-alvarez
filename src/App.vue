<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultLayout from './layouts/DefaultLayout.vue'

onMounted(() => {
  // Set default color mode to light if not set
  if (!localStorage.getItem('nuxt-ui-color-mode')) {
    localStorage.setItem('nuxt-ui-color-mode', 'light')
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }
})
</script>

<template>
  <UApp>
    <DefaultLayout />
  </UApp>
</template>
