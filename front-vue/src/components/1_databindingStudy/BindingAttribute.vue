<template>
    <div class='content align-center'>
        <input type="text" name="" id="" class="input_userId" v-bind:value="userId" readonly /> <br />
        <input type="text" name="" id="" class="input_userId" :value="userId" readonly /> <!-- v-bind 생략가능-->
        <br />
        <br />
        <img :src="imgSrc" alt="" style="width:200px; height:auto;">
        <br />
        <br />
        <v-text-field variant="outlined" type="search" name="" id="" v-model="schWord" />
        <v-btn variant="outlined" :disabled="schWord === ''" @click="fnSearch">조회</v-btn>
    </div>
</template>
<script>

export default { 
    name:'',
    components:{},
    data() {
        return{
            userId:'seo sangwon',
            imgSrc: 'http://cdn.edujin.co.kr/news/photo/202105/35768_68227_247.jpg',
            schWord: ''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        fnSearch() {
            alert(this.schWord);
        }
    }
}
</script>

<style scoped>
    .input_userId {
        width: 200px;
        border: 2px black solid ;
    }
</style>