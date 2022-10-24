import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';

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
    },
    {
        path: '/dataBinding/class',
        name: 'BindingClass', 
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/1_databindingStudy/BindingClass.vue'
         )
    },
    {
        path: '/dataBinding/style',
        name: 'BindingStyle',
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/1_databindingStudy/BindingStyle.vue'
         )
    },
    {
        path: '/event/click',
        name: 'EventClick',
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/2_eventStudy/EventClick.vue'
         )
    },
    {
        path: '/event/key',
        name: 'EventKey',
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/2_eventStudy/EventKey.vue'
         )
    },
    {
        path: '/axios/news',
        name: 'AxiosNews',
        component: () =>
         import(
            /* webpackChunkName:"dataBinding", webpackPrefetch:true*/ '../components/3_apiAxiosStudy/newsApiGet.vue'
         )
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
