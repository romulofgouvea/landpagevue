<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Recursos</h2>
        <p>Alguns recursos que sua pequena empresa precisa</p>
      </div>

      <div class="row" data-aos="fade-up" data-aos-delay="300">
        <div class="col-lg-3 col-md-4">
          <div class="icon-box">
            <i class="ri-store-line" style="color: #ffbb2c;"></i>
            <h3>
              <a href>Criação de MEI</a>
            </h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div class="icon-box">
            <i class="ri-bar-chart-box-line" style="color: #5578ff;"></i>
            <h3>
              <a href>Controle financeiro</a>
            </h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div class="icon-box">
            <i class="ri-calendar-todo-line" style="color: #e80368;"></i>
            <h3>
              <a href>Controle de tarefas</a>
            </h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
          <div class="icon-box">
            <i class="ri-paint-brush-line" style="color: #e361ff;"></i>
            <h3>
              <a href>Tomada de decisão</a>
            </h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="ri-database-2-line" style="color: #47aeff;"></i>
            <h3>
              <a href>Mais controle de dados</a>
            </h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="ri-gradienter-line" style="color: #ffa76e;"></i>
            <h3>
              <a href>Foco</a>
            </h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="ri-file-list-3-line" style="color: #11dbcf;"></i>
            <h3>
              <a href>Relatórios</a>
            </h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="ri-price-tag-2-line" style="color: #4233ff;"></i>
            <h3>
              <a href>Robustez</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Feature"
};
</script>

<style lang="scss">
.features {
  .icon-box {
    display: flex;
    align-items: center;
    padding: 20px;
    background: #f6f6f6;
    transition: ease-in-out 0.3s;
    i {
      font-size: 32px;
      padding-right: 10px;
      line-height: 1;
    }
    h3 {
      font-weight: 700;
      margin: 0;
      padding: 0;
      line-height: 1;
      font-size: 16px;
      a {
        color: #222222;
        transition: ease-in-out 0.3s;
        &:hover {
          color: #3498db;
        }
      }
    }
    &:hover {
      background: #eef7fc;
    }
  }
}
</style>