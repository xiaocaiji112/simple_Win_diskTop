<template>
    <div ref="desktop" class="desktop">
      <App :content="content1"></App>
      <App :content="content2"></App>

      <div  v-show="display" class="menu">
        <div ref="menu" class="continer">
          <div class="btns">
            <div class="btn">1</div>
            <div class="btn">1</div>
          </div>
        </div>
      </div>

    </div>
</template>
<script setup lang="ts">
import App from '../../components/App/index.vue';
import {ref ,onMounted} from 'vue'
import Dispatch from '../../tool/Dispatch'
import FileForder from '../../components/FileForder/index.vue';
const content1:string = '大公鸡'
const content2:string = '小公鸡'
const show = ref<boolean>(false)
const desktop = ref<HTMLElement>()
const menu = ref()
let d:any
let m:any
onMounted(() =>{
 d = desktop.value 
 m = menu.value
 d.addEventListener('mousedown',(e:MouseEvent) =>{
  if(display.value === true && e.target !== m)
  display.value = !display.value
 })
})
let display = ref(false)
Dispatch.on('openORclose',() =>{
  display.value = !display.value
})
</script>
<style lang="less" scoped>
    .desktop{
		flex: 1;
    position: relative;
		background-image: url('../../assets/background.jpeg');
    background-size: cover;
    }
    .menu{
      position: absolute;
      display: flex;
      flex-direction: column;
      left: 0;
      bottom: 0;
      width: 200px;
      height: 500px;
      background-color: black;
    }
    .continer{
      position: relative;
      height: 100%;
      width: 100%;;
    }
    .btns{
      position: absolute;
      bottom: 0;
    }
    .btn{
      height: 30px;
      width: 200px;
      background-color: aquamarine;
    }
    .btn:hover{
      background-color: blue;
    }
</style>