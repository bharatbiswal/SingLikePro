<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="nav-logo-img">
      <div class="navbar-brand">
        <nuxt-link to="/">
          <img
            class="img-responsive img-large"
            src=".././assets/images/logo3.png"
            alt="logo"
            style="width: 120px;"
          />
          <img
            class="img-responsive img-small"
            src=".././assets/images/logo3.png"
            alt="logo"
            style="width: 100px;"
          />
        </nuxt-link>
      </div>
    </div>
    <button
      class="navbar-toggler d-none"
      type="button"
      data-toggle="collapse"
      data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style="background-color:transparent;"
    >
      <img src=".././assets/images/menu.png" />
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02" style="padding-left: 50px;">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <nuxt-link to="/" class="text-lg active" exact>Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/service" exact>Services</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/albums" exact>Albums</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contact" exact>Contact us</nuxt-link>
        </li>
      </ul>
      <div class="text-center btn-col">
        <div class="social_icon text-right">
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <!-- <nuxt-link> -->
        <!-- <md-button class="md-raised md-primary btn-color">Sign in</md-button> -->
        <!-- </nuxt-link> -->
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand {
  padding: 0;
}
.navbar-brand span.logo-text {
  font-size: 1.5em;
  color: #000;
}
.navbar-brand a:hover {
  text-decoration: none;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.5px;
  background-color: transparent;
  color: #fff;
  padding: 5px 100px;
  font-weight: 500;
  letter-spacing: 0px;
  font-family: "Avenir Next";
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  /* box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5); */
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
  font-family: "Avenir Next";
  /* background-color: #000; */
  /* box-shadow: 0px 1px 10px #999; */
}
.navbar-shrink {
  background-color: transparent;
  padding: 5px 100px;
  color: #fff;
  box-shadow: 0px 1px 10px #555;
  position: fixed;
  width: 100%;
  z-index: 5;
  top: 0;
}
.navbar-shrink a {
  color: #fff;
}

.navbar-toggler {
  background-color: #000;
  outline: none;
  padding: 5px 8px;
  border-color: transparent;
}
.navbar-toggler img {
  width: 2rem;
}
.navbar-toggler:hover,
.navbar-toggler:focus {
  outline: none;
}

.navbar.hidden-navbar {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.navbar a {
  color: #fff !important;
  font-weight: 500;
  text-decoration: none;
  font-size: 15px;
  letter-spacing: 0.2px;
}
.navbar .nuxt-link-active,
.navbar a:hover {
  color: #d21c5e !important;
  font-weight: 500;
  text-decoration: none;
}

.navbar .social-list li a {
  font-size: 18px;
}
.nav .logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nav .logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nav-logo-img {
  margin-top: 20px;
}
nav.shrink .nav-logo-img {
}
nav ul {
  display: flex;
  list-style: none;
  margin-bottom: 0;
}
nav .social-list ul {
  padding: 0;
}
nav ul li {
  padding: 0px 12px;
  /* font-size: 14px; */
}
nav ul li:not(:first-of-type) {
  /* border-left:2px solid rgb(255, 255, 255, 0.2); */
}
.btn-color {
  /* background-color: #000; */
  /* background-color: #a87c34 !important; */
  color: #fff;
  font-weight: bold;
  min-width: 100px;
  font-size: 16px;
  letter-spacing: 0.5px;
  vertical-align: middle;
  font-family: "Avenir Next";
  /* text-transform: inherit; */
  /* height: 42px; */
  border-radius: 5px;
}

.btn-color:hover {
  background-position: left center;
}
.profile-click {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}
.profile-click img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: contain;
}
.profile-menu {
  margin-top: 18px;
  position: absolute;
  left: -29px;
  padding: 0;
}
.profile-item,
.navbar a.profile-item {
  /* border-bottom: 1px solid #06d5a2; */
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #000 !important;
  -webkit-text-fill-color: #000;
  font-weight: 400;
}
.border-bottom {
  /* height: 1px; */
  border: 1px solid #000;
}

.profile-dropdown {
  display: none;
}
.notifications-count {
  position: absolute;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  right: -5px;
  padding-top: 5px;
  padding-bottom: 5px;
  top: -5px;
  font-size: 12px;
}
.navbar-brand:after {
  content: "";
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
.img-large {
  display: none;
  width: 120px;
  position: relative;
  left: -60px;
}
.img-small {
  display: inline-block;
}
ul {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
.social_icon ul li {
  display: inline-block;
  padding: 0 5px;
}

.social_icon ul li a {
  display: inline-block;
  width: 35px;
  height: 35px;
  color: #fff;
  text-align: center;
  line-height: 35px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  border: 1px solid #41393a;
  font-size: 14px;
  margin-left: 6px;
}

@media (max-width: 1050px) and (min-width: 991px) {
  .navbar a {
    padding: 5px 10px;
  }
}

@media (max-width: 991px) {
  nav ul li {
    padding: 0;
  }
  .profile-menu {
    position: relative;
  }
  .nav-donate-btn {
    margin-top: 8px;
  }
  nav {
    background-color: #000;
  }
  .navbar .navbar-nav a {
    color: #fff !important;
    font-weight: 500;
    text-decoration: none;
    font-weight: 500;
    display: flex;
    /* background-color: #ccc; */
    width: 100%;
    /* padding: 6px 10px;
        margin: 2px; */
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #999;
    padding: 8px 10px;
  }
  .navbar .nuxt-link-active,
  .navbar .navbar-nav a:hover,
  .navbar .navbar-nav a:active,
  .navbar .navbar-nav a:focus {
    background-color: rgba(185, 163, 104, 0.43922);
    color: #fff !important;
    font-weight: 500;
    text-decoration: none;
  }
  /* .navbar .navbar-nav .nuxt-link-active{
        color:#f44335;
        font-weight: 500;
        text-decoration: none;
    } */
  .btn-color {
    margin: 15px 0;
  }
}
@media (max-width: 768px) {
  .navbar-shrink,
  nav {
    padding: 10px 30px;
  }

  nav ul li {
    padding: 0;
  }
  .profile-menu {
    position: relative;
    margin-left: 20px;
    margin-top: 15px;
  }
}
@media (max-width: 500px) {
  .navbar-shrink,
  nav {
    padding: 5px 30px;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-toggler {
    display: block;
  }
  .img-large {
    display: inline-block;
  }
  .img-small {
    display: none;
  }
}
@media screen and (min-width: 991px) and (max-width: 1050px) {
  nav ul li {
    padding: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },

  head() {
    return {};
  },

  created() {},

  mounted() {},

  unmounted() {},

  methods: {},

  components: {
    // Logo
  }
};
</script>
