import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
import PubSub from 'pubsub-js'

export default class index extends Component {
  search = ()=>{
    // const {value} = this.keyWordElement
    const {keyWordElement:{value:keyword}} = this;     //解构赋值连续使用并且重命名
    //console.log(keyword);
    //发送请求前通知App更新状态
    PubSub.publish('sjd', {isLoding:true,isFirst:false});   //发布
    axios.get(`/api1/search/users?q=${keyword}`).then(res=>{             //服务在react全家桶资料/05_所需服务器
      PubSub.publish('sjd', {isLoding:false,users:res.data.items});  
    }).catch(err=>{
      PubSub.publish('sjd', {isLoding:false,err:err.message});  
    })
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input  ref={c=>this.keyWordElement=c}  type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
    </section>
    )
  }
}
