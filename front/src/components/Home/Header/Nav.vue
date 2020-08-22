<template>
  <nav class="navbar navbar-expand-lg navbar-light nav-menu">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto align-items-center">
        <li
          class="nav-item"
          :class="[item.name == 'Home' ? 'active': '']"
          v-for="item in listLinksNav"
          :key="item.name"
        >
          <a :href="item.redirect" class="nav-link">{{item.name}}</a>
        </li>

        <li class="nav-item btn get-started">
          <router-link class="text-home-white bg-primary" :to="ROUTES.LOGIN_DASHBOARD.path">Entrar</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ROUTES } from "@/config/constants";

export default {
  name: "Nav",
  props: {
    theme: String,
  },
  data: function () {
    return {
      listLinksNav: [
        { name: "Home", redirect: "#header", isActive: false },
        { name: "Sobre nós", redirect: "#about", isActive: false },
        { name: "Servicos", redirect: "#services", isActive: false },
        { name: "Recursos", redirect: "#features", isActive: false },
        // { name: "Time", redirect: "#team", isActive: false },
        { name: "Preços", redirect: "#pricing", isActive: false },
        { name: "Contato", redirect: "#contact", isActive: false },
      ],
      ROUTES,
    };
  },
  methods: {
    setLinkActive(name) {
      this.listLinksNav.forEach((i) => {
        i.isActive = i.name === name;
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/_variables.scss";

.navbar-light .navbar-nav .nav-link {
  color: $home-black;
}

/* Mobile Navigation */
.nav-menu {
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: $home-body-bg !important;
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  > ul {
    > li {
      position: relative;
      white-space: nowrap;
      float: left;
      color: $home-black;

      &:hover {
        > a {
          color: $primary;
          text-decoration: none;
        }
      }

      a {
        display: block;
        position: relative;
        color: $home-black;
        padding: 8px 0 12px 25px;
        transition: 0.3s;
        font-size: 14px;
        font-family: "Open Sans", sans-serif;
        &:hover {
          color: $primary;
          text-decoration: none;
        }
      }

      .active {
        > a {
          color: $primary;
          text-decoration: none;
        }
      }
    }
  }

  .get-started {
    a {
      background: $primary;
      color: $home-white;
      border-radius: 50px;
      margin: 0 0 0 30px;
      padding: 10px 25px;
      &:hover {
        background: $primary-fade;
        color: $home-white;
      }
    }
  }
  .drop-down {
    ul {
      display: block;
      position: absolute;
      left: 25px;
      top: calc(100% + 30px);
      z-index: 99;
      opacity: 0;
      visibility: hidden;
      padding: 10px 0;
      color: $home-white;
      box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
      transition: ease all 0.3s;
      border-radius: 5px;
      a {
        padding: 10px 20px;
        font-size: 14px;
        text-transform: none;
        color: $home-black;
        &:hover {
          color: $primary;
        }
      }
      .active {
        > a {
          color: $primary;
        }
      }
      li {
        &:hover {
          > a {
            color: $primary;
          }
        }
      }
    }
    &:hover {
      > ul {
        opacity: 1;
        top: 100%;
        visibility: visible;
      }
    }
    li {
      min-width: 180px;
      position: relative;
    }
    > a {
      &:after {
        content: "\ea99";
        font-family: IcoFont;
        padding-left: 5px;
      }
    }
    .drop-down {
      ul {
        top: 0;
        left: calc(100% - 30px);
      }
      &:hover {
        > ul {
          opacity: 1;
          top: 0;
          left: 100%;
        }
      }
      > a {
        padding-right: 35px;
        &:after {
          content: "\eaa0";
          font-family: IcoFont;
          position: absolute;
          right: 15px;
        }
      }
    }
  }
}
.mobile-nav-toggle {
  position: fixed;
  right: 15px;
  top: 15px;
  z-index: 9998;
  border: 0;
  background: none;
  font-size: 24px;
  transition: all 0.4s;
  outline: none !important;
  line-height: 1;
  cursor: pointer;
  text-align: right;
  i {
    color: $home-black;
  }
}
.mobile-nav {
  position: fixed;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  z-index: 9999;
  overflow-y: auto;
  background: $home-white;
  transition: ease-in-out 0.2s;
  opacity: 0;
  visibility: hidden;
  border-radius: 10px;
  padding: 10px 0;
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a {
    display: block;
    position: relative;
    color: $home-black;
    padding: 10px 20px;
    font-weight: 500;
    outline: none;
    &:hover {
      color: $primary;
      text-decoration: none;
    }
  }
  .active {
    > a {
      color: $primary;
      text-decoration: none;
    }
  }
  li {
    &:hover {
      > a {
        color: $primary;
        text-decoration: none;
      }
    }
  }
  .get-started {
    text-align: center;
    margin-top: 10px;
    a {
      background: $primary;
      color: $home-white;
      border-radius: 50px;
      margin: 0 15px;
      padding: 10px 30px;
      display: inline-block;
      &:hover {
        background: $primary;
        color: $home-white;
      }
    }
  }
  .drop-down {
    > a {
      &:after {
        content: "\ea99";
        font-family: IcoFont;
        padding-left: 10px;
        position: absolute;
        right: 15px;
      }
      padding-right: 35px;
    }
    ul {
      display: none;
      overflow: hidden;
    }
    li {
      padding-left: 20px;
    }
  }
  .active.drop-down {
    > a {
      &:after {
        content: "\eaa1";
      }
    }
  }
}
.mobile-nav-overly {
  width: 100%;
  height: 100%;
  z-index: 9997;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(9, 9, 9, 0.6);
  overflow: hidden;
  display: none;
  transition: ease-in-out 0.2s;
}
.mobile-nav-active {
  overflow: hidden;
  .mobile-nav {
    opacity: 1;
    visibility: visible;
  }
  .mobile-nav-toggle {
    i {
      color: $home-white;
    }
  }
}
@media (max-width: 1366px) {
  .nav-menu {
    .drop-down {
      .drop-down {
        ul {
          left: -90%;
        }
        &:hover {
          > ul {
            left: -100%;
          }
        }
        > a {
          &:after {
            content: "\ea9d";
          }
        }
      }
    }
  }
}
</style>