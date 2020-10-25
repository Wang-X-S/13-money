<template>
    <Layout class-prefix="layout">
        <NumberPad/>
        <Type xxx="hi"/>
        <Notes/>
        <Tags/>
    </Layout>
</template>

<script lang="ts">
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Tags from '@/components/Money/Tags.vue' ;
    import Notes from '@/components/Money/Notes.vue';
    import Type from '@/components/Money/Type.vue'
  export default {
    name: 'Money',
    components:{NumberPad,Notes,Tags,Type}
  };
</script>
<style lang="scss">
    .layout-content{
        display:flex;
        flex-direction:column-reverse;
    }
</style>

<style scoped lang="scss">
    @import '~@/assets/style/helper.scss';
</style>