<template>
    <!--Event click event -->
    <div class='content align-center'>
        <v-btn outlined @click="incCounter">Add 1 btn</v-btn>
        <br />
        <p>{{counter}}</p>
        
        <!-- Event change event-->
        <div class='align-center '>
            <select name="" id="" class="select-box" @change="changeCity" v-model="selectedCity">
                <option value="">도시선택</option>
                <option :value="city.cityCode" :key="city.cityCode" v-for="city in cityList">{{city.title}}</option>
            </select>
            <select name="" id="" class="select-box">
                <option value="">동 선택</option>
                <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in selectedDongList">{{dong.title}}</option>
            </select>
            <select name="" id="" class="select-box">
                <option value="">동 선택</option>
                <option :value="dong.dongCode" :key="dong.dongCode" v-for="dong in dongList.filter((dong) => dong.cityCode === this.selectedCity )">
                    {{dong.title}}
                </option>
            </select>
        </div>
    </div>
</template>
<script>

export default { 
    name:'',
    components:{},
    data() {
        return{
            selectedCity: '',
            cityList: [
                {cityCode:'01', title:'서울'},
                {cityCode:'02', title:'수원'},
                {cityCode:'03', title:'부산'},
            ],
            dongList: [
                {cityCode: '01', dongCode: '011', title:'서울 1동'},
                {cityCode: '01', dongCode: '012', title:'서울 2동'},
                {cityCode: '01', dongCode: '013', title:'서울 3동'},
                {cityCode: '02', dongCode: '021', title:'수원 1동'},
                {cityCode: '02', dongCode: '022', title:'수원 2동'},
                {cityCode: '02', dongCode: '023', title:'수원 3동'},
                {cityCode: '03', dongCode: '031', title:'부산 1동'},
                {cityCode: '03', dongCode: '032', title:'부산 2동'},
                {cityCode: '03', dongCode: '033', title:'부산 3동'},
            ],
            selectedDongList: []
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        incCounter() {
            this.counter += 1
        },
        changeCity() {  // 도시명을 셀렉트 하면 동 셀렉트박스가 코드에 맞게 변경됨.
            console.log(event.target.tagName)   // result : SELECT
            this.selectedDongList = this.dongList.filter(
                (dong) => dong.cityCode === this.selectedCity
            );
            console.log(this.selectedDongList);
            console.log(this.selectedCity);
         }
    }
}
</script>