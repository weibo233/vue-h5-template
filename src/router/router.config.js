/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path:'/message',
        name:'message',
        component:() => import('@/views/home/message')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/home/about'),
        meta: { title: '关于我', keepAlive: false }
      },
      {
        path:'/buiness',
        name:'buiness',
        component:() => import ('@/views/buiness'),
        children:[
          {
            path:'honor',
            name:'honor',
            component:() => import ('@/views/buiness/honor'),
            meta:{title:'企业荣誉'}
          },
          {
            path:'news',
            name:'news',
            component:() => import ('@/views/buiness/news'),
            meta:{title:'新闻中心'}
          },
          {
            path:'bidding',
            name:'bidding',
            component:() => import('@/views/buiness/bidding'),
            meta:{title:'招标信息'}
          },
          {
            path:'charge',
            name:'charge',
            component:() => import('@/views/buiness/charge'),
            meta:{title:'收费标准'}
          },
          {
            path:'recruit',
            name:'recruit',
            component:() => import('@/views/buiness/recruit'),
            meta:{title:'招聘信息'}
          },
          {
            path:'policy',
            name:'policy',
            component:() => import('@/views/buiness/policy'),
            meta:{title:'政策文件'}
          }
        ]
      },
      {
        path:'detail',
        name:'detail',
        component:() => import('@/views/detail'),
        children:[
          {
            path:'honor-detail',
            name:'honor-detail',
            component:() => import ('@/views/buiness/honor/detail')
          },
          {
            path:'detail',
            name:'detail',
            component:() => import ('@/views/buiness/detail')
          }
        ]
      }
    ]
  }
]
