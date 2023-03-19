<template>
  <div class="container mx-auto mt-5 max-w-lg py-4">
    <div v-if="loggedIn" class="text-center">
      <h2><button @click="onDcnx" type="submit" class="m-auto rounded-full border border-blue-800 text-blue-800 py-2 px-4 bg-transparent hover:bg-[#251E70] text-center hover:text-white transition duration-300 ease-in-out">Se déconnecter</button></h2>
    </div>

    <div v-else class="text-center">
      <form @submit.prevent="onCnx">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">Adresse email :</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Adresse mail" type="email" v-model="user.email" required />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="password">Mot de passe :</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Mot de passe" :type="type" v-model="user.password" required />
        </div>

        <div class="alert alert-warning mb-4" role="alert" v-if="message">
          {{ message }}
        </div>
        <h2><button type="submit" class="m-auto rounded-full border border-blue-800 text-blue-800 py-2 px-4 bg-transparent hover:bg-[#251E70] text-center hover:text-white transition duration-300 ease-in-out">Se connecter</button></h2>
      </form>
    </div>
  </div>
</template>


<script>
import {
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from '../main.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

export default {
  name: "MonCompte",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      message: null, 
      view: false, 
      type: "password", 
      imageData: null, 
      loggedIn: false,
    };
  },
  mounted() {
    this.message = "User non connecté";
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.loggedIn = user !== null;
    });
  },
  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          emitter.emit("connectUser", { user: this.user });
          console.log("user", this.user);
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    onDcnx() {
      signOut(getAuth())
        .then((response) => {
          this.message = "User non connecté";
          this.user = {
            email: null,
            password: null,
          };
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur deconnexion ", error);
        });
    },

    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
};
</script>
