<template>
  <div class="bgContent" v-lazy="imgObj" :style="phoneType && phoneType == 'iphone6plus' ? 'height: 12rem': ''" >
    <img v-lazy='imgObj' class="imgObj">
    <div class="textareaClass">
      <van-field
        v-model="message"
        type="textarea"
        center
        placeholder="输入你想写在符上的话（8个字符以内）"
        rows="4"
        @input="textareaChange"
        :error-message="textTip"
      />
    </div>
    <div class="whiteSize">目前暂不支持表情符号的书写，如果您的输入文案中包含表情，会影响最终展示哦~</div>
    <div class="whiteBg">
      <p class="line"></p>
      <p style="line-height: 4px">选择符的模版</p>
      <p class="line"></p>
    </div>
    <div class="templateBg">
      <div class="divTemplate" @click="changeCheck('checked1', 'checked2', 'checked3')">
        <img v-lazy='templateUrl[3].src' alt="very cool logo" class="transparentCheck">
        <img v-lazy='templateUrl[4].src' alt="very cool logo" class="transparentCheck" :style="checked1 ? 'z-index: 110' : 'z-index: 99'">
        <img v-lazy='templateUrl[1].src' alt="very cool logo">
      </div>
      <div class="divTemplate" @click="changeCheck('checked2', 'checked1', 'checked3')">
        <img v-lazy='templateUrl[3].src' alt="very cool logo" class="transparentCheck">
        <img v-lazy='templateUrl[4].src' alt="very cool logo" class="transparentCheck"  :style="checked2 ? 'z-index: 110' : 'z-index: 99'">
        <img v-lazy='templateUrl[0].src' alt="very cool logo">
      </div>
      <div class="divTemplate" @click="changeCheck('checked3', 'checked1', 'checked2')">
        <img v-lazy='templateUrl[3].src' alt="very cool logo" class="transparentCheck">
        <img v-lazy='templateUrl[4].src' alt="very cool logo" class="transparentCheck"  :style="checked3 ? 'z-index: 110' : 'z-index: 99'">
        <img v-lazy='templateUrl[2].src' alt="very cool logo">
      </div>
    </div>
    <div class="btnDiv">
      <img v-lazy='templateUrl[5].src' alt="very cool logo" :style="btnflag ? 'z-index: 90' : 'z-index: 100'">
      <img v-lazy='templateUrl[6].src' alt="very cool logo" :style="btnflag ? 'z-index: 100' : 'z-index: 90'" @click="generateImg">
    </div>
    <div class="makediv">
      <div id="picture2" class="picture2" v-show="checkedBeg.src" style="opacity: 0">
        <img :src='checkedBeg.src' alt="very cool logo" class="checkedBeg">
        <div class="fiveWords" :style="eightflag ? 'font-size: 20px': ''" ><div class="center" style="height: 4.4rem;">{{messagestr}}</div></div>
      </div>
    </div>
    <div class="loading-mark" v-if="loadingFlag">
      <van-loading class="loading-mark-icon" type="spinner" color="white" />
      <p>符生成中，请稍等...</p>
    </div>
  </div>
