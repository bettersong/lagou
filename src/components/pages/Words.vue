<!-- words -->
<template>
<div class='words'>
    <div class="banner">
          <h2>言职</h2>
          <h3>更真实的公司点评社区</h3>
          <div class="tab">
             <ul>
              <li :class="this.current=='new'?'active':''" @click="show('new')">最新动态</li>
              <li :class="this.current=='jing'?'active':''" @click="show('jing')">精选推荐</li>
             </ul>
          </div>     
    </div>
    <div class="container">
         <div class="leftBox left">
            <ul class="news">
                <li v-for="(item, index) in words" :key="index">
                    <router-link to="/news">
                    <div class="item_head">
                        <div class="item_tags left">
                            <span v-for="(tag, index) in item.tags" :key="index">{{tag}}</span>
                        </div>
                        <span>{{item.sub}}</span>
                        <span class="right">{{item.time}}</span>
                    </div>
                    <h3>{{item.title}}</h3>
                    <p>{{item.content}}</p>
                    <div class="item_foot">
                        <span>{{item.huida}}个回答</span>
                        <span>{{item.guanzhu}}人关注</span>
                        <span>分享</span>
                    </div>
                    </router-link>
                </li>
            </ul>
         </div>
         <div class="rightBox left">
             <div class="userCard">
                <div class="user_img">
                    <img :src="userInfo.img">
                    <router-link to="" class="edit"><i class="iconfont icon-bianji-copy"></i>编辑</router-link>
                </div>
                <div class="user_info">
                    <router-link to="">{{userInfo.name}}<i class="iconfont icon-nan"></i></router-link>
                </div>
                <div class="user_status">
                     <ul>
                         <li v-for="(item, index) in userInfo.userStatus" :key="index">
                             <router-link to="" class="user_statu">
                                 <span>{{item.num}}</span>
                                 <span>{{item.tag}}</span>
                             </router-link>  
                         </li>
                         
                     </ul>
                </div>
             </div>
             <div class="btns">
                 <router-link to="" class="qustion">提个问题</router-link>
                 <router-link to="" class="showmore">查看更多问题</router-link>
             </div>
         </div>
    </div>
</div>
</template>

<script>
import {words,jingxuanData,userInfo} from '../../../static/js/wordsJSON'
export default {
name: 'words',
components: {},
data() {
//这里存放数据
return {
   words:words,
   userInfo:userInfo,
   current:'new'
};
},
methods: {
show(type){
    if(type=='new'){
        this.words = words
        this.current = 'new'
    }else{
        this.words = jingxuanData
        this.current = 'jing'
    }
}
},
}
</script>
<style scoped>
.left{
    float:left;
}
.right{
    float:right;
}
.banner{
    min-width:1024px;
    height:125px;
    padding-top:35px;
    background:url('../../../static/images/words.jpg') no-repeat center;
    color:#fff;
    text-align: center;
}
.banner h2{
    font-size:30px;
    margin-bottom:14px;
}
.banner h3{
    font-size:26px;
    font-weight:400;
}
.tab{
    width:1024px;
    margin:0 auto;
    text-align: left
}
.tab ul{
    display:flex;
}
.tab ul li{
    display: inline-block;
    font-size:18px;
    margin-right:30px;
    font-weight:bold;
    padding-bottom:10px;
    cursor: pointer;
}
.active{
    color: #00b38a;
    border-bottom: 2px solid #00b38a;
}
.container{
    width:1024px;
    margin:30px auto 0;
}
.leftBox{
    position: relative;
    width: 710px;
    margin-right: 40px;
    padding-right: 40px;
    box-shadow: 5px 0 5px -5px #ededed;
    word-break: break-all;
    text-align: justify;
    margin-bottom:80px;
}
/* .news li{
    height:100px;
} */
.item_tags span{
    padding:2px 8px;
    border:1px solid #00b38a;
    color:#00b38a;
    border-radius: 10px;
    cursor: pointer;
    margin-right:5px;
}
.item_tags span:hover{
    background-color:#00b38a;
    color:#fff;
}
.item_head{
    font-size:12px;
    color:#999;
}
.news li{
    cursor:pointer;
    border-top:1px solid #ededed;
    padding:25px 0;
}
.news li:first-child{
    border:none;
}
.news li h3{
    font-weight:400;
    margin:10px 0 20px;
    color:#333;
}
.news li p{
    font-size:14px;
    color:#666;
    line-height:22px;
}
.news li p:hover,.item_foot span:hover{
    color:#00b38a;
}
.item_foot{
    font-size: 12px;
    color:#999;
    margin-top:5px;
}
.item_foot span{
    margin-right:10px;
}
.rightBox{
    width:230px;
}
.userCard{
    width:100%;
    position:relative;
    text-align: center;
}
.user_img img{
    width:96px;
    height:96px;
    border-radius: 50%;
}
.edit{
    font-size:14px;
    color:#00b38a;
    position:absolute;
    top:0;
    right:0;
}
.user_info a{
    display: inline-block;
    margin-top:20px;
    color:#333
}
.user_info .iconfont{
    color:#00b38a;
    margin-left:10px;
}
.user_status ul{
    display: flex;
    margin-top:20px;
    justify-content: space-between;
}
.user_status ul li{
    width:70px;
    border-right:2px solid #ededed;
    padding:0px 10px;
}
.user_status ul li:last-child{
    border:none;
}
.user_statu span{
    display: block;
    text-align: center;
}
.user_statu span:first-child{
    color:#000;
    font-size: 20px;
}
.user_statu span:last-child{
    color:#999;
    font-size: 14px;
}
.btns{
    width:100%;
    margin-top:30px;
}
.qustion,.showmore{
    display: block;
    width:100%;
    height:46px;
    margin-bottom:20px;
    text-align: center;
    font-size:18px;
    line-height: 46px;
    border-radius: 5px;
}
.qustion,.showmore:hover{
    background:#00b38a;
    color:#fff;
}
.qustion:hover{
    background:rgba(0,179,138,0.8)
}
.showmore{
    border:1px solid #00b38a;
    color:#00b38a;
}

</style>