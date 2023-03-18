<template>
  <div class="container m-auto mb-[20%]">
    <form enctype="multipart/form-data" @submit.prevent="createProjets">
      <div class="card bg-dark">
        <h2 class="mt-10 mb-5 ml-2 text-center text-2xl text-black">Création projets</h2>

        <div class="text-center">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text text-xl">Nom</span>
            </div>
            <input class="form-control text-xl text-amber-600 text-center" placeholder="Nom du projets" v-model="projets.nom" required />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text text-xl">Photo</span>
            </div>
            <div class="custom-file">
              <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
            </div>
          </div>
        </div>
        <div class="grid text-center mt-7">
          <button type="submit" class="mb-2 text-xl">Créer</button>
          <button class="text-xl">
            <router-link to="/projets">Fermer</router-link>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getStorage,
  ref, 
  getDownloadURL, 
  uploadString, 
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateView",
  data() {
    return {
      imageData: null, 
      listeProjets: [], 
      projets: {
        nom: null, 
        image: null, 
      },
    };
  },
  mounted() {
    this.getProjets();
  },
  methods: {
    async getProjets() {
      const firestore = getFirestore();
      const dbProjets = collection(firestore, "projets");
      const q = query(dbProjets, orderBy("nom", "asc"));
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
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.projets.image = this.file.name;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    async createProjets() {
      const storage = getStorage();
      const refStorage = ref(storage, "projets/" + this.projets.image);
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {

        const db = getFirestore();
        const docRef = addDoc(collection(db, "projets"), this.projets);
      });
      this.$router.push("/projets");
    },
  },
};
</script>
