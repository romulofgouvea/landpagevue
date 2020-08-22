<template>
  <div>
    <Header :theme="theme" />

    <Hero />

    <main id="main">
      <About />

      <Services />

      <Features />

      <!-- <Team /> -->

      <Pricing />

      <Faq />

      <Contact />
    </main>

    <Footer />

    <a href="#header" class="back-to-top">
      <i class="icofont-simple-up"></i>
    </a>
  </div>
</template>

<script>
import Header from "@/components/Home/Header/Header";
import Hero from "@/components/Home/Hero/Hero";
import About from "@/components/Home/About/About";
import Services from "@/components/Home/Services/Services";
import Features from "@/components/Home/Features/Features";
// import Team from "@/components/Home/Team/Team";
import Pricing from "@/components/Home/Pricing/Pricing";
import Faq from "@/components/Home/Faq/Faq";
import Contact from "@/components/Home/Contact/Contact";
import Footer from "@/components/Home/Footer/Footer";

export default {
  name: "Home",
  title() {
    return `Home`;
  },
  components: {
    Header,
    Hero,
    About,
    Services,
    Features,
    // Team,
    Pricing,
    Faq,
    Contact,
    Footer,
  },
  data: function () {
    let darkmode = true;

    return {
      theme: darkmode ? "light" : "dark",
    };
  },
  mounted() {
    const anchor = this.$router.currentRoute.hash;
    this.$nextTick(() => {
      if (anchor && document.querySelector(anchor)) {
        location.href = anchor;
      }
    });
  },
};
</script>


<style lang="scss">
@import "@/assets/css/_variables.scss";
/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #f7fbfe;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  color: #222222;
}

.section-title h2::before,
.section-title h2::after {
  content: "";
  width: 50px;
  height: 2px;
  background: $primary;
  display: inline-block;
}

.section-title h2::before {
  margin: 0 15px 10px 0;
}

.section-title h2::after {
  margin: 0 0 10px 15px;
}

.section-title p {
  margin: 15px 0 0 0;
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  display: none;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  text-decoration: none !important;
  i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background: #3498db;
    color: #fff;
    transition: all 0.4s;
    &:hover {
      text-decoration: none;
      background: #57aae1;
      color: #fff;
    }
  }
}

/*--------------------------------------------------------------
# Disable AOS delay on mobile
--------------------------------------------------------------*/
@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}
</style>