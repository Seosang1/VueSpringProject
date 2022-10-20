<template>
    <div>
        <input type="text" v-model="userId"/>
        <button class="btn_click" @click="exFunction">클릭</button>&nbsp;
        <button class="btn_chg" @click="changeData">변경</button>
        <br />
        <input type="text" v-model="num1" /> +
        <input type="text" v-model="num2" /> =
        <span>{{num1+num2}}</span>
        <br />
        <input type="text" v-model.number="num3" /> +
        <input type="text" v-model.number="num4" /> =
        <span>{{num3+num4}}</span>
    </div>
</template>
<script>

export default { 
    name:'',
    components:{},
    data() {
        return{
          userId:'sangwon_seo',
          num1: 0,
          num2: 0,
          num3: 0,
          num4: 0,
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        exFunction() {
            console.log("userId :"+this.userId);
        },
        changeData() {
            this.userId = 'Alice';
        }
    }
}
</script>

<style scoped>
    .btn_click {
        color:blue;
    }
    .btn_chg {
        color:red;
    }
</style>