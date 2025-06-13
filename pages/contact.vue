<template>
  <div class="py-12">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Contactez-nous</h1>
        <p class="text-gray-600 max-w-2xl mx-auto">Nous serions ravis de vous accueillir ou de répondre à vos questions.</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Informations de contact -->
        <div>
          <h2 class="text-2xl font-bold mb-6">Nos coordonnées</h2>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-amber-100 p-3 rounded-full mr-4">
                <Icon name="i-heroicons-map-pin" class="text-amber-800 text-xl" />
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1">Adresse</h3>
                <p>123 Rue de la Gastronomie</p>
                <p>75001 Paris, France</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-amber-100 p-3 rounded-full mr-4">
                <Icon name="i-heroicons-phone" class="text-amber-800 text-xl" />
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1">Téléphone</h3>
                <p>Réservations: 01 23 45 67 89</p>
                <p>Informations: 01 23 45 67 90</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-amber-100 p-3 rounded-full mr-4">
                <Icon name="i-heroicons-envelope" class="text-amber-800 text-xl" />
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1">Email</h3>
                <p>reservations@legourmet.fr</p>
                <p>info@legourmet.fr</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-amber-100 p-3 rounded-full mr-4">
                <Icon name="i-heroicons-clock" class="text-amber-800 text-xl" />
              </div>
              <div>
                <h3 class="font-bold text-lg mb-1">Heures d'ouverture</h3>
                <p>Lundi - Vendredi: 11h - 22h</p>
                <p>Samedi: 10h - 23h</p>
                <p>Dimanche: 10h - 21h</p>
              </div>
            </div>
          </div>
          
          <!-- Carte -->
          <div class="mt-8">
            <h3 class="font-bold text-lg mb-4">Notre emplacement</h3>
            <div class="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p class="text-gray-600">Carte Google Maps ici</p>
            </div>
          </div>
        </div>
        
        <!-- Formulaire de réservation -->
        <div>
          <h2 class="text-2xl font-bold mb-6">Réserver une table</h2>
          
          <form @submit.prevent="submitReservation" class="space-y-6">
            <UFormGroup label="Nom complet" required>
              <UInput v-model="reservation.name" placeholder="Votre nom" />
            </UFormGroup>
            
            <UFormGroup label="Email" required>
              <UInput v-model="reservation.email" type="email" placeholder="votre@email.com" />
            </UFormGroup>
            
            <UFormGroup label="Téléphone" required>
              <UInput v-model="reservation.phone" placeholder="Votre numéro de téléphone" />
            </UFormGroup>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <UFormGroup label="Date" required>
                <UInput v-model="reservation.date" type="date" :min="minDate" />
              </UFormGroup>
              
              <UFormGroup label="Heure" required>
                <USelect 
                  v-model="reservation.time"
                  :options="timeSlots"
                  placeholder="Sélectionnez une heure"
                />
              </UFormGroup>
            </div>
            
            <UFormGroup label="Nombre de personnes" required>
              <USelect 
                v-model="reservation.guests"
                :options="[1, 2, 3, 4, 5, 6, 7, 8]"
                placeholder="Sélectionnez le nombre de personnes"
              />
            </UFormGroup>
            
            <UFormGroup label="Message (optionnel)">
              <UTextarea 
                v-model="reservation.message"
                placeholder="Précisez toute demande spéciale ou restriction alimentaire"
                rows="4"
              />
            </UFormGroup>
            
            <UButton type="submit" color="amber" block :loading="isSubmitting">
              Réserver maintenant
            </UButton>
          </form>
          
          <UAlert 
            v-if="showSuccess" 
            class="mt-6" 
            color="green" 
            variant="soft" 
            icon="i-heroicons-check-circle"
          >
            Votre demande de réservation a été envoyée avec succès. Nous vous contacterons rapidement pour confirmer.
          </UAlert>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// État du formulaire de réservation
const reservation = ref({
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: null,
  message: ''
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

// Date minimum (aujourd'hui)
const minDate = computed(() => {
  const today = new Date();
  return today.toISOString().split('T')[0];
});

// Créneaux horaires disponibles
const timeSlots = [
  '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
];

// Soumission du formulaire (simulée)
const submitReservation = () => {
  isSubmitting.value = true;
  
  // Simulation d'une requête API
  setTimeout(() => {
    isSubmitting.value = false;
    showSuccess.value = true;
    
    // Réinitialiser le formulaire
    reservation.value = {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: null,
      message: ''
    };
    
    // Masquer le message de succès après 5 secondes
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  }, 1500);
};

// SEO
useHead({
  title: 'Contact - Le Gourmet Restaurant',
  meta: [
    { name: 'description', content: 'Contactez Le Gourmet pour réserver une table ou pour toute information. Nous sommes situés au cœur de Paris.' }
  ]
});
</script>