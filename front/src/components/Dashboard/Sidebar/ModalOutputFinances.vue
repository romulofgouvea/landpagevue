<template>
  <div
    class="modal fade"
    id="exampleModalScrollable"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalScrollableTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalScrollableTitle">Saídas financeiras</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-header p-2">
              <ul class="nav nav-pills">
                <li class="nav-item">
                  <a class="nav-link active" href="#dataNote" data-toggle="tab">Dados da nota</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#addProducts" data-toggle="tab">Adicionar produtos</a>
                </li>
              </ul>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <div class="tab-content">
                <div class="tab-pane active" id="dataNote">
                  <form class="d-flex flex-column">
                    <div class="d-flex flex-row">
                      <div class="form-group col-6 pl-0">
                        <label for="numNote">Número</label>
                        <input type="text" id="numNote" class="form-control" />
                      </div>
                      <div class="form-group col-6 pr-0">
                        <label>Data</label>

                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="far fa-calendar-alt"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            data-inputmask-alias="datetime"
                            data-inputmask-inputformat="dd/mm/yyyy"
                            data-mask
                            im-insert="false"
                            value="25/07/2020"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="numNote">Fornecedor</label>
                      <input type="text" id="numNote" class="form-control" />
                    </div>

                    <div class="form-group">
                      <label for="inputDescription">Observações</label>
                      <textarea id="inputDescription" class="form-control" rows="4"></textarea>
                    </div>
                  </form>
                  <a
                    class="btn btn-success float-right"
                    href="#addProducts"
                    data-toggle="tab"
                  >Adicionar produtos</a>
                </div>
                <!-- /.tab-pane -->

                <div class="tab-pane" id="addProducts">
                  <div class="d-flex">
                    <div class="col-5 border-0 m-0">
                      <div class="d-flex">
                        <div class="form-group col-9 pl-0 pr-0">
                          <label for="numNote">Produto</label>
                          <input type="text" id="numNote" class="form-control" />
                        </div>
                        <div class="form-group col-3 pr-0">
                          <label for="inputEstimatedBudget">Quantidade</label>
                          <input type="number" id="inputEstimatedBudget" class="form-control" />
                        </div>
                      </div>
                      <div class="d-flex align-items-end">
                        <div class="form-group col-4 pl-0">
                          <label for="numNote">Custo (un)</label>
                          <input type="text" id="numNote" class="form-control" />
                        </div>
                        <div class="form-group col-4pl-0 pr-0">
                          <label for="inputEstimatedBudget">Custo total</label>
                          <input
                            type="number"
                            id="inputEstimatedBudget"
                            class="form-control"
                            disabled
                          />
                        </div>
                        <div class="form-group col-4 pr-0">
                          <label for="numNote">Preço venda (un)</label>
                          <input type="text" id="numNote" class="form-control" />
                        </div>
                      </div>

                      <button type="button" class="btn btn-success float-right">Adicionar</button>
                    </div>

                    <div class="col-7 border-0 m-0">
                      <div class="card">
                        <div class="card-body p-0">
                          <table class="table">
                            <thead>
                              <tr>
                                <th style="width: 10px">#</th>
                                <th>Produto</th>
                                <th class="text-center">Quantidade</th>
                                <th>Custo(un)</th>
                                <th>Custo Total</th>
                                <th>Margem</th>
                                <th>Ações</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Lapis</td>
                                <td class="text-center">2</td>
                                <td class="text-center">3</td>
                                <td class="text-center">6</td>
                                <td class="text-center">20%</td>
                                <td class="text-center">
                                  <div class="btn-group btn-group-sm">
                                    <a href="#" class="btn btn-danger">
                                      <i class="fas fa-trash"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td class="text-center">Caderno</td>
                                <td class="text-center">2</td>
                                <td class="text-center">3</td>
                                <td class="text-center">6</td>
                                <td class="text-center">20%</td>
                                <td class="text-center">
                                  <div class="btn-group btn-group-sm">
                                    <a href="#" class="btn btn-danger">
                                      <i class="fas fa-trash"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td class="text-center">Borracha</td>
                                <td class="text-center">2</td>
                                <td class="text-center">3</td>
                                <td class="text-center">6</td>
                                <td class="text-center">20%</td>
                                <td class="text-center">
                                  <div class="btn-group btn-group-sm">
                                    <a href="#" class="btn btn-danger">
                                      <i class="fas fa-trash"></i>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <!-- <div class="card-footer pb-0">
                    <div class="card-tools">
                      <ul class="pagination pagination-sm float-right">
                        <li class="page-item">
                          <a class="page-link" href="#">«</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">»</a>
                        </li>
                      </ul>
                    </div>
                        </div>-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.tab-content -->
            </div>
            <!-- /.card-body -->
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
          <button type="button" class="btn btn-success">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalOutputFinances",
};
</script>

<style>
</style>