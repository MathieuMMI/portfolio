<template>
  <form enctype="multipart/form-data" @submit.prevent="updateProjets">
    <h2 class="mb-5 ml-2 mt-10 text-center text-2xl text-black">Mise à jour projets</h2>
    <div class="input-group text-center">
      <div class="input-group-prepend text-center">
        <p class="text-center text-xl">Nom</p>
      </div>
      <input class="border border-black form-control text-center" placeholder="Nom du projets" v-model="projets.nom" required />
    </div>
    <div class="input-group">
      <div class="input-group-prepend">
        <figure v-for="projets in listeProjets" :key="projets.nom" class="border border-black flex flex-col">
          <img :alt="projets.nom" :src="projets.image" class="w-full rounded-tl-3xl rounded-tr-3xl dark:bg-zinc-900" />
        </figure>
      <p class="text-center text-xl">Image</p>
      </div>
      <div class="custom-file text-center">
        <input type="file" class="border border-black custom-file-input" ref="file" id="file" @change="previewImage" />
      </div>
    </div>
    <div class="input-group text-center">
      <div class="input-group-prepend text-center">
        <p class="text-center text-xl">Lien</p>
      </div>
      <input class="border border-black form-control text-center" placeholder="Adresse du lien" v-model="projets.lien" required />
    </div>
    <div class="input-group text-center">
      <div class="input-group-prepend text-center">
        <p class="text-center text-xl">Description</p>
      </div>
      <input class="border border-black form-control text-center pb-52" placeholder="Description" v-model="projets.description" required />
    </div>
    <div class="mt-10 grid text-center">
      <button type="submit" class="">Modifier</button>
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
      listeProjets: [],
      projets: {
        nom: null,
        image: null,
      },

      refProjets: null,
      imgModifiee: false,
      imageActuelle: null,
    };
  },
  mounted() {
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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.projets.image = this.file.name;
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

    async updateProjets() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "projets/" + this.imageActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "projets/" + this.projets.image);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.projets.image);
        });
      }
      const firestore = getFirestore();
      await updateDoc(doc(firestore, "projets", this.$route.params.id), this.projets);
      this.$router.push("/projets");
    },
  },
};
</script>