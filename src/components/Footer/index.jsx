import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-wrapper1">
          <div className="footer-wrapper2">
            <div className="foot-header">
              <a href="https://cnodejs.org/rss">RSS</a>&nbsp;|&nbsp;<a
                href="https://github.com/cnodejs/nodeclub/">源码地址</a>
            </div>
            <p>
              CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
              的技术研究。
            </p>
            <p>
              服务器搭建在
              <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">
                <img src="../image/footer_01.png" alt="" />
              </a>
              ，存储赞助商为
              <a href="https://www.qiniu.com/?ref=cnode">
                <img src="../image/footer_02.png" alt="" />
              </a>
            </p>
            <p>
              新手搭建 Node.js 服务器，推荐使用无需备案的
              <a href="https://www.digitalocean.com/?refcode=eba02656eeb3"
                  className="footer">DigitalOcean(https://www.digitalocean.com/)</a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}
