<template>
  <div class="activitys-wapper">
    {{this.$route.meta.title}}
  </div>
</template>

<script>
import {GAFunc} from '../../../common/da'
export default {
  components: {
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  methods: {
    GA () {
      /**
       * [埋点统计 bizType：A001-教师节活动]
       */
      GAFunc({
        'bizType': '', // 活动编号
        'pageId': '', // 页面id
        'log': '', // 记录内容
        'session': '' // 扩展唯一字段
      });
    }
  }
};
</script>

<style lang="less">
.activitys-wapper {

}
</style>
