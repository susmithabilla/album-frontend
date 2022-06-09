
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
        path: "/view/:id",
        name: "viewalbum",
        component: () => import("/src/components/ViewAlbum.vue"),
        props: true
    },
    {
        path: "/edit/:id",
        name: 'editalbum',
        component: () => import("/src/components/EditAlbum.vue"),
        props: true
    },
    {
        path: "/tracks",
        name: 'track',
        component: () => import("/src/components/Track.vue"),
        props: true
    },
    {
        path: '/createtrack',
        name: 'createtrack',
        component: () => import("/src/components/CreateTracks.vue"),
    },
    
    {
        path: "/edit/:id",
        name: 'edittrack',
        component: () => import("/src/components/EditTrack.vue"),
        props: true
    },
    {
        path: "/artists",
        name: 'artist',
        component: () => import("/src/components/Artist.vue"),
        props: true
    },
    {
        path: "/createartist",
        name: 'createartist',
        component: () => import("/src/components/CreateArtist.vue"),
        props: true
    },
    {
        path: "/editartist/:id",
        name: 'editartist',
        component: () => import("/src/components/EditArtist.vue"),
        props: true
    },
    {
        path: "/viewartist/:id",
        name: "viewartist",
        component: () => import("/src/components/ViewArtist.vue"),
        props: true
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router