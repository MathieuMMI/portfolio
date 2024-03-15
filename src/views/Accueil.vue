<template>
  <div class="container mx-auto my-8 text-center mt-36">
    <h1 class="text-3xl md:text-4xl font-bold mb-2">Mathieu BOUQUE</h1>
    <h2 class="text-2xl md:text-3xl text-gray-600 mb-4">Étudiant en troisième année de BUT MMI, parcours DWDI</h2>
    <p class="text-lg text-gray-700 text-left ml-10 mr-10 mb-10">Actuellement à la recherche d'un stage pour ma dernière année
      en BUT MMI à Montbéliard. Passionné par les jeux vidéos et les nouvelles technologies, je recherche un stage pour
      une durée de 16 semaines à partir du 19 février 2024. J'ai eu l'occasion d'utiliser diverses technologies et de les
      appliquer sur des projets ou exercices dans le domaine du web et du jeu vidéo.</p>
    <h2 class="text-3xl font-bold mb-3">Ils me recommandent</h2>

    <!--PROJETS-->
    <div></div>>

    <div class="mb-10">
      <h3 class="text-2xl font-bold mb-5">Pascal Chatonnay</h3>
      <p class="text-lg text-center text-gray-700 mb-5 ml-10 mr-10">
        Président d'Unified Champions
        Référent Défense et Sécurité Nationale (RDSN) de l'université de
        Franche-Comté, professeur en MMI à Montbéliard.</p>
      <figure class="md:items-center mb-5">
        <img src="/img/pchaton.jpg" alt="Photographie de Pascal Chatonnay"
          class="m-auto w-48 " />
        <figcaption class="text-center">Pascal Chatonnay</figcaption>
      </figure>
      <a href="https://www.linkedin.com/in/pascalchatonnay/" class="text-center">
        <p class="text-lg text-gray-700">Voir le Linkedin</p>
      </a>
    </div>
    <button class="text-xl text-gray-700 mb-5" @click="telechargerPDF()">Télécharger la lettre de recommandation de
      Pascal Chatonnay</button>
  </div>
</template>

<script setup>
function telechargerPDF() {
  var urlDuPDF = 'chemin/vers/votre-fichier.pdf';

  var lienTemporaire = document.createElement('a');
  lienTemporaire.href = urlDuPDF;

  lienTemporaire.download = '/Lettre_de_recommadnation_dePchaton_pourMbouque.pdf';

  document.body.appendChild(lienTemporaire);

  lienTemporaire.click();

  document.body.removeChild(lienTemporaire);
}
</script>