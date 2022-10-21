<template>
    <div class='content'>
        <div :class="{'text_red':isTrue}">클래스 바인딩</div>
        <div :class="{'text_red':isFalse, 'class_active':isTrue}">클래스 바인딩</div>
        <div :class="class2">클래스 바인딩</div>
    </div>
</template>
<script>

export default { 
    name:'',
    components:{},
    data() {
        return{
            isTrue: true,
            isFalse: false,
            class2 : ['class_active', 'isFalse']
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>
<style scoped>
    .class_active {
        background-color: rgb(68, 141, 26);
        font-weight: bold;
    }
    .text_red {
        font-weight: bold;
        color:red;
    }
</style>