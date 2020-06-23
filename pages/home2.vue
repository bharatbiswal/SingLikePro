<template>
  <div>
    <!-- Navbar section start -->
      <!-- <Navbar /> -->
    <!-- Navbar section end -->
    <div class="main-container">
      <Banner />
    </div>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'

export default {
  components: {
    Banner,
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