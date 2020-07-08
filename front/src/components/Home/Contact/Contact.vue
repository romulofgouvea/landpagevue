<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2>Contato</h2>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div class="contact-about">
            <h3>LH Consultoria</h3>
            <p>Produzindo valor para cada cliente em especial!</p>
            <div class="social-links">
              <a href="#" class="twitter">
                <i class="icofont-twitter"></i>
              </a>
              <a href="#" class="facebook">
                <i class="icofont-facebook"></i>
              </a>
              <a href="#" class="instagram">
                <i class="icofont-instagram"></i>
              </a>
              <a href="#" class="linkedin">
                <i class="icofont-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
          <div class="info">
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
          </div>
        </div>

        <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="form-group">
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Seu nome"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div class="validate"></div>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Seu Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div class="validate"></div>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Assunto"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"
              />
              <div class="validate"></div>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                name="message"
                rows="5"
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Menssagem"
              ></textarea>
              <div class="validate"></div>
            </div>
            <div class="mb-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center">
              <button type="submit">Enviar mensagem</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";

.contact {
  .contact-about {
    h3 {
      font-size: 28px;
      margin: 0 0 10px 0;
      padding: 0;
      line-height: 1;
      font-weight: 700;
      letter-spacing: 1px;
      color: #222222;
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
      background: #fff;
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
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .info {
    color: #444444;
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
      color: #fff;
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
      color: #fff;
      background: #18d26e;
      text-align: center;
      padding: 15px;
      font-weight: 600;
    }
    .loading {
      display: none;
      background: #fff;
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
    button[type="submit"] {
      background: $primary;
      border: 0;
      padding: 10px 24px;
      color: #fff;
      transition: 0.4s;
      border-radius: 50px;
    }
    button[type="submit"]:hover {
      background: #2383c4;
    }
  }
}
.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 0;
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