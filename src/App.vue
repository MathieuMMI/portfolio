<template>
  <header class="relative flex px-5 xl:pb-[11px] mb-14 lg:mb-32">
    <menu-icon />
    <nav>
      <Router-link to="/"><h1 class="absolute">Mathieu</h1></Router-link>
      <ul class="hidden xl:flex absolute right-0">
        <svg
          width="815"
          height="73"
          viewBox="0 0 815 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">
          <path d="M89 72L1.5 0.5H814V72H89Z" fill="#251E70" stroke="black"></path>
        </svg>
        <div class="flex absolute right-5 top-3 text-white">
        <li class="text-left font-medium"><RouterLink to="/projets">Projets</RouterLink></li>
        <li class="ml-10 text-left font-medium"><RouterLink to="/travaux">Travaux</RouterLink></li>
        <li class="ml-10 text-left font-medium"><RouterLink to="/">Parcours</RouterLink></li>
        <li class="menu-item ml-10 text-left font-medium">
          <RouterLink to="#">À propos</RouterLink>
          <ul class="sub-menu">
            <li class="sublink"><RouterLink to="/contact">Contact</RouterLink></li>
            <li class="sublink"><RouterLink to="/compte">Connexion</RouterLink></li>
          </ul>
        </li>
        </div>
      </ul>
    </nav>
  </header>
  <main class="dark:bg-black dark:text-white">
    <RouterView />
  </main>
  <footer class="sm:flex bg-stone-900 pt-[15px] sm:pl-10 pb-5 mt-32 lg:mt-52">
    <ul class="flex-col m-auto text-center">
      <li>
        <router-link to="/mentions">
          <p class="text-white">Mentions légales</p>
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          <p class="text-white">Mathieu</p>
        </router-link>
      </li>
    </ul>
    <div class="flex justify-center sm-justify-right sm:mr-10">
      <a href="https://www.linkedin.com/in/mathieu-bouque-237118224/"><Linkedin><use xlink:href="https://www.linkedin.com/in/mathieu-bouque-237118224/"/></Linkedin></a>
    </div>
  </footer>
</template>

<script>
import MenuIcon from "@/components/icons/MenuIcon.vue";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import Linkedin from '@/components/icons/Linkedin.vue'

export default {
    components: { MenuIcon, Linkedin },
    data() {
    return {
      loggedIn: false,
      showHeader: true,
    }
  },
  watch: {
    $route(to, from) {
      if (to.path === '/') {
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.loggedIn = user !== null;
    });
  },
}
</script>

<style>
.sublink {
  font-size: 1.5rem;
}
.menu-item {
  position: relative;
}
.sub-menu {
  display: none;
  position: absolute;
  background-color: #251E70;
  padding: 15px;
  text-align: center;
}
.menu-item:hover  .sub-menu {
  display: block;
}
/*  <header v-if="showHeader" class="relative flex px-5 xl:pb-[11px] mb-14 lg:mb-32">
 */
 body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}
main {
    min-height: calc(100vh - 320px); /* Ajustez la valeur en fonction de la hauteur de votre header et footer */
}

</style>