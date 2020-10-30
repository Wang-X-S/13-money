const localStorageKeyName = 'tagList';
type TagListModel = {
  data: string[];
  fetch: () => string[] ; //输入类型 => 输出类型
  create: (name: string) => 'success'|'duplicated';//联合类型
  save: () => void;
}
const tagListModel: TagListModel = {  //:TagListModel 关联起来
  data: [],
  create(name) {
    if(this.data.indexOf(name)>=0){return 'duplicated'}
    this.data.push(name);
    this.save();
    return 'success'
  },
  //获取数据
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  //保存数据
  save() { //不接受参数， data就从tagListModel里的data来,data自己维护
    return localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export default tagListModel;