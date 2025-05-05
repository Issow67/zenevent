document.addEventListener('DOMContentLoaded', () => {
  // Simulateur de prix pour packs.html
  const prixBase = 89;
  const selectNbre = document.getElementById('nombre-personnes');
  const displayPrix = document.getElementById('prix-estime');
  if (selectNbre && displayPrix) {
    selectNbre.addEventListener('input', () => {
      const n = parseInt(selectNbre.value) || 1;
      displayPrix.textContent = `Prix estimé : ${prixBase * n} €`;
    });
  }

  // Formulaire Composer mon EVJF
  const formComposer = document.getElementById('form-composer');
  if (formComposer) {
    formComposer.addEventListener('submit', (e) => {
      e.preventDefault();
      const lieu = document.getElementById('lieu').value;
      const traiteur = document.getElementById('traiteur').value;
      const theme = document.getElementById('theme').value;
      document.getElementById('resultat-compo').textContent =
        `Vous avez choisi : ${lieu}, ${traiteur}, thème ${theme}.`;
    });
  }

  // Formulaire Prestataires
  const formPro = document.getElementById('form-prestataire');
  if (formPro) {
    formPro.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Merci ! Votre demande a été envoyée.');
    });
  }

  // Formulaire Contact
  const formContact = document.getElementById('form-contact');
  if (formContact) {
    formContact.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Merci pour votre message !');
    });
  }
});

// Fonction “Ajouter au devis”
function ajouterDevis() {
  alert('Pack Bohème ajouté à votre devis !');
}
