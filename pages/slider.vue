<template>
<div>
<Navbar3 />
  <section id="home" class="banner-section">
    <div class="banner-item bg-overlay">
      <header>
        <div id="carouselBannerIndicators" class="carousel slide" data-ride="carousel" data-pause="false">
          <ol class="carousel-indicators">
            <li data-target="#carouselBannerIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselBannerIndicators" data-slide-to="1"></li>
            <li data-target="#carouselBannerIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <!-- Slide One - Set the background image for this slide in the line below -->
            <div class="carousel-item active slider-item1">
              <div class="carousel-caption d-md-block">
                  <div class="banner-caption">
                      <!-- <div class="col-md-4 offset-md-4"> -->
                        <h1>FIND YOUR MUSIC THEME</h1>
                      <!-- </div> -->
                  </div>
              </div>
            </div>
            <!-- Slide Two - Set the background image for this slide in the line below -->
            <div class="carousel-item slider-item2">
              <div class="carousel-caption d-md-block">
                    <div class="banner-caption">
                        <h1>SET YOUR SELF FREE</h1>
                  </div>
              </div>
            </div>
            <!-- Slide Three - Set the background image for this slide in the line below -->
            <!-- <div class="carousel-item slider-item3">
              <div class="carousel-caption d-md-block">
                <div class="banner-texture">
                  <span class="banner-heading"></span>
                  <h1>If you can dream <br>it,<br><span>you can LIVE it</span></h1>
                  <div class="banner-btninfo">
                    <div class="ticket-btn text-center">
                      <md-button
                        class="md-raised md-primary ticket-btn-style"
                        @click="createEventButtonClick"
                      >Create Event</md-button>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
         
        </div>
      </header>
    </div>
  </section>
</div>
</template>

<style scoped>
.banner-section {
  padding: 0;
  /* font-family: 'Poppins', sans-serif; */
}
.bg-overlay {
  position: relative;
}

.bg-overlay .container {
  position: relative;
  z-index: 1;
}
.banner-item .carousel-item {
  height: 100vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.banner-item .carousel-caption {
  /* position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  padding-top: 0;
  padding-bottom: 0;
  color: #fff;
  text-align: center; */
}
.banner-item .carousel-indicators {
  z-index: 3;
}
.banner-item .slider-item1 {
  background-image: url(".././assets/images/bannerimg.jpg");
}
.banner-item .slider-item2 {
  background-image: url(".././assets/images/bannerimg2.jpg");
}

.banner-caption{
    text-align: center;
    color: #fff;
    max-width: 400px;
    z-index: 1;
    margin: auto;
    justify-content: center;
    margin-bottom: 50px;
}
.banner-heading {
  color: #fff;
  max-width: 460px;
  width: 100%;
  margin: 0 auto;
  font-size: 30px;
  /* line-height: 32px; */
  padding: 85px 60px 20px;
  border: 14px solid #fff;
  border-bottom: 0;
  line-height: 1em;
    letter-spacing: 1px;
}
.banner-caption  h1 {
  text-shadow: 1px 4px 4px #000;
  color: #fff;
  font-family: 'Monoton', cursive;
}
.banner-btninfo {
  max-width: 460px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0 45px;
  text-align: center;
  border: 14px solid #fff;
  border-top: 0;
}
.ticket-btn-style {
  background-color: transparent !important;
  color: #fff !important;
  width: 160px;
  font-size: 18px;
  vertical-align: middle;
  font-weight: 600;
  letter-spacing: 1px;
  height: 45px;
  border-radius: 50px;
  text-transform: capitalize;
  border: 2px solid #fff;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
   -6px -6px 12px 0 rgba(255, 255, 255, 0.3) !important;
}
.banner-caption h1{
    text-align: center;
    font-size: 100px;
    /* font-weight: 900; */
    line-height: 1.1em;
    letter-spacing: 1px;
}



@media (max-width: 576px) {
  
  .banner-heading {
    max-width: 360px;
    padding: 20px 40px 20px;
  }
  .banner-btninfo {
    max-width: 360px;
    padding: 30px 0 30px;
  }
  .ticket-btn-style{
    font-size: 16px;
    letter-spacing: 1.1px;
    height: 42px;
}
}
</style>

<script>
import Navbar3 from '~/components/Navbar3.vue';
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
// import "vue-material/dist/theme/default.css";

Vue.use(VueMaterial);
export default {
  data() {
    return {
      
    };
  },

  components: {
    Navbar3
  }
};
</script>
