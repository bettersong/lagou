<!-- notfound -->
<template>
<div class='notfound'>
    <div class="container">
        <img class="notFound" src="../../../static/images/404.png">
        <p class="err">啊哦，出错了，您访问的页面暂未开发，敬请期待！</p>
    </div>
</div>
</template>

<script>

export default {
name: 'notFoud',
components: {},
data() {
//这里存放数据
return {

};
},
methods: {

},
}
</script>
<style scoped>
.container{
    width:1024px;
    margin:30px auto;
}
.notFound{
    width:600px;
    height:500px;
    vertical-align: middle;
}
.err{
    display: inline-block;
    font-size:18px;
    color:brown;
}
</style>