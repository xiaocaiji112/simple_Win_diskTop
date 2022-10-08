<template>
      <div  v-show="display" class="menu">
        <div ref="menu" class="continer">
          <div class="btns">
            <div class="btn">1</div>
            <div class="btn">1</div>
          </div>
        </div>
      </div>

</template>

<script setup lang="ts">
import {ref ,onMounted} from 'vue'
import Dispatch from '../../tool/Dispatch'

type Props = {
    p:HTMLElement
}

const s = defineProps<Props>()

console.log(s.p)
const desktop = ref()
const menu = ref()
let d:any
let m:any


let display = ref(false)
Dispatch.on('openORclose',() =>{
  display.value = !display.value
})

</script>
<style lang="less">
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