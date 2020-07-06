<template>
  <div>
    <Navbar style="background-color:#000;" />
    <section class="client-section">
      <div class="section-title style-four">
        <h3>Follow Us</h3>
        <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour.</p>
      </div>

      <div class="follow-main-container container">
        <div class="row">
          <div class="col-12">
            <div class="follow-container">
              <div class="follow-grid-inner clear">
                <div class="follow-grid-item">
                  <div class="follow-grid-item-inner">
                    <a href="https://www.facebook.com/" target="_blank">
                      <span
                        class="follow-m-icon"
                        style="color: rgba(211, 29, 94, 0.37);"
                        data-hover-color="#F0D1CD"
                      >Fb</span>
                      <span class="follow-m-title">Facebook</span>
                    </a>
                  </div>
                </div>
                <div class="follow-grid-item">
                  <div class="follow-grid-item-inner">
                    <a href="https://www.instagram.com/" target="_blank">
                      <span
                        class="follow-m-icon"
                        style="color: rgba(211, 29, 94, 0.37);"
                        data-hover-color="#F0D1CD"
                      >In</span>
                      <span class="follow-m-title">Instagram</span>
                    </a>
                  </div>
                </div>
                <div class="follow-grid-item">
                  <div class="follow-grid-item-inner">
                    <a href="https://twitter.com/" target="_blank">
                      <span
                        class="follow-m-icon"
                        style="color: rgba(211, 29, 94, 0.37);"
                        data-hover-color="#F0D1CD"
                      >Tw</span>
                      <span class="follow-m-title">Twitter</span>
                    </a>
                  </div>
                </div>
                <div class="follow-grid-item">
                  <div class="follow-grid-item-inner">
                    <a href="https://www.youtube.com/" target="_blank">
                      <span
                        class="follow-m-icon"
                        style="color: rgba(211, 29, 94, 0.37);"
                        data-hover-color="#F0D1CD"
                      >Yt</span>
                      <span class="follow-m-title">Youtube</span>
                    </a>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>

        <div class="client-main-container">
            <div class="client-container container">
                <div class="client-section-title">
                    <h3>Artists Trust Us</h3>
                </div>
            <div class="row">
                <!-- <div class="col-12"> -->
                    <div class="col-lg-3 col-md-6 col-xs-12">
                        <div class="client-view">
                            <div class="client-photo"> 
                                <span>
                                    <img src=".././assets/images/clients/client1.jpg" class="image" alt="Lady Marta">
                                </span>
                                <h5 class="header">Lady Marta</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-12">
                        <div class="client-view">
                            <div class="client-photo"> 
                                <span>
                                    <img src=".././assets/images/clients/client2.jpg" class="image" alt="Kanny Rodman">
                                </span>
                                <h5 class="header">Kanny Rodman</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-12">
                        <div class="client-view">
                            <div class="client-photo"> 
                                <span>
                                    <img src=".././assets/images/clients/client3.jpg" class="image" alt="Moran T">
                                </span>
                                <h5 class="header">Moran T</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-12">
                        <div class="client-view">
                            <div class="client-photo"> 
                                <span>
                                    <img src=".././assets/images/clients/client4.jpg" class="image" alt="Matthaios Balfour">
                                </span>
                                <h5 class="header">Matthaios Balfour</h5>
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);
export default {
  data() {
    return {};
  },
  transition: "bounce",
  components: {
    Navbar
  }
};
</script>


<style scoped>
.client-section {
  padding: 9rem 0 0;
  position: relative;
}

.section-title {
  margin-bottom: 80px;
  padding: 60px 50px;
  background-color: #000;
  width: 100%;
  text-align: center;
}

.section-title h3 {
  font-family: "Satisfy", cursive;
  font-size: 40px;
  font-weight: 700;
  color: #d21c5e;
  margin-bottom: 20px;
  line-height: 40px;
  position: relative;
}

.section-title h3:before,
.section-title h3:after {
  position: absolute;
  content: "";
  bottom: 0;
  background: #d21c5e;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.section-title h3:before {
  width: 200px;
  height: 1px;
}

.section-title h3:after {
  height: 3px;
  bottom: -1px;
  width: 30px;
  left: 50%;
}

.section-title h3 span {
  color: #d21c5e;
}

