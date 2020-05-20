<template>
  <div class="home">
    <div>
      <header class="header" v-show="true">
        <div class="header-1" @click="menuAppear">
          <div class="userAvatar"></div>
        </div>
        <div class="header-2">
          <h2>{{title}}</h2>
        </div>
      </header>
      <nav class="nav">
        <ul>
          <li
            :class="{selectedHome: selected == 'home', noSelectedHome: selected != 'home'}"
            @click="jumpHomePage"
          >
            <div class="icon"></div>
          </li>
          <li
            :class="{selectedSearch: selected == 'search', noSelectedSearch: selected != 'search'}"
            @click="jumpSearchPage"
          >
            <div class="icon"></div>
          </li>
          <li
            :class="{selectedNotice: selected == 'notice', noSelectedNotice: selected != 'notice'}"
            @click="jumpNoticePage"
          >
            <div class="icon"></div>
          </li>
          <li
            :class="{selectedPrivate: selected == 'private', noSelectedPrivate: selected != 'private'}"
            @click="jumpPrivatePage"
          >
            <div class="icon"></div>
          </li>
        </ul>
      </nav>
    </div>
    <section class="section">
      <div class="error" v-show="!normal">
        <h2>呃... 出错了。</h2>
        <p>这里居然一条推文都没有。请再次检查网络连接并重试。</p>
        <button @click="refresh">重试</button>
      </div>
      <div class="content" v-show="normal">通知内容</div>
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
      title: "",
      userName: "凶凶大家长",
      userEmail: "@xiongxiongdjz",
      normal: false,
      shadow: false,
      mode: false,
      selected: ""
    };
  },
  methods: {
    // 退出登录
    signOut() {
      localStorage.removeItem("userAccount");
      localStorage.removeItem("userPassword");
      this.$router.replace("/");
    },
    // 触发侧边栏
    menuAppear() {
      this.shadow = true;
    },
    // 隐藏侧边栏
    menuDisappear() {
      this.shadow = false;
    },
    // 刷新
    refresh() {
      this.normal = true;
    },
    // 跳转主页
    jumpHomePage() {
      if (window.location.href != "http://localhost:8080/Home") {
        this.$router.replace("/Home");
      }
    },
    // 跳转搜索页
    jumpSearchPage() {
      if (window.location.href != "http://localhost:8080/Search") {
        this.$router.replace("/Search");
      }
    },
    // 跳转通知页
    jumpNoticePage() {
      if (window.location.href != "http://localhost:8080/Notice") {
        this.$router.replace("/Notice");
      }
    },
    // 跳转私信页
    jumpPrivatePage() {
      if (window.location.href != "http://localhost:8080/Private") {
        this.$router.replace("/Private");
      }
    }
  },
  computed: {
    //
    ifPage() {}
  },
  created() {
    if (
      JSON.parse(localStorage.getItem("userAccount")) == null &&
      JSON.parse(localStorage.getItem("userPassword")) == null
    ) {
      this.$router.replace("/Lnitial");
    }
    // console.log('完整url可以用', window.location.href)
    // console.log('路由路径可以用', this.$route.path)
    // console.log('路由路径参数', this.$route.params)
    if (window.location.href == "http://localhost:8080/Home") {
      (this.title = "主页"), (this.selected = "home");
    } else if (window.location.href == "http://localhost:8080/Search") {
      (this.title = "搜索"), (this.selected = "search");
    } else if (window.location.href == "http://localhost:8080/Notice") {
      (this.title = "通知"), (this.selected = "notice");
    } else if (window.location.href == "http://localhost:8080/Private") {
      (this.title = "私信"), (this.selected = "private");
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav ul li {
  width: 25%;
  height: 2.8rem;
  border-bottom: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav ul li:hover,
.nav ul li:active {
  border-bottom: 3px solid #0488da;
}

.nav ul li:nth-child(1) .icon,
.nav ul li:nth-child(2) .icon,
.nav ul li:nth-child(3) .icon,
.nav ul li:nth-child(4) .icon {
  width: 2rem;
  height: 2rem;
}

.nav ul li:nth-child(1):hover .icon,
.nav ul li:nth-child(2):hover .icon,
.nav ul li:nth-child(3):hover .icon,
.nav ul li:nth-child(4):hover .icon {
  width: 2rem;
  height: 2rem;
}

.nav ul li:nth-child(1):hover .icon {
  background: url(../assets/icon/homeIcon2.svg) no-repeat;
  background-size: cover;
}

.nav ul li:nth-child(2):hover .icon {
  background: url(../assets/icon/searchIcon2.svg) no-repeat;
  background-size: cover;
}

.nav ul li:nth-child(3):hover .icon {
  background: url(../assets/icon/noticeIcon2.svg) no-repeat;
  background-size: contain;
}

.nav ul li:nth-child(4):hover .icon {
  background: url(../assets/icon/privateIcon2.svg) no-repeat;
  background-size: contain;
}

.nav ul .noSelectedHome,
.nav ul .noSelectedSearch,
.nav ul .noSelectedNotice,
.nav ul .noSelectedPrivate {
  border-bottom: 3px solid #fff;
}

.nav ul .selectedHome,
.nav ul .selectedSearch,
.nav ul .selectedNotice,
.nav ul .selectedPrivate {
  border-bottom: 3px solid #0488da;
}

.nav ul .noSelectedHome .icon {
  background: url(../assets/icon/homeIcon.svg) no-repeat;
  background-size: cover;
}

.nav ul .noSelectedSearch .icon {
  background: url(../assets/icon/searchIcon.svg) no-repeat;
  background-size: cover;
}

.nav ul .noSelectedNotice .icon {
  background: url(../assets/icon/noticeIcon.svg) no-repeat;
  background-size: contain;
}

.nav ul .noSelectedPrivate .icon {
  background: url(../assets/icon/privateIcon.svg) no-repeat;
  background-size: contain;
}

.nav ul .selectedHome .icon {
  background: url(../assets/icon/homeIcon2.svg) no-repeat;
  background-size: cover;
}

.nav ul .selectedHome .icon {
  background: url(../assets/icon/homeIcon2.svg) no-repeat;
  background-size: cover;
}

.nav ul .selectedSearch .icon {
  background: url(../assets/icon/searchIcon2.svg) no-repeat;
  background-size: cover;
}

.nav ul .selectedNotice .icon {
  background: url(../assets/icon/noticeIcon2.svg) no-repeat;
  background-size: contain;
}

.nav ul .selectedPrivate .icon {
  background: url(../assets/icon/privateIcon2.svg) no-repeat;
  background-size: contain;
}

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

.shadow {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(black, 0.6);
  z-index: 3;
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
  z-index: 4;
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

.footer {
  position: absolute;
  bottom: 2%;
  right: 3.5%;
  z-index: 2;
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
  background: url(../assets/icon/newsIcon.svg) no-repeat;
  background-size: contain;
  width: 1.5rem;
  height: 1.5rem;
}
</style>