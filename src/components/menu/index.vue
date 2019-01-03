<!--  -->
<template>
  <div class="common_menu van-hairline--top">
    <div class="menu-list">
      <div class="mui-item" @click="menuChange(0)">
        <p class="menu-text">开奖中心</p>
      </div>
       <div class="mui-item" @click="menuChange(1)">
        <p class="menu-text">我的押码</p>
      </div>
      <div class="mui-item" @click="menuChange(2)">
        <p class="menu-text">个人中心</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      curentIndex: 0
    }
  },
  methods: {
    menuChange (index) {
      this.curentIndex = index
      switch (index) {
        case 0:
          this.$router.push('/')
          break
        case 1:
          this.$router.push('mycode')
          break
        case 2:
          this.$router.push('my')
          break
      }
    }
  }
}
</script>
<style lang='less' scoped>
.common_menu {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  z-index: 99;
  .menu-list {
    display: flex;
    height: 100px;
    text-align: center;
    align-items: center;
    .mui-item {
      flex: 1;
      img {
        width: 36px;
        height: 36px;
      }
      p {
        margin: 0;
        font-size: 22px;
        color: #333;
      }
    }
    .acitve {
      p {
        color: #62cc66;
      }
    }
  }
}
</style>
