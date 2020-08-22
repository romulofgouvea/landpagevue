<template>
  <section id="contact" class="contact">
    <div class="container text-home-black">
      <div class="section-title" data-aos="fade-up">
        <h2 class="text-home-black">Contato</h2>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="contact-about">
            <h3 class="text-home-black">LH Consultoria</h3>
            <p>Produzindo valor para cada cliente em especial!</p>
            <div class="social-links">
              <!-- <a href="#" class="twitter">
                <i class="icofont-twitter"></i>
              </a>
              <a href="#" class="facebook">
                <i class="icofont-facebook"></i>
              </a>-->
              <a
                href="https://www.instagram.com/lhconsultoriaempresarial"
                target="_blank"
                class="instagram"
              >
                <i class="icofont-instagram"></i>
              </a>
              <!-- <a href="#" class="linkedin">
                <i class="icofont-linkedin"></i>
              </a>-->
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
          <!-- <div class="info">
            <div>
              <i class="ri-map-pin-line"></i>
              <p>
                Rua Moacir Costa Lima, 132
                <br />Padre Dehon
              </p>
            </div>

            <div>
              <i class="ri-mail-send-line"></i>
              <p>support@consultorialh.com.br</p>
            </div>

            <div>
              <i class="ri-phone-line"></i>
              <p>+55 3855-9900</p>
            </div>
          </div> -->
        </div>

        <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
          <form id="formHomeContact" class="php-email-form">
            <div class="form-group">
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Seu nome"
                :class="{ 'is-invalid': submitted && $v.form.name.$error }"
                v-model="form.name"
                required
              />
              <div v-if="submitted && $v.form.name.$error" class="invalid-feedback">
                <span v-if="!$v.form.name.required">* O nome é obrigatório.</span>
                <span v-if="!$v.form.name.minLength">* O nome deve ter no minimo 6 caracteres.</span>
              </div>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Seu Email"
                :class="{ 'is-invalid': submitted && $v.form.email.$error }"
                v-model="form.email"
                required
              />
              <div v-if="submitted && $v.form.email.$error" class="invalid-feedback">
                <span v-if="!$v.form.email.required">* Email é obrigatório.</span>
                <span v-if="!$v.form.email.email">* Email é inválido.</span>
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Assunto"
                :class="{ 'is-invalid': submitted && $v.form.subject.$error }"
                v-model="form.subject"
                required
              />
              <div v-if="submitted && $v.form.subject.$error" class="invalid-feedback">
                <span v-if="!$v.form.subject.required">* O assunto é obrigatório.</span>
                <span v-if="!$v.form.subject.minLength">* O assunto deve ter no minimo 6 caracteres</span>
              </div>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                placeholder="Menssagem"
                :class="{ 'is-invalid': submitted && $v.form.message.$error }"
                v-model="form.message"
                required
              ></textarea>
              <div v-if="submitted && $v.form.message.$error" class="invalid-feedback">
                <span v-if="!$v.form.message.required">* A mensagem é obrigatória.</span>
                <span v-if="!$v.form.message.minLength">* A mensagem deve ter no minimo 6 caracteres</span>
              </div>
            </div>
            <div class="mb-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Sua mensagem foi enviada. Obrigado!</div>
            </div>
            <div class="text-center">
              <button
                @click.stop.prevent="handleSubmit"
                class="btn btn-lg btn-primary btn-login text-uppercase font-weight-bold mt-2"
              >Enviar mensagem</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "Contact",
  data: function () {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      submitted: false,
    };
  },
  validations: {
    form: {
      name: { required, minLength: minLength(6) },
      email: { required, email },
      subject: { required, minLength: minLength(6) },
      message: { required, minLength: minLength(6) },
    },
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true;

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

.contact {
  background-color: $home-body-bg;
  .contact-about {
    color: $home-white;
    h3 {
      font-size: 28px;
      margin: 0 0 10px 0;
      padding: 0;
      line-height: 1;
      font-weight: 700;
      letter-spacing: 1px;
      color: $home-black;
    }
    p {
      font-size: 14px;
      line-height: 24px;
      font-family: "Raleway", sans-serif;
      color: #888;
    }
  }
  .social-links {
    padding-bottom: 20px;
    a {
      font-size: 18px;
      display: inline-block;
      background: $home-white;
      color: $primary;
      line-height: 1;
      padding: 8px 0;
      margin-right: 4px;
      border-radius: 50%;
      text-align: center;
      width: 36px;
      height: 36px;
      transition: 0.3s;
      border: 1px solid $primary;
      &:hover {
        background: $primary;
        color: $home-white;
        text-decoration: none;
      }
    }
  }
  .info {
    color: $home-black;
    i {
      font-size: 32px;
      color: $primary;
      float: left;
      line-height: 1;
    }
    p {
      padding: 0 0 10px 42px;
      line-height: 28px;
      font-size: 14px;
    }
  }
  .php-email-form {
    .validate {
      display: none;
      color: red;
      margin: 0 0 15px 0;
      font-weight: 400;
      font-size: 13px;
    }
    .error-message {
      display: none;
      color: $home-white;
      background: #ed3c0d;
      text-align: left;
      padding: 15px;
      font-weight: 600;
      br {
        & + br {
          margin-top: 25px;
        }
      }
    }
    .sent-message {
      display: none;
      color: $home-white;
      background: #18d26e;
      text-align: center;
      padding: 15px;
      font-weight: 600;
    }
    .loading {
      display: none;
      background: $home-white;
      text-align: center;
      padding: 15px;
      &:before {
        content: "";
        display: inline-block;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        margin: 0 10px -6px 0;
        border: 3px solid #18d26e;
        border-top-color: #eee;
        -webkit-animation: animate-loading 1s linear infinite;
        animation: animate-loading 1s linear infinite;
      }
    }
  }
}
.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 3px;
  box-shadow: none;
  font-size: 14px;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>