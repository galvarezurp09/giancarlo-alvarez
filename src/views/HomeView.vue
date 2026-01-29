<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const { observe, isRevealed } = useScrollReveal()
const isLoaded = ref(false)

onMounted(() => {
  isLoaded.value = true
  observe('summary-exp')
  observe('summary-skills')
  observe('summary-projects')
})

const summaryExp = [
  { company: 'JOYIT SAC', role: 'Fullstack Developer', desc: 'Liderazgo técnico en Oben Prime.' },
  { company: 'SES', role: 'Junior Fullstack', desc: 'Gestión de incidencias críticas.' }
]

const summarySkills = ['C# .NET', 'Vue 3', 'React', 'AWS', 'SQL Server', 'TypeScript']

const summaryProjects = [
  { title: 'Oben Prime', tech: '.NET / AWS', status: 'Producción' },
  { title: 'ERP Dashboard', tech: 'Vue 3 / Nuxt', status: 'Finalizado' }
]
</script>

<template>
  <div class="space-y-24 pb-20">
    <!-- Hero Section -->
    <section id="hero-main" class="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div class="absolute top-1/2 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s" />
      </div>

      <div 
        class="max-w-5xl w-full text-center transition-all duration-1000 transform"
        :class="[isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <UBadge variant="subtle" size="lg" class="mb-6 rounded-full px-4 py-1 animate-bounce">
          ✨ Disponible para nuevos desafíos
        </UBadge>
        
        <h1 class="text-5xl md:text-8xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary-600 to-blue-600 dark:from-white dark:via-primary-400 dark:to-blue-400 leading-tight">
          Giancarlo Alvarez
        </h1>
        <p class="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8">
          Senior Fullstack Architect & UX Enthusiast
        </p>

        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Ingeniero Informático especializado en crear ecosistemas digitales de alto rendimiento. 
          Fusiono la robustez del backend con interfaces fluidas y modernas.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <UButton to="/proyectos" size="xl" class="rounded-2xl px-10 h-16 font-bold text-lg hover:scale-105 transition-all shadow-lg hover:shadow-primary/20" icon="i-lucide-rocket">
            Ver Proyectos
          </UButton>
          <UButton to="/contacto" variant="ghost" size="xl" color="neutral" class="rounded-2xl px-10 h-16 font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-900 border border-transparent hover:border-gray-200 dark:hover:border-gray-800">
            Hablemos
          </UButton>
        </div>
      </div>
    </section>

    <!-- General Summary Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <!-- Exp Summary -->
      <UCard 
        id="summary-exp"
        class="group transition-all duration-700 transform"
        :class="[isRevealed('summary-exp') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-xl flex items-center gap-2">
              <UIcon name="i-lucide-briefcase" class="text-primary" /> Experiencia
            </h3>
            <UButton to="/experiencia" variant="ghost" icon="i-lucide-arrow-right" size="xs" />
          </div>
        </template>
        <div class="space-y-4">
          <div v-for="exp in summaryExp" :key="exp.company" class="border-l-2 border-primary/20 pl-4">
            <div class="font-bold text-sm">{{ exp.role }}</div>
            <div class="text-xs text-primary">{{ exp.company }}</div>
            <div class="text-xs text-gray-500 mt-1">{{ exp.desc }}</div>
          </div>
        </div>
      </UCard>

      <!-- Skills Summary -->
      <UCard 
        id="summary-skills"
        class="group transition-all duration-700 transform delay-100"
        :class="[isRevealed('summary-skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-xl flex items-center gap-2">
              <UIcon name="i-lucide-zap" class="text-primary" /> Habilidades
            </h3>
            <UButton to="/habilidades" variant="ghost" icon="i-lucide-arrow-right" size="xs" />
          </div>
        </template>
        <div class="flex flex-wrap gap-2">
          <UBadge v-for="skill in summarySkills" :key="skill" variant="soft" color="primary" class="rounded-full">
            {{ skill }}
          </UBadge>
        </div>
      </UCard>

      <!-- Projects Summary -->
      <UCard 
        id="summary-projects"
        class="group transition-all duration-700 transform delay-200"
        :class="[isRevealed('summary-projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="font-bold text-xl flex items-center gap-2">
              <UIcon name="i-lucide-folder-kanban" class="text-primary" /> Proyectos
            </h3>
            <UButton to="/proyectos" variant="ghost" icon="i-lucide-arrow-right" size="xs" />
          </div>
        </template>
        <div class="space-y-4">
          <div v-for="p in summaryProjects" :key="p.title" class="flex items-center justify-between gap-4">
            <div>
              <div class="font-bold text-sm">{{ p.title }}</div>
              <div class="text-xs text-gray-500">{{ p.tech }}</div>
            </div>
            <UBadge size="xs" variant="subtle">{{ p.status }}</UBadge>
          </div>
        </div>
      </UCard>

    </div>

    <!-- Call to Action Final -->
    <section class="max-w-4xl mx-auto px-4 text-center py-20 bg-primary/5 rounded-[3rem] border border-primary/10">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">¿Listo para elevar tu próximo proyecto?</h2>
      <p class="text-lg text-gray-600 dark:text-gray-400 mb-10">
        Combinemos mi experiencia técnica con tus objetivos de negocio para crear algo extraordinario.
      </p>
      <UButton to="/contacto" size="xl" class="rounded-2xl px-12 h-16 font-bold text-lg" color="primary">
        Empezar Ahora
      </UButton>
    </section>
  </div>
</template>
