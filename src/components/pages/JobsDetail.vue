<!-- jobsDetail -->
<template>
<div class='jobsDetail'>
    <div class="jobsTop">
        <div class="position_head">
            <div class="ph_left">
               <div class="job_name">
                   <p class="com_name">{{jobData.title}}</p>
                   <h2 class="zhiwei">{{jobData.name}}</h2>
                   <p class="jieshao">
                    <span class="salary">{{jobData.money}} </span>
                    <span>/上海 /</span>
                    <span>{{jobData.experience}} /</span>
                    <span>硕士及以上 /</span>
                    <span>全职</span>
                   </p>
                   <ul class="tags">
                       <li v-for="(item, index) in jobData.tab" :key="index">{{item}}</li>
                   </ul>
                   <p class="time">{{jobData.time}}发布于拉勾网</p>
               </div>
            </div>
            <div class="ph_right"></div>
        </div>
    </div>
    <div class="container">
        <div class="content_l">
            <div class="items">
              <span class="title">职位诱惑</span>
              <p>固定双休 外企风格，绩效丰厚，有大牛</p>
            </div>
            <div class="items">
              <span class="title">任职要求</span>
              <ol class="commands">
                  <li>理工科相关专业，硕士及以上学历，5年以上算法相关工作经验；</li>
                  <li>熟悉 Linux 平台，有扎实的Java / Python 开发能力，具备良好的数据结构和算法基础；</li>
                  <li>具有深度学习技术背景，或问答、对话相关项目背景者优先；</li>
                  <li>掌握机器学习基本算法并有丰富的实践经验；熟悉tensorflow/keras优先；</li>
                  <li>具备较强的自学能力和钻研精神，具有良好的沟通能力和团队合作能力，综合能力强。</li>
              </ol>
            </div>
           
        </div>
        <div class="content_r">
           
               <div class="top">
                   <img :src="jobData.img">
                   <span>{{jobData.title}}</span>
               </div>
               <ul class="com_msg">
                   <li><i class="iconfont icon-hulianwang"></i>移动互联网</li>
                   <li><i class="iconfont icon-tongjibaobiao"></i>未融资</li>
                   <li><i class="iconfont icon-wode"></i>50-150人</li>
                   <li></li>
               </ul>
        </div>
    </div>
</div>
</template>

<script>
import {jobList} from '../../../static/js/jobJSON';
export default {
name: 'jobsDetail',
components: {},
data() {
return {
   jobData:''
};
},
created(){
    console.log(this.$route.params.type)
    //console.log(jobList[this.$route.params.type-1])
    this.jobData = jobList[this.$route.params.type-1]
    console.log(this.jobData)
},
methods: {

},
}
</script>
<style scoped>
.container{
    width:1024px;
    display: flex;
    margin:30px auto;
}
.jobsTop{
    width:100%;
    background:#f2f5f4;
    padding:30px 0;
}
.position_head{
    width:1024px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
}
.ph_left{
    max-width: 700px;
}
.com_name{
    margin-bottom:10px;
    font-size:14px;
    color:#555;
}
.zhiwei{
    display: inline-block;
    font-size:36px;
    color:#333;
    font-weight: 400;
    margin-bottom:10px;
}
.jieshao span{
    font-size:18px;
    color:#555;
}
.jieshao .salary{
    color:#fd5f39;
}
.tags{
    display: flex;
    margin:10px 0;
}
.tags li{
    font-size: 12px;
    padding: 3px 10px;
    margin-right: 5px;
    background: #fff;
    border-radius: 15px;
    color: #888;
}
.time,.items p,.commands li{
    color:#666;
    font-size:14px;
}
.content_l{
    padding:30px 30px 0 0;
    width:680px;
    border-right:2px solid #f2f2f2;
}
.items{
    margin-bottom: 20px;
}

.title{
    display: inline-block;
    font-size:18px;
    font-weight:bold;
    margin-bottom: 10px;
}
.commands{
    margin-left:16px;
}
.commands li{
   line-height:32px;
}
.content_r{
    padding:30px 0 0 30px;
}
.content_r .top img{
    width:100px;
    height:100px;
}
.content_r .top span{
    display: inline-block;
    margin-left:10px;
    font-size: 18px;
    color:#666;
}
.com_msg{
    margin-top:20px;
}
.com_msg li{
    margin-bottom: 15px;
    font-size:14px;
    color:#555;
}
.com_msg .iconfont{
    margin-right:10px;
}
</style>