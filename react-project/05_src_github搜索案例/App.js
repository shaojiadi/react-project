import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {
  state = {
    //初始化状态
    users:[],
    isFirst: true,  //是否是第一次打开页面
    isLoding: false,  //表示是否处于加载中
    err: '',  //存储请求的错误信息
  }  

  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}></Search>
        <List {...this.state}></List>
      </div>
    )
  }
}

