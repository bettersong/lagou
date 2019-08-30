<!-- foot -->
<template>
<div class='foot'>
    <div class="warp">
      <div class="inner">
        <div class="inner_left">
             <router-link to="" class="link_btn"><i class="iconfont icon-shouji"></i>下载拉钩APP</router-link>
             <div class="link_btn" @mouseover="wxminTag=true" @mouseleave="wxminTag=false">
                 <i class="iconfont icon-weixinxiaochengxu"></i>
                 微信小程序
                 <transition enter-active-class="animated zoomInDown" leave-active-class="animated zoomOut">
                    <img src="../../../static/images/lagou-mina.png" v-show="wxminTag"/>
                 </transition> 
             </div>
             <div class="inner_left_bom">
                 <div class="ilb_link" @mouseover="wxTag=true" @mouseleave="wxTag=false">
                     <i class="iconfont icon-weixin"></i>
                     拉钩微信
                     <transition enter-active-class="animated bounceInLeft" leave-active-class="animated fadeOutLeft">
                        <img src="../../../static/images/lg_pic_weixin.png" v-show="wxTag"/>
                     </transition> 
                 </div>
                 <router-link to="" class="ilb_link"><i class="iconfont icon-weibo"></i>拉钩微博</router-link>
             </div>
        </div>
        <div class="inner_right">
             <div class="ir_one" v-for="(item, index) in rightData" :key="index">
                 <h3>{{item.title}}</h3>
                 <router-link v-for="(link,index) in item.link" :key="index" :to="link.href">{{link.name}}</router-link>
             </div>
             <!-- <div class="ir_two">
                 <h3>用户帮助</h3>
                 <router-link to="https://activity.lagou.com/activity/dist/business-2018/#/">帮助中心</router-link>
                 <router-link to="https://www.lagou.com/gongsi/">用户服务协议</router-link>
                 <router-link to="https://www.lagou.com/app/download.html">隐私政策</router-link>
                 <router-link to="https://www.lagou.com/app/download.html">在线提问</router-link>
             </div>
             <div class="ir_two">
                 <h3>联系方式</h3>
                 <router-link to="https://activity.lagou.com/activity/dist/business-2018/#/">服务热线：4006 2828 35 (9:00 -18:00)</router-link>
                 <router-link to="https://www.lagou.com/gongsi/">企业服务邮箱：cc@lagou.com</router-link>
                 <router-link to="https://www.lagou.com/app/download.html">联系我们</router-link>
             </div> -->
        </div>
    </div>
    </div>
    
    <div class="copyright">
         <div class="cr_inner">
            <div class="cri_left">
                <span><em>©</em> 2018 拉勾网</span>
                <router-link to="">京ICP备14023790号-2</router-link>
                <router-link to=""><i class="foot_tag"></i>京公网安备 11010802024043号</router-link>
                <div class="cri_box">
                    <i class="toot_tag2"></i>
                    <p>
                        <span>违法和不良信息举报</span>
                        <span>电话：4006 2828 35</span>
                        <span>邮箱: cc@lagou.com</span>
                    </p>
                </div>
            </div>
            <div class="cri_right">
                <i class="lg_foot_logo"></i>
            </div>
         </div>
    </div>
</div>
</template>

<script>
var rightData = [
    {id:1,title:"企业服务",link:[{name:"招聘抢人宝典",href:"https://activity.lagou.com/activity/dist/business-2018/#/"},{name:"公司搜索",href:"https://www.lagou.com/gongsi/"},{name:"拉钩APP",href:"https://www.lagou.com/app/download.html"}]},
    {id:2,title:"用户帮助",link:[{name:"帮助中心",href:"https://activity.lagou.com/activity/dist/business-2018/#/"},{name:"用户服务协议",href:"https://www.lagou.com/gongsi/"},{name:"隐私政策",href:"https://www.lagou.com/app/download.html"},{name:"在线提问",href:"https://www.lagou.com/app/download.html"}]},
    {id:3,title:"联系方式",link:[{name:"服务热线：4006 2828 35 (9:00 -18:00)",href:""},{name:"企业服务邮箱：cc@lagou.com",href:"https://www.lagou.com/gongsi/"},{name:"联系我们",href:"https://www.lagou.com/app/download.html"}]}
];
export default {
name: 'Foot',
components: {},
data() {
return {
  wxminTag: false,
  wxTag: false,
  rightData:rightData
};
},
methods: {
wxminShow(){
    this.wxminTag = true
    console.log(11)
}
},
}
</script>
<style scoped>
.foot{
    width:100%;
    margin: 40px auto 0px;
    clear:both;
    
    position: relative;
}
.warp{
    width: 1200px;
    background-color: #fff;
    margin:0 auto;
    border-top: 1px solid #ebebeb;
}
.inner{
    max-width: 1200px;
    margin: 49px auto 66px;
    white-space: nowrap;
    display: flex;
}
.inner_left{
    border-right:1px solid #e8e8e8;
    padding-right:130px;
}
.link_btn{
    position:relative;
    display: block;
    width:180px;
    padding:10px 8px;
    border:1px solid #00B38A ;
    color:#00B38A;
    text-align: center;
    margin-bottom:15px;
    cursor: pointer;
}
.link_btn img,.inner_left_bom img{
    position: absolute;
    width:140px;
    height:140px;
    box-shadow: 1px 2px 5px #ccc;
}
.link_btn img{
right:-160px;
}
.link_btn:hover{
    background-color: #00b38a;
    color:#fff;
}
.inner_left_bom img{
    top:30px;
    left:0px;
}
.inner_left_bom{
    display: flex;
    justify-content: space-between;
}
.ilb_link{
    font-size:14px;
    color:#555;
    cursor: pointer;
    /* padding:10px; */
}
.ilb_link:first-child{
    position: relative;
}
.ilb_link:hover{
    color:#00B38A;
}
.ilb_link .iconfont{
    /* color: #bbb; */
    margin-right:5px;
    vertical-align: middle;
}
.inner_right{
    margin-left:130px;
    display: flex;
    flex:1;
    justify-content: space-between;
}
.inner_right h3{
    margin-bottom:30px;
    color:#555;
}
.inner_right a{
    display: block;
    color:#555;
    font-size:14px;
    margin-bottom: 15px;
}
.inner_right a:hover{
    color:#00B38A;
}
.copyright{
    clear:both;
    height:100px;
    background-color: #fafafa;
    text-align: center;
    padding:20px 0;
}
.copyright,.copyright a{
    font-size:14px;
    color:#999;
}
.copyright a:hover{
    color:#000;
}
.copyright a:nth-child(3),.copyright a:nth-child(2){
    margin-left:15px;
}
.cr_inner{
    display: flex;
    width: 1200px;
    margin: 20px auto;
    align-items: center;
    justify-content: space-between;
}
.foot_tag{
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("../../../static/images/icon.png") -150px -184px no-repeat;
    margin: 0 5px 0 0;
}
.cri_left{
    display: flex;
    align-items: center;
}
.cri_box{
    display: flex;
    margin-left:20px;
    border:1px solid #d5d5d5;
    padding:8px 20px;
    align-items: center;
    font-size: 12px;
}
.cri_box span{
    display: block;
}
.toot_tag2{
    display: inline-block;
    width: 20px;
    height: 24px;
    background: url("../../../static/images/icon.png") -132px -20px no-repeat;
    margin: 0 10px 0 0;
}
.lg_foot_logo{
    display: inline-block;
    width:198px;
    height:20px;
    background: url("../../../static/images/footer_lagou_icon_75f0ebc.png") no-repeat center;
}
</style>