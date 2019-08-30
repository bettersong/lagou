<!-- school -->
<template>
<div class='school'>
    <div class="index_top">
   <div class="search">
       <div class="search_box">
         <input class="search_input" type="text" placeholder="请输入公司名 / 职位名" />
         <input type="submit" class="search_btn" value="搜索" />
         <div class="hotSearch">
             <span>热门搜索：</span>
             <ul class="hotList">
                 <li v-for="(item,index) in hotList" :key="index"><router-link to="">{{item}}</router-link></li>
             </ul>
         </div>
       </div>
   </div>
</div>
<div class="container">
    <SlideBar></SlideBar>
    <div class="companyList">
       <div class="nav_bar">
           <ul>
               <li :class="this.current=='bj'?'active':''" @click="showcom('bj')">北京</li>
               <li :class="this.current=='sh'?'active':''" @click="showcom('sh')">上海</li>
               <li :class="this.current=='gz'?'active':''" @click="showcom('gz')">广州</li>
               <li :class="this.current=='sz'?'active':''" @click="showcom('sz')">深圳</li>
               <li :class="this.current=='cd'?'active':''" @click="showcom('cd')">成都</li>
               <li :class="this.current=='hz'?'active':''" @click="showcom('hz')">杭州</li>
               <li :class="this.current=='qt'?'active':''" @click="showcom('qt')">其他</li>
           </ul>
       </div>
       <div class="companys">
           <ul class="company">
               <li v-for="(item, index) in companys" :key="index">
                   <div class="com_img">
                       <img :src="item.img">
                   </div>
                   <span class="name">{{item.name}}</span>
               </li> 
           </ul>
           <router-link to="" class="company_intro">
                 <h3>搜狐集团</h3>
                 <ul class="base_info">
                     <li><i class="iconfont icon-icon_work"></i>移动互联网,广告营销</li>
                     <li><i class="iconfont icon-tongji"></i>上市公式</li>
                     <li><i class="iconfont icon-wode"></i>2000人以上</li>
                     <li><i class="iconfont icon-dingwei"></i>北京</li>
                     <li><i class="iconfont icon-position"></i>22个校招职位</li>
                 </ul>
                 <p class="saying">中国互联网文化运动的先驱、中国综合门户网站的创始者</p>
                 <ul class="company_img">
                     <li v-for="(item, index) in company_img" :key="index">
                         <img :src="item.img">
                     </li>
                 </ul>
           </router-link>
       </div>
       <div class="jobs">
           <div class="nav_tab">
               <ul class="navlibs">
                   <li :class="this.current2=='js'?'active':''" @click="showjob('jishu')">技术</li>
                   <li :class="this.current2=='cp'?'active':''" @click="showjob('chanping')">产品</li>
                   <li :class="this.current2=='yy'?'active':''" @click="showjob('yunying')">运营</li>
                   <li :class="this.current2=='sj'?'active':''" @click="showjob('sheji')">设计</li>
                   <li :class="this.current2=='sc'?'active':''" @click="showjob('shichang')">市场</li>
                   <li :class="this.current2=='xs'?'active':''" @click="showjob('xiaoshou')">销售</li>
                   <li :class="this.current2=='zn'?'active':''" @click="showjob('zhineng')">职能</li>
               </ul>
           </div>
           <div class="job_boxs">
               <ul>
                   <li class="job_item" v-for="(item, index) in jobs" :key="index">
                       <router-link to="/schDetail">
                       <div class="head">
                           
                               <h4>{{item.name}}</h4>
                               <span>{{item.xueli}}</span>
                           
                       </div>
                       <div class="foot">
                           <router-link to="">
                               <div class="foot_l">
                                   <img :src="item.companyImg">
                               </div>
                               <div class="foot_r">
                                   <p>{{item.companyName}}</p>
                                   <p>{{item.info}}</p>
                               </div>
                           </router-link>
                       </div>
                       </router-link>
                   </li>
                   
               </ul>
           </div>
       </div>
    </div>
</div>
</div>
</template>

