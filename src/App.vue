<template>
  <div id="app">
    
    <Head></Head>
    <transition enter-active-class="animated bounceInLeft">
      <router-view/>
    </transition>
    
    <Foot></Foot>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Head from './components/bases/Head'
import Foot from './components/bases/Foot'
import BackTop from './components/bases/BackTop'
// import Loading from './components/bases/Loading'
export default {
  name: 'App',
  components:{
    Head,
    Foot,
    BackTop,
    // Loading
  }
}
</script>

<style>
*{margin:0;padding:0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
.l1{
  float:left;
}
.r1{
  float:right
}
</style>
