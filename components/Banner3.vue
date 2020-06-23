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
                <div class="right-arrow-style">
                    <nuxt-link to="/home4" class="sing_right">
                        Click to Enter
                        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </nuxt-link>
                </div>
                <div class="container">
                    <div class="row text-md-left">
                        <div class="col-md-10 col-xl-7">
                            <div class="offer-box">
                                <div class="offer-box-subheading text-md-right" style="color:#fff;">Every Day</div>
                                <div class="offer-box-title">unlimited</div>
                            </div>
                        </div>
                    </div>
                     <div class="row text-md-left row-padding">
                        <div class="offset-xl-5 col-md-10 col-xl-7">
                            <div class="offer-box" style="padding:0">
                                <div class="paunch-line-style text-left text-wrapper">Dream It,</div>
                                <div class="paunch-line-style text-center text-wrapper2">Believe It,</div>
                                <div class="paunch-line-style text-right text-wrapper3">Achieve It,</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </section>
</template>


<style scoped>
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
        font-size: 80px;
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
    }
    .text-wrapper2{
        animation: 1.5s ease-out 0s 1 slideInFromLeft;
    }
    .text-wrapper3{
        animation: 2s ease-out 0s 1 slideInFromRight;
    }
   
    @media (min-width: 1200px){
        .row-padding {
            margin-top: 60px;
        }
    }
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
}

.offer-box-title {
	font-family: "BenchNine", sans-serif;
	text-transform: uppercase;
	letter-spacing: .2em;
	color: #d21c5e;
	font-size: 56px;
}

.offer-box-subtitle {
	font-family: "Righteous", cursive;
	text-transform: uppercase;
	font-size: 30px;
}

@media (min-width: 576px) {
	.offer-box-subheading {
		font-size: 60px;
	}
	.offer-box-title {
		font-size: 100px;
	}
	.offer-box-subtitle {
		font-size: 52px;
	}
}

@media (min-width: 768px) {
	.offer-box-subheading {
		font-size: 66px;
	}
	.offer-box-title {
		font-size: 115px;
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
		font-size: 150px;
	}
	.offer-box-subtitle {
		font-size: 72px;
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

  
</style>

<script>
export default {
  data() {
    return {
     
    };
  },

  head() {
    return {
    //   css: [
    //     { src: '~assets/css/style.css'}
    //   ],
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
   
  },

  components: {
    
  }
};
</script>
