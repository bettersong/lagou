<!-- rightList -->
<template>
<div class='rightList'>
    <div class="deliver_r l1">
           <div class="nav_buttons">
               <ul>
                   <li v-for="(item, index) in deliverBtns" :key="index">
                       <router-link to="">
                              <i class="iconfont" :class="item.icon"></i>
                            {{item.name}}
                       </router-link>
                   </li>
               </ul>
           </div>
           <div class="like">
               <div class="like_head">
                   <span>猜你喜欢</span>
               </div>
               <div class="like_box">
                  <ul>
                      <li v-for="(item,index) in favCompany" :key="index">
                          <router-link to="">
                              <div class="com_img">
                                  <img :src="item.img">
                              </div>
                              <div class="com_msg">
                                  <h3>{{item.position}}</h3>
                                  <p class="money">{{item.money}}</p>
                                  <p class="name"><span>{{item.name}}</span><span class="r1">[{{item.city}}]</span></p>
                              </div>
                          </router-link>
                      </li>
                  </ul>
                  <router-link to="/lookMore" class="like_btn">更多猜你喜欢职位</router-link>
               </div>
           </div>
        </div>
</div>
</template>

<script>
import {deliverBtns,favCompany} from '../../../static/js/resumenJSON'
export default {
name: 'rightList',
components: {},
data() {
//这里存放数据
return {
deliverBtns:deliverBtns,
favCompany: favCompany
};
},
methods: {

},
}
</script>
<style scoped>
.deliver_r{
    width:280px;
    margin-left:40px;
}
.nav_buttons ul{
    display: flex;
}
.nav_buttons ul li{
    width:66px;
    height:60px;
    border:1px solid #f2f2f2;
    margin-right:3px;
    padding:5px 0;
    border-radius: 3px;
    text-align:center;
    background:#fafafa;
}
.nav_buttons a:hover,.like_box .like_btn:hover{
    color:#0dca9f;
}
.nav_buttons .iconfont{
    display: block;
    font-size:28px;
    margin-bottom: 10px;
}
.nav_buttons a{
    color:#666;
    font-size: 14px;
}
.like_head{
    margin-top:20px;
    border-bottom:2px solid #e9e9e9;
}
.like_head span{
    display:inline-block;
    padding-bottom:6px;
    border-bottom: 2px solid #0dca9f;
    font-size: 14px;
    color:#333;
    font-weight:700;
    line-height:24px;
}
.like_box li{
    padding:10px 0;
    border-bottom: 1px dashed #ccc;
}
.like_box li:last-child{
    border:none;
}
.like_box li:hover{
    background-color:#fafafa;
}
.like_box a{
    color:#333;
}
.com_img img{
    width:55px;
    height:55px;
}
.com_msg,.com_img{
    display:inline-block;
}
.com_msg{
   width: 200px;
   margin-left: 10px;
}
.com_msg h3,.money{
    margin-bottom:5px;
}
.com_msg h3{
    font-size:18px;
    font-weight:400;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.com_msg .money{
    color:#e6775c;
}
.com_msg .name{
    font-size:12px;
    color:#999;
}
.like_box .like_btn{
    display: inline-block;
    width: 240px;
    padding: 10px 20px;
    background: #fafafa;
    margin: 20px auto 200px;
    text-align: center;
    color: #666;
    font-size: 14px;
}
</style>