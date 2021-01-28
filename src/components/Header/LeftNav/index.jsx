import React, { Component } from 'react'
import './index.css'

export default class LeftNav extends Component {
  render() {
    return (
        <div className="nav-rightContent">
          <a href="#"><img src="../image/logo.svg" alt="" /></a>
          <div className="nav-search">
            <input type="text" />
          </div>
        </div>
    )
  }
}
