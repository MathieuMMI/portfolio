<template>
  <header v-if="showHeader" class="relative flex px-5 xl:pb-[11px] mb-20 lg:mb-32">
    <nav>
      <button class="absolute"><h1 v-on:click="handleClick">Mathieu</h1></button>
      <ul class="hidden lg:flex absolute right-0">
        <svg
          width="885"
          height="73"
          viewBox="0 0 815 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">
          <path d="M89 72L1.5 0.5H814V72H89Z" fill="transparent" stroke="#00268e"></path>
        </svg>
        <div class="flex absolute right-5 top-3 text-color">
        <li class="ml-8 text-left font-medium"><RouterLink to="/projets">Projets collectifs</RouterLink></li>
        <li class="ml-5 text-left font-medium"><RouterLink to="/travaux">Projets individuels</RouterLink></li>
        <li class="ml-5 text-left font-medium"><RouterLink to="/parcours">Parcours</RouterLink></li>
        </div>
      </ul>
      <div>
    <button class="dark:bg-white flex lg:hidden menu-icon" @click="showMenu = !showMenu">
      <img src="./assets/menuicon.png" alt="Menu">
    </button>
    <ul v-if="showMenu" class="menu">
      <li class="text-left font-medium"><RouterLink to="/projets">Projets collectifs</RouterLink></li>
      <li class="ml-10 text-left font-medium"><RouterLink to="/travaux">Projets individuels</RouterLink></li>
      <li class="ml-10 text-left font-medium"><RouterLink to="/parcours">Parcours</RouterLink></li>
    </ul>
  </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer v-if="showFooter" class="sm:flex bg-stone-900 pt-[15px] sm:pl-10 pb-5 mt-32 lg:mt-52">
    <ul class="flex-col m-auto text-center">
      <li>
        <router-link to="/mentions">
          <p class="text-white">Mentions légales</p>
        </router-link>
      </li>
      <li>
        <router-link to="/contact">
          <p class="text-white">Contactez-moi</p>
        </router-link>
      </li>
    </ul>
    <div class="flex justify-center sm-justify-right sm:mr-10">
      <a href="https://www.linkedin.com/in/mathieu-bouque-237118224/"><Linkedin><use xlink:href="https://www.linkedin.com/in/mathieu-bouque-237118224/"/></Linkedin></a>
    </div>
  </footer>
</template>

<script>
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";
import Linkedin from '@/components/icons/Linkedin.vue'

export default {
    components: { Linkedin },
    methods: {
    handleClick(event) {
      if (event.detail === 3) { // triple clic
        this.$router.push('/compte');
      } else { // clic simple ou double
        this.$router.push('/accueil');
      }
     }
    },
    data() {
    return {
      loggedIn: false,
      showHeader: true,
      showMenu: false,
      showFooter: true,
    }
  },
  watch: {
    $route(to, from) {
      if (to.path === '/') {
        this.showHeader = false
      } else {
        this.showHeader = true
      }
      if (to.path === '/') {
        this.showFooter = false
      } else {
        this.showFooter = true
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
  .menu-icon {
    display: block;
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    width: 50px;
    height: 50px;
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 5px;
  }
  
  .menu-icon img {
    width: 100%;
    height: 100%;
  }
  
  .menu {
    display: flex;
    flex-direction: column;
    list-style: none;
    background-color: white;
    border: 1px solid black;
    padding: 10px;
    margin: 0;
    position: absolute;
    right: 5px;
    top: 5px;
    margin-top: 45px;
  }
  
  .menu li {
    margin: 10px 0;
  }
  
  .menu li a {
    color: black;
    text-decoration: none;
    font-size: 1.2rem;
  }

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


@media (min-width: 540px) {
  .sub-menu {
  display: none;
  position: absolute;
  background-color: #251E70;
  padding: 15px;
  text-align: center;
}
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