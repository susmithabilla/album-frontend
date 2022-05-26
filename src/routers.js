import Home from './components/Home.vue'
import SignUp from './components/Sign-up.vue'
import addalbum from './components/add-album.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'Signup',
        component:SignUp,
        path:'/signup'
    },
    {
        name:'AddAlbum',
        component:addalbum,
        path:'/addalbum'
    }
];

const router= createRouter({
    history:createWebHistory(),
    routes
})

export default router;