</template>
<script>
import Parallax from 'vue-parallaxy'
import { Button, Loading, Lazyload, Dialog, Toast, Field} from 'vant'
import device from '@/common/device.js'
import { mapActions } from 'vuex'
import {GAFunc} from '../../common/da'
export default{
  components: {
    Parallax,
    [Button.name]:Button,
    [Loading.name]:Loading,
    [Lazyload.name]:Lazyload,
    [Dialog.name]:Dialog,
    [Toast.name]:Toast,
    [Field.name]:Field
  },
  data () {
    return {
      eightflag: false,
      loadingFlag: false,
      haspicture: false,
      imgObj: {
        src: 'https://app-img.ihomefnt.com/fu_bg.png',
        error: require('../../../static/images/error.jpg')
      },
      templateUrl: [
        {src: 'https://app-img.ihomefnt.com/fu_pink.png'}, // 0
        {src: 'https://app-img.ihomefnt.com/fu_yellow.png'}, // 1
        {src: 'https://app-img.ihomefnt.com/fu_blue.png'}, // 2
        {src: 'https://app-img.ihomefnt.com/fu_check.png'}, // 3
        {src: 'https://app-img.ihomefnt.com/fu_checked.png'}, // 4
        {src: 'https://app-img.ihomefnt.com/fu_build.png'}, // 5
        {src: 'https://app-img.ihomefnt.com/fu_builded.png'} // 6
      ],
      newtemplateUrl: [
        {src: require('../../../static/images/talisman/custom/fu_omnipotentYellow.png?imageView2/2/q/60'), color: '#f12a7d'},
        {src: require('../../../static/images/talisman/custom/fu_omnipotentPink.png?imageView2/2/q/60'), color: '#f10d00'},
        {src: require('../../../static/images/talisman/custom/fu_omnipotentBlue.png?imageView2/2/q/60'), color: '#349aff'}
      ],
      message: '',
      phoneType: '',
      checked1: false, // 默认展示透明的
      checked2: false, // 默认展示透明的
      checked3: false, // 默认展示透明的
      btnflag: false, // 默认展示灰色立马生成
      textTip: '',
      checkedBeg: {},
      messagestr: ''
    }
  },
  methods: {
    changeCheck (name1, name2, name3) {
      this[name1] = true
      this[name2] = false
      this[name3] = false
      if (this.message && (this.checked1 || this.checked2 || this.checked3)) {
        this.btnflag = this.message.length <= 8
      } else {
        this.btnflag = false
      }
    },
    textareaChange () {
      this.textTip = this.message && this.message.length > 8 ? '文案不要超过8个字符': ''
      this.btnflag = this.message && this.message.length <= 8 && (this.checked1 || this.checked2 || this.checked3)
    },
    generateImg () {
      let _this = this
      this.messagestr = this.message.match(/./g).toString().replace(/,/g, '\n')
      _this.haspicture = true
      _this.loadingFlag = true;
      GAFunc({
        'bizType': 'A002',
        'pageId': '2',
        'log': '自己制作符后返回抽符树页面'
      })
      this.$store.dispatch('setHomeCount', 1)
      if (this.message.length > 4) {
        this.eightflag = true
      }
      let index = this.checked1 ? 0 :(this.checked2 ? 1 : (this.checked3 ? 2: null))
      this.checkedBeg = this.newtemplateUrl[index]
      setTimeout(()=>{
        var shareContent = $("#picture2")[0]; // 需要绘制的部分的 (原生）dom 对象 ，注意容器的宽度不要使用百分比，使用固定宽度，避免缩放问题
        var width = shareContent.offsetWidth; // 获取(原生）dom 宽度
        var height = shareContent.offsetHeight; // 获取(原生）dom 高
        var offsetLeft = shareContent.offsetLeft;
        var offsetTop = shareContent.offsetTop; //元素距离顶部的偏移量
        var canvas = document.createElement('canvas'); //创建canvas 对象
        var context = canvas.getContext('2d');
        var scaleBy = this.getPixelRatio(context); //获取像素密度的方法 (也可以采用自定义缩放比例)
        scaleBy = 5
        canvas.width = (width + offsetLeft) * scaleBy;//这里 由于绘制的dom 为固定宽度
        canvas.height = (height + offsetTop) * scaleBy; // 注意高度问题，由于顶部有个距离所以要加上顶部的距离，解决图像高度偏移问题
        context.scale(scaleBy, scaleBy);
        var opts = {
            allowTaint: true, //允许加载跨域的图片
            tainttest: true, //检测每张图片都已经加载完成
            scale: scaleBy, // 添加的scale 参数
            canvas: canvas, //自定义 canvas
            logging: true, //日志开关，发布的时候记得改成false
            width: width, //dom 原始宽度
            height: height //dom 原始高度
        }
        html2canvas(shareContent, opts).then(function(canvas) {
            // var body = document.getElementsByTagName("body");
            // body[0].appendChild(canvas);
            // var img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height);
            // var base64 = canvas.toDataURL();
            // _this.picId = canvas.toDataURL()
            _this.$store.dispatch('setPicUrl', canvas)
            // _this.setPicUrl(canvas.toDataURL());
            // _this.picId = base64.toDataURL()
            // sessionStorage.setItem("picurl", base64);
            // mianPic.appendChild(img);
            // $("#testSrc").append(img);
        });
      }, 1000)
      setTimeout(() => {
        _this.loadingFlag = false
        _this.$router.push({path: '/blessing'})
      },1500)
    },
    getPixelRatio: function(context) {
      var backingStore = context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1;
      return (window.devicePixelRatio || 1) / backingStore;
    }
  },
  mounted () {
    GAFunc({
      'bizType': 'A002',
      'pageId': '2',
      'log': '制作符页面',
    })
    try {
      $.ajax({
        type: 'POST',
        url: '//api.ihomefnt.com/weixin/meetSign',
        data: JSON.stringify({
          'shareUrl': location.href.split('#')[0]
          // 'shareUrl': location.href.split('#')[0],
          // 'wxType': 'henanIhome'
        }),
        contentType: 'application/json',
        success: function (response) {
          var res = response;
          if (res && res.code === 1) {
            wx.config({
              debug: false,
              appId: res.obj.appid,
              timestamp: res.obj.timestamp,
              nonceStr: res.obj.nonceStr,
              signature: res.obj.signature,
              jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ'
              ]
            });
            wx.error(function(res) {
              // alert(JSON.stringify(res));
              // alert('签名获取失败');
            });
            wx.ready(function() {
              wx.checkJsApi({
                jsApiList: [
                  'onMenuShareTimeline',
                  'onMenuShareAppMessage',
                  'onMenuShareQQ'
                ],
                success: function(res) {
                  if (res.checkResult.getLocation === false) {
                    alert('你的微信版本太低，不支持微信JS接口，请升级到最新的微信版本！');
                    return;
                  }
                }
              });
              // 分享到朋友圈
              wx.onMenuShareTimeline({
                title: '某天，我抽到了一张符…', // 分享标题
                desc: '信小呆不如信寄己，抽张符当下一个中华锦鲤', // 分享描述
                link: 'https://activity.ihomefnt.com', // 分享链接
                imgUrl: 'https://app-img.ihomefnt.com/fu_guide_link.png?imageView2/2/q/60', // 分享图标
                success: function () {
                  GAFunc({
                    'bizType': 'A002',
                    'pageId': '2',
                    'log': '分享微信朋友圈'
                  })
                },
                cancel: function () {
                  GAFunc({
                    'bizType': 'A002',
                    'pageId': '2',
                    'log': '取消分享微信朋友圈'
                  })
                }
              });
              // 分享给朋友
              wx.onMenuShareAppMessage({
                title: '某天，我抽到了一张符…', // 分享标题
                desc: '信小呆不如信寄己，抽张符当下一个中华锦鲤', // 分享描述
                link: 'https://activity.ihomefnt.com', // 分享链接
                imgUrl: 'https://app-img.ihomefnt.com/fu_guide_link.png?imageView2/2/q/60', // 分享图标
                success: function () {
                  GAFunc({
                    'bizType': 'A002',
                    'pageId': '1',
                    'log': '分享微信朋友'
                  })
                },
                cancel: function () {
                  GAFunc({
                    'bizType': 'A002',
                    'pageId': '2',
                    'log': '取消分享微信朋友'
                  })
                }
              });
              // 分享给QQ
              wx.onMenuShareQQ({
                title: '某天，我抽到了一张符…', // 分享标题
                desc: '信小呆不如信寄己，抽张符当下一个中华锦鲤', // 分享描述
                link: 'https://activity.ihomefnt.com', // 分享链接
                imgUrl: 'https://app-img.ihomefnt.com/fu_guide_link.png?imageView2/2/q/60', // 分享图标
                success: function () {
                  GAFunc({
                    'bizType': 'A002',
                    'pageId': '1',
                    'log': '分享QQ成功'
                  })
                },
                cancel: function () {
                  // 用户取消分享后执行的回调函数
                  GAFunc({
                    'bizType': 'A002',
                    'pageId': '2',
                    'log': '取消分享QQ'
                  })
                }
              });
            });
          }
        }
      });
    } catch (e) {
      console.log(e)
    }
    let width = window.screen.width
    let height = window.screen.height
    // 根据安卓和ios设备展示样式
    if (device.isAndroidDevice()) {
      this.deviceFlag = 'android'
    }
    if (device.isiOSDevice()) {
      this.deviceFlag = 'ios'
      if (width == 414 && height == 736) {
        this.phoneType = "iphone6plus"
      }
      if (width == 375 && height == 667) {
        this.phoneType = "iphone6"
      }
      if (width == 375 && height == 812) {
        this.phoneType = "iphonex"
      }
    }
    const that = this
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight
        that.fullHeight = window.fullHeight
      })()
    }
  },
  destroyed () {
    GAFunc({
      'bizType': 'A002',
      'pageId': '2',
      'log': '退出制作符页面'
    })
  }
}
</script>
<style lang="less">
html,body{
  margin:0;
  height: 100%;
  padding: 0;
  overflow: hidden;
}

