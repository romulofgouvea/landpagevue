<template>
  <footer id="footer">
    <div class="container text-home-black">
      <div class="row d-flex align-items-center">
        <div class="col-lg-6 text-lg-left text-center">
          <div class="copyright">
            &copy; Copyright
            <strong>LH Consultoria</strong>. Todos os direitos reservados.
          </div>
          <div class="credits">
            Construido por
            <a href="/">LH Consultoria</a>
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <a href="#header" class="scrollto">Home</a>
            <a href="#about" class="scrollto">Sobre nós</a>
            <a href="#">Politica de privacidade</a>
            <a href="#">Termos de uso</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";

#footer {
  background-color: $home-body-bg;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  padding: 30px 0;
  color: $home-black;
  font-size: 14px;
  .credits {
    font-size: 13px;
    padding-top: 5px;
    color: $home-black;
  }
  .footer-links {
    a {
      text-decoration: none;
      padding-left: 15px;
      &:first-child {
        padding-left: 0;
      }
    }
  }
}
</style>