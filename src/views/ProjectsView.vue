<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)
onMounted(() => isLoaded.value = true)

const projects = [
  {
    title: 'Oben Prime',
    role: 'Lead Fullstack Developer',
    status: 'En Producción',
    desc: 'Sistema empresarial para la gestión inteligente de procesos de fabricación a gran escala. Implementa monitoreo en tiempo real y análisis de datos.',
    tech: ['.NET Core', 'Microservicios', 'React', 'AWS', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    link: '#',
    github: '#'
  },
  {
    title: 'Dashboard Analítico ERP',
    role: 'Frontend Architect',
    status: 'Finalizado',
    desc: 'Visualización de KPIs complejos para toma de decisiones ejecutivas. Alta interactividad y optimización de renderizado.',
    tech: ['Vue 3', 'Nuxt UI', 'Tailwind', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    link: '#',
    github: '#'
  },
  {
    title: 'Portal de Gestión Educativa',
    role: 'Fullstack Developer',
    status: 'Mantenimiento',
    desc: 'Plataforma integral para la gestión de alumnos, cursos y evaluaciones. Escalable y multitenant.',
    tech: ['C#', 'SQL Server', 'Angular', 'Azure'],
    image: 'https://images.unsplash.com/photo-1523050335392-938511794244?auto=format&fit=crop&q=80&w=800',
    link: '#',
    github: '#'
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-16 md:py-24">
    <div 
      class="transition-all duration-1000 transform"
      :class="[isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div class="max-w-2xl">
          <UBadge variant="subtle" size="lg" class="mb-4">Portafolio de Proyectos</UBadge>
          <h2 class="text-4xl font-bold tracking-tight mb-4">Soluciones <span class="text-primary">Reales</span> para Problemas Complejos.</h2>
          <p class="text-gray-600 dark:text-gray-400 text-lg">
            Una muestra de aplicaciones empresariales diseñadas para la escalabilidad y la eficiencia.
          </p>
        </div>
        <UButton icon="i-lucide-github" color="neutral" variant="ghost" size="lg" class="rounded-full">Ver más en GitHub</UButton>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UCard 
          v-for="project in projects" 
          :key="project.title"
          class="group overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500 border-none bg-gray-50 dark:bg-gray-900/50"
          :ui="{ body: 'p-0 flex-grow', footer: 'p-6 pt-0' }"
        >
          <div class="relative aspect-video overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <UBadge color="primary" variant="solid" class="rounded-full">{{ project.status }}</UBadge>
            </div>
          </div>

          <div class="p-6 flex-grow">
            <div class="text-sm font-semibold text-primary mb-2">{{ project.role }}</div>
            <h3 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              {{ project.desc }}
            </p>
            <div class="flex flex-wrap gap-2">
              <UBadge v-for="t in project.tech" :key="t" variant="soft" color="neutral" size="sm">{{ t }}</UBadge>
            </div>
          </div>

          <template #footer>
            <div class="flex gap-4">
              <UButton class="flex-grow rounded-xl" icon="i-lucide-external-link">Demo</UButton>
              <UButton variant="ghost" color="neutral" class="rounded-xl" icon="simple-icons:github" />
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>
