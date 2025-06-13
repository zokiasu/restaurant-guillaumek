<template>
  <header class="bg-primary text-white shadow-lg">
    <div class="container mx-auto px-4 py-6">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-primary-100 hover:text-white transition">
          Le Gourmet
        </NuxtLink>
        
        <!-- Navigation desktop -->
        <nav class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="hover:text-primary-200 transition duration-300">Accueil</NuxtLink>
          <NuxtLink to="/menu" class="hover:text-primary-200 transition duration-300">Menu</NuxtLink>
          <NuxtLink to="/about" class="hover:text-primary-200 transition duration-300">À propos</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-primary-200 transition duration-300">Contact</NuxtLink>
        </nav>
        
        <!-- Menu mobile -->
        <UButton
          icon="i-heroicons-bars-3"
          color="primary"
          variant="ghost"
          class="md:hidden text-primary-100"
          @click="isMenuOpen = !isMenuOpen"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false)
</script>