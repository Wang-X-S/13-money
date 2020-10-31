<template>
    <div class="layout-wrapper" :class="classPrefix &&`${classPrefix}-wrapper`">
        <div class="content" :class="classPrefix &&`${classPrefix}-content`">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
export default {
  props:['classPrefix'],
  name:'Layout'
}
</script>

<style scoped lang="scss">
    .layout-wrapper {
        background: #f4f4f4;
        display: flex;
        flex-direction: column;
        min-height: 100vh;

    }

    .content {
        flex-grow: 1;
    }
</style>