<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Le Gourmet</h3>
          <p class="mb-4">Une expérience culinaire exceptionnelle au cœur de la ville.</p>
          <div class="flex space-x-4">
            <UButton icon="i-mdi-facebook" color="neutral" variant="ghost" size="sm" />
            <UButton icon="i-mdi-instagram" color="neutral" variant="ghost" size="sm" />
            <UButton icon="i-mdi-twitter" color="neutral" variant="ghost" size="sm" />
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">Heures d'ouverture</h3>
          <p class="mb-2">Lundi - Vendredi: 11h - 22h</p>
          <p class="mb-2">Samedi: 10h - 23h</p>
          <p>Dimanche: 10h - 21h</p>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">Contact</h3>
          <p class="mb-2">123 Rue de la Gastronomie</p>
          <p class="mb-2">75001 Paris, France</p>
          <p class="mb-2">Téléphone: 01 23 45 67 89</p>
          <p>Email: info@legourmet.fr</p>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Le Gourmet. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>