<template>
  <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
        >
          <h1 data-aos="fade-up">O crescimento para o seu negocio é com a LH Consultoria</h1>
          <h2
            data-aos="fade-up"
            data-aos-delay="400"
          >Nosso time de talentos estará trabalhando ao seu favor</h2>
          <div data-aos="fade-up" data-aos-delay="800">
            <a href="#about" type="button" class="btn btn-outline-primary btn-get-started scrollto btn-lg">Começar agora</a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
          <img src="@/assets/images/hero-img.png" class="img-fluid animated" alt />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss">
@-webkit-keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}
@keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}
#hero {
  width: 100%;
  height: 70vh;
  margin-top: 70px;
  h1 {
    margin: 0 0 10px 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: black;
  }
  h2 {
    color: #484848;
    margin-bottom: 50px;
    font-size: 24px;
  }
  .btn-get-started {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    border-radius: 50px;
    transition: 0.5s;
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
  .animated {
    animation: up-down 2s ease-in-out infinite alternate-reverse both;
  }
}
@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}
@media (max-width: 991px) {
  #hero {
    height: 100vh;
    .animated {
      -webkit-animation: none;
      animation: none;
    }
    .hero-img {
      text-align: center;
      img {
        width: 50%;
      }
    }
  }
}
@media (max-width: 768px) {
  #hero {
    margin-top: 20px;
    h1 {
      font-size: 28px;
      line-height: 36px;
    }
    h2 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 30px;
    }
    .hero-img {
      img {
        width: 70%;
      }
    }
  }
}
@media (max-width: 575px) {
  #hero {
    .hero-img {
      img {
        width: 80%;
      }
    }
  }
}
</style>