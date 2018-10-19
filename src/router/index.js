import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  index:() => import('@/view/index/index'),
  login:() => import('@/view/login/login'),
  message:() => import('@/view/index/message'),
  user:() => import('@/view/user/user'),
  userinfo:() => import('@/view/user/userinfo'),
  userintegral:() => import('@/view/user/userintegral'),
  integralDetail:() => import('@/view/user/integralDetail'),
  news:() => import('@/view/news/news'),
  photos:() => import('@/view/photos/photos'),
  newsDetail:() => import('@/view/news/newsDetail'),
  todayNews:() => import('@/view/todayNews/todayNews'),
  userservice:() => import('@/view/userservice/userservice'),
  thinkReport:() => import('@/view/userservice/thinkReport'),
  expreience:() => import('@/view/userservice/expreience'),
  appraise:() => import('@/view/userservice/appraise'),
  appraise:() => import('@/view/userservice/appraise'),
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
        type:0
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
        title: '党建一点通',
        type:3
      },
      component: components.news,
    },
    {
      path:'/study',
      name:'study',
      meta:{
        title: '随时随地学',
        type:6
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
        title: '制度建设',
        type:4
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
        title:"特色活动",
        type:1
      },
      component: components.news,
    },
    {
      path:'/interaction',
      name:'interaction',
      meta: {
        title:"党员亮身份",
        type:5
      },
      component: components.news,
    },
    {
      path:'/politicalstudy',
      name:'politicalstudy',
      meta: {
        title:'政治学习',
        type:8
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
    {
      path:'/thinkReport',
      name:'thinkReport',
      meta: {
        title:'思想汇报'
      },
      component: components.thinkReport,
    },
    {
      path:'/expreience',
      name:'expreience',
      meta: {
        title:'心得总结'
      },
      component: components.expreience,
    },
    {
      path:'/appraise',
      name:'appraise',
      meta: {
        title:'民主评议'
      },
      component: components.appraise,
    },
    {
      path:'/userinfo',
      name:'userinfo',
      meta: {
        title:'个人信息'
      },
      component: components.userinfo,
    },
    {
      path:'/userintegral',
      name:'userintegral',
      meta: {
        title:'个人量化积分'
      },
      component: components.userintegral,
    },
    {
      path:'/integralDetail',
      name:'integralDetail',
      meta: {
        title:'积分明细'
      },
      component: components.integralDetail,
    },
  ]
})
