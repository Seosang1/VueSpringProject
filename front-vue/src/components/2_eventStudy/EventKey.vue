<template>
    <div class='content'>
        <!-- <v-text-field type="search" name="" id="" @keyup="chkEnter($event)" v-model="schWord" /> -->
        <v-text-field type="search" name="" id="" @keyup.enter="fnSearch" v-model="schWord" />
        <v-btn outlined color="blue" @click="fnSearch">조회</v-btn>
        <v-btn type="submit" @click.prevent="fnSearch" color="blue" @click="fnSearch">조회</v-btn> <!--event.preventDefault();-->
    </div>
</template>
<script>

export default { 
    name:'',
    components:{},
    data() {
        return{
            schWord:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        fnSearch() {
            console.log("검색어 : ",this.schWord);
        },
        chkEnter(event) {
            if(event.keyCode === 13) {
                this.fnSearch()
            }
        }
     }
}
</script>