import React, { Component } from 'react'
import AsideHeader from '../common/AsideHeader'
import '../Ignore/index.css'

export default class Other extends Component {
  render() {
    return (
      <div className="ignore special-aside">
        <AsideHeader>作者其他话题</AsideHeader>
        <div className="ignore-inner author-topics">
          <a href="./invi.html">Pagic 官网来啦！ Deno + React 驱动的静</a>
          <a href="./invi.html"
          >分享我用 Deno 写的静态网站生成器 - Pagic</a
          >
          <a href="./invi.html"
          >分享一个基于puppeteer的高性能spa(vue, react等)SEO解决方案</a
          >
          <a href="./invi.html">谈谈 TypeScript 中的类型断言</a>
          <a href="./invi.html"
          >超越 google 成为世界第三，eslint-config-alloy 是如何成功的</a
          >
          <a href="./invi.html">我写的第一本书《TypeScript 入门教程》</a>
        </div>
      </div>
    )
  }
}
