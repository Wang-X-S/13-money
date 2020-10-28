<template>
    <Layout class-prefix="layout">
        <NumberPad/>
        <Type/>
        <Notes/>
        <Tags :data-source.sync="tags"/>
    </Layout>
</template>

<script lang="ts">
    import NumberPad from '@/components/Money/NumberPad.vue';
    import Tags from '@/components/Money/Tags.vue' ;
    import Notes from '@/components/Money/Notes.vue';
    import Type from '@/components/Money/Type.vue'
  export default {
    name: 'Money',
    components:{NumberPad,Notes,Tags,Type},
    data(){
      return {
        tags:['衣','食','住','行']
      }
    }

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