.section-title p {
  /* font-family: "Satisfy", cursive; */
  color: #fff;
  font-size: 20px;
  line-height: 24px;
  padding: 0 20%;
}

.client-section-title {
  margin-bottom: 20px;
  padding: 10px 20px 30px;
  width: 100%;
  text-align: center;
}

.client-section-title h3 {
  font-family: "Satisfy", cursive;
  font-size: 40px;
  font-weight: 700;
  color: #d21c5e;
  margin-bottom: 20px;
  line-height: 40px;
  position: relative;
}

.client-section-title h3:before,
.client-section-title h3:after {
  position: absolute;
  content: "";
  bottom: 0;
  background: #d21c5e;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.client-section-title h3:before {
  width: 200px;
  height: 1px;
}

.client-section-title h3:after {
  height: 3px;
  bottom: -1px;
  width: 30px;
  left: 50%;
}

.section-title.style-four {
  width: 100%;
  text-align: center;
}

.follow-container {
  margin: 0px 0px 0px 0px;
  padding: 65px 15px 65px 15px;
  background-color: #ffffff;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 2px 2px 10px 6px rgba(111, 111, 111, 0.09);
  margin-top: -110px;
}
.follow-grid-inner{
    text-align: center;
}
.follow-grid-item {
    width: 22%;
    display: inline-block;
}
.follow-grid-item-inner {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: auto;
}
.follow-grid-item a {
    position: relative;
    display: block;
}
.follow-grid-item a:hover {
    text-decoration: none;
}
.follow-m-icon {
    position: relative;
    font-size: 110px;
    line-height: 1em;
    font-weight: 900;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: rgba(211, 29, 94, 0.37);
    -webkit-transition: .5s ease-out;
    -o-transition: .5s ease-out;
    transition: .5s ease-out;
}
.follow-m-title {
    position: absolute;
    display: block;
    width: 100%;
    margin: 0;
    top: calc(50% - 9px);
    font-size: 18px;
    color: #000;
    font-weight: 600;
}
.client-photo{
    position: relative;
    display: block;
    padding: 0 34px;
    right: -30px;
}
.client-photo:before {
    background-color: #282834;
    background-color: var(--black);
    filter: alpha(opacity=80);
    -webkit-opacity: .8;
    -moz-opacity: .8;
    opacity: .8;
    content: "";
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    zoom: 1;
    filter: alpha(opacity=0);
    -webkit-opacity: 0;
    -moz-opacity: 0;
    opacity: 0;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
}
.client-photo:before+div {
    z-index: 2;
    position: relative
}

.client-photo span {
    display: block;
    overflow: hidden
}

.client-photo span img {
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease
}

@media (min-width: 480px) and (max-width:767px) {
    .client-photo img {
        width:100%
    }
}

.client-photo .header {
    margin: 0;
    position: absolute;
    left: 24px;
    bottom: 0;
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    transform: rotate(-90deg);
    z-index: 5;
    color: #000;
    font-weight: 600;
    font-family: "Satisfy", cursive;
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
}

.client-view:hover .client-photo:before {
    zoom:1;
    filter: alpha(opacity=40);
    -webkit-opacity: .4;
    -moz-opacity: .4;
    opacity: .4;
}

.client-view:hover .client-photo span img {
    -webkit-transform: scale(1.1) rotate(5deg);
    -moz-transform: scale(1.1) rotate(5deg);
    -ms-transform: scale(1.1) rotate(5deg);
    -o-transform: scale(1.1) rotate(5deg);
    transform: scale(1.1) rotate(5deg);
    opacity: 0.4;
}



.client-view:hover .header {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
    left: 50px;
    bottom: 15px;
    color: #d21c5e;
}
.client-main-container{
    padding: 100px 0;
    
}

.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

@media (max-width:991px) {
    .follow-grid-item{
        width: 44%;
        display: inline-block;
        text-align: center;
        margin: 15px 0px;
    }
    .client-photo{
        margin: 20px 0;
    }
    
    .client-section {
        padding: 8rem 0 0;
        position: relative;
    }
    .section-title p{
        padding: 0 10%;
    }
}


@media (max-width:576px) {
    .client-photo{
        right: 0px;
    }
}



</style>