import { createRouter, createWebHashHistory } from 'vue-router'

import ViewNotes from '@/views/ViewNotes.vue'
import ViewSteps from '@/views/ViewSteps.vue'

export const router = createRouter({
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