<script>
import SlideBar from '../bases/SlideBar'
import {bjcompanys,shcompanys,gzcompanys,szcompanys,company_img,jishuJSON,chanpingJSON,yunyingJSON,shejiJSON,shichangJSON,xiaoshouJSON,zhinengJSON} from '../../../static/js/schoolJSON'
export default {
name: 'School',
components: {
   SlideBar
},
data() {
//这里存放数据
return {
hotList:["java必考","产品数据","架构设计","H5全栈","用户运营"],
companys:bjcompanys,
jishuJSON:jishuJSON,
jobs:jishuJSON,
company_img: company_img,
current:'bj',
current2: 'js'
};
},
methods: {
showcom(city){
    if(city == 'bj'){
    this.companys = bjcompanys
    this.current = 'bj'
    }else if(city == 'sh'){
        this.companys = shcompanys
        this.current = 'sh'
    }else if(city == 'gz'){
        this.companys = gzcompanys
        this.current = 'gz'
    }else if(city == 'sz'){
        this.companys = szcompanys
        this.current = 'sz'
    }else if(city == 'cd'){
        this.companys = bjcompanys
        this.current = 'cd'
    }else if(city == 'hz'){
        this.companys = shcompanys
        this.current = 'hz'
    }else{
        this.companys = gzcompanys
        this.current = 'qt'
    }
},
showjob(type){
   if(type == 'jishu'){
       this.jobs = jishuJSON
       this.current2 = 'js'
   }else if(type == 'chanping'){
       this.jobs = chanpingJSON
       this.current2 = 'cp'
   }else if(type == 'yunying'){
       this.jobs = yunyingJSON
       this.current2 = 'yy'
   }else if(type == 'sheji'){
       this.jobs = shejiJSON
       this.current2 = 'sj'
   }else if(type == 'shichang'){
       this.jobs = shichangJSON
       this.current2 = 'sc'
   }else if(type == 'xiaoshou'){
       this.jobs = xiaoshouJSON
       this.current2 = 'xs'
   }else{
       this.jobs = zhinengJSON
       this.current2 = 'zn'
   }
}
},
}
</script>
<style scoped>
.iconfont{
    vertical-align: middle;
    margin-right:10px;
    color:#666;
}
.companyList{
    margin-top:40px;
}
.nav_bar{
    color:#999;
    font-size:16px;
    border-bottom:1px solid #e8e8e8;
}
.nav_bar ul{
    display: flex;   
}
.nav_bar ul li{
    padding:15px 0;
    margin-right:60px;
    cursor:pointer; 
}
.active{
   border-bottom:2px solid #333;
   color:#333;
}
.companys .company li{
    width: 75px;
    height: 110px;
    margin: 50px 75px 20px 0;
    display: inline-block;
    text-align:center;
    font-size:14px;
    color:#333;
    overflow: hidden;
}
.com_img{
    width:75px;
    height:75px;
    margin-bottom:10px;
    }
.companys .company li:hover img{
    border:2px solid #00b38a;
}
.com_img img{
    width:70px;
    height:70px;
    border-radius: 50%;
    vertical-align: middle;
}
.index_top{
    position: relative;
    background-color: #F2F5F4;
    padding-bottom: 20px;
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
    color:#999;
}
.hotList li a:hover{
    color:#00b38a;
}
.container{
    width:1200px;
    margin: 40px auto 10px;
    clear:both;
}
.company_intro{
    display: block;
    padding:30px;
    background-color: #fafafa;
    overflow: hidden;
    color:#333;
}
.base_info{
    height:20px;
    margin-top:15px;
    display: flex;
}
.base_info,.saying{
    color:#666;
    font-size: 14px;
}
.base_info li{
    margin-right:50px;
}
.saying{
    margin-top:20px;
}
.company_img{
    display: flex;
    margin-top:30px;
    justify-content: space-between;
}
.company_img img{
    width:220px;
    height:130px;
}
.jobs{
    margin-top:50px;
    font-size:16px;
    color:#333;
    line-height:25px;
}
.nav_tab{
    color:#999;
    border-bottom:1px solid #e8e8e8;
}
.navlibs{
    display: flex;
}
.navlibs li{
    margin-right: 60px;
    padding-bottom: 20px;
    cursor:pointer;
}
.job_item{
    display: inline-block;
    width:250px;
    height:120px;
    border:1px solid #ededed;
    margin-bottom:20px;
    margin-right:8px;
    padding:20px;
}
.job_item:hover{
    box-shadow: 1px 1px 3px #ccc;
}
.job_item a{
    color:#333;
}
.job_item .head{
    border-bottom:1px dashed #e8e8e8;
}
.job_boxs ul{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
}
.foot{
    margin-top:15px;
}
.foot_l{
    float: left;
}
.foot_l img{
    width:50px;
    height:50px;
}
.foot_r{
    float: left;
    margin-left:15px;
    
}
.foot_r p:last-child,.head span{
    font-size:14px;
    color:#666;
}
.job_item .head h4{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>