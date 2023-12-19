<script setup>
import Header from "@/components/layout/Menu.vue"
import Footer from "@/components/layout/Footer.vue"
</script>
<template>
  <header>
    <Header />
    <router-link to="/Swoss">Swoss</router-link>
    <router-link to="/Argimes">Argimes</router-link>
    <router-link to="/ChartJS">ChartJS</router-link>
    <router-link to="/Firebase">Firebase</router-link>
    <router-link to="/Prismic">Prismic</router-link>
    <router-link to="/Supabase">Supabase</router-link>
    <router-link to="/UC">UC</router-link>
    <router-link to="/UE">UE</router-link>
    <router-link to="/VR">VR</router-link>
  </header>
  <main class="mb-36">
    <RouterView />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

