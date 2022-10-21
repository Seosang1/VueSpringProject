<template>
    <div class='content'>
        <div style="color:red; font-size:20px">스타일 바인딩 글씨색 red 폰트 20px</div>
        <div :style="style1">스타일 바인딩 글씨색 blue 폰트 30px</div>
        <v-btn variant="outlined" @click="style1.color = 'green'">초록색 변경</v-btn>
    </div>
</template>
<script>

export default { 
    name:'',
    components:{},
    data() {
        return{
            style1: {
                color: 'blue',
                fontSize: '30px'
            }
        };
    },
    setup(){},
    created(){},
    mounted(){}, 
    unmounted(){},
    methods:{}
}
</script>