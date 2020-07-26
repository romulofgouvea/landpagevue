<template>
  <div>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="#" class="brand-link text-center">
        <span class="brand-text font-weight-light">LH Consultoria</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li class="nav-item">
              <a href="#" class="nav-link active">
                <i class="ri-layout-2-fill"></i>
                <p>Dashboard</p>
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="icofont-settings-alt"></i>
                <p>Gerenciamento</p>
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="icofont-law-alt-2"></i>
                <p>Balancete</p>
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="icofont-database"></i>
                <p>Estoque</p>
              </a>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->

      <nav class="container mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-header">Ações rapidas</li>

          <li class="nav-item">
            <a
              href="#"
              data-toggle="modal"
              data-target="#exampleModalScrollable"
              class="nav-link btn-success text-white"
            >
              <i class="icofont-plus" aria-hidden="true"></i>
              <p>Vendas</p>
            </a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link btn-danger text-white">
              <i class="icofont-minus" aria-hidden="true"></i>
              <p>Compras</p>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    <ModalOutputFinances />
  </div>
</template>

<script>
import ModalOutputFinances from "./ModalOutputFinances";

export default {
  name: "Sidebar",
  components: {
    ModalOutputFinances,
  },
  methods: {
    inputNote() {},
  },
};
</script>

<style lang="scss">
.sidebar {
  height: calc(80% - (3.5rem + 1px)) !important;
}

.main-sidebar i {
  padding: 0 6px;
}
</style>