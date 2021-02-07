<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/foods">Foods</router-link>
            </li>
            </ul>

            <ul class="navbar-nav">
                <li class="nav-item ml-auto">
                   <router-link class="nav-link" to="/keranjang">Keranjang
                    <b-icon-bag></b-icon-bag>
                    <span class="badge badge-warning">{{update ? update.length : jmlPesanan.length}}</span>
                   </router-link>
                </li>
            </ul>
        </div>
 </div>
</nav> -->
  <div>
    <b-navbar toggleable="lg">
      <div class="container">
        <b-navbar-brand href="#">Kulineran</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/home">Home</b-nav-item>
            <b-nav-item to="/foods">Foods</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link class="nav-link" to="/keranjang"
              >Keranjang
              <b-icon-bag></b-icon-bag>
              <span class="badge badge-warning">{{
                update ? update.length : jmlPesanan.length
              }}</span>
            </router-link>
          </b-navbar-nav>
          <b-navbar-nav>
            <router-link class="nav-link" to="/login"
              >Logout
              <b-icon-lock></b-icon-lock>
            </router-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  data() {
    return {
      jmlPesanan: [],
    };
  },
  methods: {
    setJmlPesanan(data) {
      this.jmlPesanan = data;
    },
  },
  props: ["update"],
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJmlPesanan(response.data))
      .catch((error) => console.log(error));
    // .then(function (response) {
    //   // handle success
    //   this.setProduct(response.data)
    //   console.log("Berhasil" , response);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
  },
};
</script>

<style scoped>
</style>

