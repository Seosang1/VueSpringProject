<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
      @click:row="rowClick"
    >
    </v-data-table>
    <v-row>
      <v-btn outlined color="blue" @click="writeClick" > 작성 </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BoardList',
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      console.log('fetch list')
      axios.get('http://localhost:3000/api/board/list')
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    writeClick() {
      this.$router.push('/writer')
    },
    rowClick(item) {
      this.$router.push('/view/' + item.seq)
    }
  },
  data () {
      return {
        headers: [
          {
            text: 'Number',
            align: 'left',
            sortable: false,
            value: 'number',
          },
          { text: 'Title', value: 'title' },
          { text: 'Reg Date', value: 'regDt' }
        ],
        desserts: [],
      }
    }
};
</script>