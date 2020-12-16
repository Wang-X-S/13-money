<template>
    <Layout class-prefix="layout">
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
        <FormItem class="FormItem" field-name="备注"
                  placeholder="请输入备注"
                  :value.sync="record.notes"
                  />
        <Tags @update:value="record.tags = $event"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import recordTypeList from '@/constants/recordTypeList';

  @Component({
    components: {Tabs,Tags, FormItem, NumberPad},
  })
  export default class Money extends Vue {
    recordTypeList = recordTypeList;
    get recordList(){
      return this.$store.state.recordList
    }
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0,createRecordError: null
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
      if(!this.record.tags||this.record.tags.length ===0){
        return window.alert('请至少选择一个标签')
      }

      this.$store.commit('createRecord',this.record)
      if(this.$store.state.createRecordError === null){
        window.alert('已保存')
      }

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