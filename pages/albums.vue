<template>
<div>
<Navbar3  style="background-color:#000;"/>
    <section class="three-d-album">
			<div class="section-title style-four">
				<h3>Trending Albums</h3>
				<p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour.</p>
			</div>
			
			<div class="three-d-album-width container">
				<div class="row">

					<div class="threed-container-wrapper">
						<div class="threed-container-inner">
							<div class="single-3d empty-space">
							</div>
							<div class="single-3d">
								<a href="#"><img src=".././assets/images/albums/1.png" alt=""></a>
							</div>
							<div class="single-3d  empty-space">

							</div>
							<div class="single-3d">
								<a href="#"><img src=".././assets/images/albums/2.png" alt=""></a>
							</div>
							<div class="single-3d  empty-space">
							</div>
							<div class="single-3d">
								<a href="#"><img src=".././assets/images/albums/3.png" alt=""></a>
							</div>
							<div class="single-3d">
								<a href="#"><img src=".././assets/images/albums/4.png" alt=""></a>
							</div>
							<div class="single-3d">
								<a href="#"><img src=".././assets/images/albums/5.png" alt=""></a>
							</div>
							<div class="single-3d">
								<a href="#"><img src=".././assets/images/albums/6.png" alt=""></a>
							</div>
							<div class="single-3d">
								<a href="#"><img src=".././assets/images/albums/7.png" alt=""></a>
							</div>

							<div class="single-3d">
								<a href="#"><img src=".././assets/images/albums/8.png" alt=""></a>
							</div>
							<div class="single-3d">
								<a href="#"><img src=".././assets/images/albums/13.png" alt=""></a>
							</div>
							<div class="single-3d">
								<a href="#"><img src=".././assets/images/albums/10.png" alt=""></a>
							</div>
							<div class="single-3d  empty-space">
							</div>
							<div class="single-3d">
								<a href="#"><img src=".././assets/images/albums/11.png" alt=""></a>
							</div>
							<div class="single-3d  empty-space">
							</div>
							<div class="single-3d">
								<a href="#"><img src=".././assets/images/albums/12.png" alt=""></a>
							</div>

							<div class="single-3d  empty-space">
							</div>

						</div>
					</div>
				</div>

			</div>
			<!-- /.tim-container -->
		</section>
</div>
</template>

<script>
import Navbar3 from '~/components/Navbar3.vue';
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);
export default {
  data() {
    return {
      
    };
  },
transition: 'bounce',
  components: {
    Navbar3
  }
};
</script>


