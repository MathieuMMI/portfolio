<template>
  <div class="container m-auto mb-[20%]">
    <form enctype="multipart/form-data" @submit.prevent="createTravaux">
      <div class="card bg-dark">
        <h2 class="mt-10 mb-5 ml-2 text-center text-2xl text-black">Création travaux</h2>

        <div class="text-center">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text text-xl">Nom</span>
            </div>
            <input class="border border-black form-control text-xl text-center" placeholder="Nom du travaux" v-model="travaux.nom" required />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text text-xl">Photo</span>
            </div>
            <div class="custom-file">
              <input type="file" class="border border-black custom-file-input" ref="file" id="file" @change="previewImage" />
            </div>
          </div>
        </div>
        <div class="input-group text-center">
          <div class="input-group-prepend text-center">
            <p class="text-center text-xl">Lien</p>
          </div>
          <input class="border border-black form-control text-center" placeholder="Adresse du lien" v-model="travaux.lien" required />
        </div>
        <div class="input-group text-center">
          <div class="input-group-prepend text-center">
            <p class="text-center text-xl">Description</p>
          </div>
          <input class="border border-black form-control text-center pb-52" placeholder="Description" v-model="travaux.description" required />
        </div>
        <div class="grid text-center mt-7">
          <button type="submit" class="mb-2 text-xl">Créer</button>
          <button class="text-xl">
            <router-link to="/travaux">Fermer</router-link>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getFirestore, 
  collection, 
  doc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  onSnapshot, 
  query, 
  orderBy, 
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
      listeTravaux: [], 
      travaux: {
        nom: null, 
        image: null, 
      },
    };
  },
  mounted() {
    this.getTravaux();
  },
  methods: {
    async getTravaux() {
      const firestore = getFirestore();
      const dbTravaux = collection(firestore, "travaux");
      const q = query(dbTravaux, orderBy("nom", "asc"));
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
    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.travaux.image = this.file.name;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    async createTravaux() {
      const storage = getStorage();
      const refStorage = ref(storage, "travaux/" + this.travaux.image);
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {

        const db = getFirestore();
        const docRef = addDoc(collection(db, "travaux"), this.travaux);
      });
      this.$router.push("/travaux");
    },
  },
};
</script>
