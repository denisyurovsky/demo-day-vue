import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AsyncSetup from "./views/AsyncSetup.vue";
import KeepAliveDemo from "./views/KeepAliveDemo.vue";
import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
    {path: '/',
    name: 'root',
    component: App,
    children: [
        {
            path: '/asyncsetup',
            name: 'asyncsetup',
            component: () => import('./views/AsyncSetup.vue')
        },
        {
            path: '/keepalivedemo',
            name: 'keepalivedemo',
            component: KeepAliveDemo
        }
    ]
},
]


  

const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  const app = createApp(App);

  app.use(router)
app.mount('#app')
