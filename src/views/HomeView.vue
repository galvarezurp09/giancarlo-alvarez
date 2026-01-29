<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'

const { observe, isRevealed } = useScrollReveal()
const isLoaded = ref(false)

onMounted(() => {
  isLoaded.value = true
  observe('summary-about')
  observe('summary-exp')
  observe('summary-skills')
  observe('summary-projects')
  observe('summary-edu')
  observe('summary-contact')
})

const summaryExp = [
  { company: 'JOYIT SAC', role: 'Fullstack Developer', period: '2025' },
  { company: 'SES', role: 'Junior Fullstack', period: '2024' }
]

const summarySkills = ['C# .NET', 'Vue 3', 'React', 'AWS', 'SQL Server', 'TypeScript']

const summaryProjects = [
  { title: 'Oben Prime', tech: '.NET / AWS', status: 'Producción' },
  { title: 'ERP Dashboard', tech: 'Vue 3 / Nuxt', status: 'Finalizado' }
]

const summaryEdu = [
  { degree: 'Ingeniería Informática', institution: 'URP', status: '10mo Ciclo' },
  { degree: 'MongoDB Developer', institution: 'Cibertec', status: 'Certificado' }
]
</script>

<template>
  <div class="space-y-32 pb-32">
    <!-- Hero Section -->
    <section id="hero-main" class="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 pt-10">
      <div 
        class="max-w-5xl w-full text-center transition-all duration-1000 transform"
        :class="[isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <UBadge variant="subtle" size="lg" class="mb-6 rounded-full px-6 py-1.5 animate-bounce shadow-sm">
          ✨ Disponible para nuevos desafíos estratégicos
        </UBadge>
        
        <h1 class="text-6xl md:text-9xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary-600 to-blue-700 dark:from-white dark:via-primary-400 dark:to-blue-400 leading-[1.1]">
          Giancarlo Alvarez
        </h1>
        <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8 tracking-tight">
          Senior Fullstack Architect & <span class="text-primary">UX Specialist</span>
        </p>

        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Diseño y construyo ecosistemas digitales de alto rendimiento. 
          Especializado en transformar requerimientos complejos en soluciones escalables con .NET y Vue 3.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <UButton to="/proyectos" size="xl" class="rounded-2xl px-12 h-16 font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-primary/30" icon="i-lucide-rocket">
            Explorar Proyectos
          </UButton>
          <UButton to="/contacto" variant="ghost" size="xl" color="neutral" class="rounded-2xl px-12 h-16 font-bold text-lg hover:bg-white dark:hover:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all">
            Hablemos
          </UButton>
        </div>
      </div>
    </section>

    <!-- Grid de Resumen del Portafolio -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-black tracking-tight mb-4">Vista General del <span class="text-primary italic">Perfil</span></h2>
        <p class="text-gray-500 font-medium">Un recorrido rápido por todas las secciones de mi portafolio.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- About Me Summary -->
        <UCard 
          id="summary-about"
          class="group transition-all duration-700 transform glass-card"
          :class="[isRevealed('summary-about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-xl flex items-center gap-3">
                <UIcon name="i-lucide-user" class="text-primary" /> Sobre mí
              </h3>
              <UButton to="/sobre-mi" variant="ghost" icon="i-lucide-arrow-right" size="xs" class="rounded-full" />
            </div>
          </template>
          <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Ingeniero apasionado por la excelencia técnica y el diseño centrado en el usuario. Más de 1.8 años creando software de impacto.
          </p>
          <div class="mt-6 flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
            <UIcon name="i-lucide-map-pin" /> Lima, Perú
          </div>
        </UCard>

        <!-- Exp Summary -->
        <UCard 
          id="summary-exp"
          class="group transition-all duration-700 transform delay-75 glass-card"
          :class="[isRevealed('summary-exp') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-xl flex items-center gap-3">
                <UIcon name="i-lucide-briefcase" class="text-primary" /> Experiencia
              </h3>
              <UButton to="/experiencia" variant="ghost" icon="i-lucide-arrow-right" size="xs" class="rounded-full" />
            </div>
          </template>
          <div class="space-y-4">
            <div v-for="exp in summaryExp" :key="exp.company" class="relative pl-4 border-l-2 border-primary/20 hover:border-primary transition-colors">
              <div class="font-bold text-sm">{{ exp.role }}</div>
              <div class="text-[10px] font-black text-primary uppercase tracking-tighter">{{ exp.company }} • {{ exp.period }}</div>
            </div>
          </div>
        </UCard>

        <!-- Skills Summary -->
        <UCard 
          id="summary-skills"
          class="group transition-all duration-700 transform delay-150 glass-card"
          :class="[isRevealed('summary-skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-xl flex items-center gap-3">
                <UIcon name="i-lucide-zap" class="text-primary" /> Habilidades
              </h3>
              <UButton to="/habilidades" variant="ghost" icon="i-lucide-arrow-right" size="xs" class="rounded-full" />
            </div>
          </template>
          <div class="flex flex-wrap gap-2">
            <UBadge v-for="skill in summarySkills" :key="skill" variant="soft" color="primary" class="rounded-lg px-3 py-1 font-semibold">
              {{ skill }}
            </UBadge>
          </div>
        </UCard>

        <!-- Projects Summary -->
        <UCard 
          id="summary-projects"
          class="group transition-all duration-700 transform delay-200 glass-card"
          :class="[isRevealed('summary-projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-xl flex items-center gap-3">
                <UIcon name="i-lucide-folder-kanban" class="text-primary" /> Proyectos
              </h3>
              <UButton to="/proyectos" variant="ghost" icon="i-lucide-arrow-right" size="xs" class="rounded-full" />
            </div>
          </template>
          <div class="space-y-4">
            <div v-for="p in summaryProjects" :key="p.title" class="flex items-center justify-between gap-4 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <div>
                <div class="font-bold text-sm">{{ p.title }}</div>
                <div class="text-[10px] text-gray-500 font-bold uppercase">{{ p.tech }}</div>
              </div>
              <UBadge size="xs" variant="subtle" class="rounded-full px-2">{{ p.status }}</UBadge>
            </div>
          </div>
        </UCard>

        <!-- Education Summary -->
        <UCard 
          id="summary-edu"
          class="group transition-all duration-700 transform delay-300 glass-card"
          :class="[isRevealed('summary-edu') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-xl flex items-center gap-3">
                <UIcon name="i-lucide-graduation-cap" class="text-primary" /> Educación
              </h3>
              <UButton to="/educacion" variant="ghost" icon="i-lucide-arrow-right" size="xs" class="rounded-full" />
            </div>
          </template>
          <div class="space-y-4">
            <div v-for="edu in summaryEdu" :key="edu.degree" class="flex items-start gap-3">
              <UIcon name="i-lucide-check-circle-2" class="text-primary mt-1 w-4 h-4" />
              <div>
                <div class="font-bold text-sm">{{ edu.degree }}</div>
                <div class="text-[10px] text-gray-500 font-bold uppercase">{{ edu.institution }} • {{ edu.status }}</div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Contact Summary -->
        <UCard 
          id="summary-contact"
          class="group transition-all duration-700 transform delay-400 glass-card"
          :class="[isRevealed('summary-contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
        >
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-xl flex items-center gap-3">
                <UIcon name="i-lucide-send" class="text-primary" /> Contacto
              </h3>
              <UButton to="/contacto" variant="ghost" icon="i-lucide-arrow-right" size="xs" class="rounded-full" />
            </div>
          </template>
          <div class="flex flex-col gap-3">
            <UButton block variant="soft" color="neutral" icon="simple-icons:linkedin" class="rounded-xl justify-start h-10" to="https://linkedin.com/in/giancarlo-joel-alvarez-gallardo-85244a381/" target="_blank">LinkedIn</UButton>
            <UButton block variant="soft" color="neutral" icon="i-lucide-mail" class="rounded-xl justify-start h-10" to="mailto:galvarezga21@gmail.com">Email</UButton>
          </div>
        </UCard>

      </div>
    </section>

    <!-- Call to Action Final -->
    <section class="max-w-5xl mx-auto px-4 text-center py-24 bg-gradient-to-br from-primary/10 via-white to-blue-500/10 dark:from-primary/10 dark:via-gray-900 dark:to-blue-500/10 rounded-[4rem] border border-primary/10 shadow-2xl relative overflow-hidden">
      <div class="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mt-32 blur-3xl animate-pulse" />
      <h2 class="text-4xl md:text-6xl font-black mb-6 tracking-tight">¿Tienes un proyecto <span class="text-primary italic">ambicioso</span>?</h2>
      <p class="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
        Combinemos mi arquitectura técnica con tu visión de negocio para crear algo extraordinario.
      </p>
      <UButton to="/contacto" size="xl" class="rounded-[2rem] px-16 h-20 font-black text-2xl shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105" color="primary">
        Hablemos Ahora
      </UButton>
    </section>
  </div>
</template>
