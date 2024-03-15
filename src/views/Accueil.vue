<template>
  <div class="container mx-auto my-8 text-center mt-36">
    <h1 class="text-3xl md:text-4xl font-bold mb-2">Mathieu BOUQUE</h1>
    <h2 class="text-2xl md:text-3xl text-gray-600 mb-4">Étudiant en troisième année de BUT MMI, parcours DWDI</h2>
    <p class="text-lg text-gray-700 text-left ml-10 mr-10 mb-10">Actuellement à la recherche d'un stage pour ma dernière
      année
      en BUT MMI à Montbéliard. Passionné par les jeux vidéos et les nouvelles technologies, je recherche un stage pour
      une durée de 16 semaines à partir du 19 février 2024. J'ai eu l'occasion d'utiliser diverses technologies et de
      les
      appliquer sur des projets ou exercices dans le domaine du web et du jeu vidéo.</p>

    <!--PROJETS-->
    <div class="mb-14">
      <h2 class="text-3xl font-bold mb-3">Projets</h2>
      <div>
        <h3 class="text-2xl font-bold mb-5">Argimes</h3>
        <p class="text-lg text-left text-gray-700 mb-5 ml-10 mr-10">Argimes est le projet que j'ai pris le plus à coeur,
          qui m'a le plus apporté.
          C'est sans doute le projet qui m'a le plus apporté, et sur lequel j'ai le plus donné de moi-même. C'est un
          projet que je réalise en dehors de tout cadre scolaire ou universitaire, même si j'ai eu l'occasion de
          travailler dessus lors de ma formation. C'est un projet que j'ai depuis le lycée, mais dont la forme a évolué
          au fil des ans pour devenir un projet de jeu. L'idée de base, c'est qu'on a un pays de base que j'ai pour le
          moment appelé Argicar, habité par des magicien.ne.s, avec une géographie propre ; puis ce qu'on appelle “La
          Terre Bannie” pour le moment, endroit où se trouvent magiciens et monstres de nature assez diverse. Le projet
          a évolué : de simple livre, il est passé à jeu de rôles, puis à projet de jeu vidéo. Le livre m'a permis de
          définir les premières idées, tandis que le jeu de rôle a été un moyen de définir les règles et limites qui
          entourent l'histoire et les personnages.
        </p>
        <figure><router-link to="/Argimes"><img src="/img/argimes.png" alt="Projet 3D 2"
              class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
          <figcaption></figcaption>
        </figure>
      </div>
      <router-link to="/Etudes" class="text-blue-700 font-bold">Retrouvez ici tous mes autres projets, web ou jeu vidéo !</router-link>
    </div>


    <div class="mb-10">
      <h2 class="text-3xl font-bold mb-3">Ils me recommandent</h2>
      <h3 class="text-2xl font-bold mb-5">Pascal Chatonnay</h3>
      <p class="text-lg text-center text-gray-700 mb-5 ml-10 mr-10">
        Président d'Unified Champions,
        Référent Défense et Sécurité Nationale (RDSN) de l'université de
        Franche-Comté, professeur en MMI à Montbéliard.</p>
      <figure class="md:items-center mb-5">
        <img src="/img/pchaton.jpg" alt="Photographie de Pascal Chatonnay" class="m-auto w-48 " />
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