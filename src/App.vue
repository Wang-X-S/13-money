<template>
 <div id="app">
   <router-view/>
   <hr/>

 </div>
</template>

<style lang="scss">
    @import "~@/assets/style/helper.scss";

    *{margin:0;padding:0;
    box-sizing:border-box;
    overflow:hidden;
    }
    body{
    }
    a{
        text-decoration:none;
        color:inherit
    }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
    line-height:1.5;
    font-family: $font-hei;
}


</style>
