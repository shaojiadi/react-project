import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.users.map(userObj=>{
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
