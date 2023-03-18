<template>
    <button>
        <svg
          width= "12"
          height= auto
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="rmenu absolute top-1.5 right-2 lg:top-3 xl:hidden"
          preserveAspectRatio="none" 
          aria-haspopup="true"
          aria-controls="menu"
          :aria-expanded="menuOuvert"
          @click="menuOuvert = !menuOuvert">
          <line y1="1.5" x2="19" y2="1.5" stroke="#000000" stroke-width="3"></line>
          <line y1="8.5" x2="19" y2="8.5" stroke="#000000" stroke-width="3"></line>
          <line y1="15.5" x2="19" y2="15.5" stroke="#000000" stroke-width="3"></line>
        </svg>
    </button>
    <div
        id="menu"
        class="
        fixed
        top-0
        left-0
        z-10
        h-screen
        w-screen
        translate-x-full
        bg-yellow-500
        motion-safe:transition-transform motion-safe:duration-1000"
        :class="{ 'translate-x-0': menuOuvert }">
        <ul class="relative mt-36 flex flex-col gap-3 text-center text-3xl">
          <li class="mt-8"><router-link to="/projets" @click="menuOuvert = !menuOuvert">Projets</router-link></li>
          <li class="mt-8"><router-link to="/travaux" @click="menuOuvert = !menuOuvert">Travaux</router-link></li>
          <li class="mt-8"><router-link to="/" @click="menuOuvert = !menuOuvert">Parcours</router-link></li>
          <li class="menu-item ml-10 text-left font-medium">
            <RouterLink to="#">À propos</RouterLink>
            <ul class="sub-menu">
              <li class="sublink text-white"><RouterLink to="/contact">Contact</RouterLink></li>
              <li class="sublink text-white"><RouterLink to="/connexion">Connexion</RouterLink></li>
            </ul>
          </li>
        </ul>
        <div class="">
            <button>
                <svg
                    width="50"
                    height="54"
                    viewBox="0 0 50 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    @click="menuOuvert = !menuOuvert">
                    <line x1="1.37242" y1="0.666376" x2="48.0798" y2="52.8048" stroke="black"></line>
                    <line x1="0.642406" y1="50.714" x2="49.5677" y2="0.650907" stroke="black"></line>
                </svg>
            </button>
        </div>
    </div>
</template>
<style>
@media (min-width: 540px) {
  .rmenu {
    width: 40px;
  }
}
</style>
<script>
export default {
  name: "MenuIcon",
  data() {
    return {
      menuOuvert: false,
    };
  },
};
</script>