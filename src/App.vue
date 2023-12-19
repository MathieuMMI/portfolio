<script setup>
import Header from "@/components/layout/Menu.vue"
import Footer from "@/components/layout/Footer.vue"
</script>
<template>
  <header>
    <Header />
  </header>
  <main class="mb-36">
    <RouterView />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