.Masthead {
  min-height: 100% !important;
}
.bgContent{
  width: 7.5rem;
  height: 13.34rem;
  position: relative;
  top: 0;
  left:0;
}
.imgObj{
  height: 13.34rem;
  width: 7.5rem;
  position: absolute;
  top: 0;
  left:0;
  z-index: 200;
  opacity: 1
}
.textareaClass{
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
  width: 6.9rem;
  height: 3rem;
  z-index: 210;
  .error-message {
    position: absolute;
    top: 0.96rem;
    left: 0.5rem;
    color: #f44;
    font-size: 12px;
    text-align: left;
    z-index: 220;
  }
}
.whiteSize{
  position: absolute;
  top:2.7rem;
  left: 0.3rem;
  width: 95%;
  height: 1rem ;
  overflow: hidden;
  z-index: 220;
  color: #fff;
  word-break: normal;
  text-align: left;
  font-size: 12px;
}
.whiteBg{
  position: absolute;
  top:3.5rem;
  left: 0.3rem;
  width: 100%;
  height: 0.6rem !important;
  overflow: hidden;
  z-index: 220;
  p {float: left; color: #fff;margin-right: 1px;margin-left: 1px;width: 30%; z-index: 220;};
}
.line {
  padding: 0.5px;
  background-color: #fff;
  width: 30%;
}
.templateBg {
  position: absolute;
  left: 0.3rem;
  top: 4.3rem;
  height: 2rem;
  z-index: 230;
  overflow: hidden;
  div {
    float: left;
    margin-left: 0.3rem;
    position: relative;
    img {
      width: 2rem;
    }
    .transparentCheck {
      width: 0.5rem;
      height: 0.5rem;
      position: absolute;
      top: 0.75rem;
      left: 0.75rem;
      z-index: 100
    }
  }
}
div.btnDiv {
  top: 10rem;
  left: 0.75rem;
  position: absolute;
  z-index: 230;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 6rem;
    height: 0.88rem;
  }
}
.makediv{
  position: absolute;
  width: 7.5rem;
  height: 13.34rem;
  top: 0;
  left: 0;
  .picture2{
    position: absolute;
    top: 0.8rem;
    left: 1.25rem;
    width: 5rem;
    height: 8.893rem;
    z-index: 400;
  }
  .checkedBeg{
    position: absolute;
    top: 0;
    left: 0;
    width: 5rem;
    height: 8.893rem;
    z-index: 430;
  }
  .fiveWords {
    position: absolute;
    top: 2.05rem;
    left: 2.3rem;
    font-size: 36px;
    z-index: 430;
    width: 0.4rem;
    height: 5rem;
    word-wrap: break-word;
    white-space:pre-line;
    color: #fff;
    font-family: PingFangSC-Semibold;
  }
  .center {
    display: flex;
    justify-content:center;
    align-items:center;
    white-space:pre-line;
  }
}
.loading-mark {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 400;
  .loading-mark-icon{
    margin: 70% auto 0;
  }
  p{
    color: #ffffff;
    font-size: 14px;
  }
}
@media only screen and (min-device-height: 740px) {
  .bgContent{
    width: 7.5rem;
    height: 100vh !important;
    background:linear-gradient(#fff 10%, #cbd59f 50%, #bbc891 80%);
    background-repeat: no-repeat;
  }
  .imgObj {
    height: 110vh !important;
    width: 7.5rem;
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    z-index: 200;
    opacity: 1;
  }
}
</style>