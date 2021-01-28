import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";
import { observer } from "mobx-react";
import store from "../../store";
import "./invi.css";
// import "./markdown.css";
@observer
export default class InviDetile extends Component {
    // static propTypes = {
    //     history: PropTypes.any,
    //   };

    render(){
        if(!store.detile){
            return <div>加载中</div>
        }
        return ( <div id="main" className="invi">
             <div className="invi-wrapper">
            <div className="invi-header">
              <span className="invi-title">
                {store.detile.title}
              </span>
              <div className="invi-author">
                <span>发布于&nbsp;{store.getDate(store.detile.create_at)}&nbsp;前</span>
                <span>作者&nbsp;<NavLink to="/user">{store.detile.author.loginname}</NavLink></span>
                <span>{store.detile.visit_count}&nbsp;次浏览</span>
                <span>来自&nbsp;{
                  store.detile.tab === "ask"
                    ? "问答"
                    : store.detile.tab === "share"
                    ? "分享"
                    : store.detile.tab === "job"
                    ? "招聘"
                    : "客户端测试"
                }</span>
              </div>
            </div>
            <div className="main-freshmancontent">
              <div className="invi-content" dangerouslySetInnerHTML={{__html:store.detile.content}}>
              </div>
              </div>
            </div>
            <div class="invi-comment">
              
            </div>
        </div>)
    }
}