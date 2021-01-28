import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default class RightNav extends Component {
  data = [
    {page:"首页",to:'/index'},
    {page:"新手入门",to:'/new'},
    {page:"API",to:'/api'},
    {page:"关于",to:'/about'},
    {page:"注册",to:'/regist'},
    {page:"登录",to:'/login'},
]
  render() {
    return (
      <div className="nav-leftContent">
        <ul>
        {this.data.map((item,index)=><li key={index}><NavLink to={item.to}>{item.page}</NavLink></li>)}
        </ul>
      </div>
    )
  }
}
