<template>
    <div class="flex flex-col min-h-screen justify-center items-center lg:mt-[-200px] mb-20 lg:-mb-36">
      <div class="max-w-screen-lg w-full px-4">
        <h2 class="text-center mb-10 lg:mb-20 mt-10 lg:mt-20 rounded-xl p-2 border-2 border-solid border-[#0081ca]">Mathieu BOUQUE</h2>
        <h1 class="text-center text-4xl font-bold mb-10">Envie d'en savoir plus sur moi ?</h1>
        <div class="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-10">
          <div class="min-w-fit max-w-fit rounded-xl p-4 border-2 border-gray-800 hover:bg-gray-800 hover:text-white hover:border-transparent text-center">
            <router-link to="/projets">
              <h3 class="text-lg font-medium">Projets collectifs</h3>
              <p class="text-sm mt-2">Découvrez mes projets réalisés en équipe</p>
            </router-link>
          </div>
          <div class="min-w-fit max-w-fit rounded-xl p-4 border-2 border-gray-800 hover:bg-gray-800 hover:text-white hover:border-transparent text-center">
            <router-link to="/travaux">
              <h3 class="text-lg font-medium">Projets personnels</h3>
              <p class="text-sm mt-2">Découvrez mes projets réalisés seuls</p>
            </router-link>
          </div>
          <div class="min-w-fit max-w-fit rounded-xl p-4 border-2 border-gray-800 hover:bg-gray-800 hover:text-white hover:border-transparent text-center">
            <router-link to="/parcours">
              <h3 class="text-lg font-medium">Parcours</h3>
              <p class="text-sm mt-2">Découvrez mon parcours et mes compétences</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="m-auto mb-20 text-center min-w-fit2 max-w-fit2 min-w-fit max-w-fit rounded-full p-8 border-2 text-blue-900 border-blue-900 hover:border-[#251E70] animate-pulse myscale">
  <router-link to="/swoss">
    <h4 class="">Swoss</h4>
    <p class="mt-2">Le projet que j'ai le plus apprécié développer !</p>
  </router-link>
</div>
  </template>
  
  <style>
  .myscale {
    transform: scale(1.5);
  }

  .myscale:hover {
    transform: scale(2);
  }
  
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 129, 202, 0.5);
    }
    70% {
        box-shadow: 0 0 0 15px rgba(0, 129, 202, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(0, 129, 202, 0);
    }
  }
  
  .animate-pulse {
    animation: pulse 1s infinite;
  }
  
  /* Pour rendre la div responsive */
  @media screen and (max-width: 640px) {
    .min-w-fit2 {
      min-width: 60%!important;
    }
  
    .max-w-fit2 {
      max-width: 60%!important;
    }
  }
  </style>
  