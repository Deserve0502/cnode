import React, { Component } from 'react'
import AsideHeader from '../common/AsideHeader'
import './index.css'

export default class Range extends Component {
  data = [
    {user:"i5ting", score:22530, home:"./user.html?author=i5ting"},
    {user:"alsotang", score:15840, home:"./user.html?author=alsotang"},
    {user:"atian25", score:9990, home:"./user.html?author=atian25"},
    {user:"leapon", score:9350, home:"./user.html?author=leapon"},
    {user:"jiyinyiyong", score:8780, home:"./user.html?author=jiyinyiyong"},
    {user:"yakczh", score:7590, home:"./user.html?author=yakczh"},
    {user:"im-here", score:6855, home:"./user.html?author=im-here"},
    {user:"DevinXian", score:6125, home:"./user.html?author=DevinXian"},
    {user:"chapgaga", score:5815, home:"./user.html?author=chapgaga"},
    {user:"magicdawn", score:5375, home:"./user.html?author=magicdawn"},
  ]

  render() {
    return (
      <div className="range">
      <AsideHeader>积分榜&nbsp;&nbsp;<a href="http://127.0.0.1:5500/public/range.html">TOP&nbsp;100&nbsp;{">>"}</a></AsideHeader>
        <div className="range-inner">
          <ul>
            {this.data.map((item,index)=><li key={index}><span>{item.score}</span><a href={item.home}>{item.user}</a></li>)}
          </ul>
        </div>
      </div>
    )
  }
}
