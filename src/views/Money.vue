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
  import {Component} from 'vue-property-decorator';
  import store from '@/store/index2';



  @Component({
    components: {Tags, FormItem, Type, NumberPad}
  })
  export default class Money extends Vue {
    tags = store.tagList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };
    recordList =store.recordList;

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
        store.createRecord(this.record)

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