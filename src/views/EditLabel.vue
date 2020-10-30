<template>
    <Layout>
        编辑标签
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/components/models/tagListModel';

  @Component
  export default class EditLabel extends Vue {
    created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];//filter 一定会返回一个数组,对于它每一个tag的id就等于当前的id
      if (tag) {
        console.log(tag);
      }else{
        this.$router.replace('/404') //重定向 404页面
      }
    }
  }
</script>

<style scoped lang="scss">

</style>