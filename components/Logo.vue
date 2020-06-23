<template>
  <div class="logo-style">
    <!-- <a href="/"> -->
        <img
          class="img-responsive img-large"
          src=".././assets/images/logo3.png"
          alt="logo"
          style="width: 120px;"
        />
        <!-- <img
          class="img-responsive img-small"
          src=".././assets/images/logo3.png"
          alt="logo"
          style="width: 100px;"
        /> -->
        <!-- </a>  -->
  </div>
</template>
<style>
.NuxtLogo {
  animation: 1s appear;
}
.img-small{
    display: inline-block;
}
.logo-style::after{
    content: '';
    position: absolute;
    z-index: -1;
    width: 410px;
    height: 410px;
    background: #d21c5e;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    left: 2%;
    top: 2%;

}
@media (min-width: 992px){
    .navbar-expand-lg .navbar-toggler {
        display: block;
    }
    .img-large{
        display: inline-block;
    }
    .img-small{
        display: none;
    }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
