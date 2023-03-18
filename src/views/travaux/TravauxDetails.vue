<template>
    <div class="ml-10 mr-10" v-if="travaux">
      <h2 class="mt-5 mb-7 text-center font-semibold">{{ travaux.nom }}</h2>
      <img class="w-full" :src="imageURL" :alt="travaux.nom" />
      <p class="text-center">{{ travaux.description }}</p>
    </div>
    <p v-else class="text-center">Chargement...</p>
  </template>
  
  <script>
  import { getFirestore, collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
  import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
  
  export default {
    data() {
      return {
        travaux: null,
        imageURL: "",
      };
    },
  
    async mounted() {
      const id = this.$route.params.id;
      const docRef = doc(collection(getFirestore(), "travaux"), id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.travaux = docSnap.data();
        const storage = getStorage();
        const spaceRef = ref(storage, "travaux/" + this.travaux.image);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.imageURL = url;
          })
          .catch((error) => {
            console.log("Erreur lors de la récupération de l'URL de l'image:", error);
          });
      } else {
        console.log("Le document n'existe pas !");
      }
    },
  };
  </script>
  