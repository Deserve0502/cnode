import React, { Component } from 'react'
import './index.css'

export default class Login extends Component {
  render() {
    return (
      <div className="reg">
        <p>CNode：Node.js专业中文社区</p>
        <div className="reg-wrapper">
          <p>您可以
          <a href="http://127.0.0.1:5500/public/signIn.html">登录</a>
          或
          <a
              href="https://github.com/login/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fcnodejs.org%2Fauth%2Fgithub%2Fcallback&client_id=0625d398dd9166a196e9">注册</a>，也可以
          </p>
          <a href="https://github.com/login/oauth/authorize?response_type=code&redirect_uri=https%3A%2F%2Fcnodejs.org%2Fauth%2Fgithub%2Fcallback&client_id=0625d398dd9166a196e9"
            className='sign-up'>通过&nbsp;&nbsp;GitHub&nbsp;&nbsp;登录</a>
        </div>
      </div>
    )
  }
}
