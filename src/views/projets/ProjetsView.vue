<template>
  <h2 class="mt-5 mb-7 text-center font-semibold">Projets</h2>
  <div class="md:ml-8 md:mr-8">
    <figure v-for="projets in listeProjets" :key="projets.nom" class="flex flex-col ml-5 mr-5 lg:ml-10">
      <figcaption>
          <h3 class="mt-1 mb-2 text-center">{{ projets.nom }}</h3>
      </figcaption>
      <router-link :to="{ name: 'ProjetsDetails', params: { id: projets.id }}">
        <img class="w-[100%]" :alt="projets.nom" :src="projets.image" />
      </router-link>      
      <RouterLink v-if="loggedIn" :to="{ name: 'DeleteProjets', params: { id: projets.id } }">
        <p class="text-center lg:text-xl">Supprimer</p>
      </RouterLink>
      <RouterLink v-if="loggedIn" :to="{ name: 'UpdateProjets', params: { id: projets.id } }">
        <p class="text-center mb-[10%] lg:text-xl">Modifier</p>
      </RouterLink>
    </figure>
  </div>
  <router-link v-if="loggedIn" to="createProjets"><p class="mb-[20%] text-center text-xl">Ajouter un nouveau projet</p></router-link>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  addDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { getStorage, ref, getDownloadURL, uploadString } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  data() {
    return {
      listeProjets: [],
      loggedIn: false,
    };
  },

  mounted() {
    this.getProjets();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.loggedIn = user !== null;
    });
  },

  methods: {
    async getProjets() {
      const firestore = getFirestore();
      const dbProjets = collection(firestore, "projets");
      const q = query(dbProjets, orderBy("nom", "desc"));
      await onSnapshot(q, (snapshot) => {
        this.listeProjets = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        this.listeProjets.forEach(function (projets) {
          const storage = getStorage();
          const spaceRef = ref(storage, "projets/" + projets.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              projets.image = url;
            })
            .catch((error) => {
            });
        });
      });
    },
  },
};
</script>