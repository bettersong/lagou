<!-- index -->
<template>
<div class='index'>
<div class="index_top">
   <div class="search">
       <div class="search_box">
         <input class="search_input" type="text" placeholder="超级雇主招聘节" />
         <input type="submit" class="search_btn" value="搜索" />
         <div class="hotSearch">
             <span>热门搜索：</span>
             <ul class="hotList">
                 <li v-for="(item,index) in hotList" :key="index"><router-link to="">{{item}}</router-link></li>
             </ul>
         </div>
       </div>
   </div>
   <transition leave-active-class="animated zoomOutRight">
        <div class="scan" v-show="scanFlag">
        <span>你的学长去哪了?</span>
        <img src="../../../static/images/scan.png">
        <span class="cuo" @click="scanFlag = false"><i class="iconfont icon-cuocha_kuai"></i></span>
        </div>
   </transition>
</div>
<div class="container">
    <SlideBar></SlideBar>
    <JobTab></JobTab>
</div>


</div>
</template>

<script>
import SlideBar from '../bases/SlideBar'
import JobTab from '../bases/JobTab'
export default {
name: 'index',
components: {
    SlideBar,
    JobTab
},
data() {
return {
      hotList:["孩子王","网心科技","java面试","架构设计","数据分析","PHP","C++"],
      scanFlag: true
};
},
methods: {

},
}
</script>
<style scoped>
.index{
    clear:both;
    width:100%;
}
.index_top{
    position: relative;
    background-color: #F2F5F4;
    padding-bottom: 20px;
}
.scan{
    position:absolute;
    padding:10px;
    border:1px solid #eee;
    right:50px;
    top:20px;
    text-align: center;
    background-color:#fff;
}
.scan span{
    display: block;
    font-size:12px;
    color:#00b38a;
    margin-bottom:10px;
}
.scan img{
    width:85px;
    height:85px;
}
.scan .cuo{
    background: #fff;
    padding: 2px;
    text-align: center;
    display: inline-block;
    position: absolute;
    border: 1px solid #eee;
    top: -1px;
    right: -22px;
    cursor: pointer;
}
.search{
    padding:30px 0;
}
.search_box{
    border: 0 solid #00b38a;
    width: 938px;
    height: 46px;
    margin: 0 auto;
    position: relative;
}
.search_input{
    width:760px;
    height:20px;
    float: left;
    font-size: 16px;
    padding:15px;
    border:1px solid #e8e8e8;
    border-right:none;
}
.search_input:focus{
  outline: 1px solid #00b38a;
  border-right:none;
}
.search_btn{
    width:140px;
    height:52px;
    font-size: 18px;
    color:#fff;
    border:none;
    background-color: #00b38a;
    margin-left:-2px;
}
.hotSearch{
    font-size: 14px;
    padding:10px 0 20px;
}
.hotSearch span{
    float: left;
    color:#888;
}
.hotList{
    float: left;
    display: flex;
}
.hotList li{
    margin-right:20px;
}
.hotList li a{
    color:#00b38a;
}
.hotList li a:hover{
    text-decoration: underline;
}
.container{
    width:1200px;
    margin: 40px auto 10px;
    clear:both;
}
</style>