import React, { Component } from 'react'
import AsideHeader from '../common/AsideHeader'
import './index.css'

export default class Connect extends Component {
  data = [{
      aHref:"https://ruby-china.org/",
      imgSrc:"../image/home-connect_01.png"
    },{
      aHref:"https://golangtc.com/",
      imgSrc:"../image/home-connect_02.png"
    },{
      aHref:"https://learnku.com/laravel",
      imgSrc:"../image/home-connect_03.png"
    }
  ]
  
  render() {
    const {aHref,imgSrc} = this.data
    return (
      <div className="connect">
        <AsideHeader>友情社区</AsideHeader>
        <div className="connect-inner">
          { this.data.map((item,index)=><a href={item.aHref} key={index}><img src={item.imgSrc}/></a>)}
        </div>
      </div>
    )
  }
}
