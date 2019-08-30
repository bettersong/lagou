<!-- jobTab -->
<template>
<div class="JobTab">
  <div class="jobTab">
    <ul>
        <li :class="active?'current':''" @click="showList">24Hour热门</li>
        <li :class="active?'':'current'" @click="showNew">最新职位</li>
    </ul>
  </div>  
  <div class="hotJob">
        <div class="hotJob_tips" v-show="hotFlag">
            <span>?</span>
            <span>{{jobMsg}}</span>
            <span @click="hotFlag=false">我知道了</span>
        </div>
        <ul class="jobList">
            <li v-for="(item,index) in jobList" :key="index">
            <router-link :to="'/jobsDetail/'+item.id">
              <div class="job_top">
                    <div class="jtop_t">
                        <h3>{{item.name}}</h3>
                        <span>[{{item.time}}发布]</span>
                        <i class="iconfont icon-icon_xinxi"></i>
                        <span class="money">{{item.money}}</span>
                    </div>
                    <div class="jtop_m">{{item.experience}}</div>
                    <div class="jtop_b">
                        <span v-for="(tag,index) in item.tab" :key="index">{{tag}}</span>
                    </div>
                </div>
                <div class="job_bot">
                    <router-link to="" class="job_logo">
                        <img :src="item.img" />
                    </router-link>
                    <div class="job_name">
                        <p class="title">{{item.title}}</p>
                        <p class="msg">{{item.msg}}</p>    
                    </div>
                </div>
            </router-link>
                
            </li>
        </ul>
        <router-link to="" class="show_more">查看更多</router-link>
   </div>
   <div class="jobTab">
    <ul>
        <li class="current">互联网热门公司榜</li>
    </ul>
  </div>  
  <HotCompany></HotCompany>
   <div class="jobTab friendsLink">
    <ul>
        <li class="current">友情链接</li>
    </ul>
  </div>
  <div class="fslink">
   <ul class="fsLink" ref="fsLink">
      <li v-for="(item, index) in friendsLink" :key="index">
          <router-link to="item.link">{{item.name}}</router-link>
      </li>
   </ul>
   <div class="switch" @click="showToggle">
      <span ref="showText">{{showTag}}</span>
      <i class="iconfont" :class="showTagClass"></i>
  </div>
  </div>
  
  
</div>
</template>

<script>
// var jobList= require('../../../static/js/jobJSON')
import {jobList,jobListMsg,newjobList,newjobListMsg,companyData,friendsLink} from '../../../static/js/jobJSON';
import HotCompany from '../bases/HotCompany'
export default {
name: 'JobTab',
components: {
    HotCompany
},
data() {
//这里存放数据
return {
   jobMsg:jobListMsg,
   active:true,
   hotFlag:true,
   jobList:jobList,
   companyData:companyData,
   friendsLink:friendsLink,
   showTag:"展开",
   showTagClass: 'icon-xiala'
};
},
created() {
    
},
methods: {
    showList(){
        this.jobList = jobList
        this.jobMsg = jobListMsg
        this.active = true
    },
showNew(){
    this.jobList = newjobList
    this.jobMsg = newjobListMsg
    this.active = false
},
showToggle(){
    if(this.$refs.showText.innerText == '展开'){
        // this.$refs.showText.innerText = '收起'
        console.log(11)
        this.showTag = "收起"
        this.showTagClass = "icon-shangla"
        this.$refs.fsLink.style.height = "100%"
    }else{
        this.showTag = '展开'
        this.showTagClass = "icon-xiala"
        this.$refs.fsLink.style.height = ""

    }
    // console.log(this.$refs.showText)
}
},
}
</script>
<style scoped>
.iconfont{
    color:#00b38a;
    font-size: 18px;
}
.jobTab{
    clear:both;
    margin:50px auto 10px;
    border-bottom:1px solid #e8e8e8;
}
.jobTab ul{
    display: flex;
}

.jobTab ul li{
    padding:14px 0;
    font-size:16px;
    margin-right:50px;
    color:#999;
    cursor:pointer;
}
.jobTab ul li.current{
    border-bottom:2px solid #333;
    color:#333;
}
.hotJob_tips,.hotcompany_tips{
    height:18px;
    line-height:18px;
    margin:15px auto 2px;
    font-size:14px;
    cursor: pointer;
}
.hotJob_tips span:nth-child(1),.hotcompany_tips span:nth-child(1){
    display: block;
    float:left;
    width:18px;
    height:18px;
    text-align: center;
    color:#fff;
    border-radius: 50%;
    background-color: #e6e6e6;
}
.hotJob_tips span:nth-child(2),.hotcompany_tips span:nth-child(2){
    margin-left:20px;
    margin-right:40px;
    color:#999;
}
.hotJob_tips span:nth-child(3),.hotcompany_tips span:nth-child(3){
    color:#00b38a;
}
.jobList,.companyList{
    width:1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.jobList li{
    width:350px;
    margin: 16px 0 0 0;
    padding: 20px;
    border: 1px solid #EAEEED;
    background-color: #fff;
    color:#999;
    font-size:14px;
}
.jobList a{
    color:#666;
}
.jobList li:hover{
    box-shadow: 1px 1px 3px #ccc;
}
.jtop_t h3{
    font-size: 16px;
    float: left;
    margin-right:10px;
    color:#000;
}
.jtop_t .money{
    float:right;
    color:#fa6041;
    font-size:16px;
}
.jtop_m{
    clear:both;
    line-height:30px;
}
.jtop_b span{
    display: inline-block;
    width: 60px;
    height: 26px;
    padding: 0 5px;
    font-size: 12px;
    line-height: 26px;
    margin-right:10px;
    color: #999;
    border: 1px solid #F0F0F0;
    border-radius: 3px;
    text-align: center;
}
.job_bot{
    margin-top: 18px;
    padding-top: 18px;
    border-top: 1px dashed #E0E0E0
}
.job_logo{
    float:left;
}
.job_logo img{
    width:40px;
    height:40px;
}
.job_name{
    float:left;
    margin-left:20px;
}
.job_name .title{
    color:#000;
    cursor:pointer;
}
.job_name .title:hover{
    color:#00b38a;
}
.show_more{
    display: block;
    width:380px;
    height:40px;
    border:1px solid #00b38a;
    line-height:40px;
    text-align: center;
    color:#00b38a;
    margin:15px auto;
}
.show_more:hover{
    background-color: #00b38a;
    color:#fff;
}
.msg{
    display: inline-block;
    width:280px;
}

/* .friendsLink{
 
} */
.fslink{
    position:relative;
    
}
.fsLink{
    display:flex;
    flex-wrap: wrap;
    margin-top:20px;
    font-size:14px;
    width:1120px;
    height:30px;
    overflow: hidden;
}
.fsLink li{
    padding:10px;
}
.fsLink a{
    color:#555;
}
.fsLink a:hover{
    color:#00b38a;
    text-decoration: underline;
}
.switch{
    position:absolute;
    top:30px;
    right:0px;
    margin-top:-20px;
    font-size:14px;
    color:#666;
    cursor: pointer;
}
</style>