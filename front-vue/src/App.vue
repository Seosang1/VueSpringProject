<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
// 네비게이션 가져오기
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>