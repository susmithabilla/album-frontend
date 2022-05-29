import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import CreateAlbum from '/src/components/CreateAlbum.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/createalbum',
        name: 'Create',
        component: CreateAlbum,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router