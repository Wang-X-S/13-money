import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data:[] as RecordItem[],

  //获取数据
  create(record: RecordItem){
    const record2 = clone(record);
    record2.createdAt = new Date();
    this.data.push(record2);
  },

  fetch() {
    this.data =JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data
  },
  //保存数据
  save() {
    return localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export default recordListModel