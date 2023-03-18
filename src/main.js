import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import mitt from 'mitt'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
apiKey: "AIzaSyDKF_iz2AmBo8WjRCFyjcxReqWhHs6VVH0",
authDomain: "portfoliomb-256e9.firebaseapp.com",
projectId: "portfoliomb-256e9",
storageBucket: "portfoliomb-256e9.appspot.com",
messagingSenderId: "171312260850",
appId: "1:171312260850:web:824ca98cc2b79203afd26b"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

export const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')