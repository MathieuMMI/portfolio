<template>
    <section class="bg-gray-800 text-white p-8">
        <div class="container mx-auto flex flex-col items-center">
            <div class="mb-4">
                <h2 class="text-center text-2xl font-bold mb-2">Contactez-moi</h2>
                <form :action="mailToLink" method="post" enctype="text/plain" class="flex flex-col">
                    <label for="subject" class="sr-only">Objet</label>
                    <input v-model="subject" type="text" id="subject" placeholder="Objet de votre message"
                        class="py-2 px-4 mb-2 rounded-md text-gray-400" required />
                    <label for="message" class="sr-only">Message</label>
                    <textarea v-model="message" id="message" placeholder="Votre message"
                        class="py-2 px-4 mb-2 rounded-md text-gray-400" required></textarea>
                    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md">Envoyer</button>
                </form>
            </div>
            <div class="flex flex-col items-center">
                <router-link to="/mentions" class="mb-4">Mentions légales</router-link>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin />
                </a>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import Linkedin from '@/components/icons/Linkedin.vue';

const subject = ref('');
const message = ref('');

const mailToLink = computed(() => {
    const subjectLine = encodeURIComponent(subject.value);
    const bodyContent = encodeURIComponent(message.value);
    return `mailto:tets@gmail.com?subject=${subjectLine}&body=${bodyContent}`;
});
</script>