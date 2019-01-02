<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import VanButton from 'vant/lib/button'
import 'vant/lib/button/style'
export default {
  name: 'home',
  components: {
    VanButton
  }
}
</script>
