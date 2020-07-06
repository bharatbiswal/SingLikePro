<template>
  <div>
    <Navbar style="background-color:#000" />
    <div class="sing-contact-top-area ptb--120 bg_color--5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="contact-head">
              <h3>Contact Us</h3>
              <p>Get in Touch</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <div class="sing-address">
              <div class="icon">
                <svg 
                stroke="currentColor"
                fill="none"
                stroke-width="1"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                width="1em" 
                height="1em" 
                xmlns="http://www.w3.org/2000/svg" 
                fill-rule="evenodd" clip-rule="evenodd">
                <path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.594-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/></svg>
              </div>
              <div class="inner">
                <!-- <h4 class="title">Contact With Phone Number</h4> -->
                <p>
                  <a href="tel:+057 254 365 456">+057 254 365 456</a>
                </p>
                <p>
                  <a href="tel:+856 325 652 984">+856 325 652 984</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50 mb-5">
            <div class="sing-address">
              <div class="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div class="inner">
                <!-- <h4 class="title">Email Address</h4> -->
                <p>
                  <a href="mailto:admin@gmail.com">admin@gmail.com</a>
                </p>
                <p>
                  <a href="mailto:example@gmail.com">example@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50 mb-5">
            <div class="sing-address">
              <div class="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div class="inner">
                <!-- <h4 class="title">Location</h4> -->
                <p>
                  5678 Bangla Main Road,
                  <br />GBnagla, example 54786
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <form class="contact-form">
              <div class="row fild_1">
                <div class="col-sm-6">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="name" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sing-contact-top-area {
  background-image: url("../assets/images/contact-bg.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* height: 100vh; */
  /* padding: 90px !important ; */
}

.ptb--120 {
  padding: 200px 0 0;
}
.bg_color--5 {
  /* background: #f8f9fc; */
}
.sing-address {
  margin-top: 30px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  background: #fff;
  padding: 54px 40px 50px;
  max-height: 170px;
  height: 170px;
}
.sing-address .icon {
  border: 1px solid #ebebeb;
  width: 78px;
  height: 78px;
  color: #d21c5e;
  line-height: 73px;
  text-align: center;
  border-radius: 100%;
  background: #fff;
  font-size: 28px;
  position: absolute;
  top: -13px;
  left: 47px;
}
.sing-address:hover .icon{
  border: 1px solid #d21c5e;
  background: #d21c5e;
  color: #fff;
}
.sing-address .inner h4.title {
  font-size: 18px;
  font-weight: 700;
}
.sing-address .inner p {
  font-size: 18px;
  margin-bottom: 0;
  color: rgba(29, 29, 36, 0.75);
  line-height: 30px;
}
.sing-address .inner p a {
  color: rgba(29, 29, 36, 0.75);
}
.contact-head {
  text-align: center;
  margin-bottom: 70px;
}

.contact-head h3 {
  font-family: "Satisfy", cursive;
  font-size: 40px;
  font-weight: 700;
  color: #d21c5e;
  margin-bottom: 20px;
  line-height: 40px;
  position: relative;
}
.contact-head h3:before,
.contact-head h3:after {
  position: absolute;
  content: "";
  bottom: 0;
  background: #d21c5e;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}

.contact-head h3:before {
  width: 200px;
  height: 1px;
}

.contact-head h3:after {
  height: 3px;
  bottom: -1px;
  width: 30px;
  left: 50%;
}
.contact-head p {
  font-family: "Satisfy", cursive;
  color: #fff;
  font-size: 20px;
  padding: 0 20%;
}
.contact-form {
  padding: 50px 0;
}
.contact-form input,
.contact-form textarea {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0);
  border-color: rgb(99, 99, 99);
}
.contact-form input {
  height: 55px;
  color: #fff;
  text-transform: capitalize;
}
.contact-form .send-btn {
  color: #fff;
  background-color: transparent;
  border-color: #d21c5e;
  padding: 15px;
  font-size: 15px;
  font-weight: 400;
  margin-top: 19px;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.contact-form .send-btn:hover {
  color: #fff;
  background-color: #d21c5e;
  border-color: #d21c5e;
}

.page-enter-active {
  animation: acrossIn 0.45s ease-out both;
}

.page-leave-active {
  animation: acrossOut 0.65s ease-in both;
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

<script>
import Navbar from "~/components/Navbar.vue";
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

Vue.use(VueMaterial);
export default {
  data() {
    return {};
  },
  transition: "page",
  components: {
    Navbar
  }
};
</script>