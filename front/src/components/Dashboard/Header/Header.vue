<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- User -->
      <li class="nav-item dropdown user user-menu">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <img src="../../../assets/images/logo-lh.png" class="user-image" alt="User Image" />
          <span class="hidden-xs">LHConsultoria</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <!-- <div class="dropdown-item user-header">
            <img src="../../../assets/images/logo-lh.png" class="img-circle" alt="User Image" />

            <p>LHConsultoria</p>
            <p>Administração</p>
            <small>Membro desde 2020</small>
          </div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-user mr-2"></i> Meu perfil
          </a>-->
          <a href="#" class="dropdown-item">
            <i class="fas fa-user mr-2"></i> Meu perfil
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer btn-flat">Sair</a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
.user-header {
  text-align: center;
  img {
    width: 60px;
    height: 60px;
  }
}
</style>