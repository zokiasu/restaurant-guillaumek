export default defineNuxtPlugin(() => {
  // Charger le CSS du widget
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://widget.gourmets.ovh/widget.css'
  document.head.appendChild(link)

  // Charger le script du widget avec les attributs de données
  const script = document.createElement('script')
  script.src = 'https://widget.gourmets.ovh/widget.iife.js'
  script.setAttribute('data-api-key', 'demo_restaurant_123')
  script.setAttribute('data-backend-url', 'https://gourmets.ovh/api')
  script.defer = true
  
  // Ajouter un gestionnaire pour vérifier quand le script est chargé
  script.onload = () => {
    console.log('Widget Gourmets chargé avec succès')
  }
  
  script.onerror = () => {
    console.error('Erreur lors du chargement du widget Gourmets')
  }
  
  document.head.appendChild(script)
}) 