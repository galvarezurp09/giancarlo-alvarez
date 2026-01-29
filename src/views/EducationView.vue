<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)
onMounted(() => isLoaded.value = true)

const education = [
  {
    institution: 'Universidad Ricardo Palma',
    degree: 'Ingeniería Informática',
    period: '2019 – Presente',
    status: '10mo Ciclo',
    desc: 'Formación integral en ingeniería de software, arquitectura de sistemas y gestión de proyectos tecnológicos.',
    icon: 'i-lucide-graduation-cap'
  },
  {
    institution: 'Cibertec',
    degree: 'MongoDB Developer',
    period: '2023',
    status: 'Certificado',
    desc: 'Especialización en diseño de bases de datos NoSQL, agregaciones y escalabilidad.',
    icon: 'i-lucide-database'
  }
]

const certifications = [
  { name: 'Certificado SQL Server Workshop', issuer: 'Microsoft Partner', year: '2023' },
  { name: 'Desarrollo .NET Core Avanzado', issuer: 'Udemy', year: '2024' },
  { name: 'Microservicios con Java & Spring', issuer: 'Udemy', year: '2023' },
  { name: 'Inglés Intermedio B2', issuer: 'Instituto Británico', year: '2019' }
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-16 md:py-24">
    <div 
      class="transition-all duration-1000 transform"
      :class="[isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      <div class="text-center mb-16">
        <UBadge variant="subtle" size="lg" class="mb-4">Formación Continua</UBadge>
        <h2 class="text-4xl font-bold tracking-tight mb-4">Educación & <span class="text-primary">Certificados</span>.</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="space-y-8">
          <h3 class="text-2xl font-bold flex items-center gap-3">
            <UIcon name="i-lucide-book" class="text-primary" />
            Académico
          </h3>
          <UCard 
            v-for="edu in education" 
            :key="edu.degree"
            class="hover:shadow-xl transition-all duration-300 border-none bg-gray-50 dark:bg-gray-900/50"
          >
            <div class="flex gap-6">
              <div class="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <UIcon :name="edu.icon" class="w-8 h-8 text-primary" />
              </div>
              <div>
                <div class="flex flex-wrap items-center gap-2 mb-2">
                  <h4 class="text-xl font-bold">{{ edu.degree }}</h4>
                  <UBadge variant="soft" size="sm" class="rounded-full">{{ edu.status }}</UBadge>
                </div>
                <p class="text-primary font-medium mb-3">{{ edu.institution }}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ edu.desc }}</p>
                <div class="mt-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">{{ edu.period }}</div>
              </div>
            </div>
          </UCard>
        </div>

        <div class="space-y-8">
          <h3 class="text-2xl font-bold flex items-center gap-3">
            <UIcon name="i-lucide-award" class="text-primary" />
            Certificaciones Técnicas
          </h3>
          <div class="grid grid-cols-1 gap-4">
            <UCard 
              v-for="cert in certifications" 
              :key="cert.name"
              size="sm"
              class="hover:border-primary transition-colors border-gray-100 dark:border-gray-800"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <div class="font-bold text-sm">{{ cert.name }}</div>
                    <div class="text-xs text-gray-500">{{ cert.issuer }}</div>
                  </div>
                </div>
                <div class="text-xs font-bold text-gray-400">{{ cert.year }}</div>
              </div>
            </UCard>
          </div>
          
          <div class="p-8 rounded-3xl bg-primary/5 border border-primary/10 text-center">
            <p class="text-gray-600 dark:text-gray-400 italic mb-0">
              "El aprendizaje no tiene fin; cada certificado es un paso hacia la maestría."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
