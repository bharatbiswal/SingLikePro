<template>
<div>
<Navbar3 />
  <section id="home" class="banner-section">
	  <div class="banner-section-style">
		  <img src="../assets/images/quote.png" class="quote-img" alt="img">
   <div class="container">
	   <div class="row">
		   <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-col">
				<div id="carouselExampleIndicators" class="about-carousel carousel slide" data-ride="carousel">
				<!-- <ol class="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				</ol> -->
				<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span class="material-icons">
keyboard_arrow_left
</span>
					<span class="sr-only">Previous</span>
				</a>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<div class="text-block white">
							<h2>Lorem Ipsum is that it has a more-or-less</h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority 
								have suffered alteration in some form, by injected humour.</p>
						</div>
					</div>
					<div class="carousel-item">
						<div class="text-block white">
							<h2>Lorem Ipsum is a more-or-less</h2>
							<p>There are many variations of passages of Lorem Ipsum available, but the majority 
								have suffered alteration in some form, by injected humour.</p>
						</div>
					</div>
				</div>
				
				<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span class="material-icons">
keyboard_arrow_right
</span>
					<span class="sr-only">Next</span>
				</a>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
				<svg width="506" height="506" class="about-svg" viewBox="0 0 506 506" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="506" height="506">
						<path d="M73.6543 431.394C60.6565 397.967 64.0607 361.134 73.9638 327.707C85.1048 290.256 103.983 254.971 118.218 218.758C134.93 176.973 135.858 134.26 129.359 89.6901C124.408 52.8578 127.812 12.9304 173.304 2.40692C197.443 -3.16435 223.129 1.78789 247.268 8.59721C348.156 37.0726 481.539 91.5472 503.202 199.258C527.959 321.207 383.126 439.132 278.525 486.488C205.489 519.296 106.768 516.82 73.6543 431.394Z" fill="url(#paint1_linear)"></path>
						<path d="M42.7072 307.397C47.9682 304.921 52.6103 301.207 56.6334 296.873C66.5365 286.969 71.7975 274.279 77.368 261.898C83.248 248.589 95.0079 234.661 95.9363 219.185C97.1742 199.067 78.9154 189.781 62.2039 199.995C46.1113 209.59 31.8756 221.971 19.8062 236.518C8.97469 249.208 0 264.374 0 280.779C0 290.064 3.09472 299.659 10.2126 305.54C17.021 311.111 26.3051 312.349 34.6609 310.182C37.4461 309.563 40.2314 308.635 42.7072 307.397Z" fill="url(#paint1_linear)"></path>
					</mask>
					<g mask="url(#mask0)">
						<rect opacity="0.9" width="904" height="591" transform="matrix(-1 0 0 1 654 -43)" fill="url(#pattern0)"></rect>
					</g>
					<defs>
						<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
							<use xlink:href="#about-1" transform="translate(0 -0.0101108) scale(0.000471698 0.000721515)"></use>
						</pattern>
						<linearGradient id="paint1_linear" x1="-17.8833" y1="330.485" x2="181.651" y2="168.313" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="#FF3D71"></stop>
							<stop offset="1" stop-color="#FFDD35"></stop>
						</linearGradient>
						<linearGradient id="paint1_linear" x1="-17.8833" y1="330.485" x2="181.651" y2="168.313" gradientUnits="userSpaceOnUse">
							<stop offset="0" stop-color="#FF3D71"></stop>
							<stop offset="1" stop-color="#FFDD35"></stop>
						</linearGradient>
						<image id="about-1" width="2120" height="1414" xlink:href="../assets/images/testimonials-1.jpg"></image>
					</defs>
				</svg>
			</div>
	   </div>
   </div>
	  </div>
  </section>
</div>
</template>




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
 transition: 'bounce',
  components: {
    Navbar3
  }
};
</script>


<style scoped>
	.banner-section{
		background-color: #000;
		height: 100vh;
	}
	.banner-section-style{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
    z-index: 2;
	}
	.content-col{
		justify-content: center;
		align-items: center;
		display: flex;
	}
	.about-carousel .carousel-item{
		margin-top: 50px;
		/* position: absolute;
		top: 20%;
		left: 14%;
		z-index: 1;
		padding-top: 20px;
		padding-bottom: 20px;
		color: #fff;
		text-align: left; */
	}
	.about-carousel .carousel-inner{
		min-height: 360px;
	}
	@media (max-width: 1440px){
		.banner-section-style .quote-img {
			left: 90px;
			top: 90px;
		}
	}
	.banner-section-style .quote-img {
		position: absolute;
		left: 133px;
		top: 170px;
		width: 168px;
		opacity: .08;
	}
	.text-block {
		position: relative;
		z-index: 10;
		max-width: 550px;
	}
	.text-block h2{
		position: relative;
		z-index: 10;
		margin-bottom: 30px;
		color: #fff;
		font-size: 40px;
		font-family: "Satisfy", cursive;
	}
	.text-block h2::after {
		content: '';
		position: absolute;
		bottom: 12px;
		left: auto;
		display: inline-block;
		-ms-transform: translateX(5px);
		transform: translateX(5px);
		min-width: 43px;
		height: 4px;
		border-radius: 6px;
		background-color:#d21c5e ;
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$color-start', endColorstr='$color-stop',GradientType=1 );
	}
	.text-block p {
    	font-size: 18px;
		color:grey;
		margin-bottom: 40px;
		line-height: 28px;
	}
	.carousel.about-carousel {
		position: relative;
		/* padding: 80px 0; */
		/* margin: 64px 0; */
		margin-top: 100px;
	}

  @media (min-width:768px) {
    .about-carousel .carousel-control-next, .about-carousel .carousel-control-prev {
      position: absolute;
      position: absolute;
      /* top: 50%; */
      z-index: 10;
      -ms-transform: translateY(-50%);
      transform: translateY(100%);
      top: auto;
      bottom: 0;
      left: 40px;
      z-index: 1;
      display: -ms-flexbox;
      display: block;
      -ms-flex-align: center;
      /* align-items: center; */
      -ms-flex-pack: center;
      /* justify-content: center; */
      /* width: 15%; */
      color: #fff;
      /* text-align: center; */
      opacity: .5;
      transition: opacity .15s ease;
    }
    .about-carousel .carousel-control-prev{
      bottom: 0px;
        left: 80%;
      /* top:0; */
    }
    .about-carousel .carousel-control-next{
      bottom: 0px;
        right: -5%;
      /* top:0; */
        left: auto;
    }
  }
.about-carousel .carousel-control-next .material-icons, 
.about-carousel .carousel-control-prev .material-icons{
	font-size: 5rem;
}
.about-carousel .carousel-control-next:hover .material-icons, 
.about-carousel .carousel-control-prev:hover .material-icons{
	color: #d21c5e;
}

.about-svg{
  width: 100%;
  max-width: 506px;
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
    

    @media (max-width:768px) {
      .banner-section{
        height: auto;
      }
      .carousel.about-carousel{
        margin-top: 170px;
      }
      .about-carousel .carousel-control-next, 
      .about-carousel .carousel-control-prev {
        align-items: flex-end;
      }
      .about-carousel .carousel-item{
        padding: 0 20px;
      }
    }

</style>





