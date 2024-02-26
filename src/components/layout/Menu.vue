<template>
    <nav class="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div>
            <router-link to="/" class="text-xl font-bold">Accueil</router-link>
        </div>
        <div v-if="!isMobile">
            <router-link to="/Projets" class="md:mr-4 m-0">Mes projets</router-link>
            <router-link to="/Etudes" class="md:mr-4 m-0">Mes études</router-link>
            <router-link to="/APropos" class="md:mr-4 m-0">À propos</router-link>
        </div>
        <div v-if="isMobile">
            <button @click="toggleMenu" class="text-xl">
                ☰
            </button>
            <div v-if="menuOpen" class="absolute top-16 left-0 right-0 bg-gray-800 text-white p-4">
                <router-link to="/Projets" @click="toggleMenu" class="block mb-2">Mes projets</router-link>
                <router-link to="/Etudes" @click="toggleMenu" class="block mb-2">Mes études</router-link>
                <router-link to="/APropos" @click="toggleMenu" class="block mb-2">À propos</router-link>
            </div>
        </div>
    </nav>
</template>
  
<script setup>
import { ref } from 'vue';

const isMobile = ref(window.innerWidth <= 768);
const menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};

// Met à jour isMobile lorsqu'il y a un redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 768;
});

</script>