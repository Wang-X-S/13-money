<template>
    <div class="nav-warpper">
        <div class="conent">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
export default {
  name:'Layout'
}
</script>

<style scoped lang="scss">
    .nav-warpper {
        border: 1px solid green;
        display: flex;
        flex-direction: column;
        min-height: 100vh
    }

    .conent {
        flex-grow: 1;
    }
</style>