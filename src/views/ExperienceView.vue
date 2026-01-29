<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)
onMounted(() => isLoaded.value = true)

const experiences = [
  {
    company: 'JOYIT SAC',
    role: 'Fullstack Developer',
    period: 'Junio 2025 – Julio 2025',
    achievements: [
      'Lideré el desarrollo de módulos críticos en Oben Prime, mejorando la eficiencia operativa en un 20%.',
      'Implementé arquitecturas de microservicios escalables utilizando .NET Core y AWS.',
      'Optimicé consultas SQL reduciendo los tiempos de respuesta del API en un 35%.'
    ],
    tech: ['C#', 'React', 'AWS', 'Microservices', 'MySQL'],
    color: 'primary'
  },
  {
    company: 'Software Enterprise Services',
    role: 'Junior Fullstack Developer',
    period: 'Febrero 2024 – Octubre 2024',
    achievements: [
      'Resolví más de 150 incidentes críticos en sistemas de alta disponibilidad.',
      'Colaboré en la migración de componentes legacy de AngularJS a arquitecturas modernas.',
      'Aseguré la calidad del código mediante SonarQube y revisiones por pares constantes.'
    ],
    tech: ['C# .NET', 'AngularJS', 'SQL Server', 'Jenkins'],
    color: 'blue'
  },
  {
    company: 'Remain Computers',
    role: 'Web Developer IT',
    period: 'Febrero 2023 – Febrero 2024',
    achievements: [
      'Desarrollé y desplegué múltiples sitios web corporativos con alta tasa de conversión.',
      'Gestioné infraestructuras de hosting para más de 50 clientes garantizando 99.9% de uptime.',
      'Automaticé procesos de despliegue mediante scripts PHP y herramientas de cPanel.'
    ],
    tech: ['React', 'Vue', 'PHP', 'MySQL', 'Hosting'],
    color: 'emerald'
  }
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-16 md:py-24">
    <div 
      class="transition-all duration-1000 transform"
      :class="[isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      <div class="text-center mb-16">
        <UBadge variant="subtle" size="lg" class="mb-4">Trayectoria Profesional</UBadge>
        <h2 class="text-4xl font-bold tracking-tight">Experiencia que marca la <span class="text-primary">diferencia</span>.</h2>
      </div>

      <div class="space-y-12">
        <div 
          v-for="(exp, index) in experiences" 
          :key="index"
          class="relative group"
        >
          <!-- Timeline line -->
          <div v-if="index !== experiences.length - 1" class="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 -mb-12" />
          
          <div class="flex flex-col md:flex-row gap-8">
            <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm flex items-center justify-center z-10 group-hover:border-primary transition-colors">
              <UIcon name="i-lucide-briefcase" class="w-8 h-8 text-primary" />
            </div>

            <UCard class="flex-grow border-none shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 dark:bg-gray-900/50">
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
                <div>
                  <h3 class="text-2xl font-bold">{{ exp.role }}</h3>
                  <p class="text-lg font-medium text-primary">{{ exp.company }}</p>
                </div>
                <UBadge variant="soft" :color="exp.color" size="lg" class="font-semibold rounded-full">
                  {{ exp.period }}
                </UBadge>
              </div>

              <ul class="space-y-3 mb-6">
                <li v-for="ach in exp.achievements" :key="ach" class="flex gap-3 text-gray-600 dark:text-gray-400">
                  <UIcon name="i-lucide-check-circle-2" class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{{ ach }}</span>
                </li>
              </ul>

              <div class="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                <UBadge 
                  v-for="t in exp.tech" 
                  :key="t" 
                  variant="subtle" 
                  color="neutral" 
                  class="rounded-md"
                >
                  {{ t }}
                </UBadge>
              </div>
            </UCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
