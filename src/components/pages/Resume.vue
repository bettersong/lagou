<!-- resume -->
<template>
<div class='resume'>
    <div class="container">
        <div class="resume_l l1">
            <div class="my_resume">
                <div class="basic">
                    <div class="my_img">
                        <img :src="mine.img">
                    </div>
                    <div class="my_info">
                         <h3>{{mine.name}}</h3><i class="iconfont icon-nan"></i>
                         <p>{{mine.school}}</p>
                         <p class="tel">
                             <span><i class="iconfont icon-shouji"></i>{{mine.phone}}</span>
                             <span><i class="iconfont icon-youxiang"></i>{{mine.email}}</span>
                         </p>
                    </div>
                    <router-link to="" class="edit"><i class="iconfont icon-bianji-copy"></i>编辑</router-link>
                </div>
                <div class="my_tml">
                    <ul>
                        <li>
                            <div class="my_title">
                                <h4>{{mine.myself.title}}</h4>
                            </div>
                            <div class="my_tags">
                                <span v-for="(item, index) in mine.myself.tags" :key="index">{{item}}</span>
                            </div>
                            <p class="my_intro">{{mine.myself.intro}}</p>
                        </li>
                        <li>
                             <div class="my_title">
                                <h4>{{mine.edu.title}}</h4>
                                <div class="add r1">
                                    <i class="iconfont icon-tianjia"></i>添加
                                </div>
                             </div>
                             <div class="school_img">
                                <img :src="mine.edu.img">
                             </div>
                             <div class="school_info">
                                 <div class="sc_in">
                                     <h3>{{mine.edu.schName}}</h3>
                                     <p class="r1">{{mine.edu.time}}</p>
                                 </div>
                                 <p>{{mine.edu.zhuanye}}</p>
                             </div>
                        </li>
                        <li>
                            <div class="my_title">
                                <h4>{{mine.job.title}}</h4>
                                <div class="add r1">
                                    <i class="iconfont icon-tianjia"></i>添加
                                </div>
                             </div>
                             <div class="null"></div>
                        </li>
                        <li>
                            <div class="my_title">
                                <h4>{{mine.process.title}}</h4>
                                <div class="add r1">
                                    <i class="iconfont icon-tianjia"></i>添加
                                </div>
                             </div>
                             <div class="null"></div>
                        </li>
                        <li>
                            <div class="my_title">
                                <h4>{{mine.works.title}}</h4>
                                <div class="add r1">
                                    <i class="iconfont icon-tianjia"></i>添加
                                </div>
                            </div>
                             <div class="null"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="resume_r r1">
            <div class="res_top">
               <div class="resume_r_head">
                <h3>求职意向</h3>
                <router-link to="" class="editRes"><i class="iconfont icon-bianji-copy"></i>编辑</router-link>
               </div>
            <ul class="res_list">
                <li><i class="iconfont icon-H"></i>前端</li>
                <li><i class="iconfont icon-shijian"></i>全职</li>
                <li><i class="iconfont icon-dingwei"></i>上海</li>
                <li><i class="iconfont icon-wallet"></i>12K-20K</li>
                <li><i class="iconfont icon-icon_dingtalk_line"></i>积极找工作／2周-1个月</li>
            </ul>
            </div>
            <div class="upload">
                <router-link to=""><i class="iconfont icon-fujian"></i>我要上传附件简历</router-link>
            </div>
            
        </div>
    </div>
</div>
</template>

<script>
import {mineData} from '../../../static/js/resumenJSON'
export default {
name: 'resume',
components: {},
data() {
return {
   mine: mineData
};
},
methods: {

},
}
</script>
<style scoped>
.iconfont{
    vertical-align: middle;
}
.container{
    width:1024px;
    margin:35px auto;
}
.null{
    width:100%;
    min-height:100px;
}
.resume_l{
    width:720px;
    margin-bottom:80px;
}
.my_resume{
    border: 1px solid #E3EBE9;
    border-radius: 5px;
}
.add{
    font-size:14px;
    color:#00b38a;
    cursor: pointer;
}
.icon-tianjia{
    margin-right:5px;
}
.basic{
    position:relative;
    padding:50px;
    background:#fafafa;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #E3EBE9;
}
.edit{
    position:absolute;
    top:40px;
    right:50px;
    color:#00b38a;
}
.my_img,h3,h4,.add,.school_img,.school_info{
    display: inline-block;
}
.icon-nan{
    margin-left:10px;
    color:#00b38a;
}
.my_img img{
    width:80px;
    height:80px;
    border-radius: 50%;
}
.tel span{
    margin-right:20px;
}
.my_info{
    display: inline-block;
    margin-left:20px;
}
.my_info p{
    margin:10px 0;
    font-size:14px;
    color:#333;
}
.my_tml{
    padding:50px;
}
.sc_in{
    width:550px;
    margin-bottom:12px;
}
.school_info p{
    font-size:14px;
    color:#666;
}
.my_tml li,.my_title{
    margin-bottom:30px;
}
.my_title{
    border-left: 3px solid #00b38a;
    padding-left: 5px;
}
.my_intro{
    margin:20px 0;
    font-size:14px;
    color:#666;
    line-height:30px;
}
.my_tags span{
    display: inline-block;
    border:1px solid #efefef;
    border-radius: 30px;
    color:#999;
    margin-right:10px;
    font-size:12px;
    padding:3px 10px;
}
.school_img img{
    width:46px;
    height:46px;
    border-radius: 50%;
    margin-right:10px;
}
.school_info h3{
    font-size: 14px;
    color:#333;
}
.upload{
    background:#fafafa;
    text-align: center;  
}
.upload .iconfont{
    margin-right:5px;
}
.upload a{
    font-size:14px;
    color:#333;
}
.res_top,.upload{
    width:240px;
    border:1px solid #f2f2f2;
    border-radius: 2px;
    padding:20px;
    margin-bottom:20px;
}
.resume_r_head h3{
   font-size:16px;
   font-weight:600;
   color:#333;
}
.res_list li{
    color:#666;
    margin-top:15px;
}
.res_list .iconfont{
    margin-right:10px;
}
.editRes{
    float:right;
    color:#00b38a;
}
</style>