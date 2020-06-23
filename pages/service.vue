<template>
    <!--Service Wrapper Start-->
	<div>
<Navbar3  style="background-color:#000;"/>
    <section class="service-section" id="service">
				<div class="section-title style-four text-center">
					<h3>What We Do</h3>
					<p>There are many variations of passages of Lorem Ipsum available but the majority have suffered</p>
				</div>
			
		<div class="container">
			<div class="row">
				<div class="col-6">
					<div class="service-view text-center">
						<div class="serv-image-view">
							<img src=".././assets/images/serv1.jpg">
						</div>
						<div class="serv-content-view">
							<div class="description">
								<h5>Voice Recording</h5>
								<p> Curabitur fermentum vitae eros eu porta. Curabitur et risus egestas, 
									vulputate lacus eget.</p>
								<md-button class="md-raised md-accent read-btn">Read More</md-button>
							</div>
							
						</div>
					</div>
				</div>
				<div class="col-6">
					<div class="service-view text-center">
						<div class="serv-image-view">
							<img src=".././assets/images/serv2.jpg">
						</div>
						<div class="serv-content-view">
							<div class="description">
								<h5>Sound Mixing</h5>
								<p> Curabitur fermentum vitae eros eu porta. Curabitur et risus egestas, 
									vulputate lacus eget.</p>
								<md-button class="md-raised md-accent read-btn">Read More</md-button>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
    </section>
	</div>
	<!--Service Wrapper End-->
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
transition: 'page',
  components: {
    Navbar3
  }
};
</script>


<style scoped>
	.service-section{
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
}
	
	.service-view{
		background-color: #fff;
		z-index: 1;
		position: relative;
	}
	.serv-content-view .description{
		padding:50px 60px;
	} 
	.serv-content-view .read-btn{
		font-size: 12px;
		padding: 7px 30px;
		line-height: 1.6em;
		min-width: 125px;
		border-radius: 50px;
		background-color: #d21c5e !important;
		color: #fff !important;
	}
	.serv-content-view .description p{
		font-size: 16px;
		margin-bottom: 30px;
	}
	.serv-content-view .description h5{
		font-weight: 500;
	}
	.left-arrow-style{
        position: absolute;
        left: 40px;
        top:20px;
        z-index: 9;
    }
    .left-arrow-style .fa{
        color: #000;
        font-size: 30px;
        padding: 0px 20px;
        border: 1px solid #000;
        border-radius: 50px;
        margin-right: 10px;
    }
    .left-arrow-style a{
        display: flex;
        /* vertical-align: middle; */
        font-size: 14px;
        align-items: center;
        color: #000 !important;
    }
	.left-arrow-style a:hover{
		text-decoration: none;
	}

	.page-enter-active {
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
  }
</style>