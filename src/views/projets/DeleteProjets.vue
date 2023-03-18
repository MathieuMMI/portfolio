<template>
  <form enctype="multipart/form-data" @submit.prevent="deleteProjets">
    <h2 class="mb-5 text-center text-2xl text-black">Suppression du projets</h2>
    <img class="preview img-fluid m-auto" :src="imageActuelle" />
    <div class="text-center">
      <div class="input-group-prepend text-center">
        <span class="input-group-text mt-7 text-center">Nom</span>
      </div>
      <input class="form-control text-amber-600 text-center" placeholder={{projets.nom}} v-model="Projets.nom" disabled />
      <h3 class="alert alert-warning mt-7 text-center text-xl text-red-500" role="alert">
        Attention vous allez supprimer ce participant, cette action est irréversible !!
      </h3>
    </div>
    <div class="mt-7 grid text-center">
      <button type="submit" class="mb-4">Supprimer</button>
      <button class="mb-[40%]">
        <RouterLink to="/projets">Fermer</RouterLink>
      </button>
    </div>
  </form>
</template>
<script>
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Storage
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  uploadString,
  deleteObject,
  listAll,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "DeleteView",
  data() {
    return {
      Projets: {
        nom: null,
        image: null,
      },

      refProjets: null,
      ImageActuelle: null,
    };
  },
  mounted() {
    console.log("id projets", this.$route.params.id);
    this.getProjets(this.$route.params.id);
  },

  methods: {
    async getProjets(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "projets", id);
      this.refProjets = await getDoc(docRef);
      if (this.refProjets.exists()) {
        this.projets = this.refProjets.data();
        this.imageActuelle = this.projets.image;
      } else {
        this.console.log("Projets inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "projets/" + this.projets.image);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteProjets() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "projets", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "projets/" + this.projets.image);
      deleteObject(docRef);

      this.$router.push("/projets");
    },
  },
};
</script>