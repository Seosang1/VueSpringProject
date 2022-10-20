<template>
    <div>
        <h1>
            DataBindingString Study <strong>{{userName}}!</strong>
        </h1>        
        <p>
            {{msg}}
        </p>
    </div>
</template>
<script>
export default{
    data() {
        return {
            userName: 'sangwon Seo',
            msg: 'Welcome VueSpringProject'
        }   
    }
}
</script>

<style scoped> /* scoped : 현재 화면 스타일만 변경 */
.test-red {
    color:red;
}
</style>
 