import React, { Component } from 'react'
import About from './Pages/About'
import Home from './Pages/Home'   //路由组件
import Header from './components/Header'  //一般组件
import MyNavLink from './components/MyNavLink'  
import './App.css'
import {NavLink,Route} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
              {/* 路由链接       */}
              <MyNavLink to="/about" a={1} b={2}>About</MyNavLink>   
              {/* 标签体内容也是一个特殊的标签属性，通过this.props.children可以获取标签体内容 
                <NavLink to="/about"  children="About"/>  == <Navlink to="/about">About</Navlink>
              */}
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/about" component={About} data={8}/>
                <Route path="/Home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

