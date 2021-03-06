import React, { Component } from 'react'
import About from './Pages/About'
import Home from './Pages/Home'   //路由组件
import Header from './components/Header'  //一般组件
import MyNavLink from './components/MyNavLink'  
import Test from './Pages/Test'  
import './App.css'
import {Route,Switch,Redirect} from 'react-router-dom'
// Switch匹配到路径就不会继续使用

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
                {/* 注册路由  路由组件才有history*/}
                <Switch>
                  <Route path="/about" component={About} data={8}/>
                  {/* http://localhost:3000/css/bootstrap.css   默认公共目录是public */}
                  <Route path="/home" component={Home}/>
                  {/* 路由默认模糊匹配  exact开启精准匹配，一般不开启*/}
                  <Route path="/home" component={Test} exact={true}/>
                  <Redirect to="/about"/>
                  {/* 重定向，当所有路由都无法匹配时，跳转到redirect指向的路由 */}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

