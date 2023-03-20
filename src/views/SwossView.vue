<template>
    <div class="min-h-screen bg-color">
      <div class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <h2 class="text-center font-bold text-color mb-2"> SWOSS </h2>
          <h3 class="text-color mb-4"> La conception du jeu </h3>
          <div class="prose max-w-none mb-8">
            <p class="mb-7"> Swoss est un projet collectif réalisé dans le cadre des travaux personnels
              au BUT MMI de Montbéliard. Nous avons réalisé ce projet en passant par deux logiciels : 
            Blender, et Unreal Engine 5.</p>
            <div class="flex">
              <img class="dark:hidden w-[50%] m-auto" src="../../public/img/ue5.png" alt="Logo de Unreal Engine">
              <img class="dark:block hidden w-[50%] m-auto" src="../../public/img/ue5dark.png" alt="Logo de Unreal Engine">
              <img class="w-[50%] m-auto" src="../../public/img/blender.png" alt="Logo de Blender">
            </div>
          </div>
          <h3 class="text-color mb-4"> Choix du sujet </h3>
          <div class="prose max-w-none mb-8">
            <p class="mb-7"> La première chose que nous avions à faire, c'est trouver le sujet que nous souhaitions aborder lors de ce projet.
              Nous avons donc établi que nous nous centrerions sur la dark fantasy, avec des combats à la troisième personne.
            </p>
            <div class="bg-black border border-[#251E70] p-5">
              <h3 class="text-white mb-4">Inspiration</h3>
              <p class="text-white">Une de nos sources d'inspiration principale, ça a été Elden Ring. Et plus globalement les souls.
                Nous voulions reprendre le modèle du jeu pour la difficulté et pour les affrontements avec les boss.
              </p>
              <img class="mt-5 max-w-full m-auto" src="../../public/img/eldenring.jpg" alt="Image reprise du trailer de Elden Ring">
            </div>
          </div>
          <h3 class="text-color mb-4"> Le level design </h3>
          <div class="prose max-w-none mb-8">
            <p class="mb-7"> Nous avons ensuite designé les niveaux. Mon collègue a designé le premier niveau, et j'ai 
              quant à moi designé le second. Nous avons utilisé deux maps par niveau : une où le joueur 
              sa balade, et l'autre où il affronte le boss. Nous les avons séparées pour faire en sorte que le jeu 
              n'ait pas de bugs imprévus en plein affrontement.
            </p>
            <div class="bg-black border border-[#251E70] p-5">
              <h3 class="text-white mb-4">Le niveau 2</h3>
              <p class="text-white">
                Voici les deux maps du niveau 2, designé par mes soins. J'ai moi-même réalisé la texture de l'eau du niveau 2, 
                ainsi que la texture de la lave qui apparaît quand le combat commence.
              </p>
              <div class="flex">
                <img class="ml-5 mt-5 w-[50%] m-auto" src="../../public/img/lvl2map1.png" alt="Map 1 du niveau 2 de notre jeu, Swoss">
                <img class="ml-5 mt-5 w-[50%] m-auto" src="../../public/img/lvl2map2.png" alt="Map 1 du niveau 2 de notre jeu, Swoss">
              </div>
            </div>
          </div>
          <h3 class="text-color mb-4"> Le personnage </h3>
          <div class="prose max-w-none mb-8">
            <p class="mb-7"> Est ensuite venu le temps de la préparation du personnage.
            Pour le concevoir, nous sommes passés par MetaHuman : ce plugin permet de créer
            entièrement par un personnage à forme humaine. Pour les vêtements, nous comptons passer
            par Unreal Engine 5, qui propose de modifier les vêtements des personnages. 
            </p>
            <div class="bg-black border border-[#251E70] p-5">
              <h3 class="text-white mb-4"> MetaHuman  </h3>
              <p class="text-white">
                MetaHuman m'a permis d'arriver à ce résultat pour le personnage.
              </p>
              <div class="flex">
                <img class="mt-5 w-[50%] m-auto" src="../../public/img/metahuman.png" alt="Map 1 du niveau 2 de notre jeu, Swoss">
                <img class="mt-5 w-[50%] m-auto" src="../../public/img/mymetahuman.png" alt="Map 1 du niveau 2 de notre jeu, Swoss">
              </div>
            </div>
          </div>
            <h3 class="text-color mb-4"> Les IA </h3>
            <div class="prose max-w-none mb-8">
            <p class="mb-7"> Nous avons ensuite codé les IA : elles dovient être en mesure d'effectuer des combats avec 
              le joueur. Certaines IA doivent également s'affronter entre elles.
            </p>
            <div class="bg-black border border-[#251E70] p-5">
              <h3 class="text-white mb-4"> Sirène  </h3>
              <p class="text-white">
                La sirène, deuxième boss, a été modifiée à partir 
                d'un modèle récupéré sur sketchfab. J'ai ajouté deux bras, deux jambes, et une queue
                au personnage. Le personnage est entièrement est rig, et quelques animations ont été ajoutées.
              </p>
              <div class="flex">
                <img class="max-w-full m-auto mt-5 mb-5" src="../../public/img/sirene.png" alt="Map 1 du niveau 2 de notre jeu, Swoss">
              </div>
            </div>
            </div>
            <h3 class="text-color mb-4"> Et après ? </h3>
            <div class="prose max-w-none mb-8">
            <p class="mb-7"> Plusieurs choses restent à faire : nous devons ajouter les cinématiques,
              terminer de configurer toutes les IA et configurer correctement le scénario du jeu. 
              l'animation et le retarget du personnage principal doivent être faits également (le retarget, c'est
              adapter le squelette d'un personnage à Unreal Engine).
            </p>
            <div class="bg-black border border-[#251E70] p-5">
              <h3 class="text-white mb-4"> Cinématique  </h3>
              <p class="text-white">
                Retrouvez ici la cinématique d'introduction du jeu.
              </p>
              <div class="flex">
                <img class="m-auto mt-5 mb-5 w-[50%]" src="../../public/img/play.png" alt="Image du bouton play temporaire, jusqu'à ajout de la cinématique">
              </div>
            </div>
            </div>
          <div class="prose max-w-none">
            <p><strong>Année :</strong> 2023 </p>
            <p><strong>Catégorie :</strong> Jeu vidéo </p>
          </div>
        </div>
      </div>
    </div>
  </template>