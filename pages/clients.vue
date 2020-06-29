<template>
<div>
<Navbar3  style="background-color:#000;"/>
    <section class="client-section">
			<div class="section-title style-four">
				<h3>Follow Us</h3>
				<p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour.</p>
			</div>
			
			<div class="client-container container">
				<div class="row">
					
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


.section-title.style-four {
  width: 100%;
  text-align: center;
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