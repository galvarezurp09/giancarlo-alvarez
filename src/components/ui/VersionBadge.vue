<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  version: string
}>()

const isVisible = ref(true)
</script>

<template>
  <div 
    v-if="isVisible"
    class="fixed bottom-6 right-6 z-[100] group"
  >
    <!-- Badge Container -->
    <div 
      class="flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 px-4 py-2 rounded-2xl shadow-2xl hover:border-primary/50 transition-all duration-300"
    >
      <div class="relative flex h-2 w-2">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </div>
      
      <div class="flex flex-col">
        <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Build Version</span>
        <span class="text-sm font-bold text-gray-900 dark:text-white leading-none">v{{ version }}</span>
      </div>

      <UButton
        icon="i-lucide-x"
        variant="ghost"
        color="neutral"
        size="xs"
        class="ml-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        @click="isVisible = false"
      />
    </div>

    <!-- Tooltip / Label -->
    <div class="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      <div class="bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-xl">
        Production Ready Build
      </div>
      <div class="w-2 h-2 bg-gray-900 rotate-45 absolute -bottom-1 right-6"></div>
    </div>
  </div>
</template>

<style scoped>
.group:hover {
  transform: translateY(-4px);
}
</style>
