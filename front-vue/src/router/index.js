import { createRouter, createWebHistory } from 'vue-router'
import Home      from '../components/Home.vue';
import BoardList from '../components/BoardList.vue' 

const routes = [
    { path: '/',  component: Home },
    { path: '/boardList', component: BoardList },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
