<template>
  <section id="faq" class="faq">
    <div class="container text-home-black">
      <div class="section-title" data-aos="fade-up">
        <h2 class="text-home-black">Perguntas Frequentes</h2>
      </div>

      <div class="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
        <div class="col-lg-5">
          <i class="ri-question-line"></i>
          <h4>Posso acessar de qualquer lugar?</h4>
        </div>
        <div class="col-lg-7">
          <p>Sim, basta ter uma conexão com a internet.</p>
        </div>
      </div>
      <!-- End F.A.Q Item-->

      <div class="row faq-item d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
        <div class="col-lg-5">
          <i class="ri-question-line"></i>
          <h4>Como funciona a consultoria?</h4>
        </div>
        <div class="col-lg-7">
          <p>
            A consultoria funciona assim, voce cadastra no nosso sistema no plano Gratis, utilize a plataforma e entre
            em contato para mais detalhes.
          </p>
        </div>
      </div>
      <!-- End F.A.Q Item-->
    </div>
  </section>
</template>

<script>
export default {
  name: "Faq",
};
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";

.faq {
  background-color: $home-body-bg;
  .faq-item {
    margin: 20px 0;
    padding: 20px 0;
    border-bottom: 1px solid #eeeeee;
    i {
      color: $primary-fade;
      font-size: 24px;
      float: left;
      line-height: 0;
      padding: 13px 0 0 0;
      margin: 0;
    }
    h4 {
      font-size: 16px;
      line-height: 26px;
      font-weight: 500;
      margin: 0 0 10px 32px;
      font-family: "Poppins", sans-serif;
    }
    p {
      font-size: 15px;
    }
  }
}
</style>