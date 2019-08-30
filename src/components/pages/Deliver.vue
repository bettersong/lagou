<!-- deliver -->
<template>
<div class='deliver'>
    <div class="container">
        <div class="deliver_l l1">
            <div class="de_l_head">
                <h3><em></em>已投递简历状态</h3>
                <span class="refresh r1" @click="showLoading"><i class="iconfont icon-shuaxin"></i>刷新</span>
            </div>
            <div class="de_l_body">
                <div class="nav">
                    <ul class="navList">
                        <li class="active">
                            <span>投递成功</span>
                        </li>
                        <li><span>被查看</span></li>
                        <li><span>待沟通</span></li>
                        <li><span>邀请面试</span></li>
                        <li><span>不合适</span></li>
                        <li><span>删除记录</span></li>
                    </ul>
                </div>
                <div class="showBox">
                    <img src="../../../static/images/noresult.png">
                    <span>当前没有符合条件的投递记录</span>
                </div>
            </div>
            <Loading v-show="flag"/>
        </div>
        <RightList/>
    </div>
</div>
</template>

<script>
import Loading from '../bases/Loading'
import RightList from '../bases/RightList'
export default {
name: 'deliver',
components: {
    RightList,
    Loading
},
data() {
//这里存放数据
return {
flag:false
};
},
methods: {
showLoading(){
    this.flag = true
    setTimeout(() => {
        this.flag = false
    },3000);
}
},
}
</script>
<style scoped>
.container{
    width:1024px;
    margin:40px auto;
}
.deliver_l{
    width:680px;
    margin-bottom:80px;
    background-color: #fafafa;
}
.de_l_head{
    position:relative;
    padding:20px;
    color:#666;
    border-bottom:1px solid #ebebeb;
}
.de_l_head em{
    position:absolute;
    width:24px;
    height:28px;
    background:#fff url('../../../static/images/resume_arr.png') no-repeat;
    right:0;
    top:0;
}
.de_l_head h3{
    display: inline-block;
    font-size:24px;
    font-weight:400;
}
.refresh{
    font-size:18px;
    cursor: pointer;
    margin-right:15px;
}
.refresh .iconfont{
    color:#0dca9f;
}
.de_l_body{
    margin-top:20px;
}
.nav{
    background-color: #f2f2f2;
}
.navList{
    display: flex;
}
.navList li{
    padding:12px 0px;
    cursor: pointer;
    text-align: center;
    color:#666;
}
.navList span{
    display: inline-block;
    padding:0 25px;
    border-right:1px solid #d8d8d8;
}
.navList .active{
    color:#0dca9f;
    border-bottom: 2px solid #0dca9f;
}
.navList li:hover,.refresh:hover{
    color:#0dca9f;
}
.navList li:last-child span{
    border:none;
}
.showBox{
    min-height:65px;
    padding: 80px 140px;
}


</style>