<template>
  <div class="profile">
    <div>
      <header class="header" v-show="true">
        <div class="header-1" @click="menuAppear">
          <div class="userAvatar"></div>
        </div>
        <div class="header-2">
          <h2>{{$route.meta.title}}</h2>
        </div>
      </header>
      <nav class="nav">
        <ul>
          <router-link to="/profile/home">
            <div class="icon home-icon"></div>
          </router-link>
          <router-link to="/profile/search">
            <div class="icon search-icon"></div>
          </router-link>
          <router-link to="/profile/notice">
            <div class="icon notice-icon"></div>
          </router-link>
          <router-link to="/profile/private">
            <div class="icon private-icon"></div>
          </router-link>
        </ul>
      </nav>
    </div>
    <section class="section">
      <router-view />
    </section>
    <div
      class="shadow"
      :class="shadow ? 'shadow-display' : 'shadow-not-display'"
      @click="menuDisappear"
    ></div>
    <div class="menu" :class="shadow ? 'menu-display' : 'menu-not-display'">
      <div class="menu-1">
        <div class="menu-1-userAvatar">
          <div></div>
        </div>
        <div class="menu-1-userMessage">
          <ul>
            <li>
              <p>{{userName}}</p>
              <p>{{userEmail}}</p>
            </li>
            <li>
              <i class="el-icon-caret-bottom"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-2">
        <ul>
          <li>
            <i></i>
            <p>个人资料</p>
          </li>
          <li>
            <i></i>
            <p>精选内容</p>
          </li>
          <li>
            <i></i>
            <p>我的瞬间</p>
          </li>
          <li>
            <i></i>
            <p>列表</p>
          </li>
          <li>
            <i></i>
            <p>链接</p>
          </li>
        </ul>
      </div>
      <div class="menu-3">
        <ul>
          <li>
            夜间模式
            <el-switch v-model="mode" active-color="#13ce66" />
          </li>
          <li>二维码</li>
          <li>设置和隐私</li>
          <li>帮助中心</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      selected: "",
      shadow: false,
      userName: "凶凶大家长",
      userEmail: "@xiongxiongdjz",
      mode: false
    };
  },
  methods: {
    // 触发侧边栏
    menuAppear() {
      this.shadow = true;
    },
    // 隐藏侧边栏
    menuDisappear() {
      this.shadow = false;
    }
  },
  mounted() {
    if (
      JSON.parse(localStorage.getItem("userAccount")) == null &&
      JSON.parse(localStorage.getItem("userPassword")) == null
    ) {
      this.$router.replace("/Lnitial");
    }
  }
};
</script>

<style lang="scss" scoped>
.profile {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header {
  height: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.header-1 {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-1 .userAvatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: url(../assets/userAvatar.jpg) no-repeat;
  background-size: cover;
}

.header-2 {
  width: 76%;
  height: 3rem;
  margin-left: 1rem;
  display: flex;
  align-items: flex-end;
}

.header-2 h2 {
  padding: 0rem 0 0.8rem 0.8rem;
  font-size: 1.2rem;
}

.nav {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 2.8rem;
  box-shadow: 0.1rem 0.1rem 0.1rem #aaaaaa;
  border-bottom: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  width: 25%;
  height: 3rem;
  border-bottom: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 2rem;
  height: 2rem;
}

.home-icon {
  background: url(../assets/icon/homeIcon.svg) no-repeat;
  background-size: cover;
}

.search-icon {
  background: url(../assets/icon/searchIcon.svg) no-repeat;
  background-size: cover;
}

.notice-icon {
  background: url(../assets/icon/noticeIcon.svg) no-repeat;
  background-size: contain;
}

.private-icon {
  background: url(../assets/icon/privateIcon.svg) no-repeat;
  background-size: contain;
}

/////////
.router-link-active {
  border-bottom: 3px solid #0488da;

  .home-icon {
    background: url(../assets/icon/homeIcon2.svg) no-repeat;
    background-size: cover;
  }

  .search-icon {
    background: url(../assets/icon/searchIcon2.svg) no-repeat;
    background-size: cover;
  }

  .notice-icon {
    background: url(../assets/icon/noticeIcon2.svg) no-repeat;
    background-size: contain;
  }

  .private-icon {
    background: url(../assets/icon/privateIcon2.svg) no-repeat;
    background-size: contain;
  }
}

.section {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.shadow {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(black, 0.6);
}

.shadow-display {
  display: block;
}

.shadow-not-display {
  display: none;
}

.menu {
  width: 84%;
  height: 100%;
  position: absolute;
  left: 0;
  transition: all 0.5s;
}

.menu-display {
  left: 0;
}

.menu-not-display {
  left: -100%;
}

.menu .menu-1,
.menu .menu-2,
.menu .menu-3 {
  width: 100%;
}

.menu .menu-1 {
  background: #1da1f2;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.menu .menu-1 .menu-1-userAvatar {
  width: 90%;
  display: flex;
  align-items: flex-end;
}

.menu .menu-1 .menu-1-userAvatar div {
  width: 4rem;
  height: 4rem;
  background: url(../assets/userAvatar.jpg) no-repeat;
  background-size: contain;
  border-radius: 50%;
}

.menu .menu-1 .menu-1-userMessage {
  width: 90%;
  height: 40%;
  display: flex;
  justify-content: center;
}

.menu .menu-1 .menu-1-userMessage ul {
  width: 100%;
  list-style: none;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu .menu-1 .menu-1-userMessage ul,
.menu .menu-1 .menu-1-userMessage ul p {
  margin: 0;
  padding: 0;
}

.menu .menu-2 {
  background: #fff;
  height: 35%;
}

.menu .menu-2 ul,
.menu .menu-2 ul p {
  margin: 0;
  padding: 0;
}

.menu .menu-2 ul {
  height: 99%;
  list-style: none;
  border-bottom: 0.5px solid rgb(129, 129, 129);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu .menu-2 ul li {
  width: 90%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.menu .menu-2 ul li i {
  background: url();
}

.menu .menu-2 ul li i {
  margin-right: 2rem;
}

.menu .menu-3 {
  background: #fff;
  height: 40%;
  display: flex;
  justify-content: center;
}

.menu .menu-3 ul {
  width: 90%;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 70%;
  display: flex;
  flex-direction: column;
}

.menu .menu-3 ul li {
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>