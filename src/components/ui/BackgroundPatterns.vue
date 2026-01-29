<template>
  <div class="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
    <!-- Base Subtle Gradient -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(3,7,18,1)_0%,rgba(0,0,0,1)_100%)]"></div>

    <!-- Mesh Gradient Orbs (Sutiles) -->
    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-pulse"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] animate-pulse" style="animation-delay: 2s"></div>
    
    <!-- Dot Pattern -->
    <div class="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]" 
         style="background-image: radial-gradient(#000 0.5px, transparent 0.5px); background-size: 24px 24px;">
    </div>

    <!-- Subtle Grid -->
    <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
         style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 100px 100px;">
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}
.animate-pulse {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
