<template>
  <div class="food-detail">
    <div class="container">
      <div class="row mt-3">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark"> Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark"> Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Foods Detail
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <img
            :src="'/assets/images/' + product.gambar"
            class="img-fluid img-fd shadow mb-3"
          />
        </div>

        <div class="col-md-6">
          <h3>{{ product.nama }}</h3>
          <p>Harga : Rp. {{ product.harga }}</p>

          <form v-on:submit.prevent>
            <div class="form-group">
              <label for="pesanan">{{ jsonpesanan.pesanan }}</label>
              <input
                type="number"
                class="form-control"
                id="pesanan"
                v-model="pesan.pesanan"
                aria-describedby="pesanan"
                placeholder="Masukan Jumlah Pesanan"
              />
            </div>
            <div class="form-group">
              <label for="keterangan">{{ jsonpesanan.keterangan }}</label>
              <input
                type="text"
                class="form-control"
                id="keterangan"
                v-model="pesan.keterangan"
                placeholder="Berikan Keterangan Jika Ada"
              />
            </div>
            <button
              type="submit"
              class="btn btn-outline-success"
              @click="tambahPesananan"
            >
              <b-icon-cart></b-icon-cart>{{ jsonpesanan.button_pesan }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import jsonpesanan from "../json/form.json";
export default {
  name: "FoodsDetail",

  data() {
    return {
      product: {},
      pesan: {},
      jsonpesanan,
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    tambahPesananan() {
      if (this.pesan.pesanan) {
        console.log(this.pesan);
        this.pesan.products = this.product;
        console.log(this.pesan.products);
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$toast.success(jsonpesanan.successadd, {
              type: "success",
              position: "top-right",
              duration: 4000,
            });
            this.$router.push({path:"/foods"})
          })
          .catch((err) =>
            this.$toast.error(err, {
              type: "error",
              position: "top-right",
              duration: 4000,
            })
          );
      }else{
        this.$toast.error(jsonpesanan.error, {
              type: "error",
              position: "top-right",
              duration: 4000,
            })
      }
    },
  },

  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
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
.breadcrumb {
  background-color: transparent;
  padding: 0;
}
.breadcrumb-item.active {
  font-weight: bold;
}
.img-fd {
  width: 85%;
}
</style>