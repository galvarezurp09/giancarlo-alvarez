<script setup lang="ts">
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)
onMounted(() => isLoaded.value = true)

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  company: ''
})

const isSending = ref(false)

const handleSubmit = () => {
  isSending.value = true
  setTimeout(() => {
    isSending.value = false
    alert('¡Gracias! Me pondré en contacto contigo pronto.')
    form.value = { name: '', email: '', subject: '', message: '', company: '' }
  }, 1500)
}

const contactChannels = [
  { icon: 'i-lucide-mail', label: 'Email Corporativo', value: 'galvarezga21@gmail.com', desc: 'Respuesta en menos de 24h', to: 'mailto:galvarezga21@gmail.com' },
  { icon: 'simple-icons:linkedin', label: 'LinkedIn Profesional', value: 'Giancarlo Alvarez', desc: 'Conecta conmigo', to: 'https://linkedin.com/in/giancarlo-joel-alvarez-gallardo-85244a381/' },
  { icon: 'i-lucide-phone', label: 'Teléfono / WhatsApp', value: '+51 997 230 674', desc: 'Lunes a Viernes, 9am - 6pm', to: 'https://wa.me/51997230674' }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-16 md:py-24">
    <div 
      class="transition-all duration-1000 transform"
      :class="[isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
    >
      <div class="max-w-3xl mb-16">
        <UBadge variant="subtle" size="lg" class="mb-6 rounded-full px-4">📬 Contacto</UBadge>
        <h2 class="text-4xl md:text-6xl font-black tracking-tight mb-6">Iniciemos una <span class="text-primary italic">conversación</span> técnica.</h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          Ya sea para una oportunidad laboral, una consultoría técnica o simplemente para compartir ideas sobre arquitectura de software, mi bandeja de entrada está siempre abierta.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Sidebar Info -->
        <div class="lg:col-span-4 space-y-6">
          <div 
            v-for="channel in contactChannels" 
            :key="channel.label"
            class="group p-6 rounded-[2rem] bg-gray-50 dark:bg-gray-900/50 border border-transparent hover:border-primary/20 hover:bg-white dark:hover:bg-gray-900 transition-all duration-300"
          >
            <a :href="channel.to" target="_blank" class="flex items-center gap-5">
              <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <UIcon :name="channel.icon" class="w-7 h-7 text-primary" />
              </div>
              <div>
                <div class="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{{ channel.label }}</div>
                <div class="font-bold text-lg group-hover:text-primary transition-colors">{{ channel.value }}</div>
                <div class="text-xs text-gray-500 mt-0.5">{{ channel.desc }}</div>
              </div>
            </a>
          </div>

          <!-- Extra Trust Card -->
          <div class="p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/5">
            <h4 class="font-bold text-lg mb-4 flex items-center gap-2">
              <UIcon name="i-lucide-shield-check" class="text-primary" />
              Privacidad Asegurada
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Tus datos serán tratados con total confidencialidad y solo se usarán para responder a tu consulta profesional.
            </p>
          </div>
        </div>

        <!-- Main Form -->
        <div class="lg:col-span-8">
          <UCard class="rounded-[2.5rem] border-none shadow-2xl p-2 md:p-6 bg-white dark:bg-gray-900 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            
            <form @submit.prevent="handleSubmit" class="space-y-8 relative">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <UFormField label="Nombre Completo" required>
                  <UInput v-model="form.name" placeholder="Ej: Juan Pérez" size="xl" class="rounded-2xl" />
                </UFormField>
                <UFormField label="Email Corporativo" required>
                  <UInput v-model="form.email" type="email" placeholder="juan@empresa.com" size="xl" class="rounded-2xl" />
                </UFormField>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <UFormField label="Empresa (Opcional)">
                  <UInput v-model="form.company" placeholder="Nombre de tu organización" size="xl" class="rounded-2xl" />
                </UFormField>
                <UFormField label="Asunto Principal">
                  <UInput v-model="form.subject" placeholder="Ej: Propuesta de Proyecto" size="xl" class="rounded-2xl" />
                </UFormField>
              </div>

              <UFormField label="Tu Mensaje" required>
                <UTextarea v-model="form.message" placeholder="Cuéntame brevemente sobre tu necesidad técnica o propuesta..." :rows="6" size="xl" class="rounded-2xl" />
              </UFormField>

              <div class="flex items-center justify-between gap-6 pt-4">
                <p class="text-xs text-gray-500 hidden md:block">
                  * Campos obligatorios para una respuesta efectiva.
                </p>
                <UButton 
                  type="submit" 
                  size="xl" 
                  class="rounded-2xl h-16 px-12 font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl hover:shadow-primary/30"
                  :loading="isSending"
                  icon="i-lucide-send"
                  trailing
                >
                  Enviar Mensaje
                </UButton>
              </div>
            </form>
          </UCard>
        </div>

      </div>
    </div>
  </div>
</template>
