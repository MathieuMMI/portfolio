<template>
  <form enctype="multipart/form-data" @submit.prevent="deleteTravaux">
    <h2 class="mb-5 text-center text-2xl text-black">Suppression du travaux</h2>
    <img class="preview img-fluid m-auto" :src="imageActuelle" />
    <div class="text-center">
      <div class="input-group-prepend text-center">
        <span class="input-group-text mt-7 text-center">Nom</span>
      </div>
      <input class="form-control text-amber-600 text-center" placeholder="Nom" v-model="Travaux.nom" disabled />
      <h3 class="alert alert-warning mt-7 text-center text-xl text-red-500" role="alert">
        Attention vous allez supprimer ce participant, cette action est irréversible !!
      </h3>
    </div>
    <div class="mt-7 grid text-center">
      <button type="submit" class="mb-4">Supprimer</button>
      <button class="mb-[40%]">
        <RouterLink to="/travaux">Fermer</RouterLink>
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
      Travaux: {
        nom: null,
        image: null,
      },

      refTravaux: null,
      ImageActuelle: null,
    };
  },
  mounted() {
    console.log("id travaux", this.$route.params.id);
    this.getTravaux(this.$route.params.id);
  },

  methods: {
    async getTravaux(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "travaux", id);
      this.refTravaux = await getDoc(docRef);
      if (this.refTravaux.exists()) {
        this.travaux = this.refTravaux.data();
        this.imageActuelle = this.travaux.image;
      } else {
        this.console.log("Travaux inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(storage, "travaux/" + this.travaux.image);
      getDownloadURL(spaceRef)
        .then((url) => {
          this.imageActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteTravaux() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "travaux", this.$route.params.id));
      const storage = getStorage();
      let docRef = ref(storage, "travaux/" + this.travaux.image);
      deleteObject(docRef);

      this.$router.push("/travaux");
    },
  },
};
</script>