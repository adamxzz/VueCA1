import Vue from "vue";
import Router from 'vue-router'
import Home from './pages/Home'
import Countries from './pages/Countries'
import About from './pages/About'
import Contact from './pages/Contact'


Vue.use(Router)

export default new Router ({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/countries',
            name: 'countries',
            component: Countries
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },        
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
    ]
})