import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue'; 

Vue.use(Router);

const router = new Router({
    routes: [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    ]
});

export default router;

