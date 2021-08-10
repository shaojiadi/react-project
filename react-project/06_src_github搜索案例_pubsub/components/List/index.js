import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'    //组件之间通讯，npm install pubsub-js

export default class index extends Component {
  state = {
    //初始化状态
    users:[],
    isFirst: true,  //是否是第一次打开页面
    isLoding: false,  //表示是否处于加载中
    err: '',  //存储请求的错误信息
  }  

  componentDidMount() {
    this.token = PubSub.subscribe('sjd', (msg,data)=>{
      this.setState(data)  //订阅
    });
  }
  
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  

  render() {
    const {users,isFirst,isLoding,err} = this.state
    return (
      <div className="row">
        {
          isFirst? <h2>欢迎使用，输入关键字，随后点击搜索</h2>:
          isLoding? <h2>Loding...</h2>:
          err? <h2 style={{color:'#f00'}}>{err}</h2>:
          users.map(userObj=>{
            return (
              <div className="card" key={userObj.id}>
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img src={userObj.avatar_url} style={{width: '100px'}} alt=""/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div> 
            )
          })
        }
      </div>
    )
  }
}
