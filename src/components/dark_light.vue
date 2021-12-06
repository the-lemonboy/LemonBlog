<template>
 <div class="dark-lightBox">
 <div class="xx" @click="change_switch()">
        <div class="iconBox" v-if="this.currentTheme.state"  v-bind="$changeTheme($themeList[0])" >
          <svg class="icon-dark-light" aria-hidden="true" >
  <use xlink:href="#icon-yueliang" ></use>
</svg>
        </div>
        <div class="iconBox" v-else  v-bind="$changeTheme($themeList[1])">
          <svg class="icon-dark-light" aria-hidden="true">
  <use xlink:href="#icon-taiyang"></use>
</svg>
        </div>
 </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
data(){
  return{
    stateNum : '' ,
  }
},
  computed: {
    ...mapGetters({ currentTheme: 'Theme/currentTheme' })
  },
  methods:{
    change_switch(){
     this.currentTheme.state=!this.currentTheme.state
    },
  },
}
</script>

<style lang="scss">
.dark-lightBox{
   position: absolute;
    left:50%;
    top:10px;
    transform: translateX(-50%);
}
.icon-dark-light{
    display: inline-block;
    width: 50px;
    height: 50px;
}
span{
  color: aliceblue;
}
.iconBox{
  width: 50px;
  height: 50px;
  position: absolute;
    left:50%;
    transform: translateX(-50%);
}
button{
  width: 50px;
  height: 50px;
}
</style>