<<<<<<< HEAD
import { observable, computed, action } from "mobx";
import http from '../http'
class AppStore {
    @observable tab = 'all';//首页分类标签，默认all
    @observable page = 1;//首页分页页数，默认1
    @observable list = [{title:'loading'}];//首页列表
    @observable detile = {title:'loading'};//文章详情
    @observable articleId = '';//文章id
    @action getIndexMessage(url){
        //获取首页列表
        this.list =  [{title:'loading'}]
        http.get(url,
        {
        //get参数传递
          params:{
          tab:this.tab,
          page:this.page,
      }
    }
        ).then(response => {  
                this.list = response.data   
        })
    }
    @action getArticleDetile(url){
        //获取文章详情
        this.detile = {title:'loading'}
        http.get(url).then(response => {  
            this.detile = response.data   
        })
    }
    
}
export default new AppStore();

=======
import { observable, action } from "mobx";
import http from "../http";
class AppStore {
  @observable tab = "all"; //首页分类标签，默认all
  @observable page = 1; //首页分页页数，默认1
  @observable list = [{ title: "loading" }]; //首页列表
  @observable detile = null; //文章详情
  @observable Userdetile = null; //用户信息
  @observable UserCollect = [{ title: "loading" }]; //用户收藏文章详情
  @observable articleId = ""; //文章id
  @observable inviNumBtn = ""; //文章id
  @action getIndexMessage(url) {
    //获取首页列表
    this.list = [{ title: "loading" }];
    http
      .get(url, {
        //get参数传递
        params: {
          tab: this.tab,
          page: this.page,
        },
      })
      .then((response) => {
        // console.log(response.data);
        this.list = response.data;
      });
  }
  @action getArticleDetile(url) {
    //获取文章详情
    this.detile = null;
    http.get(url).then((response) => {
      this.detile = response.data;
      console.log(response.data);
      document.title = response.data.title;
    });
  }
  @action getUserDetile(url) {
    this.Userdetile = null;
    http.get(url).then((response) => {
      this.Userdetile = response.data;
      document.title = "@" + response.data.loginname + "的个人主页";
      console.log(response.data);
    });
  }
  @action getUserCollect(url) {
    this.UserCollect = [{ title: "loading" }];
    http.get(url).then((response) => {
      this.UserCollect = response.data;
      console.log(response.data);
    });
  }
  @action getDate(date) {
    var time = Date.parse(new Date());
    var lasttime = Date.parse(date);
    var day = (time - lasttime) / 1000;
    if (day < 60) {
      return (day = `${parseInt(day)}秒钟`);
    }
    if (day < 3600) {
      return (day = `${parseInt(day / 60)}分钟`);
    }
    if (day < 86400) {
      return (day = `${parseInt(day / (60 * 60))}小时`);
    }
    if (day < 86400 * 30) {
      return (day = `${parseInt(day / (60 * 60 * 24))}天`);
    }
    if (day < 86400 * 30 * 12) {
      return (day = `${parseInt(day / (60 * 60 * 24 * 30))}个月`);
    }
    return (day = `${parseInt(day / (60 * 60 * 24 * 30 * 12))}年`);
  }
  //处理所有类名激活
//   @action Active(domArr, nowDom) {
//     domArr.forEach((element) => {
//       element.classList.remove("active");
//     });
//     nowDom.classList.add("active");
//   }
}
export default new AppStore();
>>>>>>> 8427892 (feenan)
