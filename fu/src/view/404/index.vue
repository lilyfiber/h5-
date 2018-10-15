<template>
  <div class="g-404">
    <div class="info" @click="toHome">
      <van-icon class="ico" name="warn" />
      404 页面地址无效
      <van-button class="back" size="small">返回首页</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted () {

  },
  methods: {
    toHome () {
      this.$router.push('activitys')
    }
  }
};
</script>

<style lang="less">
  .g-404{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    .info {
      font-size: 14px;
      text-align: center;
      color: #a0a0a0;
      .ico{
        display: block;
        margin-bottom: 10px;
        font-size: 52px;
      }
      .back{
        display: block;
         margin: 10px auto 0;
      }
    }
  }
</style>
