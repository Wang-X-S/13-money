import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';

Vue.use(Vuex)
//把 store 帮到 Vue.prototype.$store = store

const store = new Vuex.Store({
  state: { //data
    recordList:[] as RecordItem[]
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
      return this.recordList;
    },
    saveRecords() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    },
    createRecord(state,record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2);
      store.commit('saveRecords');
    }
  }
})

export default store
