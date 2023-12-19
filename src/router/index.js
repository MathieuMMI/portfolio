import { createRouter, createWebHistory } from 'vue-router'

import Accueil from '@/views/Accueil.vue'
import APropos from '@/views/APropos.vue'
import Contact from '@/views/Contact.vue'
import Etudes from '@/views/Etudes.vue'
import Mentions from '@/views/Mentions.vue'
import Projets from '@/views/Projets.vue'
/* Projets*/
import Swoss from '@/views/Projets/Swoss.vue'
import Argimes from '@/views/Projets/Argimes.vue'
import ChartJS from '@/views/Projets/ChartJS.vue'
import Firebase from '@/views/Projets/Firebase.vue'
import Prismic from '@/views/Projets/Prismic.vue'
import Supabase from '@/views/Projets/Supabase.vue'
import UC from '@/views/Projets/UC.vue'
import UE from '@/views/Projets/UE.vue'
import UCjeu from '@/views/Projets/UCjeu.vue'
import VR from '@/views/Projets/VR.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: Accueil},
    { path: '/APropos', name: 'APropos', component:  APropos},
    { path: '/Contact', name: 'Contact', component: Contact},
    { path: '/Etudes', name: 'Etudes', component:  Etudes},
    { path: '/Mentions', name: 'Mentions', component:  Mentions},
    { path: '/Projets', name: 'Projets', component:  Projets},
    /* Projets */
    { path: '/Swoss', name: 'Swoss', component:  Swoss},
    { path: '/Argimes', name: 'Argimes', component:  Argimes},
    { path: '/ChartJS', name: 'ChartJS', component:  ChartJS},
    { path: '/Firebase', name: 'Firebase', component:  Firebase},
    { path: '/Prismic', name: 'Prismic', component:  Prismic},
    { path: '/Supabase', name: 'Supabase', component:  Supabase},
    { path: '/UC', name: 'UC', component:  UC},
    { path: '/UE', name: 'UE', component:  UE},
    { path: '/UCjeu', name: 'UCjeu', component:  UCjeu},
    { path: '/VR', name: 'VR', component:  VR},
  ]
})

export default router
