<template>
  <section id="team" class="team section-bg">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>O time</h2>
        <p>O esquadrão de combate</p>
      </div>

      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member" data-aos="fade-up" data-aos-delay="100">
            <div class="member-img">
              <img src="assets/img/team/team-1.jpg" class="img-fluid" alt />
              <div class="social">
                <a href>
                  <i class="icofont-twitter"></i>
                </a>
                <a href>
                  <i class="icofont-facebook"></i>
                </a>
                <a href>
                  <i class="icofont-instagram"></i>
                </a>
                <a href>
                  <i class="icofont-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="member-info">
              <h4>Luiz Henrrique</h4>
              <span>CEO</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member" data-aos="fade-up" data-aos-delay="200">
            <div class="member-img">
              <img src="assets/img/team/team-3.jpg" class="img-fluid" alt />
              <div class="social">
                <a href>
                  <i class="icofont-twitter"></i>
                </a>
                <a href>
                  <i class="icofont-facebook"></i>
                </a>
                <a href>
                  <i class="icofont-instagram"></i>
                </a>
                <a href>
                  <i class="icofont-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="member-info">
              <h4>Romulo Fernandes</h4>
              <span>CIO</span>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member" data-aos="fade-up" data-aos-delay="300">
            <div class="member-img">
              <img src="assets/img/team/team-1.jpg" class="img-fluid" alt />
              <div class="social">
                <a href>
                  <i class="icofont-twitter"></i>
                </a>
                <a href>
                  <i class="icofont-facebook"></i>
                </a>
                <a href>
                  <i class="icofont-instagram"></i>
                </a>
                <a href>
                  <i class="icofont-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="member-info">
              <h4>Elieder Gomes</h4>
              <span>CTO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Team"
};
</script>

<style lang="scss">
.team {
  .member {
    margin-bottom: 20px;
    overflow: hidden;
    text-align: center;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    .member-img {
      position: relative;
      overflow: hidden;
    }
    .social {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 40px;
      opacity: 0;
      transition: ease-in-out 0.3s;
      text-align: center;
      background: rgba(255, 255, 255, 0.85);
      a {
        transition: color 0.3s;
        color: #222222;
        margin: 0 10px;
        padding-top: 8px;
        display: inline-block;
        &:hover {
          color: #3498db;
        }
      }
      i {
        font-size: 18px;
        margin: 0 2px;
      }
    }
    .member-info {
      padding: 25px 15px;
      h4 {
        font-weight: 700;
        margin-bottom: 5px;
        font-size: 18px;
        color: #222222;
      }
      span {
        display: block;
        font-size: 13px;
        font-weight: 400;
        color: #aaaaaa;
      }
      p {
        font-style: italic;
        font-size: 14px;
        line-height: 26px;
        color: #777777;
      }
    }
    &:hover {
      .social {
        opacity: 1;
      }
    }
  }
}
</style>