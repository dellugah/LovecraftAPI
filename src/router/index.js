import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Creatures from "@/components/Creatures.vue";
import Images from "@/components/Images.vue";
import Races from "@/components/Races.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path:'/creatures',
        name:'Creatures',
        component:Creatures,
    },
    {
        path:'/images',
        name:'Images',
        component:Images,
    },
    {
        path:'/races',
        name:'Races',
        component:Races,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router