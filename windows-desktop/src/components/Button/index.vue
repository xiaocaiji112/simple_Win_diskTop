<template>
<div class="continer">
    <button class="continer-btn" @click="openORclose">开始</button>
    </div>
</template>
<script setup lang="ts">
import Dispatch from '../../tool/Dispatch'


const openORclose = () =>{
Dispatch.emit('openORclose')
}
</script>
<style lang="less">
    .continer{
        height: 100%;
        float: left;
        &-btn{
            height: 100%;
            width: 80px;
        }
    }
</style>