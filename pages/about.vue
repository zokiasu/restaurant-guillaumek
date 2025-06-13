<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <!-- Histoire du restaurant -->
      <section class="mb-20">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold mb-4">Notre Histoire</h1>
          <p class="text-gray-600 max-w-2xl mx-auto">Découvrez l'histoire et la philosophie qui animent Le Gourmet depuis plus de 35 ans.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop" alt="Histoire du restaurant" class="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">Des débuts modestes à l'excellence culinaire</h2>
            <p class="mb-4">Fondé en 1985 par le chef Jean Dupont, Le Gourmet a commencé comme un petit bistrot dans le quartier historique de Paris. Avec une passion inébranlable pour la cuisine française traditionnelle et un engagement envers l'excellence, le restaurant s'est rapidement fait remarquer par les critiques gastronomiques.</p>
            <p class="mb-4">En 1992, Le Gourmet a reçu sa première étoile au guide Michelin, une reconnaissance qui a propulsé l'établissement sur la scène internationale. Sous la direction du chef Dupont, le restaurant a continué à évoluer, fusionnant techniques classiques et innovations modernes.</p>
            <p>Aujourd'hui, Le Gourmet est reconnu comme l'une des meilleures tables de France, attirant des gourmets du monde entier venus découvrir notre interprétation contemporaine de la cuisine française.</p>
          </div>
        </div>
      </section>
      
      <!-- Notre philosophie -->
      <section class="mb-20 bg-amber-50 py-16 px-4 rounded-lg">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">Notre Philosophie</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-sparkles" class="text-amber-800 text-3xl" />
              </div>
              <h3 class="text-xl font-bold mb-2">Qualité</h3>
              <p>Nous sélectionnons uniquement les meilleurs ingrédients, privilégiant les producteurs locaux et les pratiques durables.</p>
            </div>
            <div class="text-center">
              <div class="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-beaker" class="text-amber-800 text-3xl" />
              </div>
              <h3 class="text-xl font-bold mb-2">Innovation</h3>
              <p>Nous repoussons constamment les limites de la gastronomie, en créant des plats qui surprennent et ravissent nos clients.</p>
            </div>
            <div class="text-center">
              <div class="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="i-heroicons-heart" class="text-amber-800 text-3xl" />
              </div>
              <h3 class="text-xl font-bold mb-2">Passion</h3>
              <p>Chaque plat est préparé avec amour et attention aux détails, reflétant notre passion pour l'art culinaire.</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Notre équipe -->
      <section>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Notre Équipe</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Rencontrez les talents qui font de chaque repas au Gourmet une expérience exceptionnelle.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.id" class="text-center">
            <div class="mb-4 relative">
              <img :src="member.photo" :alt="member.name" class="w-48 h-48 object-cover rounded-full mx-auto" />
            </div>
            <h3 class="text-xl font-bold mb-1">{{ member.name }}</h3>
            <p class="text-amber-800 mb-2">{{ member.role }}</p>
            <p class="text-gray-600">{{ member.bio }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// Données mockées pour l'équipe
const team = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Chef Fondateur",
    photo: "/chef-founder.jpg",
    bio: "Avec plus de 40 ans d'expérience, Jean a révolutionné la cuisine française en fusionnant traditions et techniques modernes."
  },
  {
    id: 2,
    name: "Sophie Moreau",
    role: "Chef Exécutif",
    photo: "/chef-executive.jpg",
    bio: "Formée dans les plus grandes maisons, Sophie apporte sa créativité et sa précision à chaque plat qui sort de notre cuisine."
  },
  {
    id: 3,
    name: "Pierre Laurent",
    role: "Sommelier",
    photo: "/sommelier.jpg",
    bio: "Expert en vins, Pierre sélectionne avec soin les meilleurs crus pour accompagner parfaitement nos créations culinaires."
  },
  {
    id: 4,
    name: "Marie Dubois",
    role: "Chef Pâtissière",
    photo: "/pastry-chef.jpg",
    bio: "Spécialiste des desserts, Marie crée des œuvres d'art sucrées qui sont le point d'orgue de l'expérience au Gourmet."
  },
  {
    id: 5,
    name: "Antoine Lefèvre",
    role: "Directeur de Salle",
    photo: "/manager.jpg",
    bio: "Garant d'un service impeccable, Antoine veille à ce que chaque client vive une expérience mémorable dans notre établissement."
  },
  {
    id: 6,
    name: "Camille Bernard",
    role: "Chef de Partie",
    photo: "/sous-chef.jpg",
    bio: "Jeune talent prometteur, Camille apporte fraîcheur et innovation à notre équipe avec ses idées audacieuses."
  }
];

// SEO
useHead({
  title: 'À propos - Le Gourmet Restaurant',
  meta: [
    { name: 'description', content: 'Découvrez l\'histoire du restaurant Le Gourmet, notre philosophie culinaire et l\'équipe passionnée qui fait notre succès.' }
  ]
});
</script>