import React, { Component } from 'react'
import AsideHeader from '../common/AsideHeader'
import './index.css'

export default class Author extends Component {

  
  render() {
    return (
      <div className="author">
        <AsideHeader>作者</AsideHeader>
        <div className="author-inner">
          <div className="author-message">
            <a href="http://127.0.0.1:5500/public/user.html">
            <img src="../src/image/main-content-img_02.jpg"
                alt=""/>i5ting</a>
          </div>
          <div className="range-score">积分：3</div>
          <em>{'"这家伙很懒，什么个性签名都没有留下。"'}</em>
        </div>
      </div>
    )
  }
}
