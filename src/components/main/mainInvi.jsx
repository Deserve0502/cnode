import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import store from "../../store";
import TurnPageBtn from "./turnPageBtn";
import "./main.css";
import user1Img from "../../image/main-content-img_01.jpg";
@observer
class TitleInvi extends Component {
  static propTypes = {
    history: PropTypes.any,
  };
  goDetile = (id) => {
    // console.log(this.props)
    this.props.history.history.push({ pathname: "/detile" });
    let url = "/topic/" + id;
    store.getArticleDetile(url);
  };
  goUser = (authorName) => {
    // console.log(this.props)
    this.props.history.history.push({ pathname: "/user" });
    let url1 = "/user/" + authorName;
    let url2 = "/topic_collect/" + authorName;
    store.getUserDetile(url1);
    store.getUserCollect(url2);
  };
  render() {
    if (store.list.length === 1) {
      return <div>Loading</div>;
    } else {
      let data = this.props.inviMessage;
      let tab =
        data.top == true
          ? "置顶"
          : data.good == true
          ? "精华"
          : data.tab
          ? data.tab === "ask"
            ? "问答"
            : data.tab === "share"
            ? "分享"
            : ""
          : "";
      return (
        <div className={"main-content content-hover"}>
          <div className={"main-left"}>
            <NavLink
              to="/user"
              onClick={() => this.goUser(data.author.loginname)}
              title={data.author.loginname}
            >
              <img src={user1Img} className={"user-img"} />
            </NavLink>
            <div className="main-text">
              <div className="main-text-left">
                <span className="comment">{data.reply_count}</span>/
                <span className="view">{data.visit_count}</span>
              </div>
              <div className="main-text-right">
                <span
                  className={
                    tab
                      ? tab === "置顶" || tab === "精华"
                        ? "impo"
                        : "ordin"
                      : ""
                  }
                >
                  {tab}
                </span>
                <NavLink
                  id={data.id}
                  to="/detile"
                  title={data.title}
                  className="inviCapture"
                  onClick={() => this.goDetile(data.id)}
                >
                  {data.title}
                </NavLink>
              </div>
            </div>
          </div>
          <div className="main-right">
            <NavLink to="/detile"
             onClick={() => this.goDetile(data.id)}
            >
              <img src={user1Img} className="user-imgSmall" />
              <span className="time">{store.getDate(data.create_at) + '前'}</span>
            </NavLink>
          </div>
        </div>
      );
    }
  }
}
@observer
export default class mainInvi extends Component {
  static propTypes = {
    history: PropTypes.any,
  };
  componentDidMount() {
    store.getIndexMessage("/topics");
  }
  changeTab = (type) => {
    if (type === store.tab) {
      return;
    }
    store.page = 1;
    switch (type) {
      case "all":
        store.tab = "all";
        break;
      case "good":
        store.tab = "good";
        break;
      case "share":
        store.tab = "share";
        break;
      case "ask":
        store.tab = "ask";
        break;
      case "job":
        store.tab = "job";
        break;
      case "dev":
        store.tab = "dev";
        break;
    }
    store.getIndexMessage("/topics");
  };
  
  render() {
    console.log(2)
    return (
      <>
        <div id="main">
          <div id="home-nav" className="main-nav">
            <span
              className={store.tab === 'all'?'active':''}
              data-id="all"
              onClick={() => this.changeTab("all")}
            >
              全部
            </span>
            <span className={store.tab === 'good'?'active':''} data-id="good" onClick={() => this.changeTab("good")}>
              精华
            </span>
            <span className={store.tab === 'share'?'active':''} data-id="share" onClick={() => this.changeTab("share")}>
              分享
            </span>
            <span className={store.tab === 'ask'?'active':''} data-id="ask" onClick={() => this.changeTab("ask")}>
              问答
            </span>
            <span className={store.tab === 'job'?'active':''} data-id="job" onClick={() => this.changeTab("job")}>
              招聘
            </span>
            <span className={store.tab === 'dev'?'active':''} data-id="dev" onClick={() => this.changeTab("dev")}>
              客户端测试
            </span>
          </div>
          <div className="main-wrapper" id="home">
            {store.list.map((ele, index) => {
              return (
                <TitleInvi
                  inviMessage={{ ...ele }}
                  history={{ ...this.props.history }}
                  key={index + 1}
                />
              );
            })}
          </div>
            <TurnPageBtn />
        </div>
      </>
    );
  }
}
