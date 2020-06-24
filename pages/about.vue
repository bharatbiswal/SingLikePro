<template>
  <div>
    <!-- Navbar section start -->
      <Navbar3 />
    <!-- Navbar section end -->
    <div class="main-container">
      <Banner />
    </div>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import Navbar3 from '~/components/Navbar3.vue'

export default {
  components: {
    Banner,
    Navbar3
  },
  data () {
    return {
    }
  },
  created() {
  },
  unmounted(){
  },

}
</script>

<style scoped>

div{
  /* font-family: 'Avenir Next'; */
}
.main-container {
  /* position: relative; */
  /* z-index: 1; */
  /* font-family: 'Sans', sans-serif; */
}


</style>