
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import("/src/components/Home.vue"),
    },
    {
        path: '/createalbum',
        name: 'createalbum',
        component: () => import("/src/components/CreateAlbum.vue"),
    },
    {
        path: "/view",
        name: "viewalbum",
        component: () => import("/src/components/ViewAlbum.vue"),
        props: true
    },
    {
        path: '/edit',
        name: 'editalbum',
        component: () => import("/src/components/EditAlbum.vue"),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router