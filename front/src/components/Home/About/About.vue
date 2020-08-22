<template>
  <section id="about" class="about">
    <div class="container text-home-black">
      <div class="section-title" data-aos="fade-up">
        <h2 class="text-home-black">Sobre nós</h2>
      </div>

      <div class="row content text-justify">
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
          <p>
            Toda organização nasce com um objetivo claro, servir as pessoas da
            sociedade com o melhor que pode proporcionar. Nós da LH Consultoria
            Empresarial pensamos da mesma forma. Com profissionais qualificados
            e especializados buscamos ofertar o melhor suporte à gestão de micro
            e pequenas empresas para que estas consigam crescer e aumentar a
            riqueza de seus donos.
          </p>
          <p>Onde atuamos:</p>
          <ul>
            <li>
              <i class="ri-check-double-line"></i> Planejamento Estratégico
            </li>
            <li>
              <i class="ri-check-double-line"></i> Estruturação Financeira
            </li>
          </ul>
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
          <p>
            Empresas que não praticam tais princípios acabam por executar um
            modelo de gestão que os impede de crescer pois o crescimento está
            diretamente ligado ao planejamento e o planejamento é alimentado
            pelo cumprimento destes princípios.
          </p>

          <p>A administração pode ser resumida em:</p>

          <ul>
            <li>
              <i class="ri-check-double-line"></i> Planejar
            </li>
            <li>
              <i class="ri-check-double-line"></i> Controlar
            </li>
            <li>
              <i class="ri-check-double-line"></i> Dirigir
            </li>
            <li>
              <i class="ri-check-double-line"></i> Mensurar
            </li>
          </ul>

          <p>Para isso é que estamos aqui.</p>

          <!-- <a href="#" class="btn btn-outline-primary btn-lg btn-learn-more">Learn More</a> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";

.about {
  background-color: $home-body-bg;
  .content {
    h3 {
      font-weight: 600;
      font-size: 26px;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        padding-left: 28px;
        position: relative;
        & + li {
          margin-top: 10px;
        }
      }
      i {
        color: $primary;
        position: absolute;
        left: 0;
        top: 2px;
        font-size: 20px;
        line-height: 1;
      }
    }
    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .btn-learn-more {
      font-family: "Raleway", sans-serif;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 1px;
      display: inline-block;
      padding: 12px 32px;
      border-radius: 50px;
      transition: 0.3s;
      line-height: 1;
      -webkit-animation-delay: 0.8s;
      animation-delay: 0.8s;
      margin-top: 6px;
      &:hover {
        color: $home-white;
        text-decoration: none;
      }
    }
  }
}
</style>