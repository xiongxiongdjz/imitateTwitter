<template>
  <div class="search">
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
      <div class="content" v-show="normal">搜索内容</div>
    </section>
  </div>
</template>

<script>
import Menu from "@/components/subassembly/sidebar";
export default {
  data() {
    return {
      title: "",
      shadow: false,
      selected: "",
      normal: false
    };
  },
  methods: {
    // 触发侧边栏
    menuAppear() {
      this.shadow = true;
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
  components: {
    Menu
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

<style lang="scss" scoped >
.search {
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
</style>