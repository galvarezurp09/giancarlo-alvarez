<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)
onMounted(() => isLoaded.value = true)

const categories = [
  {
    name: 'Desarrollo Backend',
    icon: 'i-lucide-server',
    skills: [
      { name: 'C# / .NET', level: 90 },
      { name: 'Java / Spring', level: 75 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 70 }
    ]
  },
  {
    name: 'Desarrollo Frontend',
    icon: 'i-lucide-monitor',
    skills: [
      { name: 'Vue.js / Nuxt', level: 90 },
      { name: 'React / Next.js', level: 85 },
      { name: 'Angular', level: 75 },
      { name: 'TypeScript', level: 90 }
    ]
  },
  {
    name: 'Bases de Datos & Cloud',
    icon: 'i-lucide-cloud',
    skills: [
      { name: 'SQL Server / MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'AWS Services', level: 70 },
      { name: 'Firebase', level: 75 }
    ]
  }
]

const tools = ['Git', 'Docker', 'Jenkins', 'Jira', 'SCRUM', 'Kanban', 'SonarQube', 'Linux']
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-16 md:py-24">
    <div 
      class="transition-all duration-1000 transform"
      :class="[isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      <div class="text-center mb-16">
        <UBadge variant="subtle" size="lg" class="mb-4">Stack Tecnológico</UBadge>
        <h2 class="text-4xl font-bold tracking-tight mb-4">Herramientas y <span class="text-primary">Habilidades</span>.</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Dominio equilibrado entre la robustez del backend y la interactividad del frontend.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <UCard 
          v-for="cat in categories" 
          :key="cat.name"
          class="hover:shadow-lg transition-shadow border-none bg-gray-50 dark:bg-gray-900/50"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg bg-primary/10">
                <UIcon :name="cat.icon" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="font-bold text-xl">{{ cat.name }}</h3>
            </div>
          </template>

          <div class="space-y-6">
            <div v-for="skill in cat.skills" :key="skill.name">
              <div class="flex justify-between mb-2 text-sm font-medium">
                <span>{{ skill.name }}</span>
                <span class="text-primary">{{ skill.level }}%</span>
              </div>
              <UProgress :value="skill.level" size="sm" color="primary" class="rounded-full" />
            </div>
          </div>
        </UCard>
      </div>

      <div class="text-center">
        <h3 class="text-2xl font-bold mb-8">Otras Herramientas & Metodologías</h3>
        <div class="flex flex-wrap justify-center gap-3">
          <UBadge 
            v-for="tool in tools" 
            :key="tool"
            variant="soft"
            color="neutral"
            size="lg"
            class="px-6 py-2 rounded-full text-base hover:bg-primary hover:text-white transition-colors cursor-default"
          >
            {{ tool }}
          </UBadge>
        </div>
      </div>
    </div>
  </div>
</template>
