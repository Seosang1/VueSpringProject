<template>
    <div class="align-center content">
        <div>
            <input type="radio" name="" id="html" value="HTML" v-model="favLang"/>
            <label for="html">&nbsp;&nbsp;HTML</label>
        </div>
        <div>
            <input type="radio" name="" id="html" value="CSS" v-model="favLang"/>
            <label for="css">&nbsp;&nbsp;CSS</label>
        </div>
        <div>
            <input type="radio" name="" id="js" value="JS"   v-model="favLang"/>
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
            favLang: ''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}

</script>