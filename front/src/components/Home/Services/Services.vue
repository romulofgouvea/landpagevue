<template>
  <section id="services" class="services">
    <div class="container text-home-black">
      <div class="section-title" data-aos="fade-up">
        <h2 class="text-home-black">Serviços</h2>
        <p>Alguns serviços que fornecemos aos clientes</p>
      </div>

      <div class="row">
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div class="icon">
              <i class="bx bx-line-chart"></i>
            </div>
            <h4 class="title">
              <a href>Movimentação financeira</a>
            </h4>
            <p class="description">Um fluxo para o controle da sua empresa.</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div class="icon">
              <i class="bx bx-file"></i>
            </div>
            <h4 class="title">
              <a href>Controle de estoque</a>
            </h4>
            <p class="description">Fique de olho nos produtos que entram e saem de sua loja.</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div class="icon">
              <i class="bx bxs-report"></i>
            </div>
            <h4 class="title">
              <a href>Relatórios</a>
            </h4>
            <p class="description">Gere relatórios e entenda como seus clientes se comportam.</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div class="icon">
              <i class="bx bx-rocket"></i>
            </div>
            <h4 class="title">
              <a href>Planejamento estratégico</a>
            </h4>
            <p
              class="description"
            >Saia na frente dos concorrentes com a tomada de decisão estratégia.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services"
};
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";

.services {
  background-color: $home-body-bg;
  .icon-box {
    padding: 30px;
    position: relative;
    overflow: hidden;
    background: $home-white;
    box-shadow: 0 0 29px 0 rgba(68, 88, 144, 0.12);
    transition: all 0.3s ease-in-out;
    border-radius: 8px;
    z-index: 1;
    &::before {
      content: "";
      position: absolute;
      background: $primary-fade;
      right: -60px;
      top: -40px;
      width: 100px;
      height: 100px;
      border-radius: 50px;
      transition: all 0.3s;
      z-index: -1;
    }
    &:hover {
      &::before {
        background: $primary;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 0px;
      }
      .icon {
        background: $home-white;
        i {
          color: $primary;
        }
      }
    }
  }
  .icon {
    margin: 0 auto 20px auto;
    padding-top: 10px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background: $primary;
    transition: all 0.3s ease-in-out;
    i {
      font-size: 36px;
      line-height: 1;
      color: $home-white;
    }
  }
  .title {
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 18px;
    a {
      color: $home-title-black;
      text-decoration: none;
    }
  }
  .description {
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 0;
  }
}
.services .icon-box:hover .title a,
.services .icon-box:hover .description {
  color: $home-white;
}
</style>