<template>
  <!--Service Wrapper Start-->
  <div>
    <Navbar3 style="background-color:#000;" />
    <section class="service-section" id="service">
      <div class="section-title style-four text-center">
        <h3>What We Do</h3>
        <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered</p>
      </div>
      
	  	<div class="top-content">
		  <div class="container">
        		<div id="carousel-example" class="carousel slide" data-ride="carousel">
        			<div class="carousel-inner row w-100 mx-auto" role="listbox">
            			<div class="carousel-item active">
							<div class="row">
								<div class="col-12 col-md-6 col-lg-6">
									<div class="service-view text-center">
										<div class="serv-image-view">
											<img src=".././assets/images/service/serv1.jpg" />
										</div>
										<div class="serv-content-view">
											<div class="description">
											<h5>Voice Recording</h5>
											<p>
												Curabitur fermentum vitae eros eu porta. Curabitur et risus egestas,
												vulputate lacus eget.
											</p>
											<md-button class="md-raised md-accent read-btn">Read More</md-button>
											</div>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-6">
									 <div class="service-view text-center">
										<div class="serv-image-view">
											<img src=".././assets/images/service/serv2.jpg" />
										</div>
										<div class="serv-content-view">
											<div class="description">
											<h5>Sound Mixing</h5>
											<p>
												Curabitur fermentum vitae eros eu porta. Curabitur et risus egestas,
												vulputate lacus eget.
											</p>
											<md-button class="md-raised md-accent read-btn">Read More</md-button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					
						<div class="carousel-item">
							<div class="row">
								<div class="col-12 col-md-6 col-lg-6">
									<div class="service-view text-center">
										<div class="serv-image-view">
											<img src=".././assets/images/service/serv3.jpg" />
										</div>
										<div class="serv-content-view">
											<div class="description">
											<h5>Track Mastering</h5>
											<p>
												Curabitur fermentum vitae eros eu porta. Curabitur et risus egestas,
												vulputate lacus eget.
											</p>
											<md-button class="md-raised md-accent read-btn">Read More</md-button>
											</div>
										</div>
									</div>
								</div>
								<div class="col-12 col-md-6 col-lg-6">
									 <div class="service-view text-center">
										<div class="serv-image-view">
											<img src=".././assets/images/service/serv4.jpg" />
										</div>
										<div class="serv-content-view">
											<div class="description">
											<h5>Audio Matching</h5>
											<p>
												Curabitur fermentum vitae eros eu porta. Curabitur et risus egestas,
												vulputate lacus eget.
											</p>
											<md-button class="md-raised md-accent read-btn">Read More</md-button>
											</div>
										</div>
									</div>
								</div>
							</div>						
						</div>
						
        			</div>
        			<a class="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
        		</div>
        	</div>
    	</div>
    </section>
  </div>
  <!--Service Wrapper End-->
</template>
<script>
import Navbar3 from "~/components/Navbar3.vue";
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);
export default {
  data() {
    return {};
  },
//   head() {
//     return {
//       script:[
//           {
//             type: "module",
//             src: "slide.js"
//           }
        
//       ]
//     };
//   },
  transition: "slide",
  components: {
    Navbar3
  }
};
</script>


<style scoped>
.service-section {
  background-color: #f0f0f3;
  padding: 150px 0;
  position: relative;
}

.section-title {
  margin-bottom: 80px;
  padding: 60px 0;
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
}

.service-view {
  background-color: #fff;
  z-index: 1;
  position: relative;
}
.serv-content-view .description {
  padding: 50px 60px;
}
.serv-content-view .read-btn {
  font-size: 12px;
  padding: 7px 30px;
  line-height: 1.6em;
  min-width: 125px;
  border-radius: 50px;
  background-color: #d21c5e !important;
  color: #fff !important;
}
.serv-content-view .description p {
  font-size: 16px;
  margin-bottom: 30px;
}
.serv-content-view .description h5 {
  	font-weight: 600;
    /* text-transform: uppercase; */
    font-size: 1.5rem;
    font-family: "Satisfy", cursive;
}
.left-arrow-style {
  position: absolute;
  left: 40px;
  top: 20px;
  z-index: 9;
}
.left-arrow-style .fa {
  color: #000;
  font-size: 30px;
  padding: 0px 20px;
  border: 1px solid #000;
  border-radius: 50px;
  margin-right: 10px;
}
.left-arrow-style a {
  display: flex;
  /* vertical-align: middle; */
  font-size: 14px;
  align-items: center;
  color: #000 !important;
}
.left-arrow-style a:hover {
  text-decoration: none;
}

.slide-enter-active {
    animation: slideInUp .45s ease-out both;
  } 
  
  .slide-leave-active {
    animation: slideInDown .65s ease-in both;
  } 
  
  @keyframes slideInUp {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes slideInDown {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 100%, 0);
    }
  }

.carousel-control-prev{
	left: -30px;
    width: 50px;
    top: 50%;
    /* bottom: 0; */
    opacity: 1;
    height: 50px;
    background-color: #d21c5e;
    border-radius: 50px;
}

.carousel-control-next{
	right: -30px;
    width: 50px;
    top: 50%;
    /* bottom: 0; */
    opacity: 1;
    height: 50px;
    background-color: #d21c5e;
    border-radius: 50px;
}

/*
    code by Iatek LLC 2018 - CC 2.0 License - Attribution required
    code customized by Azmind.com
*/
@media (min-width: 768px) and (max-width: 991px) {
    /* Show 4th slide on md if col-md-4*/
    .carousel-inner .active.col-md-6.carousel-item + .carousel-item + .carousel-item + .carousel-item {
        position: absolute;
        top: 0;
        right: -33.3333%;  /*change this with javascript in the future*/
        z-index: -1;
        display: block;
        visibility: visible;
    }
}
@media (min-width: 576px) and (max-width: 768px) {
    /* Show 3rd slide on sm if col-sm-6*/
    .carousel-inner .active.col-sm-6.carousel-item + .carousel-item + .carousel-item {
        position: absolute;
        top: 0;
        right: -50%;  /*change this with javascript in the future*/
        z-index: -1;
        display: block;
        visibility: visible;
    }
}
@media (max-width: 576px) {
    /* Show 3rd slide on sm if col-sm-6*/
    .carousel-inner .active.col-sm-6.carousel-item + .carousel-item + .carousel-item {
        position: absolute;
        top: 0;
        right: -50%;  /*change this with javascript in the future*/
        z-index: -1;
        display: block;
        visibility: visible;
    }
}


</style>