let id: number = parseInt(window.localStorage.getItem('_idMax')||'0') || 0
//字符串类型无法赋值给 number 类型 ，用 parseInt
function createId(){
  id++
  return id;
}

export default createId;