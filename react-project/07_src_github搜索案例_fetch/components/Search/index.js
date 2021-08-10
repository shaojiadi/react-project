import React, { Component } from 'react'
// import axios from 'axios'
import './index.css'
import PubSub from 'pubsub-js'

export default class index extends Component {
  search = async()=>{
    // const {value} = this.keyWordElement
    const {keyWordElement:{value:keyword}} = this;     //解构赋值连续使用并且重命名
    //console.log(keyword);
    //发送请求前通知App更新状态
    PubSub.publish('sjd', {isLoding:true,isFirst:false});   //发布

    //#region 使用axios发送请求
    /*axios.get(`/api1/search/users?q=${keyword}`).then(res=>{             //服务在react全家桶资料/05_所需服务器
      PubSub.publish('sjd', {isLoding:false,users:res.data.items});  
    }).catch(err=>{
      PubSub.publish('sjd', {isLoding:false,err:err.message});  
    })*/
    //#endregion

    //使用fetch发送请求
    // fetch(`/api1/search/users?q=${keyword}`).then(
    //   res=>{
    //     console.log('服务器联系成功');
    //     return res.json()
    //   }      
    // ).then(
    //   res=>{console.log('获取数据成功',res);},         
    // ).catch(err=>{
    //   console.log(err);
    // })

    //使用fetch发送请求简化        
    try {
      const response = await fetch(`/api1/search/users?q=${keyword}`)
      const data = await response.json()
      PubSub.publish('sjd', {isLoding:false,users:data.items});  
    }catch(err){
      PubSub.publish('sjd', {isLoding:false,err:err.message});  
    }

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
