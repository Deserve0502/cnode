import React from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react';
<<<<<<< HEAD
=======
import './nav.css';
import imgLogo from '../image/logo.svg';
>>>>>>> 8427892 (feenan)
@observer
export default class indexNav extends React.Component { 
    render() {
        return (
            <header>
            <div className="nav">
              <div id="nav-wrapper">
                <div className="nav-rightContent">
<<<<<<< HEAD
                  <a href="#"><img src="../image/logo.svg" alt="" /></a>
=======
                  <a href="#"><img src={imgLogo} alt="" /></a>
>>>>>>> 8427892 (feenan)
                  <div className="nav-search">
                    <span className="iconfont">&#xe618;</span><input type="text" />
                  </div>
                </div>
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
<<<<<<< HEAD
                      <NavLink to='/regist'>注册</NavLink>
=======
                      <a  href="https://github.com/login"
                      >注册</a>
>>>>>>> 8427892 (feenan)
                    </li>
                    <li>
                      <NavLink to='/login'>登录</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </header>
         
)
}
}