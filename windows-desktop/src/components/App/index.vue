<template>
<div v-move  @dblclick="open" class="application">
    <div class="application-icon">
        <img style="height: auto;width: 60px; -webkit-user-drag: none;" src="../../assets/folder.png" alt="">
    </div>
        <div class="application-content">{{props.content}}</div>
    </div>
<FileForder :name="name"></FileForder>
</template>
<script setup lang="ts">
import { Directive,DirectiveBinding,ref } from 'vue';
import Dispatch from '../../tool/Dispatch'
import FileForder from '../FileForder/index.vue';

const vMove:Directive = (el:HTMLElement,binding:DirectiveBinding)=>{
el.addEventListener('mousedown',(e:MouseEvent) =>{
      let X = e.clientX - el.offsetLeft;
      let Y = e.clientY - el.offsetTop;
    const move = (e:MouseEvent) =>{
        const left = e.clientX - X
        const top = e.clientY - Y
        if(left >= 0){
            el.style.left = e.clientX - X +'px'
        }
        if(top <= 800 && top >= 0){
            el.style.top = e.clientY - Y + 'px'
        }
    }
    document.addEventListener('mousemove',move)
    document.addEventListener('mouseup',() =>{
        document.removeEventListener('mousemove',move)
    })
})
}
const  open = () => {
    Dispatch.emit(`openfFolder${props.content}`)
    Dispatch.emit('add',props.content)
}
type Props = {
    content:string,
    icon?:any
}
const props = defineProps<Props>()
console.log(props.content)
const name = ref<string>('a')
name.value = props.content
</script>
<style lang="less" scoped>
    .application{

        position: absolute;
        height: 70px;
        width: 70px;
        top: 10px;
        &-icon{
        height: 40px;
        width: 60px;
        margin: 2px;
       }
        &-content{
            font-size: small;
            color: azure;
            text-align: center;
            margin-top: 10px;
        }
    }
    .application:hover{
        background-color:rgba(192,192,192,0.3);
    }
</style>