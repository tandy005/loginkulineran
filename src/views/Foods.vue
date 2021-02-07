<template>
  <div class="Foods">
    <!-- <Navbar /> -->
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar Makanan</h2>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-4 mb-3">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search Menu"
              aria-label="Search Menu"
              aria-describedby="button-addon2"
              @keyup="setSearch"
            />
            <div class="input-group-append">
              <span class="input-group-text"  id="basic-addon1">Cari<b-icon-search></b-icon-search></span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-md-4 mb-3" v-for="prod in product" :key="prod.id">
          <CardProduk :prod="prod" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar.vue'
import axios from "axios";
import CardProduk from "@/components/CardProduk.vue";
export default {
  name: "Foods",
  components: {
    // Navbar
    CardProduk,
  },
  data() {
    return {
      product: [],
      search: "",
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    setSearch() {
      axios
        .get("http://localhost:3000/products?q="+this.search)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProduct(response.data))
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

.input-group-text{
  background-color: rgb(155, 235, 155);
}
</style>