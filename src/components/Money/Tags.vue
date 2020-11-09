<template>
    <div class="tags">
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.id"
                :class="selectedTags.indexOf(tag)>=0 && 'selected'"
                @click="select(tag)"
            >{{tag.name}}
            </li>

        </ul>
        <div class="new">
            <button @click="createTag">新增标签</button>
        </div>
    </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import store from '@/store/index2';

  @Component({
    computed: {
      tagList() {
        //TODO
        //return this.$store.fetchTags()
        return [];
      }
    }
  })

  export default class Tags extends Vue {

    selectedTags: string[] = [];

    select(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value', this.selectedTags);
    }

    createTag() {
      const name = window.prompt('请输入标签名');
      if (!name) { return window.alert('标签名不能为空'); }
      //TODO
      //store.createTag(name);

    }
  }
</script>

<style scoped lang="scss">
    .tags {
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        background: white;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                $bg: #d9d9d9;
                background: $bg;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;

                &.selected {
                    background: darken($bg, 50%);
                    color: white;
                }

            }
        }

        > .new {
            padding-top: 16px;

            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>