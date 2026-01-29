<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)
onMounted(() => isLoaded.value = true)

const values = [
  { title: 'Excelencia Técnica', desc: 'Comprometido con escribir código limpio, eficiente y mantenible siguiendo los mejores estándares.', icon: 'i-lucide-code' },
  { title: 'Mentalidad Ágil', desc: 'Adaptabilidad y entrega continua de valor utilizando metodologías como SCRUM y Kanban.', icon: 'i-lucide-zap' },
  { title: 'Aprendizaje Continuo', desc: 'En constante evolución, explorando nuevas tecnologías e IA para optimizar procesos.', icon: 'i-lucide-book-open' }
]
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-16 md:py-24">
    <div 
      class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 transform"
      :class="[isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      <div class="space-y-8">
        <div>
          <UBadge variant="subtle" size="lg" class="mb-4">Sobre Mí</UBadge>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Apasionado por crear <span class="text-primary">soluciones</span> que impactan vidas.
          </h2>
        </div>
        
        <div class="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            Soy un Ingeniero Informático con una sólida base técnica y una visión orientada a resultados. Mi viaje en el desarrollo comenzó con la curiosidad de entender cómo funcionaban los sistemas complejos, y hoy me especializo en construir aplicaciones Fullstack robustas.
          </p>
          <p>
            Con más de un año y medio de experiencia profesional, he navegado desde el mantenimiento de sistemas heredados hasta la arquitectura de microservicios modernos en la nube. Mi enfoque combina la rigurosidad de la ingeniería con la creatividad del diseño UX.
          </p>
        </div>

        <div class="flex gap-4 pt-4">
          <UButton icon="i-lucide-download" size="lg" class="rounded-full">Descargar CV</UButton>
          <UButton variant="ghost" icon="simple-icons:linkedin" size="lg" class="rounded-full" to="https://linkedin.com/in/giancarlo-joel-alvarez-gallardo-85244a381/" target="_blank">LinkedIn</UButton>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <UCard 
          v-for="(value, index) in values" 
          :key="index"
          class="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-none bg-gray-50 dark:bg-gray-900/50"
        >
          <div class="flex gap-5">
            <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <UIcon :name="value.icon" class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 class="font-bold text-xl mb-2">{{ value.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ value.desc }}</p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
