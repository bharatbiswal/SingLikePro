<template>
  <div>
    <!-- Navbar section start -->
      <!-- <Logo />  -->
    <!-- Navbar section end -->
    <div class="main-container">
      <Banner4 />
    </div>
  </div>
</template>

<script>
import Banner4 from '~/components/Banner4.vue'
// import  Logo from '~/components/Logo.vue'

export default {
  transition: 'bounce',
  components: {
    // Logo,
    Banner4,
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
	/* .page-enter-active {
		animation: acrossIn .45s ease-out both;
	} 
	
	.page-leave-active {
		animation: acrossOut .65s ease-in both;
  } 

  @keyframes acrossIn {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes acrossOut {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  } */

   .bounce-enter-active {
        animation: bounce-in .8s;
    }
    .bounce-leave-active {
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% { transform: scale(0) }
        50% { transform: scale(1.5) }
        100% { transform: scale(1) }
    }
    @keyframes bounce-out {
        0% { transform: scale(1) }
        50% { transform: scale(1.5) }
        100% { transform: scale(0) }
    }

</style>






