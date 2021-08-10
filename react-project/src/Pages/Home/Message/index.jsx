import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'},
      
    ]
  }

  // 编程式路由导航
  pushShow = (id,title)=>{
    this.props.history.push(`/home/message/detail/${id}/${title}`)     //params传参    
    // this.props.history.push(`/home/message/detail`,{id,title})   //state传参 
  }

  replaceShow = (id,title)=>{
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }

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
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj)=>{
              return (
                <li key={msgObj.id}>
                  {/* 向路由传递params参数 */}
                  <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                  &nbsp;<button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>push查看</button>
                  &nbsp;<button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>

                  {/* 向路由传递search参数 */}
                  {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}


                   {/* 向路由传递state参数 */}
                   {/* <Link replace={true} to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link> */}
                   {/* 路由的模式分为replace和push模式，默认为push模式，push在history中留下痕迹 */}

                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail}></Route>

        {/* search参数无需声明接受 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}


        {/* state参数无需声明接受 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}

        <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>go</button>
      </div>
    )
  }
}
