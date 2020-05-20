<template>
  <div>
    <h2>搜索</h2>
    <footer class="footer">
      <div class="footer-1">
        <button @click="signOut">
          <div></div>
        </button>
      </div>
      <div class="footer-2"></div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    // 退出登录
    signOut() {
      localStorage.removeItem("userAccount");
      localStorage.removeItem("userPassword");
      this.$router.replace("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 2%;
  right: 3.5%;
  max-height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.footer-1 {
  display: flex;
  justify-content: flex-end;
}

.footer-1 button {
  background: #1da1f2;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  outline: none;
  border: none;
  box-shadow: 0.15rem 0.3rem 0.8rem rgb(151, 151, 151);
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-1 button div {
  background: url(../../assets/icon/newsIcon.svg) no-repeat;
  background-size: contain;
  width: 1.5rem;
  height: 1.5rem;
}
</style>