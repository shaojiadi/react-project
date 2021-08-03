import React,{Component} from 'react'
// import './index.css'
import './index.css'       //样式模块化，如果用css会用，一般不用

export default class Footer extends Component {
  //全选checkbox回调
  handleCheckAll = (event)=>{
    this.props.checkAllTodo(event.target.checked)
  }
  handlerClearAllDone = ()=>{
   this.props.clearAllDone()
  }
  render(){
    const  {todos} = this.props
    //已完成的个数
    const doneCount = todos.reduce((pre,current)=>pre+(current.done?1:0),0)
    //总数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox"  checked={doneCount===total&&total?true:false}  onChange={this.handleCheckAll}/>  
          {/* defaultChecked只在第一次起作用 */}
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button  onClick={this.handlerClearAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
