<template>
  <div class="card shadow cardproduk" style="width: 18rem">
    <img :src="'assets/images/' + prod.gambar" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ prod.nama }}</h5>
      <p class="card-text">
       Harga : Rp.{{ prod.harga }}
      </p>
      <router-link class="btn btn-sm btn-success btn-pesan" :to="'/foods/' + prod.id">
        <b-icon-cart></b-icon-cart> Pesan Sekarang
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["prod"],
};
</script>

<style>
</style>