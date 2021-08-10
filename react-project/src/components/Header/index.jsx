import React, { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
// withRouter解决一般组件使用路由api

class Header extends Component {
  back = ()=>{
    this.props.history.goBack()
  }
  forward = ()=>{
    this.props.history.goForward()
  }
  go = ()=>{
    this.props.history.go(2)
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={this.back}>回退</button>
            <button onClick={this.forward}>前进</button>
            <button onClick={this.go}>go</button>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(Header)