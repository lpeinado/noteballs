import { createRouter, createWebHashHistory } from 'vue-router'

import ViewNotes from '@/views/ViewNotes.vue'
import ViewSteps from '@/views/ViewSteps.vue'

const routes = [
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
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});