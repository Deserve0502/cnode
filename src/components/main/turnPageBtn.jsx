import React, { Component } from "react";
import { observer } from "mobx-react";
import store from "../../store";
@observer
export default class TurnPageBtn extends Component {
  goBackPage = (num) => {
    if (num === -1 && store.page === 1) {
      return;
    } else {
      store.page += num;
      store.getIndexMessage("/topics");
    }
  };
  goPage = (page) => {
    if (store.page == page) {
      return;
    }
    store.page = page;
    store.getIndexMessage("/topics");
  };

  render() {
    if (store.inviNumBtn) {
      return;
    } else {
      return (
        <div id="turnPage-btn">
          <button onClick={() => this.goBackPage(-1)} className="first-btn">
            {"<<"}
          </button>
          {store.page - 2 > 1 ? <button>{"..."}</button> : ""}
          {store.page <= 3
            ? [1, 2, 3, 4, 5].map((ele) => (
                <button
                  className={store.page === ele ? "active" : ""}
                  onClick={() => this.goPage(ele)}
                  key={ele}
                >
                  {ele}
                </button>
              ))
            :  [store.page - 2, store.page - 1, store.page, store.page + 1, store.page + 2].map((ele) => (
                <button
                  className={store.page === ele ? "active" : ""}
                  onClick={() => this.goPage(ele)}
                  key={ele}
                >
                  {ele}
                </button>
              ))}
          <button>{"..."}</button>
          <button onClick={() => this.goBackPage(1)} className="last-btn">
            {">>"}
          </button>
        </div>
      );
    }
  }
}
