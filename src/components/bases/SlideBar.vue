<!-- slidebar -->
<template>
<div class='slidebar'>
    
    <div class="clear_fix">
        <div class="slide_bar">
           <div class="menu_box"  @mouseover="showSubmenu('js')" @mouseleave="hideSubmenu('js')">
               <ul class="menu_main">
                   <li>技术</li>
                   <li><router-link to="">java</router-link></li>
                   <li><router-link to="">PHP</router-link></li>
                   <li><router-link to="">H5全栈</router-link></li>
                   <li><router-link to="">区块链</router-link></li>
                   <li><i class="iconfont icon-xiangyou"></i></li>
               </ul>
               <div class="sub_menu" v-show="flag">
                   <div class="item" v-for="(item,index) in jishuData" :key="index">
                    <h5>{{item.bigClass}}</h5>
                    <ul>
                       <li v-for="(smitem,index) in item.smClass" :key="index" >
                           <router-link to="'/jishu'+smitem"> {{smitem}}</router-link>    
                       </li>
                    </ul>
                   </div>
               </div>
           </div>
           <div class="menu_box" @mouseover="showSubmenu('cp')" @mouseleave="hideSubmenu('cp')">
               <ul class="menu_main">
                   <li>产品</li>
                   <li><router-link to="">产品总监</router-link></li>
                   <li><router-link to="">产品经理</router-link></li>
                   <li><router-link to="">产品设计师</router-link></li> 
                   <li><i class="iconfont icon-xiangyou"></i></li>
               </ul>
               <div class="sub_menu" v-show="flag2">
                   <div class="item" v-for="(item,index) in chanpingJSON" :key="index">
                    <h5>{{item.bigClass}}</h5>
                    <ul>
                       <li v-for="(smitem,index) in item.smClass" :key="index" >
                           <router-link to="'/cp'+smitem"> {{smitem}}</router-link>    
                       </li>
                    </ul>
                   </div>
               </div>
           </div>
           <div class="menu_box" @mouseover="showSubmenu('sj')" @mouseleave="hideSubmenu('sj')">
               <ul class="menu_main">
                   <li>设计</li>
                   <li><router-link to="">UI设计师</router-link></li>
                   <li><router-link to="">交互设计师</router-link></li>
                   <li><router-link to="">网页设计师</router-link></li>
                   <li><i class="iconfont icon-xiangyou"></i></li>
               </ul>
               <div class="sub_menu" v-show="flag3">
                   <div class="item" v-for="(item,index) in shejiJSON" :key="index">
                    <h5>{{item.bigClass}}</h5>
                    <ul>
                       <li v-for="(smitem,index) in item.smClass" :key="index" >
                           <router-link to="'/sj'+smitem"> {{smitem}}</router-link>    
                       </li>
                    </ul>
                   </div>
               </div>
           </div>
           <div class="menu_box" @mouseover="showSubmenu('yy')" @mouseleave="hideSubmenu('yy')">
               <ul class="menu_main">
                   <li>运营</li>
                   <li><router-link to="">新媒体运营</router-link></li>
                   <li><router-link to="">编辑</router-link></li>
                   <li><router-link to="">数据运营</router-link></li>
                   <li><i class="iconfont icon-xiangyou"></i></li>
               </ul>
               <div class="sub_menu" v-show="flag4">
                   <div class="item" v-for="(item,index) in yunyingJSON" :key="index">
                    <h5>{{item.bigClass}}</h5>
                    <ul>
                       <li v-for="(smitem,index) in item.smClass" :key="index" >
                           <router-link to="'/yy'+smitem"> {{smitem}}</router-link>    
                       </li>
                    </ul>
                   </div>
               </div>
           </div>
           <div class="menu_box" @mouseover="showSubmenu('sc')" @mouseleave="hideSubmenu('sc')">
               <ul class="menu_main">
                   <li>市场</li>
                   <li><router-link to="">市场营销</router-link></li>
                   <li><router-link to="">市场推广</router-link></li>
                   <li><router-link to="">市场策划</router-link></li>
                   <li><i class="iconfont icon-xiangyou"></i></li>
               </ul>
               <div class="sub_menu" v-show="flag5">
                   <div class="item" v-for="(item,index) in shichangJSON" :key="index">
                    <h5>{{item.bigClass}}</h5>
                    <ul>
                       <li v-for="(smitem,index) in item.smClass" :key="index" >
                           <router-link to="'/sc'+smitem"> {{smitem}}</router-link>    
                       </li>
                    </ul>
                   </div>
               </div>
           </div>
           <div class="menu_box">
               <ul class="menu_main">
                   <li>销售</li>
                   <li><router-link to="">销售专员</router-link></li>
                   <li><router-link to="">销售经理</router-link></li>
                   <li><router-link to="">销售总监</router-link></li>
                   <li><i class="iconfont icon-xiangyou"></i></li>
               </ul>
           </div>
           <div class="menu_box">
               <ul class="menu_main">
                   <li>职能</li>
                   <li><router-link to="">HR</router-link></li>
                   <li><router-link to="">行政</router-link></li>
                   <li><router-link to="">财务</router-link></li>
                   <li><router-link to="">审计</router-link></li>
                   <li><i class="iconfont icon-xiangyou"></i></li>
               </ul>
           </div>
           <div class="menu_box">
               <ul class="menu_main">
                   <li>游戏</li>
                   <li><router-link to="">小游戏开发</router-link></li>
                   <li><router-link to="">U3D</router-link></li>
                   <li><router-link to="">游戏策划</router-link></li>
                   <li><i class="iconfont icon-xiangyou"></i></li>
               </ul>
           </div>
        </div>
