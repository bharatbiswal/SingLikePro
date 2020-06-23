<template>
  <!-- <section id="home" class="banner-section"> -->
  <section class="home-section" id>
    <div class="container-fluid">
      <div class="row">
        <div class="left-image-style col-4">
          <h3>Sing Like Pro</h3>
        </div>
        <div class="right-content-style col-8">
          <div class="right-content-view">
            <div class="vdo-image-view">
              <img src=".././assets/images/vdoImage.jpg" />
            </div>
            <div class="image-content">
              <h1>New Song</h1>
              <p>
                Lorem Ipsum rhis ts toshhoop svetsgin. Proin gravida nibh
                lorem quis bibendum aucto tsgin rhoin gravt.
              </p>
            </div>
          </div>
          <div class="footer-icon-section">
            <div class="qodef-grid-inner clear">
              <div class="qodef-grid-item">
                <div class="qodef-grid-item-inner">
                  <a href="#" target="_blank">
                    <span
                      class="qodef-m-icon"
                      style="color: rgb(238, 245, 246);"
                      data-hover-color="#E2E9ED"
                    >Fb</span>
                    <span class="qodef-m-title">Facebook</span>
                  </a>
                </div>
              </div>
              <div class="qodef-grid-item">
                <div class="qodef-grid-item-inner">
                  <a href="#" target="_blank">
                    <span
                      class="qodef-m-icon"
                      style="color: rgb(238, 245, 246);"
                      data-hover-color="#E2E9ED"
                    >In</span>
                    <span class="qodef-m-title">Instagram</span>
                  </a>
                </div>
              </div>
              <div class="qodef-grid-item">
                <div class="qodef-grid-item-inner">
                  <a href="#" target="_blank">
                    <span
                      class="qodef-m-icon"
                      style="color: rgb(238, 245, 246);"
                      data-hover-color="#E2E9ED"
                    >Tw</span>
                    <span class="qodef-m-title">Twitter</span>
                  </a>
                </div>
              </div>
              <div class="qodef-grid-item">
                <div class="qodef-grid-item-inner">
                  <a href="#" target="_blank">
                    <span
                      class="qodef-m-icon"
                      style="color: rgb(238, 245, 246);"
                      data-hover-color="#E2E9ED"
                    >Yt</span>
                    <span class="qodef-m-title">Youtube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.home-section {
  height: 100vh;
}

.left-image-style {
  background-image: url(".././assets/images/left-background.jpg");
  background-size: cover;
  max-width: 420px;
  height: 100vh;
}
.right-content-view {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-content-view {
}
.vdo-image-view {
  margin-left: -12rem;
}
.image-content {
  padding: 0 40px;
}
.vdo-image-view img {
  width: 1500px;
}
.image-content h1 {
  margin-left: -6rem;
  font-size: 4rem;
}
.image-content p {
  font-size: 20px;
  font-weight: 300;
  color: #555;
}
.left-image-style h3 {
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 55px;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  font-family: "Satisfy", cursive;
}
.qodef-grid-inner > .qodef-grid-item {
  width: 20%;
  position: relative;
  display: inline-block;
  vertical-align: top;
  min-height: 1px;
  text-align: center;
}
.qodef-grid-item-inner {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: auto;
}
.qodef-m-icon {
  position: relative;
  font-size: 110px;
  line-height: 1.5em;
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
  color: rgb(238, 245, 246);
  -webkit-transition: 0.5s ease-out;
  -o-transition: 0.5s ease-out;
  transition: 0.5s ease-out;
}
.qodef-m-title {
  position: absolute;
  display: block;
  width: 100%;
  margin: 0;
  top: calc(50% - 9px);
  font-size: 18px;
  color: #38214a;
  font-weight: 600;
}
.footer-icon-section{
    right: 0;
    position: absolute;
    bottom: 0;
    text-align: center;
    left: 0;
}
</style>

<script>
export default {
  data() {
    return {};
  },

  head() {
    return {
     
    };
  },

  mounted() {},
  unmounted() {},

  methods: {},

  components: {}
};
</script>
