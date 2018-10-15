<template>
  <article class="bgContent" v-lazy:background-image="imgObj" ref="container">
    <section>
      <parallax class="skyImg" break-point='(min-width: 100px)' :section-height=0 style="perspective: 1000px;">
        <img v-lazy='imgUrl[0].src' alt="very cool sky">
      </parallax>
      <parallax class="logoImg" :section-height=0 break-point='(min-width: 100px)' style="perspective: 10px;">
        <img v-lazy='imgUrl[1].src' alt="very cool logo">
      </parallax>
      <!-- <img class="ruleImg" v-lazy='imgUrl[2].src' alt="very cool logo" @click="showRule"> -->
      <div class="ruleImg" @click="showRule"><div class="center">活动详情</div></div>
      <parallax class="yun2Img" speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0 style="perspective: 1000px;">
        <img v-lazy='imgUrl[3].src' alt="very cool logo">
      </parallax>
      <parallax class="yun1Img" speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0 style="perspective: 1000px;">
        <img v-lazy='imgUrl[4].src' alt="very cool logo">
      </parallax>
      <!-- tree before move -->
      <parallax class="tuuuImg" v-show="dispearFlag" speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0 style="perspective: 900px;">
        <img v-lazy='imgUrl[5].src' alt="very cool logo">
      </parallax>
      <parallax class="yu2Img"  v-show="dispearFlag" speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0>
        <img v-lazy='imgUrl[14].src' alt="very cool logo" style="perspective: 900px;">
      </parallax>
      <parallax class="yu1Img"  v-show="dispearFlag" speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0 style="perspective: 500px;">
        <img v-lazy='imgUrl[15].src' alt="very cool logo">
      </parallax>
      <div class="scaleBg" style="perspective: 800px;">
        <parallax class="treeImg" :class="!$store.state.homeCount ? (smallTreeFlag == 1 ?'newBigtree1': smallTreeFlag == 2 ? 'smallTree1': '') : 'bufongtree'">
          <img v-lazy='imgUrl[17].src' alt="very cool logo">
        </parallax>
        <parallax class="fImg"  v-show="dispearFlag && !$store.state.homeCount " speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0>
          <img v-lazy='imgUrl[18].src' alt="very cool logo">
        </parallax>
        <!-- mountion before move -->
        <parallax class="tuuuuImg" :class="!$store.state.homeCount ? (smallTreeFlag == 1 ?'mountain': smallTreeFlag == 2 ? 'smallMountain': '') : 'budongtu'">
          <img v-lazy='imgUrl[16].src' alt="very cool logo">
        </parallax>
      </div>
      <parallax class="themeImg"  :class="!(dispearFlag && !$store.state.homeCount) ? 'fade': ''" speed-Factor=0.3 break-point='(min-width: 100px)'
      :section-height=0 style="perspective: 0px;">
        <img v-lazy='imgUrl[19].src' alt="very cool logo">
      </parallax>
    </section>
    <!--花草 -->
    <!-- <section class="lvImg" :class="show?'animationIv': ''"> -->
    <section class="lvImg"  :class="!$store.state.homeCount ? (smallTreeFlag == 1 ?'animationIv3': smallTreeFlag == 2 ? 'animationIvBack3': ''): 'budonglvImg' ">
      <parallax class="tu9Img"  speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0>
        <img v-lazy='imgUrl[6].src' alt="very cool logo" :class="smallTreeFlag == 1 ?'animationIv': smallTreeFlag == 2 ? 'animationIvBack': '' ">
      </parallax>
      <parallax class="eImg" break-point='(min-width: 100px)' :section-height=0>
        <img v-lazy='imgUrl[7].src' alt="very cool logo" :class="smallTreeFlag == 1 ?'animationIv': smallTreeFlag == 2 ? 'animationIvBack': '' ">
      </parallax>
      <img v-lazy='imgUrl[29].src' alt="very cool logo" style="position: absolute;top:2.527rem;left:0;width: 7.5rem;height: 4.663rem; z-index: 730;" :class="smallTreeFlag == 1 ?'animationIv2': smallTreeFlag == 2 ? 'animationIvBack2': '' ">
      <div :class="smallTreeFlag == 1 ?'animationIv1': smallTreeFlag == 2 ? 'animationIvBack1': '' ">
        <img v-lazy='imgUrl[30].src' alt="very cool logo" style="position: absolute;top:4.913rem;left:1.486rem;width: 4.973rem;height: 2.27rem;z-index: 855">
        <img v-lazy='imgUrl[31].src' alt="very cool logo" style="position: absolute;top:4.135rem;right:0;width: 2.844rem;height: 3.048rem;z-index: 856">
        <img v-lazy='imgUrl[32].src' alt="very cool logo" style="position: absolute;top:5.031rem;left:0;width: 4.112rem;height: 2.153rem;z-index: 857">
        <img v-lazy='imgUrl[33].src' alt="very cool logo" style="position: absolute;top:3.702rem;left:0.48rem;width: 2.23rem;height: 2.08rem; z-index: 805">
      </div>
      <parallax class="cImg" speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0 :class="smallTreeFlag == 1 ?'animationIv1': smallTreeFlag == 2 ? 'animationIvBack1': '' ">
        <img v-lazy='imgUrl[9].src' alt="very cool logo">
      </parallax>
      <parallax class="bImg" speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0 :class="smallTreeFlag == 1 ?'animationIv1': smallTreeFlag == 2 ? 'animationIvBack1': '' ">
        <img v-lazy='imgUrl[10].src' alt="very cool logo">
      </parallax>
      <parallax class="aImg" speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0 :class="smallTreeFlag == 1 ?'animationIv1': smallTreeFlag == 2 ? 'animationIvBack1': '' ">
        <img v-lazy='imgUrl[11].src' alt="very cool logo">
      </parallax>
      <parallax class="sddImg" speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0 :class="smallTreeFlag == 1 ?'animationIv': smallTreeFlag == 2 ? 'animationIvBack': '' ">
        <img v-lazy='imgUrl[12].src' alt="very cool logo">
      </parallax>
      <parallax class="sdddImg" speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0 :class="smallTreeFlag == 1 ?'animationIv': smallTreeFlag == 2 ? 'animationIvBack': '' ">
        <img v-lazy='imgUrl[13].src' alt="very cool logo">
      </parallax>
      <parallax class="lotterybtnImg"  speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0>
        <img v-lazy='imgUrl[20].src' alt="very cool logo" @click="gotoBeg">
      </parallax>
    </section>
    <!-- 符的动画后展示 -->
    <section class="part2" v-if="toogeleFlag">
      <parallax class="line1" speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0 style="min-height: 4.063rem !important">
        <img v-lazy='imgUrl[21].src' alt="very cool logo" v-show="toogeleFlag">
      </parallax>
      <parallax class="line2" speed-Factor=0.3 break-point='(min-width: 100px)' :section-height=0 style="min-height: 1.517rem !important">
        <img v-lazy='imgUrl[22].src' alt="very cool logo" v-show="toogeleFlag">
      </parallax>
    </section>
    <section class="allfu" v-if="toogeleFlag">
      <div v-for="(img, index) in fullImgUrl" :key="index" v-lazy:background-image="img.src" :style="getStyle(img, index)" style="z-index:3000 !important"
        :class="!smallToogeleFlag ? (toogeleFlag ? (laterToogeleFlag == 0 ? 'animationFU' :(laterToogeleFlag == 1 && currentIndex == index ? 'fuCenter' : '')): ''): (currentIndex == index ? 'narrowImg': 'budongfu')"
        @touchstart="markPosition(img, index, $event)" @touchmove="drawFu(img, index, $event)" @touchend="stopFlagFn(img, index)" v-if="!$store.state.homeCount && toogeleFlag" >
      </div>
      <div v-for="(img, index) in fullImgUrl" :key="index" v-lazy:background-image="img.src" :style="getStyle(img, index)" style="z-index:3000 !important" :class="!smallToogeleFlag ? (laterToogeleFlag == 1 && currentIndex == index ? 'fuCenter' : '') : (currentIndex == index ? 'narrowImg': 'budongfu')"
      v-if="$store.state.homeCount && toogeleFlag" @touchstart="markPosition(img, index, $event)" @touchmove="drawFu(img, index, $event)" @touchend="stopFlagFn(img, index)"></div>
    </section>
    <!-- 返回首页 -->
    <section v-show="smallTreeFlag == 1 && (phoneType == 'x' || phoneType == 'm')"  :class="smallTreeFlag == 1 ?'btnMove': smallTreeFlag == 2 ? 'btnMoveBack': '' ">
      <img v-lazy='imgUrl[26].src' alt="very cool logo" :class="show ? 'returnHome' : ''" @click="returnHome" v-show="!larger" :disabled="seconds">
      <div class="robot">
        <img v-lazy='imgUrl[25].src' alt="very cool logo" :class="toogeleFlag ? 'renImg' : ''" v-show="toogeleFlag">
      </div>
      <img v-lazy='imgUrl[28].src' alt="very cool logo" :class="show ? 'makeFU': ''" @click="makeFU" v-show="!larger">
    </section>
    <section v-show="smallTreeFlag == 1 && phoneType == 's'" :class="smallTreeFlag == 1 ?'btnMove': smallTreeFlag == 2 ? 'btnMoveBack': '' ">
        <img v-lazy='imgUrl[26].src' alt="very cool logo" :class="show ? 'returnsHome' : ''" @click="returnHome" v-show="!larger" :disabled="seconds">
      <div class="robot">
        <img v-lazy='imgUrl[25].src' alt="very cool logo" :class="toogeleFlag ? 'renImg' : ''" v-show="toogeleFlag">
       </div>
      <img v-lazy='imgUrl[28].src' alt="very cool logo" :class="show ? 'makesFU': ''" @click="makeFU" v-show="!larger">
    </section>
    <!-- 如果是第一次进入抽符页，隔2s给出提示 -->
    <section v-show="firstShowTip" class="firstShowTip">
      <img v-lazy='guideUrl[1].src' alt="very cool logo" class="icon">
      <div class="iconText">下拉抽符</div>
      <img v-lazy='guideUrl[2].src' alt="very cool logo" class="yes" @click="firstShowTip = false">
    </section>
    <!-- 下拉出现符的样子 -->
    <section v-show="larger" class="firstShowTip">
      <!-- 制作符的时候不要展示旋转的动画 -->
      <img :src='currentImg.src' alt="very cool logo" :style="getStyle(currentImg)" style="z-index: 20001" :class="clickBegflag && !picFlag ? 'rotateFu': ''" v-show="!picFlag">
      <img :src='currentImg.src' alt="very cool logo" :style="getStyle(currentImg)" style="z-index: 20001" :class="clickBegflag && !picFlag ? 'rotateFan': ''" v-show='!picFlag'>
      <div id="picture2">
        <img :src="checkedBeg.src" alt="very cool logo" :style="checkBegflag ? 'z-index: 20010': ''" class="checkedBeg" v-show="checkBegflag">
        <!-- <div :class="textBegFlag ? 'dateClass': ''" :style="{'color': checkedBeg.color}" v-show="textBegFlag"><div class="center">{{dateObj.gzYear}}年【{{dateObj.Animal}}年】{{dateObj.gzMonth}}月 {{dateObj.gzDay}}日</div></div> -->
      </div>
      <img v-lazy='guideUrl[4].src' alt="very cool logo" :class="checkBegflag ? 'chouClass': ''" v-show="checkBegflag && !picFlag" @click="returnTree">
      <img v-lazy='guideUrl[3].src' alt="very cool logo" :class="checkBegflag ? 'chouClass': ''" v-show='picFlag' @click="returnTree(1)">
      <img v-lazy='guideUrl[5].src' alt="very cool logo" :class="checkBegflag ? 'shareClass': ''" v-show="checkBegflag " @click="shareImgTip">
    </section>
    <div class="share-wapper" v-show="showintro && shareCount == 1">
      <img src="../../../static/images/talisman/guide/shareintro.png" class="share-intro">
    </div>
  </article>
