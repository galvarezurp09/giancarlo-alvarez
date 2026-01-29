<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import AppLogo from '../ui/AppLogo.vue'

const router = useRouter()
const route = useRoute()
const isScrolled = ref(false)

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre mí', path: '/sobre-mi' },
  { label: 'Experiencia', path: '/experiencia' },
  { label: 'Habilidades', path: '/habilidades' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Contacto', path: '/contacto' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md py-3 border-b border-gray-200 dark:border-gray-800' 
        : 'bg-transparent py-5'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-2 group">
        <AppLogo class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        <span class="font-bold text-xl tracking-tight hidden sm:block group-hover:text-primary transition-colors">
          Giancarlo<span class="text-primary">Alvarez</span>
        </span>
      </router-link>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-1">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group"
          :class="[
            isActive(item.path) 
              ? 'text-primary bg-primary/5' 
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
          ]"
        >
          {{ item.label }}
          <span 
            class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-300 opacity-0 scale-0"
            :class="{ 'opacity-100 scale-100': isActive(item.path) }"
          />
        </router-link>

        <div class="ml-4 pl-4 border-l border-gray-200 dark:border-gray-800 flex items-center gap-2">
          <UColorModeButton />
          <UButton
            to="https://github.com/giancarlo-alvarez"
            target="_blank"
            icon="simple-icons:github"
            variant="ghost"
            color="neutral"
            class="rounded-full"
          />
        </div>
      </div>

      <!-- Mobile Menu Button (Mockup for now) -->
      <div class="md:hidden flex items-center gap-2">
        <UColorModeButton />
        <UButton
          icon="i-lucide-menu"
          variant="ghost"
          color="neutral"
          class="rounded-full"
        />
      </div>
    </nav>
  </header>
</template>
