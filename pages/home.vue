<template>
  <div>
    <!-- Navbar section start -->
      <Navbar2 />
    <!-- Navbar section end -->
    <div class="main-container">
      <Banner2 />
    </div>
  </div>
</template>

<script>
import Banner2 from '~/components/Banner2.vue'
import Navbar2 from '~/components/Navbar2.vue'

export default {
  components: {
    Navbar2,
    Banner2,
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


