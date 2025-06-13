<template>
  <UCard class="hover:shadow-xl transition-shadow duration-300 border-neutral-200">
    <template #header>
      <div class="relative h-48 overflow-hidden">
        <img :src="dish.image" :alt="dish.name" class="w-full h-full object-cover" />
        <div v-if="dish.isSpecial" class="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
          Spécialité
        </div>
      </div>
    </template>
    
    <div class="p-4">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-lg font-bold text-neutral-800">{{ dish.name }}</h3>
        <span class="text-primary font-bold text-lg">{{ dish.price }}€</span>
      </div>
      <p class="text-warm-gray mb-4">{{ dish.description }}</p>
      <div class="flex items-center">
        <span v-for="i in 5" :key="i" class="text-secondary-400">
          <Icon :name="i <= dish.rating ? 'i-heroicons-star-solid' : 'i-heroicons-star'" />
        </span>
        <span class="ml-2 text-sm text-warm-gray">({{ dish.reviewCount }} avis)</span>
      </div>
    </div>
  </UCard>
</template>

<script setup>
defineProps({
  dish: {
    type: Object,
    required: true
  }
})
</script>