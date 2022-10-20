<template>
    <div class="content">
        <div class="align-center">
            <input type="checkbox" name="" id="html" value="HTML" v-model="favLang"/>
            <label for="html">&nbsp;&nbsp;HTML</label>
        </div>
        <div class="align-center">
            <input type="checkbox" name="" id="html" value="CSS" v-model="favLang"/>
            <label for="css">&nbsp;&nbsp;CSS</label>
        </div>
        <div class="align-center">
            <input type="checkbox" name="" id="js" value="JS"   v-model="favLang"/>
            <label for="js">&nbsp;&nbsp;JS</label>
        </div>
        <p>선택한 지역 : {{favLang}}</p>
    </div>
</template>
<script>

export default { 
    name:'',
    components:{},
    data() {
        return{
            favLang: []
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>