<template>
  <div class="container mx-auto my-8 text-center">
    <h1 class="font-bold mb-8">Mes projets</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Utilisation d'une grille avec une colonne sur petit écran et deux colonnes sur les écrans plus larges -->
      <div class="mb-8">
        <h2 class="text-4xl font-bold mb-2">3D</h2>

        <div class="m-4">
          <h3 class="text-3xl font-bold mb-2">Swoss</h3>
          <figure><router-link to="/Swoss"><img src="/img/swoss_present.png" alt="Projet 3D 1"
                class="rounded-md mb-2 m-auto" /></router-link>
            <figcaption></figcaption>
          </figure>
          <p class="text-gray-700 text-left text-xl m-auto w-[50%] font-normal">Ce projet a été réalisé lors de ma seconde année en
            MMI. Il avait pour but de
            réaliser un jeu vidéo sur Unreal Engine, en usant des connaissances acquises lors de nos cours. Nous étions
            par groupe de 2.
          </p>
        </div>

        <div class="m-4">
          <h3 class="text-3xl font-bold mb-2">Monde Virtuel VR et Metahuman</h3>
          <figure><router-link to="/VirtualReality"><img src="/img/vr_present.png" alt="Projet 3D 2"
                class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
            <figcaption></figcaption>
          </figure>
          <p class="text-gray-700 text-left text-xl m-auto w-[50%] font-normal">Nous avons eu pour consigne de réaliser notre Metahuman
            (un Metahuman basé sur notre tête) et de l'intégrer dans un monde en réalité virtuelle sur Unreal Engine.</p>
        </div>

        <div class="m-4">
          <h3 class="text-3xl font-bold mb-2">Argimes</h3>
          <figure><router-link to="/Argimes"><img src="/img/argime_present.png" alt="Projet 3D 2"
                class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
            <figcaption></figcaption>
          </figure>
          <p class="text-gray-700 text-left text-xl m-auto w-[50%] font-normal">Nous souhaitons, avec un ami, réaliser un jeu vidéo via
            Godot (et Blender). Le jeu n'en est qu'à ses débuts mais j'explique ici comment nous procéderons.</p>
        </div>

        <div class="m-4">
          <h3 class="text-3xl font-bold mb-2">Unified Champions</h3>
          <figure><router-link to="/UCjeu"><img src="/img/UCjeu_present.png" alt="Projet Web 1"
                class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
            <figcaption></figcaption>
          </figure>
          <p class="text-gray-700 text-left text-xl m-auto w-[50%] font-normal">Je suis membre de l'association Unified Champions. Je
            travaille actuellement avec elle sur un jeu vidéo interne, utilisé pour souder ses équipes.</p>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-4xl font-bold mb-2">Développement Web</h2>

        <div class="m-4">
          <h3 class="text-3xl font-bold mb-2">Unified Champions</h3>
          <figure><router-link to="/UC"><img src="/img/uc_present.png" alt="Projet Web 1"
                class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
            <figcaption></figcaption>
          </figure>
          <p class="text-gray-700 text-left text-xl m-auto w-[50%] font-normal">Toujours avec la même association, j'ai travaillé les
            précédentes années sur leur site web avec l'outil Wordpress..</p>
        </div>

        <div class="m-4">
          <h3 class="text-3xl font-bold mb-2">Site web intégrant des graphiques ChartJS qui se basent sur des API publiques
          </h3>
          <figure><router-link to="/ChartJS"><img src="/img/chartjs_present.png" alt="Projet Web 2"
                class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
            <figcaption></figcaption>
          </figure>
          <p class="text-gray-700 text-left text-xl m-auto w-[50%] font-normal">Ce projet concerne la gestion de données. Nous avons eu
            à réaliser un site qui récupère les données d'API publiques, et les met en avant avec l'outil de visualisation
            ChartJS.</p>
        </div>

        <div class="m-4">
          <h3 class="text-3xl font-bold mb-2">Site web avec CMS (Prismic)</h3>
          <figure><router-link to="/Prismic"><img src="/img/prismic_present.png" alt="Projet Web 2"
                class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
            <figcaption></figcaption>
          </figure>
          <p class="text-gray-700 text-left text-xl m-auto w-[50%] font-normal">Nous devions faire un site qui utilise Prismic pour
            gérer son contenu, avec un Storybook pour gérer les composants et l'usage du SCSS, framework CSS qui améliore
            l'usage du CSS.</p>
        </div>
      </div>
    </div>
  </div>
</template>