</template>
<script>
import Parallax from 'vue-parallaxy'
import { Button, Loading, Lazyload, Dialog, Toast} from 'vant'
import device from '@/common/device.js'
import { mapActions, mapGetters } from 'vuex'
import calendar from '@/common/calendar.js'
import {GAFunc} from '../../common/da';
export default{
  components: {
    Parallax,
    [Button.name]:Button,
    [Loading.name]:Loading,
    [Lazyload.name]:Lazyload,
    [Dialog.name]:Dialog,
    [Toast.name]:Toast
  },
  data () {
    return {
      showintro: false,
      sectionHeight: 0,
      imgObj: {
        src: 'https://app-img.ihomefnt.com/activity_home_river.png?imageView2/2/q/60',
        error: require('../../../static/images/error.jpg')
      },
      imgUrl: [
        {src: 'https://app-img.ihomefnt.com/activity_home_sky.png?imageView2/2/q/60',loading: '' }, // 0
        {src: 'https://app-img.ihomefnt.com/activity_home_logo.png?imageView2/2/q/60'}, // 1
        {src: 'https://app-img.ihomefnt.com/activity_home_rule.png?imageView2/2/q/60'}, // 2
        {src: 'https://app-img.ihomefnt.com/activity_home_yun2.png?imageView2/2/q/60'}, // 3
        {src: 'https://app-img.ihomefnt.com/activity_home_yun1.png?imageView2/2/q/60'}, // 4
        {src: 'https://app-img.ihomefnt.com/activity_home_tuuu.png?imageView2/2/q/60'}, // 5
        {src: 'https://app-img.ihomefnt.com/activity_home_tu9.png?imageView2/2/q/60'},  // 6
        {src: 'https://app-img.ihomefnt.com/activity_home_E.png?imageView2/2/q/60'}, // 7
        {src: 'https://app-img.ihomefnt.com/activity_home_D.png?imageView2/2/q/60'}, // 8
        {src: 'https://app-img.ihomefnt.com/activity_home_C.png?imageView2/2/q/60'}, // 9
        {src: 'https://app-img.ihomefnt.com/activity_home_B.png?imageView2/2/q/60'}, // 10
        {src: 'https://app-img.ihomefnt.com/activity_home_A.png?imageView2/2/q/60'}, // 11
        {src: 'https://app-img.ihomefnt.com/activity_home_sdd.png?imageView2/2/q/60'}, // 12
        {src: 'https://app-img.ihomefnt.com/activity_home_sddd.png?imageView2/2/q/60'}, // 13
        {src: 'https://app-img.ihomefnt.com/activity_home_yu2.png?imageView2/2/q/60'}, // 14
        {src: 'https://app-img.ihomefnt.com/activity_home_yu1.png?imageView2/2/q/60'}, // 15
        {src: 'https://app-img.ihomefnt.com/activity_home_tuuuuuu.png?imageView2/2/q/60'}, // 16
        {src: 'https://app-img.ihomefnt.com/activity_home_bigTree.png?imageView2/2/q/60'}, // 17
        {src: 'https://app-img.ihomefnt.com/activity_home_f.png?imageView2/2/q/60'}, // 18
        {src: 'https://app-img.ihomefnt.com/activity_home_theme.png?imageView2/2/q/60'}, // 19
        {src: 'https://app-img.ihomefnt.com/activity_home_lotterybtn.png?imageView2/2/q/60'}, // 20
        {src: 'https://app-img.ihomefnt.com/activity_home_line1.png?imageView2/2/q/60'}, // 21
        {src: 'https://app-img.ihomefnt.com/activity_home_line2.png?imageView2/2/q/60'}, // 22
        {src: 'https://app-img.ihomefnt.com/activity_home_fff.png?imageView2/2/q/60'}, // 23
        {src: 'https://app-img.ihomefnt.com/activity_home_ffffffff.png?imageView2/2/q/60'}, // 24
        {src: 'https://app-img.ihomefnt.com/activity_home_jqr.png?imageView2/2/q/60'}, // 25
        {src: 'https://app-img.ihomefnt.com/activity_home_home.png?imageView2/2/q/60'}, // 26
        {src: 'https://app-img.ihomefnt.com/activity_home_pen.png?imageView2/2/q/60'}, // 27
        {src: 'https://app-img.ihomefnt.com/activity_home_make.png?imageView2/2/q/60'}, // 28
        {src: 'https://app-img.ihomefnt.com/activity_home_tu4.png?imageView2/2/q/60'}, // 29
        {src: 'https://app-img.ihomefnt.com/activity_home_tu3.png?imageView2/2/q/60'}, // 30
        {src: 'https://app-img.ihomefnt.com/activity_home_tu2.png?imageView2/2/q/60'}, // 31
        {src: 'https://app-img.ihomefnt.com/activity_home_tu1.png?imageView2/2/q/60'}, // 32
        {src: 'https://app-img.ihomefnt.com/activity_home_D2.png?imageView2/2/q/60'} // 33
      ],
      fullImgUrl: [
        {src: 'https://app-img.ihomefnt.com/activity_home_fff.png?imageView2/2/q/60', x: '6.27', y: '1.8', w: '0.6', h:'1.069', type: 'negative', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_fff.png?imageView2/2/q/60', x: '5.42', y: '0.95', w: '0.4', h:'0.713', type: 'negative', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_fff.png?imageView2/2/q/60', x: '4', y: '1.369', w: '0.4', h:'0.713', type: 'negative', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_fff.png?imageView2/2/q/60', x: '1.7', y: '1.8', w: '0.4', h:'0.713', type: 'negative', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_ffffffff.png?imageView2/2/q/60', x: '0.26', y: '2.5', w: '0.6', h:'1.069', type: 'positive', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_ffffffff.png?imageView2/2/q/60', x: '3.25', y: '2.593', w: '0.7', h:'1.247', type: 'positive', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_fff.png?imageView2/2/q/60', x: '5.005', y: '2.99', w: '0.9', h:'1.603', type: 'negative', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_ffffffff.png?imageView2/2/q/60', x: '6.77', y: '3.19', w: '0.6', h:'1.069', type: 'positive', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_fff.png?imageView2/2/q/60', x: '1.24', y: '3.609', w: '0.5', h:'0.891', type: 'negative', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_fff.png?imageView2/2/q/60', x: '2.35', y: '3.8', w: '0.5', h:'0.891', type: 'negative', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_ffffffff.png?imageView2/2/q/60', x: '3.515', y: '3.99',w: '0.9', h:'1.603', type: 'positive', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_fff.png?imageView2/2/q/60', x: '1.645', y: '5.099', w: '0.9', h:'1.603', type: 'negative', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_ffffffff.png?imageView2/2/q/60', x: '2.775', y: '5.309', w: '0.7', h:'1.247', type: 'positive', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_fff.png?imageView2/2/q/60', x: '4.825', y: '5.289',w: '0.7', h:'1.247', type: 'negative', count: 0},
        {src: 'https://app-img.ihomefnt.com/activity_home_ffffffff.png?imageView2/2/q/60', x: '5.905', y: '5.069', w: '0.7', h:'1.247', type: 'positive', count: 0}
      ],
      guideUrl: [
        {src: 'https://app-img.ihomefnt.com/fu_guide_guide.png?imageView2/2/q/60'},
        {src: 'https://app-img.ihomefnt.com/fu_guide_icon.png?imageView2/2/q/60'},
        {src: 'https://app-img.ihomefnt.com/fu_guide_yes.png?imageView2/2/q/60'},
        {src: 'https://app-img.ihomefnt.com/fu_guide_again.png?imageView2/2/q/60'},
        {src: 'https://app-img.ihomefnt.com/fu_guide_chou.png?imageView2/2/q/60'},
        {src: 'https://app-img.ihomefnt.com/fu_guide_share.png?imageView2/2/q/60'}
      ],
      randomImg: [
        {src: 'https://app-img.ihomefnt.com/fu_a1.png?imageView2/2/q/60', color: '#f10d00', name: 'a1.png'},
        {src: 'https://app-img.ihomefnt.com/fu_a2.png?imageView2/2/q/60', color: '#f10d00', name: 'a2.png'},
        {src: 'https://app-img.ihomefnt.com/fu_a3.png?imageView2/2/q/60', color: '#f10d00', name: 'a3.png'},
        {src: 'https://app-img.ihomefnt.com/fu_a4.png?imageView2/2/q/60', color: '#f10d00', name: 'a4.png'},
        {src: 'https://app-img.ihomefnt.com/fu_a5.png?imageView2/2/q/60', color: '#f10d00', name: 'a5.png'},
        {src: 'https://app-img.ihomefnt.com/fu_a6.png?imageView2/2/q/60', color: '#f10d00', name: 'a6.png'},
        {src: 'https://app-img.ihomefnt.com/fu_a7.png?imageView2/2/q/60', color: '#f10d00', name: 'a7.png'},
        {src: 'https://app-img.ihomefnt.com/fu_a8.png?imageView2/2/q/60', color: '#f10d00', name: 'a8.png'},
        {src: 'https://app-img.ihomefnt.com/fu_a9.png?imageView2/2/q/60', color: '#f10d00', name: 'a9.png'},
        {src: 'https://app-img.ihomefnt.com/fu_a10.png?imageView2/2/q/60', color: '#f10d00', name: 'a10.png'},
        {src: 'https://app-img.ihomefnt.com/fu_a11.png?imageView2/2/q/60', color: '#f10d00', name: 'a11.png'},
        {src: 'https://app-img.ihomefnt.com/fu_b1.png?imageView2/2/q/60', color: '#f10d00', name: 'b1.png'},
        {src: 'https://app-img.ihomefnt.com/fu_b2.png?imageView2/2/q/60', color: '#f10d00', name: 'b2.png'},
        {src: 'https://app-img.ihomefnt.com/fu_b3.png?imageView2/2/q/60', color: '#f10d00', name: 'b3.png'},
        {src: 'https://app-img.ihomefnt.com/fu_b4.png?imageView2/2/q/60', color: '#f10d00', name: 'b4.png'},
        {src: 'https://app-img.ihomefnt.com/fu_b5.png?imageView2/2/q/60', color: '#f10d00', name: 'b5.png'},
        {src: 'https://app-img.ihomefnt.com/fu_b6.png?imageView2/2/q/60', color: '#f10d00', name: 'b6.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c1.png?imageView2/2/q/60', color: '#f10d00', name: 'c1.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c2.png?imageView2/2/q/60', color: '#f10d00', name: 'c2.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c3.png?imageView2/2/q/60', color: '#f10d00', name: 'c3.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c4.png?imageView2/2/q/60', color: '#f10d00', name: 'c4.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c5.png?imageView2/2/q/60', color: '#f10d00', name: 'c5.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c6.png?imageView2/2/q/60', color: '#f10d00', name: 'c6.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c7.png?imageView2/2/q/60', color: '#f10d00', name: 'c7.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c8.png?imageView2/2/q/60', color: '#f10d00', name: 'c8.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c9.png?imageView2/2/q/60', color: '#f10d00', name: 'c9.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c10.png?imageView2/2/q/60', color: '#f10d00', name: 'c10.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c11.png?imageView2/2/q/60', color: '#f10d00', name: 'c11.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c12.png?imageView2/2/q/60', color: '#f10d00', name: 'c12.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c13.png?imageView2/2/q/60', color: '#f10d00', name: 'c13.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c14.png?imageView2/2/q/60', color: '#f10d00', name: 'c14.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c15.png?imageView2/2/q/60', color: '#f10d00', name: 'c15.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c16.png?imageView2/2/q/60', color: '#f10d00', name: 'c16.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c17.png?imageView2/2/q/60', color: '#f10d00', name: 'c17.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c18.png?imageView2/2/q/60', color: '#f10d00', name: 'c18.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c19.png?imageView2/2/q/60', color: '#f10d00', name: 'c19.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c20.png?imageView2/2/q/60', color: '#f10d00', name: 'c20.png'},
        {src: 'https://app-img.ihomefnt.com/fu_c21.png?imageView2/2/q/60', color: '#f10d00', name: 'c21.png'},
        {src: 'https://app-img.ihomefnt.com/fu_d1.png?imageView2/2/q/60', color: '#f12a7d', name: 'd1.png'},
        {src: 'https://app-img.ihomefnt.com/fu_d2.png?imageView2/2/q/60', color: '#f12a7d', name: 'd2.png'},
        {src: 'https://app-img.ihomefnt.com/fu_d3.png?imageView2/2/q/60', color: '#f12a7d', name: 'd3.png'},
        {src: 'https://app-img.ihomefnt.com/fu_d4.png?imageView2/2/q/60', color: '#f12a7d', name: 'd4.png'},
        {src: 'https://app-img.ihomefnt.com/fu_d5.png?imageView2/2/q/60', color: '#f12a7d', name: 'd5.png'},
        {src: 'https://app-img.ihomefnt.com/fu_d6.png?imageView2/2/q/60', color: '#f12a7d', name: 'd6.png'},
        {src: 'https://app-img.ihomefnt.com/fu_d7.png?imageView2/2/q/60', color: '#f12a7d', name: 'd7.png'},
        {src: 'https://app-img.ihomefnt.com/fu_d8.png?imageView2/2/q/60', color: '#f12a7d', name: 'd8.png'},
        {src: 'https://app-img.ihomefnt.com/fu_d9.png?imageView2/2/q/60', color: '#f12a7d', name: 'd9.png'},
        {src: 'https://app-img.ihomefnt.com/fu_e1.png?imageView2/2/q/60', color: '#349aff', name: 'e1.png'},
        {src: 'https://app-img.ihomefnt.com/fu_e2.png?imageView2/2/q/60', color: '#349aff', name: 'e2.png'},
        {src: 'https://app-img.ihomefnt.com/fu_e3.png?imageView2/2/q/60', color: '#349aff', name: 'e3.png'},
        {src: 'https://app-img.ihomefnt.com/fu_e4.png?imageView2/2/q/60', color: '#349aff', name: 'e4.png'},
        {src: 'https://app-img.ihomefnt.com/fu_e5.png?imageView2/2/q/60', color: '#349aff', name: 'e5.png'},
        {src: 'https://app-img.ihomefnt.com/fu_e6.png?imageView2/2/q/60', color: '#349aff', name: 'e6.png'},
        {src: 'https://app-img.ihomefnt.com/fu_e7.png?imageView2/2/q/60', color: '#349aff', name: 'e7.png'},
        {src: 'https://app-img.ihomefnt.com/fu_e8.png?imageView2/2/q/60', color: '#349aff', name: 'e8.png'}
      ],
      templateUrl: [
        {src: 'https://app-img.ihomefnt.com/fu_omnipotentYellow.png?imageView2/2/q/60', color: '#f12a7d'}, // 0
        {src: 'https://app-img.ihomefnt.com/fu_omnipotentPink.png?imageView2/2/q/60', color: '#f10d00'}, // 1
        {src: 'https://app-img.ihomefnt.com/fu_omnipotentBlue.png?imageView2/2/q/60', color: '#349aff'} // 2
      ],
      show: false,
      toogeleFlag: false, // 展示符和两条线
      laterToogeleFlag: 0, // 小符移动中间大符
      smallToogeleFlag:false, // 大符变小符
      fullHeight: document.documentElement.clientHeight,
      deviceFlag: '',
      dispearFlag: true, // 点击抽张符后隐藏页面云，鱼等
      smallTreeFlag: null, // 1表示放大树，2表示缩小树
      activitycount: 0,
      shareCount: 0,
      firstShowTip: false, // 首次进入符树页面才有提示
      startX: 0,
      startY: 0,
      moveX: 0,
      moveY: 0,
      moveObj: {
        x: 0,
        y: 0,
        dx: 0,
        dy: 0
      },
      pix: 100/(750/document.documentElement.getBoundingClientRect().width),
      backItem: false,
      stopFlag: false,
      maxW: 0,
      currentImg: '',
      larger: false,
      copyFuImg: [],
      clickBegflag: true, // 本来是点击旋转，现在是直接旋转
      checkBegflag: false, // 默认不展示抽中的符
      checkedBeg: {},
      dateObj: {},
      currentIndex: null,
      phoneType: '',
      picFlag: false,
      eightflag: false,
      upflag: false,
      isgenerate: false,
      seconds: true,
      speed: 1,
    }
  },
  methods: {
    ...mapActions([
      "setPicUrl"
    ]),
    gotoBeg () {
      GAFunc({
        'bizType': 'A002',
        'pageId': '1',
        'log': '进入抽符页面',
      })
      let that = this
      this.seconds = true
      this.$store.dispatch('setHomeCount', 0)
      this.show = true
      this.smallTreeFlag = 1
      this.dispearFlag = false
      this.laterToogeleFlag = 0
      this.smallToogeleFlag = false
      setTimeout(() => {
        that.toogeleFlag = true
      }, 1800)
      setTimeout(() => {
        that.seconds = false
      },3000)
      this.$store.dispatch('increment')
      this.activitycount = this.$store.state.activitycount // 记录进入抽符页的状态
      if (this.activitycount == 1) {
        setTimeout(() => {
          that.firstShowTip = true
        }, 3100)
      }
    },
    coppyArray (arr) {
      return arr.map((e)=>{
        if(typeof e==='object'){
          return Object.assign({}, e)
        }else{
          return e
        }
      })
    },
    showRule () {
      Dialog.alert({
        title: '活动详情',
        message: `<ul><li><span>进入“符合你意”活动界面，点击“抽张符”按钮，抵达祈福树；</span></li><li><span>选择树上的符签，拖动下拉，即可随机抽取属于你的符；</span></li><li><span>如有想要祈求的愿望，也可以制作自定义专属符签；</span></li><li><span>你还可以分享好运，让更多的朋友一起来玩～</span></li></ul>`
      }).then(() => {
        // on confirm
      })
    },
    getStyle (item, index) {
      let styleObject = {
        position: item.position || 'absolute',
        left: `${item.x}rem`,
        top: `${item.y}rem`,
        width: `${item.w}rem`,
        height: `${item.h}rem`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }
      return styleObject
    },
    // 记录起始位置
    markPosition (item, index, event) {
      this.currentIndex = index
      if (!this.seconds && !this.firstShowTip) {
        item.count++
        // this.startX = event.targetTouches[0].clientX
        this.startY = event.targetTouches[0].clientY
        // this.moveObj.dx = event.target.offsetLeft // 记录移动的位移
        this.moveObj.dy = event.target.offsetTop
        this.stopFlag = true
        this.backItem = false
        this.laterToogeleFlag = 2
        this.smallToogeleFlag = false
        this.picFlag = false
        this.speed = 1
        if (item.count == 1) {
          this.copyFuImg[index].offsetTop = this.moveObj.dy
        }
      }
      event.preventDefault();
    },
    // 拖拽符
    drawFu (item, index, event) {
      if (!this.seconds && !this.firstShowTip && index == this.currentIndex) {
        this.laterToogeleFlag = 2
        this.smallToogeleFlag = false
        this.picFlag = false
        if (this.stopFlag) {
          if (event.touches) {
            this.backItem = true
            // this.moveX = event.targetTouches[0].clientX
            this.moveY = event.targetTouches[0].clientY 
            // this.moveObj.x = this.moveX - this.startX
            this.moveObj.y = this.moveY - this.startY
            // 控制只能向下拉动100px
            if (this.moveObj.y > 0) {
              let sum = this.moveObj.y + this.moveObj.dy  - this.copyFuImg[index].offsetTop
              
              if (sum > 0) {
                this.upflag = true
                if (sum <= 120 ) {
                  // item.x = (this.moveObj.x + this.moveObj.dx)/this.pix
                  item.y = (this.moveObj.y* this.speed + this.moveObj.dy)/this.pix
                  if (this.speed - 0.1 > 0.3) {
                    this.speed = this.speed - 0.06
                  }
                  if (sum < 120) {
                    this.backItem = false
                  }
                }
              } else {
                this.upflag = false
              }
            } else {
              this.upflag = false
            }
          }
        }
      }
    },
    stopFlagFn (item, index) {
      if (!this.seconds && !this.firstShowTip && index == this.currentIndex) {
        let that = this
        this.stopFlag = false
        this.smallToogeleFlag = false
        this.picFlag = false
        if (this.moveObj.y > 0 && index == this.currentIndex) {
          this.getStyle(item)
        }
        if (!this.backItem) {
          const toast = Toast({duration: 1500, message: '再多拉一点点就成功啦！'})
          this.fullImgUrl = this.coppyArray(this.copyFuImg)
        } else {
          if (this.upflag) {
            this.fullImgUrl = this.coppyArray(this.copyFuImg)
            this.laterToogeleFlag = 1
            let newItem = {x: '1.25', y: 0.8, w: '5', h: '8.893', src: item.src}
            if (item.type == 'positive') {
              newItem.src = 'https://app-img.ihomefnt.com/fu_guide_ffffffff.png?imageView2/2/q/60'
            } else {
              newItem.src = 'https://app-img.ihomefnt.com/fu_guide_fff.png?imageView2/2/q/60'
            }
            that.currentImg = newItem
            setTimeout(() => {
              that.larger = true
            },50)
            that.checkedBeg = that.randomImg[Math.floor(Math.random()*that.randomImg.length)]
            GAFunc({
              'bizType': 'A002',
              'pageId': '1',
              'session': that.checkedBeg.name,
              'log': '抽中符',
            })
            setTimeout(()=>{
              that.checkBegflag = true
            }, 2200)
          }
        }
      }
    },
    returnHome () {
      if (!this.seconds && !this.firstShowTip) {
        this.toogeleFlag = false
        this.dispearFlag = true
        this.show = false
        this.smallTreeFlag = 2
        this.showintro = false
        this.$store.dispatch('setHomeCount', 0)
        GAFunc({
          'bizType': 'A002',
          'pageId': '1',
          'log': '返回首页',
        })
      }
    },
    makeFU () {
      GAFunc({
        'bizType': 'A002',
        'pageId': '1',
        'log': '进入制作符页面',
      })
      if (!this.seconds && !this.firstShowTip) {
        this.$store.dispatch('setHomeCount', 0)
        this.$router.push({path: "/makeFU"})
      }
    },
    returnTree (index) {
      this.larger = false
      this.showintro = false
      this.checkBegflag = false
      this.laterToogeleFlag = 0
      this.smallToogeleFlag = true
      if (index) {
        this.$store.dispatch('setText', '')
        this.$store.dispatch('setImgIndex', 0)
        GAFunc({
          'bizType': 'A002',
          'pageId': '1',
          'log': '制作符成功重新抽取',
        })
      } else {
        GAFunc({
          'bizType': 'A002',
          'pageId': '1',
          'log': '抽符成功后重新抽取',
        })
      }
      this.$store.dispatch('setHomeCount', 1)
    },
    shareImgTip () {
      this.$store.dispatch('setShareCount')
      this.shareCount = this.$store.state.shareCount
      const toast = Toast({duration: 1500, message: '长按保存图片， 分享显灵哦'})
      this.showintro = true
      let that = this
      setTimeout(() => {
        that.showintro = false
      }, 1500)
    }
  },
  mounted () {
    // var v = new VConsole()
    GAFunc({
      'bizType': 'A002',
      'pageId': '1',
      'log': '首页',
    })
    let that = this
    this.seconds = false
    // 是否制作符
    if (this.picurl) {
      this.picFlag = true
      this.isgenerate = true
      this.checkedBeg.src = this.picurl.toDataURL()
    } else {
      this.isgenerate = false
      this.picFlag = false
      this.checkedBeg = {}
    }
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
                    'pageId': '1',
                    'log': '分享微信朋友圈'
                  })
                },
                cancel: function () {
                  GAFunc({
                    'bizType': 'A002',
                    'pageId': '1',
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
                    'pageId': '1',
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
                    'pageId': '1',
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
    this.copyFuImg = this.coppyArray(this.fullImgUrl)
    this.laterToogeleFlag = 0
    if (this.$store.state.homeCount == 1) {
      this.toogeleFlag = true
      this.smallTreeFlag = 1
      this.show = true
      this.larger = true
      this.checkBegflag = true
    } else {
      this.toogeleFlag = false
      this.smallTreeFlag = null
      this.show = false
      this.larger = false
      this.checkBegflag = false
    }
    let today = new Date();
    this.dateObj = calendar.solar2lunar(today.getFullYear(), today.getMonth() + 1, today.getDate())
    // 根据安卓和ios设备展示样式
    let width = window.screen.width
    let height = window.screen.height
    // 根据安卓和ios设备展示样式
    if (device.isAndroidDevice()) {
      this.deviceFlag = 'android'
      if (width <= 360 && height <= 640) {
        this.phoneType="s"
      }
      if (width >= 360 && height > 736) {
        this.phoneType = "x"
      }
      if (width > 360 && height < 700) {
        this.phoneType = 'm'
      }
    }
    if (device.isiOSDevice()) {
      this.deviceFlag = 'ios'
      if (width == 414 && height == 736) {
        this.phoneType = "s"
      }
      if (width <= 375 && height <= 667) {
        this.phoneType = "s"
      }
      if (width == 375 && height > 736) {
        this.phoneType = "x"
      }
    }
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight
        that.fullHeight = window.fullHeight
      })()
    }
  },
  computed: {
    ...mapGetters([
      'picurl'
    ])
  },
  destroyed () {
    if (this.dispearFlag) {
      GAFunc({
        'bizType': 'A002',
        'pageId': '1',
        'log': '退出首页'
      })
    } else {
      GAFunc({
        'bizType': 'A002',
        'pageId': '1',
        'log': '退出抽符树页'
      })
    }
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
body{
  position:relative
}
ul li {
  list-style: disc;
  color: red;
  margin-left: 10px;
}
ul li span {
  color: black;
}
.center {
  display: flex;
  justify-content:center;
  align-items:center;
}
.van-dialog, .van-toast{
  z-index: 40000 !important;
  div {
    font-size: 16px !important;
  }
}
// 活动详情弹框
.van-modal{
  z-index: 10000 !important;
}
.Masthead {
  min-height: 100% !important;
}
.bgContent[lazy=loading] {
  background-repeat: no-repeat;
  background-position:center;
}
.bgContent{
  width: 7.5rem;
  height: 13.34rem;
  background:linear-gradient(#fff 10%, #cbd59f 50%, #bbc891 80%);
  background-repeat: no-repeat;
  .skyImg {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    z-index: 10;
    .Masthead__image{
      width: 7.5rem;
      height: 2.249rem;
    }
  }
  .logoImg{
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    width: 100%;
    z-index: 20;
    .Masthead__image{
      width: 1.495rem;
      height: 0.317rem;
    }
  }
  .ruleImg {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    width: 1.47rem;
    height: 0.46rem !important;
    background: #cfedd2;
    color: #00967c;
    font-size: 0.22rem;
    line-height: 0.46rem;
    text-align: center;
    box-shadow: 0px 0px 5px -1px rgba(0,0,0,0.20);
    border-radius:.1rem;
    z-index: 10000;
  }
  .yun2Img {
    position: absolute;
    left: 3.913rem;
    top:0.617rem;
    width: 1.286rem;
    z-index: 20;
    .Masthead__image{
      height: 0.344rem;
    }
  }
  .yun1Img {
    position: absolute;
    left: 0.172rem;
    top:1.157rem;
    width: 1.84rem;
    z-index: 20;
    .Masthead__image{
      height: 0.489rem;
    }
  }
  .tuuuImg{
    position: absolute;
    left: 0;
    top:1.917rem;
    width: 2.02rem;
    z-index: 40;
    .Masthead__image{
      height: 0.507rem;
    }
  }
  .yu2Img{
    position: absolute;
    left: 0.236rem;
    top: 2.932rem;
    width: 0.97rem;
    z-index: 400;
    .Masthead__image{
      height: 0.45rem !important;
    }
  }
  .yu1Img{
    position: absolute;
    right: 0.952rem;
    top: 5.782rem;
    width: 1.37rem;
    z-index: 400;
    .Masthead__image{
      height:0.68rem !important;
    }
  }
  .scaleBg {
    position: absolute;
    top: 1.65rem;
    right: 0;
    width: 3.832rem;
    height:4.587rem;
    transition: all .3s ease-out;
    -webkit-transition: all .3s ease-out;
    z-index: 600;
    .treeImg {
      position: absolute;
      right: -0.22rem;
      top: 0.2rem;
      width: 3.1rem;
      height:3.6rem;
      z-index: 650;
      .Masthead__image{
        height:auto;
        width: auto
      }
    }
    .tuuuuImg{
      position: absolute;
      right: 0;
      top: 3.05rem;
      width: 3.832rem;
      height:1.087rem;
      z-index: 600;
      .Masthead__image{
        height: auto;
        width:auto
      }
    }
    .fImg{
      position:absolute;
      right: 0.142rem;
      top: 1.476rem;
      width:2.16rem;
      height: 0.94rem;
      z-index: 700;
      .Masthead__image{
        height:auto;
        width: auto
      }
    }
  }
  .treeBg {
    top: 1.65rem;
    right: 50%;
  }
  .themeImg {
    position:absolute;
    left: 0.95rem;
    top: 1.24rem;
    width:3.82rem;
    height: 5.72rem !important;
    min-height: 5.72rem !important;
    z-index: 1000;
    .Masthead__image{
      height:auto;
      width: auto
    }
  }
  .fade{
    animation: fadetheme 1s ease-in;
    animation-fill-mode: forwards;
  }
  @keyframes fadetheme {
    0%{opacity: 1}
    100%{opacity: 0}
  }
  .lvImg{
    position: absolute;
    left: 0;
    bottom: 0;
    height: 7.11rem;
    width: 7.5rem;
    z-index: 700;
    .tu9Img{
      position: absolute;
      right: 0.109rem;
      top: 2.2rem;
      width: 5.172rem;
      z-index: 710;
      .Masthead__image{
        height: auto;
      }
    }
    .eImg {
      position: absolute;
      right: 1.592rem;
      top: 2.48rem;
      width: 0.842rem;
      z-index: 710;
      .Masthead__image{
        height: auto;
      }
    }
    .dImg {
      position: absolute;
      right: 0;
      left:0;
      top: 2.457rem;
      width: 7.52rem;
      z-index: 800;
      .Masthead__image{
        height: auto;
      }
    }
    .cImg {
      position: absolute;
      left:0;
      top: 0;
      width: 3.524rem;
      z-index: 800;
      animation: myfileafrst 2s linear infinite alternate;
      .Masthead__image{
        width: auto;
        height:auto;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-direction: alternate;
        -webkit-animation-timing-function: ease-in-out;
        -webkit-transform-origin: 50% -100%;
      }
    }
    @keyframes myfileafrst /* Opera */
    {
      0% {top:0rem}
      25% {top: 0.083rem;}
      50%{top:0rem}
      75% {top: 0.083rem;}
      100% {top:0rem}
    }
    .bImg {
      position: absolute;
      left:0;
      bottom: 0;
      top: 3.961rem;
      width: 7.5rem;
      z-index: 900;
      .Masthead__image{
        height: auto
      }
    }
    .aImg {
      position: absolute;
      left:0;
      top: 2.117rem;
      width: 7.5rem;
      z-index: 950;
      animation: flower 2s linear infinite alternate;
      .Masthead__image{
        height: auto;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-direction: alternate;
        -webkit-animation-timing-function: ease-in-out;
        -webkit-transform-origin: 50% -100%;
      }
    }
    .sddImg {
      position: absolute;
      left:3.062rem;
      top: 3.961rem;
      width: 0.154rem;
      z-index: 960;
      .Masthead__image{
        height: auto;
      }
    }
    .sdddImg {
      position: absolute;
      left:2.011rem;
      top: 3.645rem;
      width: 0.208rem;
      z-index: 960;
      .Masthead__image{
        height: auto;
      }
    }
    .lotterybtnImg {
      position: absolute;
      left:2.21rem;
      top: 3.8rem;
      width: 3.08rem;
      z-index: 1.15;
      z-index:10000;
      .Masthead__image{
        height: auto;
        width:auto
      }
    }
  }
  .iosTop {
   bottom:0 !important;
  }

  @keyframes flower
  {
    0% {top:2.117rem}
    25%{top:2.20rem}
    50%{top:2.117rem}
    75%{top:2.20rem}
    100% {top:2.117rem;}
  }
}
// 背景放大先后顺序
.animationIv1 {
  animation: animationIvImg 1s linear;
  animation-fill-mode: forwards;
}
// 背景放大
.animationIv {
  animation: animationIvImg 1s ease-in 0.8s;
  animation-fill-mode: forwards;
}
.animationIv2 {
  animation: animationIvImg 1s ease-in 1s;
  animation-fill-mode: forwards;
}
.animationIv3 {
  animation: animationIvImg3 1.5s ease-in;
  animation-fill-mode: forwards;
}
.budonglvImg {
  transform: scale2d(1.15, 1.15) !important;
  bottom: -3.8rem !important;
  left: 0rem !important;
}
@keyframes animationIvImg3 {
  0%{}
  50%{}
  100% {
    bottom: -3.8rem;
    left: 0rem;
  }
}
@keyframes animationIvImg {
  0% {
    transform: scale2d(1, 1);
  }
  80% {
    transform: scale2d(1.2, 1.2);
  }
  100% {
    transform: scale2d(1.15, 1.15);
  }
}
.animationIvBack1 {
  transform: scale2d(1.15, 1.15) !important;
  animation: animationIvImgBack 1s ease-in;
  animation-fill-mode: forwards;
}
.animationIvBack {
  transform: scale2d(1.15, 1.15) !important;
  animation: animationIvImgBack 1s ease-in;
  animation-fill-mode: forwards;
}
.animationIvBack2 {
  transform: scale2d(1.15, 1.15) !important;
  animation: animationIvImgBack 1s ease-in;
  animation-fill-mode: forwards;
}
.animationIvBack3 {
  bottom: -3.8rem !important;
  left: 0rem !important;
  transform: scale2d(1.15, 1.15) !important;
  animation: animationIvImgBack3 0.5s ease-in;
  animation-fill-mode: forwards;
}
@keyframes animationIvImgBack3 {
  0%{}
  50%{}
  100% {
    bottom: 0;
    left: 0rem;
  }
}
@keyframes animationIvImgBack {
  0%{}
  50%{}
  100% {
    transform: scale2d(1, 1);
  }
}

.line1 {
  position: absolute !important;
  top: 0rem;
  left:1.41rem;
  z-index: 2300 !important;
  width:8.62rem;
  height: 2.063rem !important;
  transform-origin: right top;
  transform: rotate(-10deg);
  .Masthead__image{
    width: auto;
    height: auto
  }
}
.line2 {
  position: absolute !important;
  top: 4.407rem;
  left:1.328rem;
  z-index: 2100 !important;
  width:6.638rem;
  height: 1.517rem !important;
  .Masthead__image{
    width: auto;
    height: auto
  }
}
// 符出现的动画
// .animationFU {
//   animation: animateFU 1s linear;
//   animation-fill-mode: forwards;
// }
// @keyframes animateFU {
//   0% {
//     opacity: 0;
//     transform: translateY(-100%);
//     filter:Alpha(opacity=0);
//   }
//   50%{
//     opacity: 0.5;
//     filter:Alpha(opacity=50);
//     transform: translateY(-50%);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//     filter:Alpha(opacity=100);
//   }
// }
.fuCenter {
  animation: fuCenter 1s cubic-bezier(.01,1.01,.27,.99);
  animation-fill-mode: forwards;
}
@keyframes fuCenter {
  0% {
    opacity: 1;
    z-index: 3200;
  }
  50%{
    opacity: 1;
    z-index: 3200;
  }
  70% {
    opacity: 1;
    top: 0.8rem;
    left: 1.25rem;
    width: 5rem;
    height: 8.893rem;
    z-index: 3200;
  }
  100% {
    opacity: 0;
    top: 0.8rem;
    left: 1.25rem;
    width: 5rem;
    height: 8.893rem;
    z-index: 3200;
  }
}
.narrowImg {
  animation: narrowImg 1s cubic-bezier(.01,1.01,.27,.99);
  animation-fill-mode: forwards;
}
@keyframes narrowImg {
  0% {
    opacity: 1;
    top: 0.8rem;
    left: 1.25rem;
    width: 5rem;
    height: 8.893rem;
    z-index: 3200;
    filter:Alpha(opacity=100);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.budongfu {
  animation: budongfu 1s linear;
  animation-fill-mode: forwards;
}
@keyframes budongfu {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.returnHome {
  position:absolute;
  top: 12.46rem;
  left: 0.5rem;
  z-index:3000;
  width: 1.4rem;
  height:1rem;
  animation: showreturnHome 0.5s linear;
  animation-fill-mode: forwards;
}
.makeFU {
  position:absolute;
  top: 12.46rem;
  right: 0.5rem;
  z-index:4000;
  width: 2.19rem;
  height:1rem;
  animation: showreturnHome 0.5s linear;
  animation-fill-mode: forwards;
}
// 如果是小的屏幕
.returnsHome {
  position:absolute;
  top: 12.46rem;
  left: 0.5rem;
  z-index:3000;
  width: 1.4rem;
  height:1rem;
  animation: showsreturnHome 0.5s linear;
  animation-fill-mode: forwards;
}
.makesFU {
  position:absolute;
  top: 12.46rem;
  right: 0.5rem;
  z-index:3000;
  width: 2.19rem;
  height:1rem;
  animation: showsreturnHome 0.5s linear;
  animation-fill-mode: forwards;
}
.renImg {
  display: block;
  position:absolute;
  top: 7.44rem;
  left: 1.38rem;
  z-index:2800;
  width: 2.04rem;
  height:3.04rem;
  animation: showRen 2s ease-in-out infinite;
}
@keyframes showRen {
  0 {top: 8.44rem}
  50%{top: 8rem}
  100% {top: 7.44rem}
}
@keyframes showreturnHome {
  0 {top: 12.46rem}
  100% {top: 10.96rem}
}
@keyframes showsreturnHome {
  0 {top: 12.46rem}
  100% {top: 9.5rem}
}

img[lazy=loading] {
  animation:fade 0.5s;
  width: 100px;
  height:100px;
}
@keyframes fade {
  0%{
    opacity: 0;
    transform-origin: center center;
    transform: rotateX(180deg);
  }
  100%{
    opacity: 1;
    transform-origin: center center;
    transform: rotateX(180deg);
  }
}

// 首次进入提示
.firstShowTip{
  position: absolute;
  width: 7.5rem;
  height: 13.34rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow: hidden;
  background-color: rgba(0,0,0,.8);
  z-index: 20000;
  .icon {
    position: absolute;
    top: 3rem;
    left: 3.15rem;
    width: 1.68rem;
    height: 4.23rem;
    img{
      width: auto;
      height: auto
    }
  }
  .iconText {
    position: absolute;
    top: 7.66rem;
    left: 2.88rem;
    font-size: 20px;
    z-index: 20001;
    color:#fff;
    letter-spacing: 4px;
    text-align: center;
    height: 24px;
  }
  .yes{
    display: block;
    position: absolute;
    bottom: 3rem;
    left: 2.25rem;
    width: 3rem;
    height: 0.9rem;
    img{
      width: auto;
      height: auto
    }
  }
  // 旋转符
  .rotateFu {
    animation: rotateFu 1.5s cubic-bezier(0,.55,.44,1) 0.2s;
    -webkit-animation: rotateFu 1.5s cubic-bezier(0,.55,.44,1) 0.2s;
    transform-origin: center center;
    animation-fill-mode: forwards;
    z-index: 201000;
    background-color: transparent !important;
    background-image: none !important;
  }
  @keyframes rotateFu {
    0%{
      filter: blur(20px);
      transform: rotateY(0deg);
    }
    100% {
      filter: none;
      transform: rotateY(-2880deg);
    }
  }
  @-webkit-keyframes rotateFu {
    0%{
      filter: blur(20px);
      transform: rotateY(0deg);
    }
    100% {
      -moz-filter: none;
      -ms-filter: none; 
      filter: none;
      transform: rotateY(-2880deg);
    }
  }
  .rotateFan {
    animation: rotateFan 1.5s cubic-bezier(0,.55,.44,1) 0.2s;
    -webkit-animation: rotateFan 1.5s cubic-bezier(0,.55,.44,1) 0.2s;
    transform-origin: center center;
    z-index: 201000;
    background-color: transparent!important!important;
    background-image: none!important;
  }
  @keyframes rotateFan {
    0%{
      filter: blur(20px);
      transform: rotateY(0deg);
    }
    100% {
      filter: none;
      transform: rotateY(2880deg);
    }
  }
  @-webkit-keyframes rotateFan {
    0%{
      filter: blur(20px);
      transform: rotateY(0deg);
    }
    100% {
      filter: none;
      transform: rotateY(2880deg);
    }
  }
  .picture2 {
    position: absolute;
    top: 0.8rem;
    left: 1.25rem;
    width: 5rem;
    height: 8.893rem;
  }
  #picture2{
    position: absolute;
    top: 0.8rem;
    left: 1.25rem;
    width: 5rem;
    height: 8.893rem;
  }
  .checkedBeg{
    position: absolute;
    top: 0;
    left: 0;
    width: 5rem;
    height: 8.893rem;
    z-index: 20000;
  }
  .dateClass {
    position: absolute;
    top: 1.35rem;
    left: 1rem;
    width: 3rem;
    z-index: 25000;
    font-size: 10px;
  }
  .chouClass {
    position: absolute;
    top:10rem;
    left: 0.55rem;
    width: 3rem;
    height: 0.88rem;
    z-index: 20010
  }
  .shareClass {
    position: absolute;
    top:10rem;
    right: 0.55rem;
    width: 3rem;
    height: 0.88rem;
    z-index: 20010
  }
  .fiveWords {
    position: absolute;
    top: 2.05rem;
    left: 2.3rem;
    font-size: 38px;
    z-index: 20100;
    width: 0.4rem;
    height: 5rem;
    word-wrap: break-word;
    color: #fff;
    font-family: PingFangSC-Semibold;
  }
}
// fixed
.newBigtree1 {
  animation: treeMove 1s ease-in 0.3s;
  animation-fill-mode: forwards;
}
.bufongtree {
  top: -2rem !important;
  right: -3.6rem !important;
  width: 11rem !important;
  height: 11.4rem !important;
}
@keyframes treeMove {
  100% {
    top: -2rem;
    right: -3.6rem;
    width: 11rem;
    height: 11.4rem;
  }
}
.smallTree1 {
  top: -2rem !important;
  right: -3.6rem !important;
  width: 11rem !important;
  height: 11.4rem !important;
  animation: treeMoveBack 0.5s ease-in;
  animation-fill-mode: forwards;
}
@keyframes treeMoveBack {
  100% {
    right: -0.22rem;
    top: 0.2rem;
    width: 3.1rem;
    height:3.6rem;
  }
}
.mountain{
  animation: mountainMove 1s ease-in 0.3s;
  animation-fill-mode: forwards;
}
.budongtu{
  top: 8.4rem !important;
  right: 0rem !important;
  width: 9rem !important;
  height: 0.5rem !important;
}
@keyframes mountainMove {
  100% {
    top: 8.4rem;
    right: 0rem;
    width: 9rem;
    height: 0.5rem;
  }
}
.smallMountain{
  top: 8.4rem !important;
  right: 0rem !important;
  width: 9rem !important;
  height: 0.5rem !important;
  animation: mountainMoveBack 0.5s ease-in;
  animation-fill-mode: forwards;
}
@keyframes mountainMoveBack {
  100% {
    right: 0;
    top: 3.05rem;
    width: 3.832rem;
    height: 1.087rem;
  }
}
.btnMove{
  position: relative;
  z-index: 800;
}
.btnMove .robot{
  opacity: 0;
  animation: btnMove .5s ease-in .5s;
  animation-fill-mode: forwards;
}
@keyframes btnMove {
  0% {
    opacity: 0;
    transform: translate(0, 10px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.btnMoveBack .robot{
  position: relative;
  opacity: 1 !important;
  transform: translate(0, 10px) !important;
  animation: btnMoveBack .5s ease-in .5s;
  animation-fill-mode: forwards;
  z-index: 900;
}
@keyframes btnMoveBack {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }
  100% {
    opacity: 0;
    transform: translate(0, 10px);
  }
}
// 付出现动画fixed
// .animationFU {
//   animation: animateFU 1s linear;
//   animation-fill-mode: forwards;
// }
.animationFU {
  opacity: 0;
}
.animationFU:nth-child(1) {
  animation: animateFU 0.8s linear;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(2) {
  animation: animateFU 0.8s linear;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(3) {
  animation: animateFU 0.6s linear .2s;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(4) {
  animation: animateFU 0.6s linear .2s;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(5) {
  animation: animateFU 0.55s linear .25s;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(6) {
  animation: animateFU 0.55s linear .25s;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(7) {
  animation: animateFU 0.5s linear .3s;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(8) {
  animation: animateFU 0.5s linear .3s;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(9) {
  animation: animateFU 0.4s linear .4s;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(10) {
  animation: animateFU 0.4s linear .4s;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(11) {
  animation: animateFU 0.35s linear .45s;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(12) {
  animation: animateFU 0.35s linear .45s;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(13) {
  animation: animateFU 0.35s linear .45s;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(14) {
  animation: animateFU 0.3s linear .5s;
  animation-fill-mode: forwards;
}
.animationFU:nth-child(15) {
  animation: animateFU 0.3s linear .5s;
  animation-fill-mode: forwards;
}
@keyframes animateFU {
  0% {
    opacity: 0;
    transform: translateY(-100%);
    filter:Alpha(opacity=0);
  }
  50%{
    opacity: 0.5;
    filter:Alpha(opacity=50);
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter:Alpha(opacity=100);
  }
}
.share-wapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.7;
  z-index: 30000;
  .share-intro {
    width: 85%;
    z-index: 30000;
  }
}
@media only screen and (min-device-height: 740px) {
  .bgContent{
    width: 7.5rem;
    height: 100vh !important;
    background:linear-gradient(#fff 10%, #cbd59f 50%, #bbc891 80%);
    background-repeat: no-repeat;
  }
  .lotterybtnImg {
    position: absolute;
    left:2.21rem;
    top: 4rem !important;
    width: 3.08rem;
    z-index: 1.15;
    z-index:10000;
    .Masthead__image{
      height: auto;
      width:auto
    }
  }
  .firstShowTip{
    position: absolute;
    width: 7.5rem;
    height: 100vh !important;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    overflow: hidden;
    background-color: rgba(0,0,0,.8);
    z-index: 20000;
  }
  .animationIv3 {
    animation: animationIvImg3 1.5s ease-in;
    animation-fill-mode: forwards;
  }
  .budonglvImg {
    transform: scale2d(1.15, 1.15) !important;
    bottom: -3.8rem !important;
    left: 0rem !important;
  }
  @keyframes animationIvImg3 {
    0%{}
    50%{}
    100% {
      bottom: -4.8rem;
      left: 0rem;
    }
  }
}
</style>
