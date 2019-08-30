<!-- head -->
<template>
<div class='head'>
    <transition enter-active-class="animated jackInTheBox" leave-active-class="animated zoomOut">
    <div class="cityBox" v-show="cityFlag">
        <div class="cityHead">
            <span class="l1">切换城市</span>
            <span class="r1" @click="cityFlag = false"><i class="iconfont icon-cuocha_kuai"></i></span>
        </div>
        <div class="cityBody">
            <div class="title">
               <p>亲爱的用户您好：</p>
               <p>切换城市分站，让我们为您提供更准确的职位信息。</p>
            </div>
            <ul class="citys">
                <li :class="item==sleectedCity?'current':''" @click="select(item)" v-for="(item,index) in citys" :key="index">{{item}}</li>
            </ul>
            <div class="cityFoot">
            <span>其他城市正在开通中，敬请期待！</span>
        </div>
        </div>   
    </div>
    </transition>
    <div class="inner"> 
        <div class="head_left">
            <a href="/" class="logo"></a>
            <div class="selectCity">
                <span>{{sleectedCity}}</span>
                <span @click="cityFlag = true">[切换城市]</span>
            </div>
        </div>
        <ul class="head_mid">
            <li><router-link :class="{'router-link-active': this.$route.name == 'index'}" to="/index">首页</router-link></li>
            <li><router-link :class="{'router-link-active': this.$route.name == 'company'}" to="/company">公司</router-link></li>
            <li><router-link :class="{'router-link-active': this.$route.name == 'school'}" to="/school">校园</router-link></li>
            <li><router-link :class="{'router-link-active': this.$route.name == 'words'}" to="/words">言职</router-link></li>
        </ul>
        <div class="head_right">
            <ul class="account_bar">
                <li class="news" @click="newsFlag = !newsFlag;numFlag=false">
                    <span>消息</span>
                    <span class="number" v-show="numFlag">1</span>
                    <transition enter-active-class="animated rubberBand" leave-active-class="animated bounceOut">   
                    <div class="showNews" v-show="newsFlag">
                    <p>Hi，拉勾君见过12581505个互联网人，才终于等到你。90%的HR会优先面试有完善简历的人才。现在就来完善简历吧</p>
                    </div>
                    </transition>   
                </li>
                <li><router-link :class="{'router-link-active': this.$route.name == 'resume'}" to="/resume">简历</router-link></li>
                <li><router-link :class="{'router-link-active': this.$route.name == 'msgbox'}" to="/msgbox">投递箱</router-link></li>
                <li><router-link :class="{'router-link-active': this.$route.name == 'favorites'}" to="/collect">收藏夹</router-link></li>
                <li class="last" style="position:relative;width:100px" @mouseover ="show" @mouseleave="hide">
                    <span class="user">拉钩用户Bettersong</span>
                    <i class="iconfont" :class="showClass" style="color:#fff;font-size:14px"></i>
                    <transition enter-active-class="animated bounceInDown" leave-active-class="animated zoomOut">
                    <ul class="submenu" v-show="flag" >
                        <li v-for="(item, index) in submenu" :key="index">
                            <router-link :to="item.link">{{item.name}}</router-link>
                        </li>    
                    </ul>
                    </transition>
                </li>
            </ul>
            <router-link class="lg_app" to="/lgapp">
                <i class="iconfont icon-iconfontshouji"></i>拉钩APP
                </router-link>
            <router-link to="/lgcompany">进入企业版</router-link>
        </div>
    </div>
</div>
</template>

<script>

