// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import axios from 'axios'


class App extends Component {
  getStudentData = ()=>{
    axios.get('http://localhost:3000/api1/students').then(res=>{
      console.log(res);
    }).catch(err=>{
      
    })
  }

  getCarData = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(res=>{
      console.log(res);
    }).catch(err=>{
      
    })
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.getStudentData}>获取学生数据</button>
        <button onClick={this.getCarData}>获取学生数据</button>
      </div>
    );
  }
}

export default App;
