<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
   
      <div
        v-if="authenticated"
        > <Navbar :update="dataPesanan" /></div>
    <router-view @authenticated="setAuthenticated" />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "app",
  components: {
    Footer,
    Navbar,
  },

  data() {
    return {
      authenticated: false,
      dataPesanan: [],
    };
  },
  methods: {
    setPesanan(data) {
      this.dataPesanan = data;
      axios
        .get("http://localhost:3000/keranjangs")
        .then((response) => this.setPesanan(response.data))
        .catch((error) => console.log(error));
    },
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },

  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "Login" });
    }
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setPesanan(response.data))
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
<style>
</style>
