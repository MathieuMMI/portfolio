<template>
  <div class="mx-auto max-w-lg py-4">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="nom">
          Nom complet
        </label>
        <input
          class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nom"
          type="text"
          placeholder="Nom"
          v-model="contact.nom" required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="mail">
          Adresse email
        </label>
        <input
          class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="mail"
          type="email"
          placeholder="Adresse email"
          v-model="contact.mail" required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="tel">
          Numéro de téléphone
        </label>
        <input
          class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tel"
          type="tel"
          placeholder="Numéro de téléphone"
          v-model="contact.tel"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="objet">
          Objet
        </label>
        <input
          class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="objet"
          type="text"
          placeholder="Objet"
          v-model="contact.objet" required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
          Message
        </label>
        <textarea
          class="shadow appearance-none border border-black rounded w-full py-2 px-3 pb-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          type="text"
          placeholder="Message"
          v-model="contact.message" required
        ></textarea>
      </div>
      <div class="text-center">
        <button
          class="m-auto rounded-full border border-blue-800 text-blue-800 py-2 px-4 bg-transparent hover:bg-[#251E70] text-center hover:text-white transition duration-300 ease-in-out"
          type="button"
          @click="createContact">
          Envoyer
        </button>
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


export default {
  name: "CreateView",
  data() {
    return {
      listeContact: [], 
      contact: {
        nom: "",
        mail: "",
        tel: null,
        objet: "",
        message: "", 
      },
    };
  },
  mounted() {
    this.getContact();
  },
  methods: {
    async getContact() {
      const firestore = getFirestore();
      const dbContact = collection(firestore, "contact");
      const q = query(dbContact, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeContact = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },
    async createContact() {
      const db = getFirestore();
      const docRef = await addDoc(collection(db, "contact"), this.contact);
    },
  },
};
</script>

