<template>
    <div class="LayOut">
<DeskTop></DeskTop>

<TaskBar>
    
</TaskBar>

    </div>
</template>
<script setup lang="ts">
import DeskTop from './DeskTop/index.vue';
import TaskBar from './TaskBar/index.vue';

</script>
<style lang="less">
    .LayOut{
        height: 100%;
        height: 100%;
        display: flex;
		flex-direction: column;
        overflow: hidden;
    }
</style>