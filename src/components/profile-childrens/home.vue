<template>
  <div>
    <section class="section">
      <div class="error" v-show="!normal">
        <h2>呃... 出错了。</h2>
        <p>这里居然一条推文都没有。请再次检查网络连接并重试。</p>
        <button @click="refresh">重试</button>
      </div>
      <div class="content" v-show="normal">主页内容</div>
    </section>
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
  data() {
    return {
      normal: false
    };
  },
  methods: {
    // 刷新
    refresh() {
      this.normal = true;
    },
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
.section {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.error-display {
  display: block;
}

.error-not-display {
  display: none;
}

.section .error {
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section .error p {
  text-align: center;
  color: #868686;
}

.section .error button {
  background-color: #fff;
  color: #3ea5e6;
  border: none;
  border: 1.2px solid #3ea5e6;
  border-radius: 0.4rem;
  outline: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  font-weight: bolder;
  font-size: 1.1rem;
}

.content-display {
  display: block;
}

.content-not-display {
  display: none;
}

.content {
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

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