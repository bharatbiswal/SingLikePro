<template>
  <div>
    <!-- Navbar section start -->
      <!-- <Logo /> -->
    <!-- Navbar section end -->
    <div class="main-container">
      <Banner3 />
    </div>
  </div>
</template>

<script>
import Banner3 from '~/components/Banner3.vue'
// import  Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo,
    Banner3,
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



