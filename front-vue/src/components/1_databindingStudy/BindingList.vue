<template>
    <div class='content'>
        <div>
            <v-select
                label="Select"
                :items="cities"
                variant="solo"
            ></v-select>
            <br />
            <br />
            <select name="" id="" class="select-box">
                <option value="">선택</option>
                <option :value="city.code" :key="city.code" v-for="city in cities">
                    {{city.title}}
                </option>
            </select>
        </div>
        <div>
            <table>
                <thead>
                    <tr class="align-center">
                        <th>제품번호</th>
                        <th>제품이름</th>
                        <th>가격</th>
                        <th>수량</th>
                        <th>수량합계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="drink.id" v-for="drink in drinkList" class="align-center">
                        <td>{{drink.id}}</td>
                        <td>{{drink.name}}</td>
                        <td>{{drink.price}}</td>
                        <td class="select-box">
                            <input type="number" name="" id="" v-model="drink.qty" />
                        </td>
                        <td>{{drink.price * drink.qty}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

export default { 
    name:'',
    components:{},
    data() {
        return{
            cities: [
                {title: '서울', code: '02'},
                {title: '부산', code: '051'},
                {title: '제주', code: '064'}
            ],
            drinkList: [
                {
                    id: '1',
                    name: '콜라',
                    price: 700,
                    qty: 1
                },
                {
                    id: '2',
                    name: '오렌지쥬스',
                    price: 1000, 
                    qty: 3
                },
                {
                    id: '3',
                    name: '사이다',
                    price: 600,
                    qty: 5
                },
                {
                    id: '4',
                    name: '맥주',
                    price: 1200,
                    qty: 10
                },
                {
                    id: '5',
                    name: '커피',
                    price: 1100,
                    qty: 20
                },
            ]
            
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>