<div class="home_banner">
<div class="lubo">
     <transition-group tag="ul" class="lubo_box" enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutUp">
         <li v-for="(list,index) in lunboList" :key="list.id" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
          <a :href="list.clickUrl" rel="external nofollow" >
             <img :src="list.url" :alt="list.id">
          </a>
         </li>
     </transition-group>
     <div class="carousel-items">
   <span class="dot" v-for="(item,index) in lunboList.length" :key=index :class="{'active':index===currentIndex}" @click="change(index)">
   </span>
  </div>
</div>
<div class="lubo_btn" v-show="lunboFlag">
     <span class="left_btn" @click="prevHandel" @mouseover="stop" @mouseleave="go">
         <i class="iconfont icon-xiangzuo1"></i></span>
     <span class="right_btn" @click="nextHandel" @mouseover="stop" @mouseleave="go">
         <i class="iconfont icon-xiangyou1"></i></span>
</div>
</div>
</div>
</div>
</template>

<script>
import {jishuJSON,chanpingJSON,shejiJSON,yunyingJSON,shichangJSON,lunboList} from '../../../static/js/indexJSON'
export default {
name: 'SlideBar',
components: {},
data() {
//这里存放数据
return {
     flag:false,
     flag2:false,
     flag3:false,
     flag4:false,
     flag5:false,
     lunboFlag:true,
     jishuData: jishuJSON,
     chanpingJSON:chanpingJSON,
     shejiJSON:shejiJSON,
     yunyingJSON:yunyingJSON,
     lunboList:lunboList,
     shichangJSON:shichangJSON,
      currentIndex:0,
      timer:''
};
},
methods: {
showSubmenu(type){
    if(type == 'js'){
       this.flag = true
    }else if(type == 'cp'){
        this.flag2 = true
    }else if(type == 'sj'){
        this.flag3 = true
    }else if(type == 'yy'){
        this.flag4 = true
    }else if(type == 'sc'){
        this.flag5 = true
    }
    
},
hideSubmenu(type){
    if(type == 'js'){
       this.flag = false
    }else if(type == 'cp'){
        this.flag2 = false
    }else if(type == 'sj'){
        this.flag3 = false
    }else if(type == 'yy'){
        this.flag4 = false
    }else if(type == 'sc'){
        this.flag5 = false
    }
},
 go() {
   this.timer = setInterval(() => {
    this.autoPlay()
   },4000)
  },
  stop() {
   clearInterval(this.timer)
   this.timer = null
  },
  change(index) {
   this.currentIndex = index
  },
  autoPlay() {
   this.currentIndex++
   if (this.currentIndex > this.lunboList.length - 1) {
    this.currentIndex = 0
   }
  },
  prevHandel(){
     this.currentIndex--;
     if(this.currentIndex < 0){
        this.currentIndex = this.lunboList.length - 1;
     }
  },
  nextHandel(){
     this.autoPlay();
  }
},
}
</script>
<style scoped>

a{
    color:#666;
}
.slide_bar{
    float:left;
    width:320px;
}
.menu_main{
    display: flex;
    font-size:14px;
    justify-content: space-between;
    line-height:25px;
    padding:10px 0;
}
.menu_box a:hover{
    text-decoration: underline;
    color:#0dca9f;
}
.menu_box{
    position:relative;
    margin:2px auto;
    transition:all 0.2s ease;
}
.menu_box:first-child{
    margin-top:-10px;
}
.menu_box:hover{
    padding:0px 10px;
    box-shadow: -2px 1px 5px #999;
    border-radius: 5px;
}
.menu_main li:first-child{
    font-size: 18px;
}
.sub_menu{
    position:absolute;
    left:320px;
    top:0;
    width:600px;
    box-shadow: 2px 5px 8px #999;
    border-radius: 5px;
    background-color:#fff;
    padding:20px;
    z-index: 5;
}
.sub_menu ul{
    display:flex;
    flex-wrap: wrap;
}
.sub_menu ul li{
    font-size:14px;
    padding:0 10px;
    color:#999;
    line-height:30px;
}
.item{
    margin-bottom: 20px;
}
.home_banner{
    position: relative;
    margin-left: 360px;
    margin-top: 20px;
    overflow: hidden;
}
.lubo{ width: 100%;clear: both; position: relative; height:365px;margin:0 auto;}
  .lubo_box{ position: relative; width: 100%; height:100%;list-style: none; }
  .lubo_box li{ float: left;position: absolute; top: 0; left: 0; width: 100%; height:100%; filter:alpha(opacity=0);}
  .lubo_box li a{ display: block;width: 100%;  height: 100%;}
  .lubo_box li img{ width: 100%; height: 100%;}
  /*圆点*/
  .carousel-items {
 position: absolute;
 z-index: 2;
 top: 340px;
 width: 100%;
 margin: 0 auto;
 text-align: center;
 font-size: 0;
  }
  .carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
 }
 .carousel-items span:hover{
    background:yellow;
 }
 .active {
  background-color: #0dca9f !important;
 }
  /*按钮*/
  .lubo_btn{ position: absolute; width: 100%; top: 140px;}
  .lubo_btn .iconfont{font-size:40px;}
  .left_btn:hover, .right_btn:hover{background:#0dca9f;transition: all 1s ease;}
  .left_btn, .right_btn{ 
      width: 40px;
       height: 80px;opacity: 0.8;filter:alpha(opacity=80); cursor: pointer; color: #fff; line-height: 80px; font-size: 30px; text-align: center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
  .left_btn{ float: left;}
  .right_btn{ float: right;}
</style>