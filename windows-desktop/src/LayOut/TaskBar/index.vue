<template>
    <div ref="div" class="taskbar">
      <Button></Button>
      <div class="time">{{year}}年{{month}}月{{day}}日{{hour}}:{{min}}</div>
    </div>
</template>
<script setup lang="ts">
import Button from '../../components/Button/index.vue';
import {ref,createVNode,render,onMounted} from 'vue'
import Dispatch from '../../tool/Dispatch'
const div = ref<HTMLElement>()

  Dispatch.on('add',(name:string) =>{
    const x = createVNode('div',{
  class:'task'
},name
)
console.log(div.value)
console.log(document.body);
const v = div.value as HTMLDialogElement
render(x,v)
  })

onMounted(() =>{

})
const d = new Date()
const year = ref(d.getFullYear())
const month = ref(d.getMonth())
const day = ref(d.getDay())
const hour = ref(d.getHours())
const min = ref(d.getMinutes())
setInterval(() =>{
const d = new Date()
 year.value = d.getFullYear()
 month.value = d.getMonth()
 day.value = d.getDay()
 hour.value = d.getHours()
 min.value = d.getMinutes()
},60000)

</script>
<style lang="less">
    .taskbar{
    float: left;
		height: 35px;
		background-color: sandybrown
    }
    .time{
      position: relative;
      font-size: medium;
      top: 25%;
      right: 10px;
      float: right;
    }
    .task{
      height: 100%;
      width: 80px;
      background-color: aquamarine;
      float: left;
      border-radius: 10px;
    }
</style>