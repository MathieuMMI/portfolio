<template>
  <h2 class="mt-5 mb-7 text-center font-semibold">Projets individuels</h2>
  <div class="md:ml-8 md:mr-8">
    <figure v-for="travaux in listeTravaux" :key="travaux.nom" class="flex flex-col ml-5 mr-5 lg:ml-10">
      <figcaption>
          <h3 class="mt-1 mb-2 text-center">{{ travaux.nom }}</h3>
      </figcaption>
      <router-link :to="{ name: 'TravauxDetails', params: { id: travaux.id }}">
        <img class="w-[100%]" :alt="travaux.nom" :src="travaux.image" />
      </router-link>
      <RouterLink v-if="loggedIn" :to="{ name: 'DeleteTravaux', params: { id: travaux.id } }">
        <p class="text-center lg:text-xl">Supprimer</p>
      </RouterLink>
      <RouterLink v-if="loggedIn" :to="{ name: 'UpdateTravaux', params: { id: travaux.id } }">
        <p class="text-center mb-[10%] lg:text-xl">Modifier</p>
      </RouterLink>
    </figure>
  </div>
  <router-link v-if="loggedIn" to="createTravaux"><p class="mb-[20%] text-center text-xl">Ajouter un nouveau travail</p></router-link>
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
      listeTravaux: [],
      loggedIn: false,
    };
  },

  mounted() {
    this.getTravaux();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.loggedIn = user !== null;
    });
  },

  methods: {
    async getTravaux() {
      const firestore = getFirestore();
      const dbTravaux = collection(firestore, "travaux");
      const q = query(dbTravaux, orderBy("nom", "desc"));
      await onSnapshot(q, (snapshot) => {
        this.listeTravaux = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        this.listeTravaux.forEach(function (travaux) {
          const storage = getStorage();
          const spaceRef = ref(storage, "travaux/" + travaux.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              travaux.image = url;
            })
            .catch((error) => {
            });
        });
      });
    },
  },
};
</script>