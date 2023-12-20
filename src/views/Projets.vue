<template>
  <div class="container mx-auto my-8 text-center">
    <h1 class="font-bold mb-8">Mes projets</h1>
    <div class="mb-8">
      <h2 class="text-4xl font-bold mb-2">3D</h2>

      <div class="m-4">
        <h3 class="text-3xl font-bold mb-2">Swoss</h3>
        <figure><router-link to="/Swoss"><img src="/img/swoss_present.png" alt="Projet 3D 1"
              class="rounded-md mb-2 m-auto" /></router-link>
          <figcaption></figcaption>
        </figure>
        <router-link to="/Swoss">
          <p class="text-gray-700 text-left text-xl m-auto w-[50%]">Ce projet a été réalisé lors de ma seconde année en
            MMI. Il avait pour but de
            réaliser un jeu vidéo sur Unreal Engine, en usant des connaissances acquises lors de nos cours. Nous étions
            par groupe de 2.
          </p>
        </router-link>
      </div>


      <div class="m-4">
        <h3 class="text-3xl font-bold mb-2">Monde Virtuel VR et Metahuman</h3>
        <figure><router-link to="/VR "><img src="/img/vr_present.png" alt="Projet 3D 2"
              class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
          <figcaption></figcaption>
        </figure>
        <p class="text-gray-700 text-left text-xl m-auto w-[50%]">Nous avons eu pour consigne de réaliser notre Metahuman
          (un Metahuman basé sur notre tête) et de l'intégrer dans un monde en réalité virtuelle sur Unreal Engine.</p>
      </div>

      <!--<div class="m-4">
          <h3 class="text-3xl font-bold mb-2">Jeu vidéo Unreal Engine pour examen</h3>
          <figure><router-link to="/UE "><img src="/img/saeUE_present.png" alt="Projet 3D 2" class="rounded-md mb-2 m-auto" /></router-link><figcaption></figcaption></figure>
          <p class="text-gray-700 text-left text-xl m-auto w-[50%]">Le but était de réaliser un jeu vidéo en une semaine en remplissant divers objectifs, qui nous rapportaient des points. Tant qu'on accomplissait suffisamment d'objectifs pour avoir une note correcte, l'examen était validé.</p>
      </div>-->

      <div class="m-4">
        <h3 class="text-3xl font-bold mb-2">Argimes</h3>
        <figure><router-link to="/Argimes"><img src="/img/argime_present.png" alt="Projet 3D 2"
              class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
          <figcaption></figcaption>
        </figure>
        <p class="text-gray-700 text-left text-xl m-auto w-[50%]">Nous souhaitons, avec un ami, réaliser un jeu vidéo via
          Godot (et Blender). Le jeu n'en est qu'à ses débuts mais j'explique ici comment nous procéderons.</p>
      </div>

      <div class="m-4">
        <h3 class="text-3xl font-bold mb-2">Unified Champions</h3>
        <figure><router-link to="/UEjeu"><img src="/img/UCjeu_present.png" alt="Projet Web 1"
              class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
          <figcaption></figcaption>
        </figure>
        <p class="text-gray-700 text-left text-xl m-auto w-[50%]">Je suis membre de l'association Unified Champions. Je
          travaille actuellement avec elle sur un jeu vidéo interne, utilisé pour souder ses équipes.</p>
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-4xl font-bold mb-2">Développement Web</h2>

      <div class="m-4">
        <h3 class="text-3xl font-bold mb-2">Unified Champions</h3>
        <figure><router-link to="/UE "><img src="/img/uc_present.png" alt="Projet Web 1"
              class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
          <figcaption></figcaption>
        </figure>
        <p class="text-gray-700 text-left text-xl m-auto w-[50%]">Toujours avec la même association, j'ai travaillé les
          précédentes années surleur site web avec l'outil Wordpress..</p>
      </div>

      <!--<div class="m-4">
          <h3 class="text-3xl font-bold mb-2">Site web avec backend (Firebase)</h3>
          <figure><router-link to="/Firebase "><img src="/img/firebase_present.png" alt="Projet Web 1" class="rounded-md mb-2 m-auto" /></router-link><figcaption></figcaption></figure>
          <p class="text-gray-700 text-left text-xl m-auto w-[50%]">Lors de notre second semestre en MMI, nous avons appris à utiliser Firebase. Pendant notre SAE, nous avions une semaine pour réaliser un site qui utilise des contenus gérés par Firebase.</p>
        </div>

        <div class="m-4">
          <h3 class="text-3xl font-bold mb-2">Ssite web avec backend (Supabase)</h3>
          <figure><router-link to="/Supabase "><img src="/img/supabase_present.png" alt="Projet Web 2" class="rounded-md mb-2 m-auto" /></router-link><figcaption></figcaption></figure>
          <p class="text-gray-700 text-left text-xl m-auto w-[50%]">Ici, nous avons vu un autre moyen de gérer le contenu via un Backend : Supabase. Nous devions réaliser un site autour de la créationde montres personnalisées : l'utilisateur pouvait alors récupérer les caractéristiques stockées sur supabase et les appliquer sur la montre.</p>
        </div>-->

      <div class="m-4">
        <h3 class="text-3xl font-bold mb-2">Site web intégrant des graphiques ChartJS qui se basent sur des API publiques
        </h3>
        <figure><router-link to="/ChartJS "><img src="/img/chartjs_present.png" alt="Projet Web 2"
              class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
          <figcaption></figcaption>
        </figure>
        <p class="text-gray-700 text-left text-xl m-auto w-[50%]">Ce projet concerne la gestion de données. Nous avons eu
          à réaliser un site qui récupère les données d'API publiques, et les met en avant avec l'outil de visualisation
          ChartJS.</p>
      </div>

      <div class="m-4">
        <h3 class="text-3xl font-bold mb-2">Site web avec CMS(Prismic)</h3>
        <figure><router-link to="/Prismic "><img src="/img/prismic_present.png" alt="Projet Web 2"
              class="rounded-md mb-2 m-auto w-[50%]" /></router-link>
          <figcaption></figcaption>
        </figure>
        <p class="text-gray-700 text-left text-xl m-auto w-[50%]">Nous devions faire un site qui utilise Prismic pour
          gérer son contenu, avec un Storybook pour gérer les composants et l'usage du SCSS, framework CSS qui améliore
          l'usage du CSS.</p>
      </div>
    </div>
  </div>
</template>
