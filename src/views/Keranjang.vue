<template>
  <div class="food-detail">
    <!-- <Navbar :update="dataPesanan"/> -->
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
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <h2>Pesanan Saya</h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Nama Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah Pesanan</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pesanans, index) in dataPesanan" :key="pesanans.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'/assets/images/' + pesanans.products.gambar"
                      class="img-fluid img-fd shadow mb-3"
                      width="100px"
                    />
                  </td>
                  <td>{{ pesanans.products.nama }}</td>
                  <td>{{ pesanans.keterangan ? pesanans.keterangan : "-" }}</td>
                  <td>{{ pesanans.pesanan }}</td>
                  <td>Rp. {{ pesanans.products.harga }}</td>
                  <td>
                    <strong>
                      RP.
                      {{ pesanans.products.harga * pesanans.pesanan }}</strong
                    >
                  </td>
                  <td>
                    <span class="badge badge-danger">
                      <b-icon-trash
                        @click="hapusPesanan(pesanans.id)"
                      ></b-icon-trash>
                    </span>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" class="text-right">
                    <strong>Total Harga</strong>
                  </td>
                  <td>
                    <strong>RP . {{ totalHarga }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row justify-content-end">
        <div class="col-md-4">
          <form>
            <div class="form-group">
              <label for="nama">Nama</label>
              <input
                type="text"
                class="form-control"
                id="nama"
                v-model="pesan.nama"
              />
            </div>
            <div class="form-group">
              <label for="nomeja">Nomer Meja</label>
              <input
                type="number"
                class="form-control"
                id="nomeja"
                v-model="pesan.nomeja"
              />
            </div>
            <button
              type="submit"
              class="btn btn-success float-left"
              @click="setPesan()"
            >
              Check out
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import Navbar from '../components/Navbar.vue';
export default {
  //   components: { Navbar },
  name: "Keranjang",

  data() {
    return {
      dataPesanan: [],
      pesan: {},
    };
  },
  methods: {
    setPesanan(data) {
      this.dataPesanan = data;
    },
    hapusPesanan(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          // console.log(res)
          this.$router.push({ path: "/keranjang" });
          this.$toast.success("Item Dihapus", {
            type: "success",
            position: "top-right",
            duration: 4000,
          });
          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setPesanan(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    setPesan() {
      this.pesan.keranjangs = this.dataPesanan;
      console.log(this.pesan);
      if (this.pesan.nomeja && this.pesan.nama) {
        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {
            this.keranjangs.map(function (item) {
              return axios
              .delete("http://localhost:3000/keranjangs/" + item.id);
            });
            this.$router.push({ path: "/suksess" });
            this.$toast.success("Berhasil Dipesan", {
              type: "success",
              position: "top-right",
              duration: 4000,
            });
          })
          .catch((error) => console.log(error));
      } else {
        this.$toast.error("Nama dan Nomeja Harus Diisi", {
          type: "error",
          position: "top-right",
          duration: 4000,
        });
      }
    },
  },

  mounted() {
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
  computed: {
    totalHarga() {
      return this.dataPesanan.reduce(function (items, data) {
        return items + data.products.harga * data.pesanan;
      }, 0);
    },
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
</style>