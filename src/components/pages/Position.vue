<!-- position -->
<template>
<div class='position'>
<div class="container">
        <div class="deliver_l l1">
            <div class="de_l_head">
                <h3><em></em>职位邀请</h3>
                <span class="refresh r1" @click="showLoading"><i class="iconfont icon-shuaxin"></i>刷新</span>
            </div>
            <div class="de_l_body">
                
                <div class="showBox">
                    <img src="../../../static/images/noresult.png">
                    <span>暂无记录</span>
                </div>
            </div>
            <Loading v-show="flag"/>
        </div>
        <RightList/>
    </div>
</div>
</template>

<script>
import RightList from '../bases/RightList'
import Loading from '../bases/Loading'
export default {
name: 'position',
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
    }, 3000);
}
}
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

.refresh:hover{
    color:#0dca9f;
}

.showBox{
    min-height:65px;
    padding: 80px 140px;
}
</style>