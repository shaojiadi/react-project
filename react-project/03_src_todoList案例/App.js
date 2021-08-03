// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import React, { Component } from 'react'


// function App() {
//   return (
//     <div className="App">
//       <div className="todo-container">
//       <div className="todo-wrap">
//         <Header/>
//         <List/>
//         <Footer />
//       </div>
//     </div>
//     </div>
//   );
// }
class App extends Component {
  //状态在哪里，操作状态的方法就在哪里

  //初始化状态
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打代码',done:false},
  ]}

  //addTodo用于添加一个todo,接受的参数是todo对象
  addTodo = (todoObj)=>{
    //获取原todos
    const {todos} = this.state
    //追加一个todo
    const newTodos = [todoObj,...todos]
    //更新状态
    this.setState({todos:newTodos})
  }

  ///用于更新一个todo对象
  updateTodo = (id,done)=>{
    //获取状态中的todos
    const {todos} = this.state
    //匹配处理数据
    const newTodos = todos.map((todoObj)=>{
      if(todoObj.id === id){
        return {...todoObj,done}   //done是done:done的简写   let obj = {a:1,b:2}需要改变b的值为3可以let obj2 = {...obj,b:3}
      }else {
        return todoObj
      }
    })
    this.setState({todos:newTodos})
  }
  //删除一个todo对象
  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id!==id
    })
    this.setState({todos:newTodos})
  }

  //全选
  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }
  //清除所有已完成
  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done
    })
    this.setState({todos:newTodos})
  }

  render(){
    const {todos} = this.state 
    return (
      <div className="App">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos}  updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
