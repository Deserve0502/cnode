import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

export default class RightNav extends Component {
  data = [{name:"",to:""},
]
  render() {
    return (
      <div className="nav-leftContent">
        <ul>
          <li>
            <NavLink to='/index'>首页</NavLink>
          </li>
          <li>
            <NavLink to='/new'>新手入门</NavLink>
          </li>
          <li>
            <NavLink to='/api'>API</NavLink>
          </li>

          <li>
            <NavLink to='/about'>关于</NavLink>
          </li>
          <li>
            <NavLink to='/regist'>注册</NavLink>
          </li>
          <li>
            <NavLink to='/login'>登录</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
