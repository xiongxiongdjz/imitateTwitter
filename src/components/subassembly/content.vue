<template>
  <div class="content">
    <div class="content-1"></div>
    <div class="content-2">
      <h2>
        <b>登录</b> Twitter 。
      </h2>
      <el-input
        class="input-1"
        v-model="userAccount"
        autofocus
        placeholder="手机号码、邮件地址或用户名"
        @input="status"
      ></el-input>
      <el-input
        class="input-2"
        v-model="userPassword"
        show-password
        placeholder="密码"
        @input="status"
      ></el-input>
    </div>
    <div class="content-3">
      <span @click="findBack">忘记密码?</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAccount: "",
      userPassword: ""
    };
  },
  methods: {
    // 登录
    userLogin() {
      if (
        this.isEmail ||
        this.isPhoneNum ||
        (this.isValidUsername &&
          this.userPassword != "" &&
          this.userPassword != null)
      ) {
        localStorage.setItem("userAccount", JSON.stringify(this.userAccount));
        localStorage.setItem("userPassword", JSON.stringify(this.userPassword));
        this.$router.replace("/profile");
      }
    },
    // 状态
    status() {
        // 监听父组件的实例
      this.$parent.active = this.active;
    },
    // 跳转找回密码界面
    findBack() {
      this.$router.replace("/findBack");
    }
  },
  computed: {
    // 验证邮箱
    isEmail() {
      let reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/g;
      return reg.test(this.userAccount);
    },
    // 验证电话号
    isPhoneNum() {
      let reg = /^1[3|5|7|8]\d{9}$/g;
      return reg.test(this.userAccount);
    },
    // 验证用户名
    isValidUsername() {
      let reg = /^[0-9a-zA-Z|_]{6,20}$/g;
      return reg.test(this.userAccount);
    },
    // 验证父组件button :class
    active() {
      if (this.userAccount != "" && this.userPassword != "") {
        return true;
      } else if (this.userAccount == "" || this.userPassword == "") {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  margin: 1rem 0.5rem 0.5rem 0.5rem;
}

/deep/.content-2 {
  padding: 0 0.5rem 0 0.5rem;
  max-width: 30rem;
}

.content-2 {
  padding: 0 0.5rem 0 0.5rem;
  max-width: 30rem;
}

/deep/.content-2 .input-1 .el-input__inner,
/deep/.content-2 .input-2 .el-input__inner {
  margin-top: 1rem;
  border: none;
  border-bottom: 1px solid rgb(139, 139, 139);
  border-radius: 0;
  caret-color: #1da1f2;
}

/deep/.content-2 .input-1 .el-input__inner:focus,
/deep/.content-2 .input-2 .el-input__inner:focus {
  border-bottom: 2px solid #1da1f2;
}

/deep/.content-3 {
  margin-top: 2rem;
  color: rgb(97, 95, 95);
  font-weight: bolder;
  display: flex;
  justify-content: center;
}

.content-3 {
  margin-top: 2rem;
  color: rgb(97, 95, 95);
  font-weight: bolder;
  display: flex;
  justify-content: center;
}
</style>