<template>
  <div class="container mx-auto my-8">
    <h1 class="text-4xl font-bold mb-4">Unified Champions - Sites</h1>

    <!-- Introduction -->
    <div class="mb-8">
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl"></p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        <figure>
          <img src="/img/vue.png" alt="Logo de VueJS" class="rounded-md w-[25%] m-auto" />
          <figcaption class="text-center">Logo de VueJS</figcaption>
        </figure>
        <figure>
          <img src="/img/prismic.png" alt="Logo de Prismic" class="rounded-md w-[25%] m-auto" />
          <figcaption class="text-center">Logo de Prismic</figcaption>
        </figure>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        <figure>
          <img src="/img/threejs.webp" alt="Logo de ThreeJS" class="rounded-md w-[25%] m-auto" />
          <figcaption class="text-center">Logo de ThreeJS</figcaption>
        </figure>
        <figure>
          <img src="/img/sqlite.png" alt="Logo de sqlite" class="rounded-md w-[25%] m-auto" />
          <figcaption class="text-center">Logo de sqlite</figcaption>
        </figure>
      </div>
    </div>

    <div class="mb-12">
      <h2 class="text-3xl font-bold mb-4 text-center">Résumé</h2>
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl mb-5">
        Mon dernier examen a consisté en la réalisation d'un site en VueJS avec la création d'une base de données et
        l'utilisation de ThreeJS. Le but était d'avoir une montre qu'on peut voir et tourner en 3D, avec des éléments
        stockés dans une base de données. En sélectionnant ces éléménents, on créé sa propre montre qu'on enregistre.
      </p>
    </div>
  </div>

  <div class="mb-12">
    <p class="ml-5 mr-5 text-gray-700 text-left text-xl mb-5">
      Les consignes étaient assez variées, et parmi elles, l'API devait permettre d'afficher toutes les montres sur une
      page, et seulement les montres créées sur la page panier. C'est ce que j'ai fait, tout comme la possibilité de créer
      un compte.
      La base de données sauvegarde un token pour enregistrer la connexion, et le site utilise un stockage local afin de
      garder la connexion quand on change de page : cela permet de pouvoir se rendre sur les pages du site sans être
      constamment déconnecté.
    </p>
    <figure>
      <img src="/img/watch.png" alt="Screenshot de la page du panier du site" class="rounded-md md:w-[50%] m-auto" />
      <figcaption class="text-center">Page panier</figcaption>
    </figure>
  </div>

  <div class="mb-12">
    <p class="ml-5 mr-5 text-gray-700 text-left text-xl mb-5">
      Il est également possible de créer une montre, et de la customiser. Sont modifiables le bracelet, sa couleur ainsi
      que le dessin au niveau des aiguilles. Un utilisateur ne peut modifier que sa propre montre, et ne peut accéder au
      site que s'il est connecté.
    </p>
    <figure>
      <video width="720" height="480" controls class="m-auto">
        <source src="/img/Watchdemo_modif.mp4" poster="/img/watchCustom.png"
          alt="Vidéo démonstration de la modification d'une montre sur le site de 'lexamen'"
          class="rounded-md w-full h-auto" />
      </video>
      <figcaption class="text-center">Modification d'une montre</figcaption>
    </figure>
  </div>

  <!-- Conclusion -->
  <p class="text-gray-700 ml-5 mr-5 text-left text-xl">
    J'ai beaucoup apprécié cet examen, de par le défi qu'il représentait pour nous de mêler la complexité de ThreeJS avec
    la gestion d'API, travaillée avec sqlite. Nous savions créer des scènes 3D, des sites webs avec frameworks, des APi
    utilisées par ces derniers ; mais mêler la gestion de l'affichage de l'élément 3D à des donénes stockées dans la base
    de donénes était un défi tout a fait amusant à relever.
  </p>
</template>