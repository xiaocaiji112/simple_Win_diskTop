<template>
<div v-move v-if="show" class="filefolder">
    
    <div class="header">
        <div>{{props.name}}</div>
        <div><button  class="btn" @click="close">X</button></div>
    </div>
    <div class="content">2</div>
</div>
</template>
<script setup lang="ts">

import { Directive,DirectiveBinding,ref } from 'vue';
import Dispatch from '../../tool/Dispatch'
import Count from '../../tool/count'
const show = ref<boolean>(false)

const vMove:Directive = (el:HTMLElement,binding:DirectiveBinding) =>{
   const head =  el.firstChild as HTMLDivElement
   head?.addEventListener('mousedown',(e:MouseEvent) =>{
    console.log(el.style.zIndex);
    console.log("" + Count.count)
    Count.add()
    el.style.zIndex = "" + Count.count
      let X = e.clientX - el.offsetLeft;
      let Y = e.clientY - el.offsetTop;
    const move = (e:MouseEvent) =>{
        el.style.left = e.clientX - X + 'px'
        el.style.top = e.clientY - Y + 'px'
    }
    document.addEventListener('mousemove' ,move)
    document.addEventListener('mouseup',() =>{
        document.removeEventListener('mousemove',move)
    })
   })
}
type Props = {
    name:string
}
const props = defineProps<Props>()
Dispatch.on(`openfFolder${props.name}`,() =>{
    show.value = true
})
const close = () => {
show.value = false
}
</script>
<style lang="less">

.filefolder{
    position: absolute;
    height: 600px;
    width: 600px;
    background-color: aquamarine;
    border: 1px solid #ccc;
    left: 30%;
    display: flex;
    flex-direction: column;
    z-index: 1;
}
.header{
    height: 35px;
    background-color: antiquewhite;
    display: flex;
    justify-content: space-between;
}
.content{
    flex: 1;
    background-color:red;
}
.btn{
    height: 35px;
    width: 45px;
}
</style>