<template>
  <div class="Login">
    <div class="container">
      <div class="row mt-5">
        <div class="col-6 d-flex">
          <form class="justify-content-center align-self-center">
            <div class="form-group">
              <label for="username">User Name</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="userlogin.username"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="userlogin.password"
              />
            </div>
            <button
              type="submit"
              class="btn btn-outline-success"
              @click="login()"
            >
              Submit
            </button>
          </form>
        </div>
        <div class="col-6">
          <img src="../assets/img/1.png" width="80%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userlogin: {
          username:"",
          password:""
      },
      user1: {
        user: "alam",
        pass: "alam123",
      },
    };
  },
  methods: {
    login() {
      if (this.userlogin.username != "" && this.userlogin.password != "") {
        if (
          this.userlogin.username == this.user1.user &&
          this.userlogin.password == this.user1.pass
        ) {
           this.$emit("authenticated", true);
          this.$router.push({ path: "/home" });
        } else {
          this.$toast.error("Username dan Password Tidak Sesuai", {
          type: "error",
          position: "top-right",
          duration: 4000,
        });
        }
      } else {
        this.$toast.error(  "Username dan Password Harus Di isi",
          {
            type: "error",
            position: "top-right",
            duration: 4000,
          });  
      }
    },
  },
};
</script>

<style>
</style>