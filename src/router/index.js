import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  index:() => import('@/view/index/index'),
  login:() => import('@/view/login/login'),
  message:() => import('@/view/index/message'),
  user:() => import('@/view/index/user'),
  news:() => import('@/view/news/news'),
  photos:() => import('@/view/photos/photos'),
  newsDetail:() => import('@/view/news/newsDetail'),
  todayNews:() => import('@/view/todayNews/todayNews'),
  userservice:() => import('@/view/userservice/userservice'),
  map:() => import('@/view/userservice/map'),
}

export default new Router({
  // mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path:'/login',
      name:'login',
      meta:{
        title: '登录'
      },
      component: components.login,
    },
    {
      path:'/message',
      name:'message',
      meta:{
        title: '通知早知道'
      },
      component: components.message,
    },
    {
      path:'/user',
      name:'user',
      meta:{
        title: '我的党建'
      },
      component: components.user,
    },
    {
      path:'/index',
      name:'index',
      component: components.index,
      meta:{
        title: '首页'
      },

    },
    {
      path:'/news',
      name:'news',
      meta:{
        title: '信工新闻眼',
      },
      component: components.news,
    },
    {
      path:'/newsDetail',
      name:'newsDetail',
      component: components.newsDetail,
    },
    {
      path:'/userservice',
      name:'userservice',
      meta:{
        title: '掌上组织生活'
      },
      component: components.userservice,
    },
    {
      path:'/todayNews',
      name:'todayNews',
      meta:{
        title: '党史上的今天'
      },
      component: components.todayNews,
    },
    {
      path:'/oneClick',
      name:'oneClick',
      meta:{
        title: '党建一点通'
      },
      component: components.news,
    },
    {
      path:'/study',
      name:'study',
      meta:{
        title: '随时随地学'
      },
      component: components.news,
    },
    {
      path:'/photos',
      name:'photos',
      meta:{
        title: '随时随地拍'
      },
      component: components.photos,
    },
    {
      path:'/institutional',
      name:'institutional',
      meta:{
        title: '制度建设'
      },
      component: components.news,
    },
    {
      path:'/messageDetail',
      name:'messageDetail',
      component: components.newsDetail,
    },
    {
      path:'/specialEvent',
      name:'specialEvent',
      meta: {
        title:"特色活动"
      },
      component: components.news,
    },
    {
      path:'/politicalstudy',
      name:'politicalstudy',
      meta: {
        title:'政治学习'
      },
      component: components.news,
    },
    {
      path:'/map',
      name:'map',
      meta: {
        title:'流动党员找组织'
      },
      component: components.map,
    },
  ]
})
