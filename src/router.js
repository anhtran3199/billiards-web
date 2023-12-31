import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.use(Router)

const routes = [
  { path: '', component: Home },
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
];


const router = new Router({
  mode: 'history',
  routes,
});

// const router = new Router({
//   mode: 'history',
//   routes
// });

export default router