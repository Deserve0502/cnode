import React from 'react'
import './index.css'
import LeftNav from './LeftNav'
import RightNav from './RightNav'

export default class IndexNav extends React.Component {
  render() {
    return (
      <header>
        <div className="nav">
          <div id="nav-wrapper">
            <LeftNav />
            <RightNav />
          </div>
        </div>
      </header>

    )
  }
}