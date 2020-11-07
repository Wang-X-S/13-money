<template>
    <Layout class-prefix="layout">
        {{record}}
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <Type :value.sync="record.type"/>
        <FormItem class="FormItem" field-name="备注" placeholder="请输入备注" @update:value="onUpdateNotes"/>
        <Tags />
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Type from '@/components/Money/Type.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component} from 'vue-property-decorator';
  import oldStore from '@/store/index2';

  @Component({
    components: {Tags, FormItem, Type, NumberPad},
    computed:{
      recordList(){
        return this.$store.state.recordList
      }
    }
  })

  export default class Money extends Vue {

    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    };
    recordList =this.$store.state.count;
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
        oldStore.createRecord(this.record)
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