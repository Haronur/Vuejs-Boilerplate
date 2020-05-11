import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import Student from '../components/Student.vue';
import Redirect from '../components/Redirect.vue';

Vue.use(Router);

const router = new Router({
	mode: 'history',
    routes: [
    { path: '/', component: Home },
    { path: '/about', component: About, name: 'about' },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/student/:id', component: Student, name: 'student' },
    { path: '/redirect', component: Redirect, name: 'redirect' },
    ]
});

export default router;

