import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewSteps from '@/views/ViewSteps.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
        path:'/',
        name:'notes',
        component: ViewNotes,
        },
        {
        path:'/steps',
        name:'steps',
        component: ViewSteps,
        },
    ]
});

createApp(App)
.use(router)
.mount('#app')
