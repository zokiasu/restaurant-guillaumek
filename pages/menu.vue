<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Notre Menu</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">Découvrez notre sélection de plats préparés avec des ingrédients frais et de saison.</p>
      </div>
      
      <!-- Filtres de catégories -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <UButton 
          v-for="category in categories" 
          :key="category.id"
          :color="selectedCategory === category.id ? 'amber' : 'gray'"
          :variant="selectedCategory === category.id ? 'solid' : 'soft'"
          @click="selectedCategory = category.id"
        >
          {{ category.name }}
        </UButton>
      </div>
      
      <!-- Liste des plats filtrés -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DishCard 
          v-for="dish in filteredDishes" 
          :key="dish.id" 
          :dish="dish" 
        />
      </div>
      
      <!-- Section vins -->
      <div class="mt-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Notre Carte des Vins</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Une sélection soignée pour accompagner parfaitement vos plats.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="wineCategory in wines" :key="wineCategory.category">
            <h3 class="text-xl font-bold mb-6 pb-2 border-b border-amber-200">{{ wineCategory.category }}</h3>
            <div class="space-y-6">
              <div v-for="wine in wineCategory.items" :key="wine.id" class="flex justify-between">
                <div>
                  <h4 class="font-bold">{{ wine.name }}</h4>
                  <p class="text-gray-600">{{ wine.origin }}</p>
                </div>
                <div class="text-right">
                  <p class="font-bold text-amber-800">{{ wine.price }}€</p>
                  <p class="text-sm text-gray-600">{{ wine.year }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Catégories de plats
const categories = [
  { id: 'all', name: 'Tous' },
  { id: 'starters', name: 'Entrées' },
  { id: 'mains', name: 'Plats' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'specials', name: 'Spécialités' }
];

const selectedCategory = ref('all');

// Données mockées pour les plats
const dishes = [
  {
    id: 1,
    name: "Carpaccio de Saint-Jacques",
    description: "Fines tranches de Saint-Jacques, huile d'olive citronnée, zestes d'agrumes et fleur de sel.",
    price: 18,
    image: "/starter1.jpg",
    category: "starters",
    rating: 5,
    reviewCount: 42,
    isSpecial: false
  },
  {
    id: 2,
    name: "Foie gras maison",
    description: "Foie gras mi-cuit préparé maison, chutney de figues et pain brioché toasté.",
    price: 22,
    image: "/starter2.jpg",
    category: "starters",
    rating: 4,
    reviewCount: 36,
    isSpecial: true
  },
  {
    id: 3,
    name: "Filet de bœuf Wellington",
    description: "Filet de bœuf tendre enveloppé de champignons duxelles et jambon, le tout en croûte feuilletée.",
    price: 32,
    image: "/dish1.jpg",
    category: "mains",
    rating: 5,
    reviewCount: 124,
    isSpecial: true
  },
  {
    id: 4,
    name: "Risotto aux truffes",
    description: "Risotto crémeux préparé avec du riz arborio, agrémenté de truffes noires et de parmesan vieilli.",
    price: 28,
    image: "/dish2.jpg",
    category: "mains",
    rating: 4,
    reviewCount: 86,
    isSpecial: false
  },
  {
    id: 5,
    name: "Lotte à l'armoricaine",
    description: "Médaillons de lotte, sauce armoricaine, riz sauvage et légumes de saison.",
    price: 30,
    image: "/dish4.jpg",
    category: "mains",
    rating: 4,
    reviewCount: 58,
    isSpecial: false
  },
  {
    id: 6,
    name: "Tarte au citron meringuée",
    description: "Dessert classique revisité avec une crème de citron intense et une meringue légère flambée.",
    price: 12,
    image: "/dish3.jpg",
    category: "desserts",
    rating: 5,
    reviewCount: 92,
    isSpecial: true
  },
  {
    id: 7,
    name: "Soufflé au Grand Marnier",
    description: "Soufflé aérien parfumé au Grand Marnier, servi avec une glace vanille maison.",
    price: 14,
    image: "/dessert2.jpg",
    category: "desserts",
    rating: 5,
    reviewCount: 64,
    isSpecial: false
  },
  {
    id: 8,
    name: "Assiette de fromages affinés",
    description: "Sélection de fromages affinés de nos régions, accompagnés de fruits secs et pain aux noix.",
    price: 16,
    image: "/cheese.jpg",
    category: "desserts",
    rating: 4,
    reviewCount: 48,
    isSpecial: false
  }
];

// Filtrer les plats en fonction de la catégorie sélectionnée
const filteredDishes = computed(() => {
  if (selectedCategory.value === 'all') {
    return dishes;
  } else if (selectedCategory.value === 'specials') {
    return dishes.filter(dish => dish.isSpecial);
  } else {
    return dishes.filter(dish => dish.category === selectedCategory.value);
  }
});

// Données mockées pour les vins
const wines = [
  {
    category: "Vins Rouges",
    items: [
      { id: 1, name: "Château Margaux", origin: "Bordeaux, France", year: "2015", price: 180 },
      { id: 2, name: "Côte-Rôtie La Landonne", origin: "Vallée du Rhône, France", year: "2017", price: 120 },
      { id: 3, name: "Barolo Riserva", origin: "Piémont, Italie", year: "2016", price: 95 }
    ]
  },
  {
    category: "Vins Blancs",
    items: [
      { id: 4, name: "Puligny-Montrachet 1er Cru", origin: "Bourgogne, France", year: "2018", price: 110 },
      { id: 5, name: "Sancerre Les Monts Damnés", origin: "Loire, France", year: "2020", price: 75 },
      { id: 6, name: "Chablis Grand Cru Les Clos", origin: "Bourgogne, France", year: "2019", price: 90 }
    ]
  }
];

// SEO
useHead({
  title: 'Menu - Le Gourmet Restaurant',
  meta: [
    { name: 'description', content: 'Découvrez notre menu gastronomique composé de plats raffinés préparés avec des ingrédients frais et de saison.' }
  ]
});
</script>