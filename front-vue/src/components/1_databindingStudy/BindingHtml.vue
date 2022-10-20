<template>
    <div>{{ htmlString }}</div>
    <div v-html=htmlString></div>
</template>
<script>
export default { 
    components:{},
    data() {
        return{
            htmlString:'<p style="color:red;">빨간색 p태그 binding</p>'
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>