<template>
  <form enctype="multipart/form-data" @submit.prevent="updateTravaux">
    <h2 class="mb-5 ml-2 mt-10 text-center text-2xl text-black">Mise à jour travaux</h2>
    <div class="input-group text-center">
      <div class="input-group-prepend text-center">
        <p class="text-center text-xl">Nom</p>
      </div>
      <input class="form-control text-amber-600 text-center" placeholder="Nom du travaux" v-model="travaux.nom" required />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <figure v-for="travaux in listeTravaux" :key="travaux.nom" class="flex flex-col">
          <img :alt="travaux.nom" :src="travaux.image" class="w-full rounded-tl-3xl rounded-tr-3xl dark:bg-zinc-900" />
        </figure>
      <p class="text-center text-xl">Image</p>
      </div>
      <div class="custom-file text-center">
        <input type="file" class="custom-file-input" ref="file" id="file" @change="previewImage" />
      </div>
    </div>
    <div class="mt-10 grid text-center">
      <button type="submit" class="">Modifier</button>
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
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "UpdateView",
  data() {
    return {
      imageData: null,
      listeTravaux: [],
      travaux: {
        nom: null,
        image: null,
      },

      refTravaux: null,
      imgModifiee: false,
      imageActuelle: null,
    };
  },
  mounted() {
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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.travaux.image = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async updateTravaux() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "travaux/" + this.imageActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "travaux/" + this.travaux.image);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.travaux.image);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "travaux", this.$route.params.id), this.travaux);
      this.$router.push("/travaux");
    },
  },
};
</script>