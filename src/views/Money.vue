<template>
    <Layout class-prefix="layout">
        {{record}}
        <NumberPad @update:value="onUpdateAmount"/>
        <Type @update:value="onUpdateType"/>
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
  import {Component} from 'vue-property-decorator';

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


    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateType(value: string) {
      this.record.type = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
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