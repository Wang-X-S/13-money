const localStorageKeyName = 'tagList';
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[]; //输入类型 => 输出类型
  create: (name: string) => 'success' | 'duplicated';//联合类型
  save: () => void;
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
}
const tagListModel: TagListModel = {  //:TagListModel 关联起来
  data: [],
  update(id, name) {  //告诉一个 id ,一个 name 把对应的 id 对应更新的 name
    const idList = this.data.map(item => item.id); //找到所有id
    if (idList.indexOf(id) >= 0) {      //如果id 在 idList 中
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      }else{
        const tag =  this.data.filter(item=>item.id===id)[0]
        tag.name = name
        this.save()
        return 'success'
      }
    } else {
      return 'not found';
    }
  },
  create(name) {
    const names = this.data.map(item => item.name);//把data 里面所有的 name 搜索出来，产生一个新数组
    if (names.indexOf(name) >= 0) {return 'duplicated';}
    this.data.push({id: name, name: name});
    this.save();
    return 'success';
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