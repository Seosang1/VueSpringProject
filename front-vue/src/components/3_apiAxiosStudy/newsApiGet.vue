<template>
    <div class='content'>
        <div v-for="user in users" :key="user.id">{{user.title}}</div>
    </div>
</template>
<script>
import { fetchNewsList } from '../api/index.js';

export default { 
    name:'',
    components:{},
    data() {
        return{
            users: []
        };
    },
    setup(){},
    created(){
        var vm = this;
        axios.get('https://api.hnpwa.com/v0/news/1.json')
        .then(function(response) {
            console.log('response >>>', response);
            vm.users = response.data;
        })
        .catch(function(error) {
            alert("api 호출 실패" + error);
        });
    },
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>