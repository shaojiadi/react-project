import React,{Component} from 'react'
// import './index.css'
import hello from './index.module.css'       //样式模块化，如果用css会用，一般不用

export default class Hello extends Component {
  render(){
    return (
      <h2 className={hello.demo}>Hello</h2>
    )
  }
}
