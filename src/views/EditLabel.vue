<template>
    <Layout>
        <div>
            <icon name="left"></icon>
            <span>
                编辑标签
            </span>
        </div>
        <FormItem field-name="备注" placeholder="请输入备注"/>
        <Button>删除标签</Button>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagListModel from '@/components/models/tagListModel';
  import FormItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';
  @Component({
    components: {Button, FormItem}
  })
  export default class EditLabel extends Vue {
    created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];//filter 一定会返回一个数组,对于它每一个tag的id就等于当前的id
      if (tag) {
        console.log(tag);
      } else {
        this.$router.replace('/404'); //重定向 404页面
      }
    }
  }
</script>

<style scoped lang="scss">

</style>