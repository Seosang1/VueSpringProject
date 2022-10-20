import { createRouter, createWebHistory } from 'vue-router'
import Home      from '../components/Home.vue';

const routes = [
    { 
        path: '/',  
        component: Home 
    },
    { 
        path: '/boardList',
        name: 'boardList', 
        component: () =>
         import(
            /* webpackChunkName:"boardList", webpackPrefetch:true */ '../components/BoardList.vue'
         )
    },
    {
        path: '/dataBinding/string',
        name: 'BindingString', 
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/1_databindingStudy/BindingString.vue'
         )
    },
    {
        path: '/dataBinding/html',
        name: 'BindingHtml', 
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/1_databindingStudy/BindingHtml.vue'
         )
    },
    {
        path: '/dataBinding/input',
        name: 'BindingInput', 
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/1_databindingStudy/BindingInput.vue'
         )
    },
    {
        path: '/dataBinding/select',
        name: 'BindingSelect', 
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/1_databindingStudy/BindingSelect.vue'
         )
    },
    {
        path: '/dataBinding/checkbox',
        name: 'BindingCheckbox', 
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/1_databindingStudy/BindingCheckbox.vue'
         )
    },
    {
        path: '/dataBinding/radio',
        name: 'BindingRadio', 
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/1_databindingStudy/BindingRadio.vue'
         )
    },
    {
        path: '/dataBinding/attr',
        name: 'BindingAttr', 
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/1_databindingStudy/BindingAttribute.vue'
         )
    },
    {
        path: '/dataBinding/list',
        name: 'Bindinglist', 
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/1_databindingStudy/BindingList.vue'
         )
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
