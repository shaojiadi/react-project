import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* activeClassName="activeNav" 点击link样式*/}
        <NavLink  activeClassName="activeNav"  className="list-group-item" {...this.props}/>
      </div>
    )
  }
}
