<template>
  <section id="pricing" class="pricing">
    <div class="container">
      <div class="section-title">
        <h2>Preços</h2>
        <p>Investimento para o seu negócio</p>
      </div>

      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="box" data-aos="zoom-in-right" data-aos-delay="200">
            <h3>Gratis</h3>
            <h4>
              <sup>R$</sup>0
              <span>/ mês</span>
            </h4>
            <ul>
              <li>Fluxo de caixa</li>
              <li class="na">Tomada de decisão</li>
              <li class="na">Planejamento estratégico</li>
            </ul>
            <div class="btn-wrap">
              <router-link
                class="btn btn-outline-primary btn-buy"
                :to="ROUTES.LOGIN_DASHBOARD.path"
              >Use agora</router-link>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 mt-4 mt-md-0">
          <div class="box recommended" data-aos="zoom-in" data-aos-delay="100">
            <h3>Pequenas empresas</h3>
            <h4>
              <sup>R$</sup>17
              <span>/ mês</span>
            </h4>
            <ul>
              <li>Fluxo de caixa</li>
              <li>Agendamento de tarefas</li>
              <li>Tomada de decisão</li>
              <li class="na">Planejamento estratégico</li>
            </ul>
            <div class="btn-wrap">
              <a href="#contact" class="btn btn-primary btn-buy btn-lg scrollto">Entre em contato</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ROUTES } from "@/config/constants";

export default {
  name: "Pricing",
  data: function () {
    return {
      ROUTES,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";

.pricing {
  .box {
    padding: 20px;
    background: #f9f9f9;
    text-align: center;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    border: 2px solid #f9f9f9;
    h3 {
      font-weight: 400;
      padding: 15px;
      margin-top: 15px;
      font-size: 18px;
      font-weight: 600;
      color: #222222;
    }
    h4 {
      font-size: 42px;
      color: $primary;
      font-weight: 500;
      font-family: "Open Sans", sans-serif;
      margin-bottom: 20px;
      sup {
        font-size: 20px;
        top: -15px;
        left: -3px;
      }
      span {
        color: #bababa;
        font-size: 16px;
        font-weight: 300;
      }
    }
    ul {
      padding: 0;
      list-style: none;
      color: #222222;
      text-align: center;
      line-height: 20px;
      font-size: 14px;
      li {
        padding-bottom: 16px;
      }
      i {
        color: $primary;
        font-size: 18px;
        padding-right: 4px;
      }
      .na {
        color: #ccc;
        text-decoration: line-through;
      }
    }
    .btn-wrap {
      padding: 15px;
      text-align: center;
    }
    .btn-buy {
      border-radius: 50px;
      font-weight: 400;
      font-family: "Raleway", sans-serif;
      font-weight: 600;
      transition: 0.3s;
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .recommended {
    border-color: $primary;
  }
}
</style>