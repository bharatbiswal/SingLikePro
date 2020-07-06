<template>
    <section class="banner-section">
        <div class="container-fluid p-0">
            <div class="view-bg-image banner-item">
                <div class="logo-style">
                    <img src="../assets/images/logo3.png" alt="">
                </div>
                <div class="left-text-style">
                    <h3>Sing Like Pro</h3>
                </div>
                <!-- <div class="right-arrow-style">
                    <nuxt-link to="/about" class="sing_right">
                        Click to Enter
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </nuxt-link>
                </div> -->
                <div class="container main-container">
                    <div class="row text-md-left">
                        <div class="col-md-10 col-xl-7 col-sm-12 col-xs-12">
                            <div class="offer-box">
                                <div class="offer-box-subheading" style="color:#fff;">Every Day</div>
                                <div class="offer-box-title">unlimited</div>
                            </div>
                        </div>
                    </div>
                     <div class="row row-padding">
                        <div class="col-md-12 col-xl-12">
                            <div class="offer-box offer-text-box" style="padding:0">
                                <div class="paunch-line-style text-wrapper">Dream It,</div>
                                <div class="paunch-line-style text-wrapper2">Believe It,</div>
                                <div class="paunch-line-style text-wrapper3">Achieve It,</div>

                                <div class="button-sec">
                                    <button role="button" class="download-btn btn mx-2" @click="clickOnAppStore">
                                        <img alt="ios app" class="app-store-img" src=".././assets/images/badge/app-store.svg">
                                    </button> 
                                    <button role="button" class="download-btn btn mx-2" @click="clickOnGooglePlay">
                                        <img alt="android app" class="app-store-img" src=".././assets/images/badge/google-playstore.png">
                                    </button>
                                </div>
                                <div class="powered-view-style">
                                    <p class="power-text" @click="goToMobionaUrl()">powered by <span class="mobiona_name">mobiona</span></p>
                                </div>
                            </div>
                                <div class="countdown-sec">
                                    <client-only>
                                        <flip-countdown deadline="2020-08-15 00:00:00"></flip-countdown>
                                    </client-only>
                                </div>
                                
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </section>
</template>

<script>
import Vue from "vue";
// import FlipCountdown from 'vue2-flip-countdown';

export default {
    components: {
        // FlipCountdown
    },
}
</script>