<style scoped>
.three-d-album {
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

.section-title h3:before, .section-title h3:after {
  position: absolute;
  content: '';
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
.single-3d {
  -webkit-box-flex: 0;
      -ms-flex: 0 0 16%;
          flex: 0 0 16%;
  max-width: 16%;
  padding: 15px;
}

.single-3d img {
  -webkit-box-shadow: 0px 36px 36.9px 1.1px rgba(0, 0, 0, 0.22), inset -0.5px -0.9px 0 0 rgba(255, 255, 255, 0.75);
          box-shadow: 0px 36px 36.9px 1.1px rgba(0, 0, 0, 0.22), inset -0.5px -0.9px 0 0 rgba(255, 255, 255, 0.75);
  -webkit-transition: all 0.8s cubic-bezier(0, 1.09, 1, 1);
  -o-transition: all 0.8s cubic-bezier(0, 1.09, 1, 1);
  transition: all 0.8s cubic-bezier(0, 1.09, 1, 1);
  z-index: 1;
  position: relative;
  max-width: 100%;
}


.threed-container-wrapper {
  -webkit-perspective: 2950px;
          perspective: 2950px;
}

.threed-container-inner {
  -webkit-transform: translate3d(-10%, -25%, 0) scale(1) rotateX(45deg) rotateY(-5deg) rotateZ(25deg);
          transform: translate3d(-10%, -25%, 0) scale(1) rotateX(45deg) rotateY(-5deg) rotateZ(25deg);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
}

.three-d-album-width {
  /* width: 122%; */
  max-width: 100%;
  margin-top: 200px;
}

.single-3d:hover img {
  -webkit-transform: scale(1.5);
      -ms-transform: scale(1.5);
          transform: scale(1.5);
  -webkit-box-shadow: 0px 36px 67.9px 2.1px rgba(0, 0, 0, 0.5), inset -0.5px -0.9px 0 0 rgba(255, 255, 255, 0.75);
          box-shadow: 0px 36px 67.9px 2.1px rgba(0, 0, 0, 0.5), inset -0.5px -0.9px 0 0 rgba(255, 255, 255, 0.75);
  -webkit-transition: all .6s ease-in-out;
  -o-transition: all .6s ease-in-out;
  transition: all .6s ease-in-out;
  position: relative;
  z-index: 5;
}

.three-d-album {
  /* background-image: url('.././assets/images/play_bg.png');
  background-position: left 100%;
  background-repeat: no-repeat;
  background-size: auto; */
}

.three-d-album .more-album {
  position: absolute;
  right: 350px;
  margin-top: 54px;
}

.three-d-album .more-album a {
  font-size: 14px;
  color: #959595;
  font-family: "Changa", sans-serif;
  font-weight: 500;
}

.three-d-album .more-album a:hover i {
  margin-left: 20px;
  -webkit-transition: all 0.8s cubic-bezier(0, 1.09, 1, 1);
  -o-transition: all 0.8s cubic-bezier(0, 1.09, 1, 1);
  transition: all 0.8s cubic-bezier(0, 1.09, 1, 1);
}

.three-d-album .more-album a i {
  color: #d21c5e;
  display: block;
  -webkit-transition: all 0.8s cubic-bezier(0, 1.09, 1, 1);
  -o-transition: all 0.8s cubic-bezier(0, 1.09, 1, 1);
  transition: all 0.8s cubic-bezier(0, 1.09, 1, 1);
  margin-left: 0;
}

@media (min-width: 992px) and (max-width: 1200px) {
  .single-3d {
    padding: 5px;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .threed-container-inner {
    -webkit-transform: translate3d(0, 0, 0) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            transform: translate3d(0, 0, 0) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  .single-3d {
    width: 20%;
    padding: 7px;
    -webkit-box-flex: 0;
        -ms-flex: 0 0 20%;
            flex: 0 0 20%;
    max-width: 20%;
  }
  .three-d-album-width {
    width: 100%;
    margin-top: 50px;
    padding: 0 21px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .single-3d.empty-space {
    display: none;
  }
  .three-d-album {
     padding: 8rem 0;
    /* padding-bottom: 180px; */
  }
}

@media (min-width: 576px) and (max-width: 776px) {
  .threed-container-inner {
    -webkit-transform: translate3d(0, 0, 0) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            transform: translate3d(0, 0, 0) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  .single-3d {
    width: 25%;
    padding: 7px;
    -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
            flex: 0 0 25%;
    max-width: 25%;
  }
  .three-d-album-width {
    width: 100%;
    /* margin-top: 154px; */
    padding: 0 15px;
  }
  .empty-space {
    display: none;
  }
  .banner-five .baneer-five-content h3 {
    font-size: 22px;
    margin-top: 53px;
  }
  .banner-five .baneer-five-content .tim-slide-btn {
    margin-top: 20px;
    padding: 12px 35px;
  }
  .three-d-album .more-album {
    margin-top: 0;
  }
  .section-title p{
    padding: 0;
  }
   .three-d-album {
     padding: 8rem 0;
    /* padding-bottom: 180px; */
  }
}

@media (min-width: 320px) and (max-width: 575px) {
  .threed-container-inner {
    -webkit-transform: translate3d(0, 0, 0) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            transform: translate3d(0, 0, 0) scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  .three-d-album-width {
    width: 100%;
    margin-top: 50px;
    padding: 0 15px;
  }
  .three-d-album {
    background-image: none;
    padding: 8rem 0;
  }
  .single-3d {
    -ms-flex: 0 0 46%;
    -webkit-box-flex: 0;
            flex: 0 0 46%;
    max-width: 46%;
    overflow: hidden;
    padding: 0;
    margin: 5px;
  }
  .empty-space {
    display: none;
  }
  .three-d-album-width {
    margin-top: 50px;
  }
  .three-d-album .more-album {
    left: 10px;
    margin-top: 0;
    right: 0;
  }
  .section-title p{
    padding: 0;
  }
}
.section-title.style-four {
  width: 100%;
  text-align: center;
}

.section-title.style-four h2 {
  color: #d21c5e;
  font-weight: 700;
}

.section-title.style-four h2::before {
  width: 70px;
  height: 1px;
  background: #d21c5e;
}

.section-title.style-four h2::after {
  background: #d21c5e;
}

.section-title.style-four p {
  /* padding: 0px 20px;
  font-size: 18px; */
}

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