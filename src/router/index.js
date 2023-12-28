import { createRouter, createWebHistory } from 'vue-router'

import Accueil from '@/views/Accueil.vue'
import APropos from '@/views/APropos.vue'
import Etudes from '@/views/Etudes.vue'
import Mentions from '@/views/Mentions.vue'
import Projets from '@/views/Projets.vue'
/* Projets*/
import Swoss from '@/views/Projets/Swoss.vue'
import Argimes from '@/views/Projets/Argimes.vue'
import ChartJS from '@/views/Projets/ChartJS.vue'
import Firebase from '@/views/Projets/Firebase.vue'
import Supabase from '@/views/Projets/Supabase.vue'
import PrismicProj from '@/views/Projets/Project-Prismic.vue'
import UC from '@/views/Projets/UC.vue'
import UCjeu from '@/views/Projets/UCjeu.vue'
import VirtualReality from '@/views/Projets/VirtualReality.vue'
/*404*/
import Page404 from '@/views/Page404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: Accueil},
    { path: '/APropos', name: 'APropos', component:  APropos},
    { path: '/Etudes', name: 'Etudes', component:  Etudes},
    { path: '/Mentions', name: 'Mentions', component:  Mentions},
    { path: '/Projets', name: 'Projets', component:  Projets},
    /* Projets */
    { path: '/Swoss', name: 'Swoss', component:  Swoss},
    { path: '/Argimes', name: 'Argimes', component:  Argimes},
    { path: '/ChartJS', name: 'ChartJS', component:  ChartJS},
    { path: '/Firebase', name: 'Firebase', component:  Firebase},
    { path: '/Prismic', name: 'PrismicProj', component:  PrismicProj},
    { path: '/Supabase', name: 'Supabase', component:  Supabase},
    { path: '/UC', name: 'UC', component:  UC},
    { path: '/UCjeu', name: 'UCjeu', component:  UCjeu},
    { path: '/VirtualReality', name: 'VirtualReality', component:  VirtualReality},
    /*404*/
    { path: '/:pathMatch(.*)*', name: 'Page404', component: Page404 },
  ]
})

export default router
