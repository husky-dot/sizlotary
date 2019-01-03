<template>
  <div id="app">
    <keep-alive exclude ="">
      <transition name="van-fade">
        <router-view/>
      </transition>
    </keep-alive>
    <router-view name="menu" slot="bottom"/>
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
