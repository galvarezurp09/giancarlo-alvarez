<script setup lang="ts">
import AppLogo from '../ui/AppLogo.vue'

const socialLinks = [
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', to: 'https://linkedin.com/in/giancarlo-joel-alvarez-gallardo-85244a381/' },
  { label: 'GitHub', icon: 'simple-icons:github', to: 'https://github.com/giancarlo-alvarez' },
  { label: 'Email', icon: 'i-lucide-mail', to: 'mailto:galvarezga21@gmail.com' }
]
</script>

<template>
  <footer class="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
        <div class="flex flex-col items-center md:items-start gap-4">
          <div class="flex items-center gap-2">
            <AppLogo class="w-6 h-6" />
            <span class="font-bold text-lg tracking-tight">GA Portfolio</span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
            Construyendo soluciones digitales modernas con pasión y excelencia técnica.
          </p>
        </div>

        <div class="flex flex-col items-center gap-4">
          <div class="flex items-center gap-4">
            <UButton
              v-for="link in socialLinks"
              :key="link.label"
              :to="link.to"
              :icon="link.icon"
              variant="ghost"
              color="neutral"
              class="rounded-full hover:scale-110 transition-transform"
              :aria-label="link.label"
            />
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-500">
            Lima, Perú • Fullstack Developer
          </p>
        </div>

        <div class="flex flex-col items-center md:items-end gap-2">
          <p class="text-sm font-medium">© {{ new Date().getFullYear() }} Giancarlo Alvarez</p>
          <p class="text-xs text-gray-500 dark:text-gray-500">
            Desarrollado con Vue 3, Nuxt UI y mucho café.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
