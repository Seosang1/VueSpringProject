<template>
    <div class="align-center content">
        <select name="" id="" class="select-box" v-model="selectCity">
            <option value="">선택</option>
            <option value="01">서울</option>
            <option value="02">부산</option>
            <option value="03">대전</option>
            <option value="04">제주</option>
        </select>
    </div>
</template>
<script>

export default { 
    name:'',
    components:{},
    data() {
        return{
            selectCity: ''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>