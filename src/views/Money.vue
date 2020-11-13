<template>
    <Layout class-prefix="layout">
        {{record}}
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
        <FormItem class="FormItem" field-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"/>
        <Tags />
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Type from '@/components/Money/Types.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import recordTypeList from '@/constants/recordTypeList';

  @Component({
    components: {Tabs,Tags, FormItem, Type, NumberPad},
  })
  export default class Money extends Vue {
    recordTypeList = recordTypeList;
    get recordList(){
      return this.$store.state.recordList
    }
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };
    created(){
      this.$store.commit('fetchRecords')
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }

    saveRecord() {
      this.$store.commit('createRecord',this.record)
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