<style scoped>
    @font-face {
        font-family: 'Denmark'; /*a name to be used later*/
        src: url('../assets/fonts/denmark/films.denmark-webfont.woff2'); /*URL to font*/
        font-display: swap;
    }
    .banner-section{
        background-color: #000 !important;
    }
    .banner-item{
        height: 100vh;
        position: relative;
        min-height: 350px;
        background: no-repeat center center scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    .view-bg-image{
        background-image: url("../assets/images/banner.png");
        background-size: calc(100% + 50px);
    }
    .offer-box .paunch-line-style{
        font-size: 75px;
        text-transform: uppercase;
        margin: 20px 0;
        font-family: 'Monoton', cursive;
        color: #efefef;
    }
    .left-text-style{
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
        position: absolute;
        top: 60%;
        left: 0;
        display: flex;
        z-index: 1;
        justify-content: center;
       
    }
    .left-text-style h3{
        color: #efefef !important;
        font-size: 60px;
        font-family: "Satisfy", cursive;
        text-transform: uppercase;
    }
    .logo-style{
        position: absolute;
        top: 10px;
        left: 40px;
        z-index: 9;
    }
    .logo-style img{
        width: 120px;
    }
    .right-arrow-style{
        position: absolute;
        right: 40px;
        top:20px;
        z-index: 9;
        animation: zoominoutsinglefeatured 5s infinite;
    }
    .right-arrow-style .fa{
        color: #fff;
        font-size: 30px;
        padding: 0px 20px;
        border: 1px solid #ccc;
        border-radius: 50px;
        margin-left: 10px;
    }
    .right-arrow-style a{
        display: flex;
        /* vertical-align: middle; */
        font-size: 14px;
        align-items: center;
        color: #fff !important;
    }
    .right-arrow-style a:hover{
        text-decoration: none;
    }
   
    .text-wrapper{
        animation: 1s ease-out 0s 1 slideInFromTop;
        text-align: left;
    }
    .text-wrapper2{
        animation: 1.5s ease-out 0s 1 slideInFromLeft;
        text-align: center;
    }
    .text-wrapper3{
        animation: 2s ease-out 0s 1 slideInFromRight;
        text-align: right;
    }
   
    /* @media (min-width: 1200px){ */
        .row-padding {
            margin-top: 10px;
        }
    /* } */
    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-50%);
        }
        100% {
            transform: translateX(0);
        }
    }
     @keyframes slideInFromTop{
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0);
        }
    }
    @keyframes slideInFromRight{
        0% {
            transform: translateX(50%);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes zoominoutsinglefeatured {
    0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(1.2,1.2);
    }
    100% {
        transform: scale(1,1);
    }
}
  
  .offer-box {
	max-width: 750px;
	padding: 50px 0;
}

.offer-box > * {
	line-height: 1;
}

.offer-box-subheading {
	font-family: "Herr Von Muellerhoff", cursive;
	font-size: 46px;
    text-align: right;
}

.offer-box-title {
	font-family: "BenchNine", sans-serif;
	text-transform: uppercase;
	letter-spacing: .2em;
	color: #d21c5e;
	font-size: 10vw;
}

.offer-box-subtitle {
	font-family: "Righteous", cursive;
	text-transform: uppercase;
	font-size: 30px;
}
.button-sec{
    margin-top:20px;
    text-align: right;
}
.download-btn{
	background-color: transparent;
	border:none;
	padding: 0;
	outline: none;
}
.download-btn:hover, .download-btn:active, .download-btn:focus{
	background-color: transparent;
	border:transparent;
	outline: none;
}
.download-btn .app-store-img{
	height: 50px;
	width: auto;
}
.countdown-sec{
    position: absolute;
    bottom: -20px;
    left: 150px;
    color: #fff !important;
    z-index: 5;
}
    /* .power-text a{
        color: #eee!important;
        cursor: pointer;
        font-weight: 400;
    } */
   
    p.power-text{
        margin: 0;
        text-align: center;
        cursor: pointer;
        color: #eee!important;
    }
    .mobiona_name {
        font-size: 1.4em;
        font-family: 'Denmark';
        color: #e8820a;

    }
    .powered-view-style{
        position: absolute;
        right: 100px;
        bottom: -40px;
    }

@media (max-width:1200px) {
    .countdown-sec{
        bottom: -40px;
        left: 120px;
    }
}
@media (max-width: 1000px){
    .countdown-sec{
        bottom: -40px;
        left: 230px;
    }
}
@media (min-width: 576px) {
	.offer-box-subheading {
		font-size: 60px;
	}
	/* .offer-box-title {
		font-size: 100px;
	} */
	.offer-box-subtitle {
		font-size: 52px;
	}
}

@media (min-width: 768px) {
	.offer-box-subheading {
		font-size: 66px;
         /* text-align: center; */
	}
	.offer-box-title {
		/* font-size: 115px; */
		animation: neon-offer 1.5s ease-in-out infinite alternate;
	}
	.offer-box-subtitle {
		font-size: 58px;
	}
}

@media (min-width: 992px) {
	.offer-box-subheading {
		font-size: 85px;
	}
	.offer-box-title {
		font-size: 10vw;
	}
	.offer-box-subtitle {
		font-size: 72px;
	}
}

@media (max-width: 992px) {
	.offer-box-subheading {
		text-align: center;
	}
    .offer-box{
        text-align: center;
        padding: 60px 0 40px;
    }
    .left-text-style{
        display:none;
    }
    .countdown-sec{
        bottom: -30px;
        left: 0;
    }
}

@media (max-width: 768px) {
    .offer-box{
        text-align: center;
        padding: 0;
    }
    .offer-box-title{
        animation: neon-offer-data-v-fe78b908 1.5s ease-in-out infinite alternate;
    }
    .right-arrow-style{
        top:40px;
    }
    .offer-box .paunch-line-style{
        font-size: 60px;
    }
    .button-sec{
        margin-top:30px;
        text-align: center;
    }
    .main-container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        /* align-items: center; */
        height: 100vh;
        padding-top: 60px;
    }
    .countdown-sec{
        position: static;
        margin-top: 40px;
    }
    .powered-view-style{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -40px;
    }
    
}

@media (max-width: 576px) {
    .offer-box .paunch-line-style{
        font-size: 50px;
    }
    .text-wrapper{
        text-align: center;
    }
    .text-wrapper2{
        text-align: center;
    }
    .text-wrapper3{
        text-align: center;
    }
}

@keyframes neon-offer {
	from {
		text-shadow: 0 0 5px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.3), 0 0 20px rgba(210, 28, 94, 0.5), 0 0 30px rgba(210, 28, 94, 0.5), 0 0 40px rgba(210, 28, 94, 0.5), 0 0 60px rgba(210, 28, 94, 0.5);
	}
	to {
		text-shadow: 0 0 1px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.3), 0 0 10px rgba(210, 28, 94, 0.5), 0 0 15px rgba(210, 28, 94, 0.5), 0 0 20px rgba(210, 28, 94, 0.5), 0 0 30px rgba(210, 28, 94, 0.5);
	}
}

.offer-text-box{
    max-width: 750px;
    padding: 50px 0;
    margin-left: auto;
}

  
</style>

<script>
export default {
  data() {
    return {
     
    };
  },

  head() {
    return {
      script:[
          {
            type: "module",
            src: "common.js"
          }
        
      ]
    };
  },

 mounted(){
    window.addEventListener("load", () => {
      document.querySelector("body").classList.add("loaded"); 
    });
  },
  
  unmounted() {
  },

  methods: {
    clickOnAppStore(){
		// this.$swal({
        //   text: "Coming Soon",
        //   icon: "info",
        // })
		this.$swal({
          text: "Coming Soon !"
        });
	},

    clickOnGooglePlay(){
    // this.$swal({
    //   text: "Coming Soon",
    //   icon: "info",
    // })
        this.$swal({
            text: "Coming Soon !"
        });
    },

     goToMobionaUrl(){
          const url = 'https://mobiona.com';
            window.open(url, '_blank');
      }
  },

  components: {
    
  }
};
</script>
