<template>
  <div class="home">
    <!-- <Navbar /> -->
    <div class="container">
      <Hero />

      <section>
        <div class="row mb-5 mt-4">
          <div class="col-md-2">
            <h3>Best <strong>Foods</strong></h3>
          </div>
          <div class="col-md-6">
            <router-link  class="btn btn-md btn-outline-success" to="/foods">
              <b-icon-eye></b-icon-eye> View All Foods
            </router-link>
          </div>
        </div>
      </section>

      <section>
        <div class="row mb-5">
          <div class="col-md-4" v-for="prod in product" :key="prod.id">
            <CardProduk :prod="prod"/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduk from "@/components/CardProduk.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    // Navbar,
    Hero,
    CardProduk,
  },
  data() {
    return {
      product: [],
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProduct(response.data))
       .catch((error) => console.log(error))
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
