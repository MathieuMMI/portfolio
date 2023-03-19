<template>
  <div class="ml-10 mr-10 text-center" v-if="projets">
    <h2 class="mt-5 mb-7 text-center font-semibold">{{ projets.nom }}</h2>
    <img class="w-full" :src="imageURL" :alt="projets.nom" />
    <p class="lien text-center mb-5"><a class="underline text-blue-600" v-bind:href="projets.lien">{{ projets.lien }}</a></p>
    <p class="lien text-center mb-5"><a class="underline text-blue-600" v-bind:href="projets.lien2">{{ projets.lien2 }}</a></p>
    <p class="text-center">{{ projets.description }}</p>
  </div>
  <p v-else class="text-center">Chargement...</p>
</template>

  <script>
  import { getFirestore, collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
  import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";
  
  export default {
    data() {
      return {
        projets: null,
        imageURL: "",
      };
    },
  
    async mounted() {
      const id = this.$route.params.id;
      const docRef = doc(collection(getFirestore(), "projets"), id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.projets = docSnap.data();
        const storage = getStorage();
        const spaceRef = ref(storage, "projets/" + this.projets.image);
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
  