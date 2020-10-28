<template>
    <Layout class-prefix="layout">
        {{recordList}}
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <Type :value.sync="record.type"/>
        <Notes @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Type from '@/components/Money/Type.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {Component,Watch} from 'vue-property-decorator';

  type Record = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
  }
  @Component({
    components: {Tags, Notes, Type, NumberPad}
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行', '彩票'];
    record: Record = {
      tags: [], notes: '', type: '-', amount: 0
    };
    recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList')||'[]');


    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }

    saveRecord(){
      const record2 = JSON.parse(JSON.stringify(this.record))
      this.recordList.push(record2)

    }
    @Watch('recordList')
    onRecordListChange(){
      localStorage.setItem('recordList',JSON.stringify(this.recordList) )
      console.log(this.recordList)
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
</style>