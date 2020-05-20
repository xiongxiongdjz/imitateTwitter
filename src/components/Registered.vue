<template>
  <div class="registered">
    <div class="piece">
      <header class="header">
        <div class="header-1"></div>
        <div class="header-2"></div>
        <div class="header-3"></div>
      </header>
      <section class="section">
        <div class="section-1">
          <h2>你好! 请问你叫什么名字?</h2>
          <el-input class="input-1" v-model="userName" autofocus placeholder="全名"></el-input>
        </div>
      </section>
    </div>
    <footer class="footer">
      <div class="footer-1">
        <button :class="{active: status, noactive: !status}">下一步</button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ""
    };
  },
  methods: {},
  computed: {
    status() {
      if (this.userName != "") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .registered {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.registered {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

/deep/ .piece {
  display: flex;
  flex-direction: column;
}

.piece {
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
.header-2,
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

/deep/.section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin: 1rem 0.5rem 0.5rem 0.5rem;
}

/deep/.section-1 {
  padding: 0 0.5rem 0 0.5rem;
  max-width: 30rem;
}

.section-1 {
  padding: 0 0.5rem 0 0.5rem;
  max-width: 30rem;
}

/deep/.section-1 .input-1 .el-input__inner {
  margin-top: 1rem;
  border: none;
  border-bottom: 1px solid rgb(139, 139, 139);
  border-radius: 0;
  caret-color: #1da1f2;
}

/deep/.section-1 .input-1 .el-input__inner:focus {
  border-bottom: 2px solid #1da1f2;
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