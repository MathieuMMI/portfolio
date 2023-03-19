<template>
  <section class="mb-20 lg:mb-36">
    <h2 class="text-center">Bienvenue !</h2>
    <p class="ml-5 mr-5 lg:ml-20 mt-5 mb-5">Intéressé très rapidement par le numérique et le multimédia, 
      j'ai cherché à rejoindre une formation qui me permette de travailler plus tard dans ce domaine.
      C'est là que j'ai rejoint MMI, et que j'ai commencé à avoir une appétence pour le développement.
    </p>
      <div class="flex">
        <img src="../../public/img/ue5.png" class="w-[20%] m-auto" />
        <img src="../../public/img/vscode.png" class="w-[20%] m-auto" />
      </div>
    
  </section>

  <section class="hidden xl:block">
    <div class="swoss bg-black bg-opacity-100 border text-[#1bc1c1] border-blue-900 text-center mb-36 rounded-full p-10 mx-auto w-[90%] shadow-xl shadow-slate-800">
      <h2 class="text-center m-5">Swoss</h2>
      <button class="swoss-button m-auto mb-20 text-center min-w-fit max-w-fit rounded-full p-4 border-2 border-blue-900 hover:bg-[#251E70] hover:text-white">
        <a href="/projets">VOIR PLUS</a>
     </button>
    </div>

    <div class="relative">
      <h2 class="absolute top-32 right-5">Projets collectifs</h2>
      <svg
        width=100%
        height=auto
        viewBox="0 0 1440 901"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <path d="M-1016 450.5L1450 0.599792V900.4L-1016 450.5Z" fill="#0081ca"></path>
      </svg>
      <div class="grid grid-cols-2 absolute bottom-[30%]">
        <figure class="ml-20 mr-20" v-for="projets in listeProjets" :key="projets.nom">
        <img :alt="projets.nom" :src="projets.image" class="" />
        <figcaption class="text-white text-center">{{ projets.nom }}</figcaption>
        </figure>
      </div>
      <button class="absolute right-52 bottom-36 m-auto rounded-full border border-black py-2 px-4 bg-transparent hover:bg-[#251E70] text-center hover:text-white transition duration-300 ease-in-out"><a href="/projets">VOIR PLUS</a></button>
    </div>
    <div class="relative">
      <h2 class="absolute top-32 left-5 mt-5">Projets personnels</h2>
      <svg
        width=100%
        height=auto
        viewBox="0 0 1440 901"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none">
        <path d="M2288 450.5L-178 0.599792V900.4L2288 450.5Z" fill="#0081ca"></path>
      </svg>
      <div class="grid grid-cols-2 absolute bottom-[30%]">
        <figure class="ml-20 mr-20" v-for="travaux in listeTravaux" :key="travaux.nom">
        <img :alt="travaux.nom" :src="travaux.image" class="" />
        <figcaption class="text-center">{{ travaux.nom }}</figcaption>
        </figure>
      </div>
      <button class="absolute left-52 bottom-52 m-auto rounded-full border border-black text-black py-2 px-4 bg-transparent hover:bg-[#251E70] text-center hover:text-white transition duration-300 ease-in-out"><a href="/">VOIR PLUS</a></button>
    </div>
  </section>

  <section class="xl:hidden">
    <div class="swoss bg-black border text-[#1bc1c1] border-blue-900 text-center mb-10 rounded-full p-5 mx-auto w-[90%] shadow-xl shadow-slate-800">
      <h2 class="text-center m-3 text-2xl">Swoss</h2>
      <button class="button-swoss m-auto mt-6 text-center min-w-fit max-w-fit rounded-full p-2 border-2 border-blue-900 hover:bg-[#251E70] hover:text-white">
        <a href="/projets">VOIR PLUS</a>
      </button>
    </div>

    <div class="bg-[#0081ca] text-center mb-36">
      <h2 class="text-center m-5">Projets collectifs</h2>
      <div class="grid grid-cols-2 gap-5">
        <figure class="text-center ml-5 mr-5" v-for="projets in listeProjets" :key="projets.nom">
        <img :alt="projets.nom" :src="projets.image" />
        <figcaption class="text-center">{{ projets.nom }}</figcaption>
        </figure>
      </div>
      <button class="p-3 mt-5 mb-5 othertypo rounded-full border border-black text-black bg-transparent hover:bg-[#251E70] text-center hover:text-white transition duration-300 ease-in-out"><a href="/projets">VOIR PLUS</a></button>
    </div>
    <div class="bg-[#0081ca] text-center">
      <h2 class="text-center m-5">Projets personnels</h2>
      <div class="grid grid-cols-2 gap-5">
        <figure class="text-center ml-5 mr-5" v-for="travaux in listeTravaux" :key="travaux.nom">
        <img :alt="travaux.nom" :src="travaux.image" />
        <figcaption class="text-center">{{ travaux.nom }}</figcaption>
        </figure>
      </div>
      <button class="p-3 mt-5 mb-5 othertypo rounded-full border border-black text-black bg-transparent hover:bg-[#251E70] text-center hover:text-white transition duration-300 ease-in-out"><a href="/travaux">VOIR PLUS</a></button>
    </div>
   
  </section>
</template>

<style>
.othertypo {
  font-size: 1.5rem;
}

.swoss {
  text-shadow: 4px 4px 4px rgb(82, 5, 5);
  border: 2px solid #1bc1c1;
  border-radius: 9999px;
  position: relative;
  animation: border-pulse 2s infinite;
}

.swoss:hover {
  animation: none;
}
.swoss:active, .swoss:focus {
  animation: none;
}
.swoss-button {
  animation: border-pulse 2s infinite;
}
.swoss-button:hover {
  animation: none;
}

@keyframes border-pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(27, 193, 193, 0.4);
  }

  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(27, 193, 193, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(27, 193, 193, 0.4);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.7);
  }
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