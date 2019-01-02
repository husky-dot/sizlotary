<template>
  <div id="app">
    <div class="app-main">
      <transition name="van-fade">
        <router-view/>
      </transition>
    </div>
    <div class="tab-bar van-hairline--top">
      <router-link to="/" tag="div">
        <span class="tab-label">首页</span>
      </router-link>
      <router-link to="/about" tag="div">
        <span class="tab-label">我的押码</span>
      </router-link>
      <router-link to="/about" tag="div">
        <span class="tab-label">个人中心</span>
      </router-link>
    </div>

  </div>
</template>

<style lang="less">
  .app-main {
    height: calc(100vh - 100px)
  }
  .tab-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    div{
      flex: 1;
      text-align: center;
    }
  }
</style>
