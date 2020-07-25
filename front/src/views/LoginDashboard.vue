<template>
  <div class="container-fluid">
    <div class="row no-gutter">
      <div class="d-none d-md-flex col-md-4 col-lg-7 bg-image"></div>
      <div class="col-md-8 col-lg-5">
        <div class="login d-flex align-items-center py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-9 col-lg-8 mx-auto">
                <h3
                  class="login-heading mb-4"
                >{{!forgotPassword ? "Seja bem vindo!": "Recuperação de senha"}}</h3>
                <form id="formLoginDasboard">
                  <div class="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      class="form-control"
                      placeholder="Digite seu email"
                      :class="{ 'is-invalid': submitted && $v.form.email.$error }"
                      required
                      autofocus
                      v-model="form.email"
                    />
                    <div v-if="submitted && $v.form.email.$error" class="invalid-feedback">
                      <span v-if="!$v.form.email.required">*Email é obrigatório</span>
                      <span v-if="!$v.form.email.email">*Email inválido</span>
                    </div>
                  </div>

                  <div class="form-label-group" v-if="!forgotPassword">
                    <input
                      type="password"
                      id="inputPassword"
                      class="form-control"
                      :class="{ 'is-invalid': submitted && $v.form.password.$error }"
                      placeholder="Digite sua senha"
                      required
                      v-model="form.password"
                    />
                    <div v-if="submitted && $v.form.password.$error" class="invalid-feedback">
                      <span v-if="!$v.form.password.required">*Senha é obrigatória</span>
                      <span
                        v-if="!$v.form.password.minLength"
                      >*A senha deve ter no minnimo 6 caracteres</span>
                    </div>
                  </div>

                  <!-- <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customCheck1" />
                    <label class="custom-control-label" for="customCheck1">Lembrar senha</label>
                  </div>-->
                  <button
                    class="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                    @click.stop.prevent="handleSubmit"
                  >{{forgotPassword ? "Recuperar minha senha": "Entrar"}}</button>
                  <div class="text-center">
                    <a
                      class="small"
                      @click.stop.prevent="handleClickForgotPasswordOrLogin"
                    >{{!forgotPassword ? "Esqueci minha senha": "Lembrei, quero entrar"}}</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "LoginDashboard",
  data: function () {
    return {
      form: {
        email: "",
        password: "",
      },
      submitted: false,
      forgotPassword: false,
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
    },
  },
  methods: {
    handleClickForgotPasswordOrLogin() {
      this.forgotPassword = !this.forgotPassword;
    },
    handleSubmit(e) {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.form, e));
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";

:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
}

.login,
.image {
  min-height: 100vh;
}

.bg-image {
  background-image: url("../assets/images/logo-lh.png");
  background-size: cover;
  background-position: center;
  background-color: $logo-color-background;
  background-size: 270px 200px;
  background-repeat: no-repeat;
}

.login-heading {
  font-weight: 300;
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
  border-radius: 2rem;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: var(--input-padding-y) var(--input-padding-x);
  height: auto;
  border-radius: 2rem;
}
</style>