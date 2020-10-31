<template>
    <Layout class-prefix="layout">
        {{record}}
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <Type :value.sync="record.type"/>
        <FormItem class="FormItem" field-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Type from '@/components/Money/Type.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component, Watch} from 'vue-property-decorator';
  import recordListModel from '@/components/models/recordListModel';
  import tagListModel from '@/components/models/tagListModel';


  const recordList= recordListModel.fetch;
  const tagList= tagListModel.fetch()


  @Component({
    components: {Tags, FormItem, Type, NumberPad}
  })
  export default class Money extends Vue {
    tags = tagList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };
    recordList: RecordItem[] =recordList();

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }

    saveRecord() {
      const record2 = recordListModel.clone(this.record);
      this.recordList.push(record2);
      record2.createdAt = new Date();

    }

    @Watch('recordList')
    onRecordListChange() {
      recordListModel.save(this.recordList);
    }
  }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>

<style scoped lang="scss">
    @import '~@/assets/style/helper.scss';
    .notes{
        padding: 12px 0;
    }


</style>