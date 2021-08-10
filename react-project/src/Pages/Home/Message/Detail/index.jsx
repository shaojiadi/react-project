import React, { Component } from 'react'
// import qs from 'querystring';

// let obj = {name:'tom',age:18}   //name=tom&age=18  urlencoded形式
// console.log(qs.stringify(obj))

const data = [
  {id:'01',content:'你好，中国'},
  {id:'02',content:'你好，机械'},
  {id:'03',content:'你好，基建'},
]

export default class Detail extends Component {
  render() {
    // 接收params参数
    const {id,title} = this.props.match.params;

    //接收search参数
    // const {search} = this.props.location;
    // const {id,title} = qs.parse(search.slice(1));

    //接收state参数  刷新也可以保留参数
    // const {id,title} = this.props.location.state || {};

    const findResult = data.find(item=>{
      return item.id === id
    }) || {}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{findResult.content}</li>
      </ul>
    )
  }
}