export default {
name: 'Head',
components: {},
data() {
//这里存放数据
return {
    flag:false,
    newsFlag:false,
    numFlag: true,
    cityFlag: false,
    sleectedCity:'上海站',
    showClass:'icon-xiala',
    submenu:[{link:'/myBooking',name:'我的订阅'},{link:'/position',name:'职位邀请'},{link:'/question',name:'我的问答'},{link:'/setting',name:'账号设置'},{link:'/gotoCom',name:'去企业版'},{link:'/logout',name:'退出'}],
    citys:['全国站','北京站','上海站','广州站','深圳站','杭州站','苏州站']
};
},
created() {
    // console.log(this.$route.name)
},
methods: {
show(){
    this.flag = true;
    this.showClass = 'icon-shangla'
},
hide(){
    this.flag = false;
    this.showClass = 'icon-xiala'
},
select(city){
    // console.log(city)
    this.sleectedCity = city;
    this.cityFlag = false;
}
},
}
</script>
<style scoped>
ul{list-style: none;}
  .head {
  width: 100%;
  min-width:1200px;
  height: 40px;
  line-height: 40px;
  background-color: #32373e;
  z-index:90;
  position: relative;
}
.cityBox{
    position: absolute;
    width:450px;
    margin:60px auto;
    top:0;
    right:0;
    bottom:0;
    left:0;
}
.cityHead{
    background-color: #00b38a;
    color: #fff;
    height: 40px;
    padding: 0 10px;
    font-size: 18px;
}
.cityHead .iconfont{
    cursor: pointer;
}
.cityBody{
    padding:20px;
    background-color:#fff;
}
.cityFoot{
    margin-top:20px;
    font-size:14px;
    color:#666;
}
.title{
    padding-bottom:20px;
    border-bottom:1px dashed #ccc;
}
.title p:first-child{
    font-size:20px;
}
.title p:last-child{
    color:#666;
}
.citys{
    margin-top:20px;
}
.citys>li{
    width: 90px;
    display: inline-block;
    margin: 10px 7px 0 0;
    border: 1px solid #eee;
    color: #666;
    cursor: pointer;
    text-align: center;
}
.citys>li:hover,.citys>li.current{
    border-color: #00b38a;
    color:#000;
}
.inner {
  max-width: 1200px;
  margin: 0 auto;
}
.head .number{
    display: inline-block;
    padding: 0 3px;
    background-color: #fd5f39;
    color: #fff;
    border-radius: 3px;
    line-height: 15px;
}
.logo {
  width: 43px;
  height: 21px;
  float: left;
  margin-top: 9px;
  background-image: url('../../../static/images/sprite_logo.png');
  background-repeat: no-repeat;
  background-position: -10px -10px;
  background-size: 64px 128px;
  display: block;
  padding-left: 0;
}
.selectCity{
  float:left;
  margin-left:10px;
}
.selectCity span:first-child{
  font-size:14px;
  color:#0dca9f;
  margin-left:20px;
}
.selectCity span:last-child{
  font-size:12px;
  color:#ccc;
  margin-left:10px;
  cursor: pointer;
}
.selectCity span:last-child:hover{
    color:#fff;
}
.head_mid{
    float:left;
    margin-left:35px;
}
.inner a,.inner span{
    text-decoration: none;
    color:#afb5c0;
    font-size:14px;
}
.news{
    position: relative;
    cursor: pointer;
}
.showNews{
    position: absolute;
    width: 320px;
    padding: 15px;
    border: 1px solid #e7e7e7;
    -webkit-box-shadow: 1px 2px 2px #ccc;
    box-shadow: 1px 2px 2px #ccc;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background: #fff;
    left: 0;
    text-align: left;
    line-height: 20px;
    bottom: -92px;
    color:#00b38a;
    z-index: 5;
}
.inner ul{
    display: flex;
    height:40px;
}
.inner ul li{
    width:70px;
    font-size:14px;
    text-align:center;
}
.inner ul li a{
    display: block;
    width:100%;
    height:100%
}
.inner a:hover,.inner span:hover{
    color:#fff;
}
.router-link-active{
    color:#fff !important;
    background-color: #24282C;
}
.head_right{
    float:right;
}
.account_bar{
    float: left;
}
.head_right .lg_app{
    padding:0 35px 0 25px;
    color:#08d7a2;
}
.iconfont{
    font-size: 20px;
    vertical-align: middle;
}
.head .head_right .submenu{
    position: absolute;
    display: unset;
    top:40px;
    left:0px;
    z-index: 1;
}
.head .head_right .submenu li{
    width:100px;
    cursor: pointer;
    color:#afb5c0;
    background-color: #32373e;
}
.submenu li:hover{
    color:#fff;
    background:#24282C;
}
.user{
    display:block;
    float: left;
    color:#afb5c0;
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    cursor:pointer;
}

</style>