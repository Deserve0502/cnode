import React, { Component } from 'react'
import './index.css'
import AsideHeader from '../common/AsideHeader'
import store from '../../../store'
import { observer } from 'mobx-react';
@observer
export default class Ignore extends Component {

  componentDidMount() {
    store.getIndexMessage('/topics')
  }

  render() {
    return (
      <div className="ignore">
      <AsideHeader>无人回复的话题</AsideHeader>
        <div className="ignore-inner">
          {
            store.list.filter((ele)=>{
              return ele.reply_count == 0
            }).map((ele, index) => {
              return (
                <a key={index} onClick={() => this.goDetile(ele.id)}>{ele.title}</a>
              )
            })
          }
        </div>
      </div>
    )
  }
}
