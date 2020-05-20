<template>
  <div class="layout">
    <section class="section">
      <div class="layout-logo"></div>
      <h1 class="layout-h1-1">欢迎使用</h1>
      <h1 class="layout-h1-2">Twitter</h1>
      <h2 class="layout-h2">查看世界各地实时发生的事情</h2>
      <div class="layout-button">
        <button @click="registeredJump">注册</button>
        <button @click="loginJump">登录</button>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 注册页面跳转
    registeredJump() {
      this.$router.replace("/Registered");
    },
    // 登录页面跳转
    loginJump() {
      this.$router.replace("/LogIn");
    }
  },
  created() {
    if (
      JSON.parse(localStorage.getItem("userAccount")) != null &&
      JSON.parse(localStorage.getItem("userPassword")) != null
    ) {
      this.$router.replace("/profile");
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  background: #1da1f2;
}

.section {
  margin-top: 6rem;
}

.layout-logo {
  width: 4.8rem;
  height: 4.8rem;
  margin-bottom: 2.5rem;
  background: url("../assets/twitter-icon-square-logo-preview.png") no-repeat;
  background-size: cover;
}

.layout-h1-1,
.layout-h1-2 {
  margin-bottom: 1rem;
  font-size: 3rem;
}

.layout-h2 {
  margin-bottom: 5rem;
}

.layout-button {
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.layout-button button {
  width: 10rem;
  border-radius: 0.3rem;
  border: 1.5px solid #fff;
  padding: 0.6rem;
  background: #1da1f2;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
}

.layout-button button:nth-child(1) {
  background: #fff;
  color: #1da1f2;
}

.layout-button button:active {
  background: #50b7f7;
}

.layout-button button:nth-child(1):active {
  background: rgb(241, 241, 241);
}
</style>