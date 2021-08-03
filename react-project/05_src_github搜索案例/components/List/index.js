import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  render() {
    const {users,isFirst,isLoding,err} = this.props
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
