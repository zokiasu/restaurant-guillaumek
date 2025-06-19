<template>
  <div>
    <!-- Section Hero -->
    <section class="relative h-[80vh] bg-neutral-900">
      <div class="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-800/60 z-10"></div>
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop')] bg-cover bg-center"></div>
      <div class="container mx-auto px-4 h-full flex items-center relative z-20">
        <div class="max-w-2xl text-white">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 text-primary-100">Une expérience culinaire inoubliable</h1>
          <p class="text-xl mb-8 text-neutral-200">Découvrez notre cuisine raffinée, préparée avec passion et des ingrédients frais de saison.</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <UButton to="/menu" class="bg-primary hover:bg-primary-dark text-white" size="lg">Voir notre menu</UButton>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Section plats vedettes -->
    <section class="py-16 bg-warm-gray">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Nos plats signature</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Découvrez les créations qui ont fait notre renommée et qui raviront vos papilles.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DishCard v-for="dish in featuredDishes" :key="dish.id" :dish="dish" />
        </div>
      </div>
    </section>
    
    <!-- Section À propos -->
    <section class="py-16 bg-primary text-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-primary-100">Notre histoire</h2>
            <p class="mb-4 text-primary-200">Fondé en 1985 par le chef renommé Jean Dupont, Le Gourmet s'est établi comme une référence de la gastronomie française.</p>
            <p class="mb-6 text-primary-200">Notre philosophie est simple : des ingrédients de qualité, des techniques précises et une passion inébranlable pour l'art culinaire.</p>
            <UButton to="/about" variant="outline" class="border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-primary-800">En savoir plus</UButton>
          </div>
          <div class="rounded-lg overflow-hidden shadow-xl">
            <!-- Replace the img tag on line 37 -->
            <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop" alt="Notre chef" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Découvrez les expériences de nos clients satisfaits.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard v-for="testimonial in testimonials" :key="testimonial.id" class="text-center">
            <div class="mb-4">
              <span v-for="i in 5" :key="i" class="text-amber-400">
                <Icon :name="i <= testimonial.rating ? 'i-heroicons-star-solid' : 'i-heroicons-star'" />
              </span>
            </div>
            <p class="italic mb-6">"{{ testimonial.text }}"</p>
            <div>
              <p class="font-bold">{{ testimonial.name }}</p>
              <p class="text-gray-600 text-sm">{{ testimonial.date }}</p>
            </div>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Données mockées pour les plats mis en avant
const featuredDishes = [
  {
    id: 1,
    name: "Filet de bœuf Wellington",
    description: "Filet de bœuf tendre enveloppé de champignons duxelles et jambon, le tout en croûte feuilletée.",
    price: 32,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    rating: 5,
    reviewCount: 124,
    isSpecial: true
  },
  {
    id: 2,
    name: "Risotto aux truffes",
    description: "Risotto crémeux préparé avec du riz arborio, agrémenté de truffes noires et de parmesan vieilli.",
    price: 28,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
    rating: 4,
    reviewCount: 86,
    isSpecial: false
  },
  {
    id: 3,
    name: "Tarte au citron meringuée",
    description: "Dessert classique revisité avec une crème de citron intense et une meringue légère flambée.",
    price: 12,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    rating: 5,
    reviewCount: 92,
    isSpecial: true
  }
];

// Données mockées pour les témoignages
const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    text: "Une expérience gastronomique exceptionnelle. Le filet de bœuf Wellington était parfaitement cuit et plein de saveurs.",
    rating: 5,
    date: "12 mars 2023"
  },
  {
    id: 2,
    name: "Thomas Dubois",
    text: "Le service était impeccable et l'ambiance très agréable. Je recommande vivement le risotto aux truffes.",
    rating: 5,
    date: "28 avril 2023"
  },
  {
    id: 3,
    name: "Marie Leroy",
    text: "Les desserts sont à tomber par terre, surtout la tarte au citron meringuée. Nous reviendrons certainement !",
    rating: 4,
    date: "5 juin 2023"
  }
];

// SEO
useHead({
  title: 'Le Gourmet - Restaurant gastronomique',
  meta: [
    { name: 'description', content: 'Le Gourmet, restaurant gastronomique proposant une cuisine raffinée à base de produits frais et de saison.' }
  ]
});
</script>