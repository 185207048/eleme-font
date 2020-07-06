import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom'
import './assets/index.css';
import OrderMen from './container/OrderMen/OrderMen'
import FreePlt from './container/FreePlt/FreePit'
import OpenShop from './container/OpenShop/OpenShop'
import BeeSend from './container/BeeSend/BeeSend'
import Main from './container/Main/Main'

ReactDOM.render(
  // 思考:
    // 1. 确定目录结构 
    //      src中代码
    //        api用于前后端交互
    //        assets用于存放全局css image
    //        component用于存放非路由组件
    //        container用于存放路由组件
    //        redux中存放redux必备的 action-type.jsx action.jsx reducers.jsx store.jsx
    //       注：入口文件从index.js开始

    // 2. 确定页面内容和功能,确定路由关系(link代表跳转， switch切换子路由组件),(+代表根路由 -代表一级路由)
    //    饿了吗页面以下几个方面
    //      + 饿了吗首页
    //         - 蜂鸟配送 link 
    //          -- 首页 switch
    //          -- 配送端 switch
    //          -- 客户端 switch
    //          -- 关于我们 switch
    //          -- app下载 switch
    //         - 代理加盟 switch
    //          -- 城市代理 link
    //          -- 配送代理 link
    //          -- 企业餐代理 link
    //         - 商家开店 link
    //          -- 客户端下载 switch
    //          -- 在线客服 switch 
    //         - 外卖点餐 switch
    //          -- 下载app switch
    //          -- 体验小程序 switch 
    //          -- 体验版 switch 
    //         - 开放平台 link
    //         - 企业订餐 link
    //         - 手机端  switch
    (
      <HashRouter>
        <Switch>
          <Route path="/beesend" component={BeeSend}></Route>
          <Route path="/freeplt" component={FreePlt}></Route>
          <Route path="/openshop" component={OpenShop}></Route>
          <Route path="/orderman" component={OrderMen}></Route>
          <Route component={Main}></Route>
        </Switch>
      </HashRouter>
    ),
  document.getElementById('root')
);
