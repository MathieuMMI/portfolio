<template>
  <div class="container mx-auto my-8">
    <h1 class="text-4xl font-bold mb-4">Swoss</h1>

    <!-- Introduction -->
    <div class="mb-8">
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl">
        Cette page vous introduira au projet Swoss, réalisé au cours de mon second semestre avec un camarade de promotion.
        Pour résumer la consigne, nous devions créer un jeu sur Unreal Engine en utilisant au maximum les méthodes vues en
        cours, voire plus. Nous devions créer au choix, une map en Open World ou trois niveaux. Nous avons nous fait le
        choix de réaliser trois niveaux.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        <figure>
          <img src="/img/ue5.png" alt="Logo d'Unreal Engine 5" class="rounded-md w-[25%] m-auto" />
          <figcaption class="text-center">Logo d'Unreal Engine 5</figcaption>
        </figure>
        <figure>
          <img src="/img/blender.png" alt="Logo de Blender" class="rounded-md w-[25%] m-auto" />
          <figcaption class="text-center">Logo de Blender</figcaption>
        </figure>
      </div>
    </div>

    <div class="mb-8">
      <p class="text-gray-700 ml-5 mr-5 text-left text-xl mb-5">
        Notre première tâche a été la confection du scénario et du lore. Nous avons donc décidé que le joueur a participé
        à une insurrection, puis s'est retrouvé dans un village et devait terminer cette dernière en éliminant le roi, ou
        plutôt le responsable des malheurs du peuple. Donc il va traverser divers endroits pour se rendre jusqu'à ce
        dernier et le vaincre.
      </p>
    </div>

    <div class="mb-8">
      <p class="text-gray-700 ml-5 mr-5 text-left text-xl mb-5">
        Notre seconde tâche a été de réaliser chacun un objet 3D sur Blender, comme il nous l'a été demandé. J'ai
        personnellemetn réalisé une épée en 3D, relativement simple d'apparence.</p>
      <figure>
        <img src="/img/swoss_sword.png" alt="épée 3d réalisée sur blender" class="rounded-md m-auto" />
        <figcaption class="text-center">L'épée en 3D que j'ai réalisée sur Blender</figcaption>
      </figure>
    </div>

    <!-- Section -->
    <div class="mb-8">
      <p class="text-gray-700 ml-5 mr-5 text-left text-xl">
        Ensuite, nous avons réalisé les niveaux et mis en place leurs décors. Nous, nous avons fait le choix de réaliser 4
        niveaux. Pour ce faire, nous avons essentiellement
        utilisé Quixel Bridge pour importer des textures et des objets (ainsi que les outils d'Unreal Engine comme le
        landscape ou le brouillard), et nous avons composé nos niveaux comme suit.
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-5">
        <figure>
          <img src="/img/swoss_lvl1.png" alt="épée 3d réalisée sur blender" class="rounded-md w-full h-auto" />
          <figcaption class="text-center">Le premier niveau, une forêt à côté d'un petit village</figcaption>
        </figure>
        <figure>
          <img src="/img/swoss_lvl2.png" alt="épée 3d réalisée sur blender" class="rounded-md w-full h-auto" />
          <figcaption class="text-center">Le second niveau, uen caverne</figcaption>
        </figure>
        <figure>
          <img src="/img/swoss_lvl3.png" alt="épée 3d réalisée sur blender" class="rounded-md w-full h-auto" />
          <figcaption class="text-center">Le troisième niveau, une zone morte</figcaption>
        </figure>
        <figure>
          <img src="/img/swoss_lvl4.png" alt="épée 3d réalisée sur blender" class="rounded-md w-full h-auto" />
          <figcaption class="text-center">Le quatrième niveau, une île avec un volcan</figcaption>
        </figure>
      </div>
      </p>
    </div>

    <!-- Section -->
    <div class="mb-8">
      <p class="text-gray-700 ml-5 mr-5 text-left text-xl mb-5">La troisième partie a concerné la mise en place des personnages et
        des
        scripts. Nous avions à intégrer des personnages 3D, leur appliquer un squelette via divers outils (utiliser le rig
        de Mixamo ou Accurig, en créer un nous-même sur Blender, retarget sur Unreal Engine, ..). Nous avons donc mis en
        place un système de vie, de dégâts et de mort pour l'IA. Ainsi qu'un système de dialogue. Cela nous a permis de
        travailler l'interaction entre le monde, les PNJ et le joueur.</p>
      <figure>
        <video width="720" height="480" controls class="m-auto">
          <source src="/img/swoss_fight.mp4" alt="Vidéo du premier gros combat obligatoire sur Swoss"
            class="rounded-md w-full h-auto" />
        </video>
        <figcaption class="text-center">Vidéo exemple de la gestion du combat dans Swoss</figcaption>
      </figure>
    </div>

    <!-- Conclusion -->
    <p class="text-gray-700 ml-5 mr-5 text-left text-xl">Ce projet, bien qu'il n'a pas pu intégrer certaines fonctionnalités qu'on
      aurait dû intégrer et contient quelques erreurs, nous a bien initié à l'usage d'Unreal Engine et nous a permis de
      nous familiariser avec les problématiques de développement de jeu vidéo (les collisions, paramétrer une IA, etc).
    </p>
  </div></template>
  