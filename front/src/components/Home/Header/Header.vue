<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">
      <div class="logo mr-auto">
        <a href="/">
          <h1 class="text-dark">
            <span>LH Consultoria</span>
          </h1>
        </a>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
      </div>

      <Nav />
      <!-- .nav-menu -->
    </div>
  </header>
  <!-- End Header -->
</template>

<script>
import Nav from "./Nav";

export default {
  name: "Header",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
#header {
  z-index: 997;
  transition: all 0.5s;
  padding: 22px 0;
  &.header-scrolled {
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    padding: 15px 0;
    background: #fff;
  }
  .logo {
    h1 {
      font-size: 32px;
      margin: 0;
      padding: 0;
      line-height: 1;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 28px;
    }
    img {
      padding: 0;
      margin: 0;
      max-height: 40px;
    }
  }
}
#header .logo a,
#header .logo a:hover {
  text-decoration: none;
}

@media (max-width: 768px) {
  #header {
    background: #fff;
  }
  #header .logo h1 {
    font-size: 28px;
  }
}
</style>