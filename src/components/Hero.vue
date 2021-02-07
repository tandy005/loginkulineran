<template>
  <div class="hero">
    <!-- dekstop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Delicious Foods</strong> <br />In Your Today</h2>
              <p>Ayo Pilih Menu Makanmu Untuk Hari ini</p>
              <router-link class="btn btn-lg btn-success btn-pesan" to="/foods">
                <b-icon-arrow-bar-right></b-icon-arrow-bar-right> Pesan Sekarang
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/1.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/img/1.png" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Delicious Foods</strong> <br />In Your Today</h2>
              <p>Ayo Pilih Menu Makanmu Untuk Hari ini</p>
              <router-link class="btn btn-lg btn-success btn-pesan" to="/foods">
                <b-icon-arrow-bar-right></b-icon-arrow-bar-right> Pesan Sekarang
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>