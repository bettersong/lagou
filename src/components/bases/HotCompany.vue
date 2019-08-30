<!-- hotCompany -->
<template>
<div class='hotCompany'>
    <div class="hotcompany">
        <div class="hotcompany_tips" v-show="hotcomFlag">
            <span>?</span>
            <span>互联网行业实力热门企业</span>
            <span @click="hotcomFlag=false">我知道了</span>
        </div>
        <ul class="companyList">
            <li v-for="(item, index) in companyData.slice(tag*this.pagesNum,tag*this.pagesNum+this.pagesNum)" :key="index">
                <div class="cl_top">
                    <p>
                        <router-link to="'/companyDetail/'+index">
                            <img :src="item.img" />
                        </router-link>
                    </p>
                    <p class="compant_name">{{item.name}}</p>
                    <p class="stages">{{item.stage}}</p>
                    <p class="advantage">{{item.advantage}}</p>
                </div>
                <div class="cl_bot">
                    <router-link to="" class="cl_link">
                        <p class="green">{{item.mianshi}}</p>
                        <p class="gray">{{item.mianshiTag}}</p>
                    </router-link>
                    <router-link to="" class="cl_link">
                        <p class="green">{{item.position}}</p>
                        <p class="gray">{{item.positionTag}}</p>
                    </router-link>
                    <router-link to="" class="cl_link">
                        <p class="green">{{item.prens}}</p>
                        <p class="gray">{{item.prensTag}}</p>
                    </router-link>
                </div>
            </li>
        </ul>
        <!-- <router-link to="" class="show_more">查看更多</router-link> -->
     <div class="row" style="margin:0px;">
      <div class="pages">
        <ul class="pagesInner">
      <li class="page" @click="prevHandel">上一页</li>
      <li class="page" v-for="(item, index) in pages" :key="index" :class="{active: item === currentPage}" @click="select(item)">
        <span>{{item}}</span>
      </li>
      <li class="page" @click="nextHandel">下一页</li>
    </ul>
    </div>
   </div>
   </div>
</div>
</template>

<script>
import {companyData} from '../../../static/js/jobJSON'
export default {
name: 'HotCompany',
components: {},
data() {
//这里存放数据
return {
   companyData:companyData,
   hotcomFlag:true,
   currentPage: 1, //当前页码 
    totalPages: '',  //总页码
    pagesNum: 8, //每页数据量
    tag:0
};
},
created() {
    var total = companyData.length
    this.totalPages = Math.ceil(total/this.pagesNum);
},
methods: {
    scrollto(){
       document.body.scrollTo = 1500;
       document.documentElement.scrollTop = 1500;
    },
 select(item){
      //console.log(item);
      if(isNaN(item)){
         console.log('no');
      }else{
          this.currentPage = item;
          this.tag = this.currentPage - 1;
          this.scrollto();
      }
   },
   prevHandel(){
       if(this.currentPage <= 1){
           this.currentPage = 1;
       }else{
          this.currentPage--;
          this.tag = this.currentPage - 1;
          this.scrollto()
       }
   },
   nextHandel(){
       if(this.currentPage>=this.totalPages){
          this.currentPage = this.totalPages;
       }else{
          this.currentPage++;
          this.tag = this.currentPage - 1;
          this.scrollto()
       }
   }
},
computed: {
    pages() {
      const c = this.currentPage;
      const t = this.totalPages;
      if(t==1){
          return [1];
      }else if(t==2){
          return [1,2];
      }
      else if(t==3){
          return [1,2,3]
      }
      else if(t==4){
          return [1,2,3,4]
      }
      else if(t==5){
          return [1,2,3,4,5]
      }
      else if (c > 5) {
        return [1, 2, 3, 4, '...', t]
      }else if (c >= t - 4) {
        return [1, '...', t-4, t-3, t-2, t-1, t]
      }else{
        return [1, '...', c-1, c, c+1,'...', t]
      }
    }
  },
}
</script>
<style scoped>
.companyList li:hover{
    box-shadow: 1px 1px 3px #ccc;
}
.pagesInner{
    display: flex;
    margin:30px auto 10px;
}
.pagesInner li{
    border:1px solid #999;
    padding:5px 10px;
    margin:2px;
    border-radius: 3px;
    cursor: pointer;
}
.pagesInner li:hover,.active{
    background:#3cd4c9;
    border:1px solid #3cd4c9 !important;
    color:#fff;
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
.jobList{
    width:1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.companyList li{
    display: inline-block;
    width:268px;
    margin-right:10px;
    border:1px solid #eee;
    margin-top:16px;
    padding:10px;
}
.cl_top{
    padding: 20px 0 14px;
    text-align: center;
    border-bottom: 1px dashed #E0E0E0;
    position: relative;
}
.cl_top img{
    width:80px;
    height:80px;
}
.stages{
    font-size:14px;
    color:#999;
}
.advantage{
    font-size:14px;
    color:#555;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: normal;
}
.cl_link{
    display:inline-block;
    /* float: left; */
    width:85px;
    margin-top:15px;
    text-align: center;
    font-size:12px;
    border-right:1px solid #eee;
}
.cl_link:last-child{
    border:none;
}
.cl_link p{
    line-height:16px;
}
.green{
    color:#00b38a;
}
.gray{
    color:#999;
}
.gray:hover{
    color:#00b38a;
}
.row{
    text-align: center;
}
.pages{
    display: inline-block;
}
</style>