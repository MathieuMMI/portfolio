<template>
  <div class="m-auto mb-10 lg:mb-20 mt-10 lg:mt-20 min-w-fit max-w-fit rounded-xl p-2 bg-[#0081ca]">
    <h2 class="text-center">Mathieu BOUQUE</h2>
  </div>
  <div class="flex mb-48">
    <div class="m-auto min-w-fit max-w-fit rounded-xl p-2 bg-black">
      <router-link to="/projets"><h3 class="text-white">Projets collectifs</h3></router-link>
    </div>
    <div class="m-auto min-w-fit max-w-fit rounded-xl p-2 bg-black">
      <router-link to="/travaux"><h3 class="text-white">Projets personnels</h3></router-link>
    </div>
    <div class="m-auto min-w-fit max-w-fit rounded-xl p-2 bg-black">
      <h3 class="text-white">Parcours</h3>
    </div>
  </div>
  <section class="hidden xl:block">
    <div class="relative">
      <h2 class="absolute top-32 right-5">Mes projets</h2>
      <svg
        width=100%
        height=auto
        viewBox="0 0 1440 901"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <path d="M-1016 450.5L1450 0.599792V900.4L-1016 450.5Z" fill="#23BDC7"></path>
      </svg>
      <div class="grid grid-cols-2 absolute bottom-[30%]">
        <figure class="ml-20 mr-20" v-for="projets in listeProjets" :key="projets.nom">
        <img :alt="projets.nom" :src="projets.image" class="" />
        <figcaption class="text-center">{{ projets.nom }}</figcaption>
        </figure>
      </div>
      <button class="absolute right-52 bottom-36"><a href="/projets">VOIR PLUS</a></button>
    </div>
    <div class="relative">
      <h2 class="absolute top-32 left-5">Mes travaux</h2>
      <svg
        width=100%
        height=auto
        viewBox="0 0 1440 901"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <path d="M2288 450.5L-178 0.599792V900.4L2288 450.5Z" fill="#23BDC7"></path>
      </svg>
      <div class="grid grid-cols-2 absolute bottom-[30%]">
        <figure class="ml-20 mr-20" v-for="travaux in listeTravaux" :key="travaux.nom">
        <img :alt="travaux.nom" :src="travaux.image" class="" />
        <figcaption class="text-center">{{ travaux.nom }}</figcaption>
        </figure>
      </div>
      <button class="absolute left-52 bottom-40"><a href="/">VOIR PLUS</a></button>
    </div>
  </section>
  <section class="xl:hidden">
    <div class="bg-cyan-500 mb-20">
      <h2 class="text-center m-5">Projets</h2>
      <div class="grid grid-cols-2 gap-5">
        <figure class="ml-5 mr-5" v-for="projets in listeProjets" :key="projets.nom">
        <img :alt="projets.nom" :src="projets.image" />
        <figcaption class="text-center">{{ projets.nom }}</figcaption>
        </figure>
      </div>
      <div class="text-right">
        <button class="mr-5 mt-10 pb-5 othertypo"><a href="/projets">VOIR PLUS</a></button>
      </div>
    </div>
    <div class="bg-cyan-500 text-center">
      <h2 class="text-center m-5">Travaux</h2>
      <div class="grid grid-cols-2 gap-5">
        <figure class="text-center ml-5 mr-5" v-for="travaux in listeTravaux" :key="travaux.nom">
        <img :alt="travaux.nom" :src="travaux.image" />
        <figcaption class="text-center">{{ travaux.nom }}</figcaption>
        </figure>
      </div>
      <button class="mr-5 mt-10 pb-5 othertypo"><a href="/travaux">VOIR PLUS</a></button>
    </div>
   
  </section>
</template>

<style>
.othertypo {
  font-size: 1.5rem;
}
</style>
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
import { limit } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  data() {
    return {
      listeProjets: [],
      listeTravaux: [],
    };
  },

  mounted() {
    this.getProjets();
    this.getTravaux();
  },

  methods: {
    async getProjets() {
      const firestore = getFirestore();
      const dbProjets = collection(firestore, "projets");
      const q = query(dbProjets, orderBy("nom", "desc"), limit(2));
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
    async getTravaux() {
      const firestore = getFirestore();
      const dbTravaux = collection(firestore, "travaux");
      const q = query(dbTravaux, orderBy("nom", "desc"), limit(2));
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