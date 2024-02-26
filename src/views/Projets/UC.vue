<template>
  <div class="container mx-auto my-8">
    <h1 class="text-4xl font-bold mb-4">Création et maintenance du site de l'association Unified Champions</h1>

    <!-- Introduction -->
    <div class="mb-8">
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl"></p>
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
      <figure>
        <img src="/img/metahuman.png" alt="Logo du plugin MetaHuman" class="rounded-md w-[30%] m-auto" />
        <figcaption class="text-center">Logo du plugin MetaHuman</figcaption>
      </figure>
    </div>

    <div class="mb-12">
      <h2 class="text-3xl font-bold mb-4 text-center">Metahuman</h2>
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl mb-5">
        La première chose que j'ai faite, c'est réaliser mon visage en 3D. Nous avions à disposition plusieurs
        outils pour cela : mon choix s'est porté sur Polycam. Et le résultat a été plutôt bon !
      </p>
      <figure>
        <img src="/img/meMeta.png" alt="Sreenshot du Metahuman inspiré de mon apparence"
          class="rounded-md w-[25%] m-auto" />
        <figcaption class="text-center">Metahuman me représentant</figcaption>
      </figure>
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl mb-5">
        D'abord, j'ai scanné mon visage à l'aide de l'application Polycam, puis j'ai récupéré le mesh 3D créé à
        l'aide de l'application, je l'ai transféré sur Unreal Engine et j'ai utilisé le plugin Metahuman Creator
        pour adapter le mesh à un crâne de Metahuman. Puis, j'ai utilisé le site Metahuman pour créer mon Metahuman
        à partir de ce crâne, en ajustant si nécessaire.
      </p>
    </div>

    <div class="mb-12">
      <h2 class="text-3xl font-bold mb-4 text-center">Scénarisation et Level Design</h2>
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl mb-5">
        Je me suis attelé à la mise en place des niveaux et à leur scénarisation. Je suis parti sur un jeu
        où on doit retrouver mon Metahuman ; le joueur commence dans un Hall et un petit robot lui explique qu'il
        doit retrouver deux objets : une clef USB et une sphère.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5 mb-5">
        <figure>
          <img src="/img/vr_usb.png" alt="Sreenshot du Metahuman inspiré de mon apparence" class="w-[50%] m-auto" />
          <figcaption class="text-center">Image de la sphère modélisée moi-même</figcaption>
        </figure>
        <figure>
          <img src="/img/vr_sphereUSB.png" alt="Sreenshot du Metahuman inspiré de mon apparence" class="w-[50%] m-auto" />
          <figcaption class="text-center">Image de la clef USB activant la sphère</figcaption>
        </figure>
        <figure>
          <img src="/img/vr_sphere.png" alt="Sreenshot du Metahuman inspiré de mon apparence" class="w-[60%] m-auto" />
          <figcaption class="text-center">Image de la sphère 3D modélisée moi-même</figcaption>
        </figure>
      </div>
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl mb-5">
        Le but du joueur, c'est de retourner au hall avec ces deux objets et d'utiliser la clef USB pour
        déverouiller la sphère. Puis, à partir de là, une troisième zone se déveoruillera et permettra d'accéder à
        l'endroit où mon personnage se trouve.
      </p>
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl mb-5">
        Sur mes quatre niveaux, j'en ai actuellement réalisé trois (la date de rendu du projet se situe en fin de
        semestre).
        D'abord, le Hall. Il manque évidemment les objets qui serviront au tutoriel (pour comprendre les commandes
        spécifiques au jeu).
      </p>
      <figure>
        <img src="/img/vr_hall.png" alt="Niveau 'Hall', soit une zone très simple entourée de murs blancs, de mon jeu en
                  réalité virtuelle" class="w-[60%] m-auto" />
        <figcaption class="text-center">Niveau "Hall"</figcaption>
      </figure>
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl mb-5">Puis, la map inspirée un peu Fantasy ; cette dernière se
        situe
        au milieu de l'eau, c'est une sorte d'île enneigée. Il est prévu qu'un dragon s'attaque au joueur pendant
        que celui-ci recherche la sphère (le joueur aura de quoi se défendre, mais le combat ne sera pas l'axe du
        jeu ; il devra surtout l'esquiver et fuir).</p>
      <figure>
        <img src="/img/vr_fantasy.png" alt="Niveau 'Fantasy', soit une île enneigée avec des montagnes, de mon jeu en
                  réalité virtuelle" class="w-[60%] m-auto" />
        <figcaption class="text-center">Niveau 'Fantasy'</figcaption>
      </figure>
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl mb-5">Puis, la map inspirée un peu Fantasy ; cette dernière se
        situe
        au milieu de l'eau, c'est une sorte d'île enneigée. Il est prévu qu'un dragon s'attaque au joueur pendant
        que celui-ci recherche la sphère (le joueur aura de quoi se défendre, mais le combat ne sera pas l'axe du
        jeu ; il devra surtout l'esquiver et fuir).</p>
      <figure>
        <img src="/img/vr_scifi.png" alt="Niveau 'Science Fiction', soit un dome dans lequel se déplace le joueur
                  entouré de Montagnes ensablées, de mon jeu en réalité virtuelle" class="w-[60%] m-auto" />
        <figcaption class="text-center">Niveau 'Science Fiction'</figcaption>
      </figure>
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl">Le dernier niveau sera un mélange de fantasy et de Science
        Fiction,
        mais je dois encore réfléchir à sa composition.</p>
    </div>

    <div class="mb-12">
      <h2 class="text-3xl font-bold mb-4 text-center">Configuration de la VR</h2>
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl">
        L'un des défis de ce projet, c'était de configurer mon ordinateur pour utiliser la VR et générer des APK. Il
        a été nécessaire de passer par diverses applications tierces, comme Android Studio, Quest Link, ou Oculus.
        Il m'a ensuite été nécessaire d'utiliser Steam VR pour paramétrer la simulation.
      </p>
      <figure>
        <img src="/img/quest2.png" alt="Image du casque de réalité virtuelle Meta Quest 2" class="w-[40%] m-auto" />
        <figcaption class="text-center">Image du casque de réalité virtuelle Meta Quest 2</figcaption>
      </figure>
      <p class="ml-5 mr-5 text-gray-700 text-left text-xl">
        De plus, le paramétrage des commandes sur Unreal Engine pour la VR diffère du paramétrage avce une manette
        ou un clavier. Il faut essayer de prendre en compte le fait de s'agenouiller et donc diminuer la hauteur du
        personnage au fur et à mesure : cela nécessite des ajustements.
      </p>
    </div>

    <!-- Conclusion -->
    <p class="ml-5 mr-5 text-gray-700 text-left text-xl">
      Le jeu va nécessiter encore pas mal d'ajustements, notamment le paramétrage des ennemis, même si j'en ai déjà
      quelques uns. Un de mes objectifs va être la modélisation entière et la mise en scène d'un dragon, que j'ai
      commencé ici et que je vais continuer dan sles jours qui viennent. Le but, c'est de m'initier concrètement au
      développement de mondes en VR, voir les possibilités, les limites, et autre ; ainsi que progresser sur mon usage
      de logiciels comme Blender ou Unreal Engine.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 mb-5">
      <figure>
        <img src="/img/vr_ennemy.png"
          alt="Screenshot d'un des ennemis que j'ai déjà configuré pour mon jeu, vu directement dans son Blueprint sur Unreal Engine 5"
          class="w-[50%] m-auto" />
        <figcaption class="text-center">Un des ennemis du jeu (Unreal Engine 5)</figcaption>
      </figure>
      <figure>
        <img src="/img/vr_dragon.png" alt="Screenshot du dragon que je modélise sur Blender" class="w-[50%] m-auto" />
        <figcaption class="text-center">Dragon en voie de modélisation (Blender)</figcaption>
      </figure>
    </div>
  </div>
</template>