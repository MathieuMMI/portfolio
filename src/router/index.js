import { createRouter, createWebHistory } from 'vue-router'

import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import AccueilView from '../views/AccueilView.vue'
import CompteView from '../views/CompteView.vue'
import ProjetsView from '../views/projets/ProjetsView.vue'
import ProjetsDetails from '../views/projets/ProjetsDetails.vue'
import CreateProjets from '../views/projets/CreateProjets.vue'
import UpdateProjets from '../views/projets/UpdateProjets.vue'
import DeleteProjets from '../views/projets/DeleteProjets.vue'
import TravauxView from '../views/travaux/TravauxView.vue'
import TravauxDetails from '../views/travaux/TravauxDetails.vue'
import CreateTravaux from '../views/travaux/CreateTravaux.vue'
import UpdateTravaux from '../views/travaux/UpdateTravaux.vue'
import DeleteTravaux from '../views/travaux/DeleteTravaux.vue'
import ContactView from '../views/ContactView.vue'
import MentionsView from '../views/MentionsView.vue'
import Page404 from '../views/Page404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/compte', name: 'Compte', component: CompteView },
    { path: '/projets', name: 'Projets', component: ProjetsView, },
    { path: '/projetsdet:id', name: 'ProjetsDetails', component: ProjetsDetails },
    { path: '/createProjets', name: 'CreateProjets', component: CreateProjets, beforeEnter: guard },
    { path: '/updateProjets/:id', name: 'UpdateProjets', component: UpdateProjets, beforeEnter: guard },
    { path: '/deleteProjets/:id', name: 'DeleteProjets', component: DeleteProjets, beforeEnter: guard },
    { path: '/travaux', name: 'Travaux', component: TravauxView },
    { path: '/travauxdet:id', name: 'TravauxDetails', component: TravauxDetails },
    { path: '/createTravaux', name: 'CreateTravaux', component: CreateTravaux, beforeEnter: guard },
    { path: '/updateTravaux/:id', name: 'UpdateTravaux', component: UpdateTravaux, beforeEnter: guard },
    { path: '/deleteTravaux/:id', name: 'DeleteTravaux', component: DeleteTravaux, beforeEnter: guard },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/mentions', name: 'Mentions', component: MentionsView },
    { path: '/:pathMatch(.*)*', name: 'Page404', component: Page404 },
  ]
})

function guard(to, from, next) {
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('router OK => user ', user);
      const firestore = getFirestore();
      const dbUsers = collection(firestore, "users");
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        let isAdmin = userInfo[0].admin;
        if (isAdmin) {
          next(to.params.name);
          return;
        } else {
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "Accueil" });
          return;
        }
      })
    } else {
      console.log('router NOK => user ', user);
      next({ name: "Accueil" });
    }
  });
}

export default router
