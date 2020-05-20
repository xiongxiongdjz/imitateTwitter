<template>
  <div class="login" @keyup.enter="userLogin">
    <section class="section">
      <header class="header">
        <div class="header-1"></div>
        <div class="header-2"></div>
        <div class="header-3">
          <span @click="jupmRegisteredPage">注册</span>
          <i class="el-icon-more"></i>
        </div>
      </header>
      <Content ref="mycontent" class="content" />
    </section>
    <footer class="footer">
      <div class="footer-1">
        <button @click="userLogin" :class="{active: active, noactive: !active}">登录</button>
      </div>
    </footer>
  </div>
</template>

<script>
import Content from "@/components/subassembly/content";
export default {
  data() {
    return {
      active: false
    };
  },
  methods: {
    userLogin() {
      // 调用子组件里的方法
      this.$refs.mycontent.userLogin();
    },
    // 跳转注册页面
    jupmRegisteredPage() {
      this.$router.replace("/Registered");
    }
  },
  components: {
    Content
  }
};
</script>

<style lang="scss" scoped>
/deep/ .login {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

/deep/ .section {
  display: flex;
  flex-direction: column;
}

.section {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/deep/.header {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-1,
.header-3 {
  width: 33.33%;
}

.header-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: url("../assets/twitter-logo.png") no-repeat;
  background-size: cover;
}

.header-3 {
  display: flex;
  justify-content: flex-end;
  color: #1da1f2;
  font-weight: bold;
}

.header-3 span,
.header-3 i {
  margin-right: 2rem;
}

.header-3 i {
  margin-right: 1rem;
}

.footer {
  width: 100%;
}

.footer-1 {
  height: 3.1rem;
  border-top: 1px solid rgb(139, 139, 139);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.footer-1 button {
  margin-right: 0.5rem;
  color: #fff;
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
  border-radius: 5%;
  border: none;
  outline: none;
}

.footer-1 .active {
  background: #1da1f2;
}

.footer-1 .noactive {
  background: rgb(110, 189, 238);
}
</style>