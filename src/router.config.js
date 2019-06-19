/**
 * router.config.js 文件说明
 * 1. 该文件用于生成项目的所有路由组件（Route）以及面包屑（breadcrumbs）
 * 2. routers 中的对象的属性
 *    2.1 path: 路由路径                                 -- 为空或''表示和父组件路由路径想同
 *    2.2 name: 路径对应的面包屑地址                       -- 为空或''表示和该路由不需要生成面包屑
 *    2.3 component: 路由跳转的组件                       -- 为空或''表示该路由没有对应的组件
 *    2.4 children: 子路由的信息                          -- 为空或''表示没有子路由
 *    2.5 exact: react-router中的路径绝对匹配（true/fase） -- 为空或''表示exact === false
 */

//layout
import BasicLayout from './layouts/BasicLayout';

//router
import HomePage from './routers/HomePage';
import Solution from './routers/Solution';
import ClientCase from './routers/ClientCase';
import Business from './routers/Business';
import AboutUs from './routers/AboutUs';

const router=[
    {
        path:'/',
        name:'首页',
        component:BasicLayout,
        children:[
            {
                path:'home',
                exact:true,
                component:HomePage
            },
            {
                path:'case',
                exact:true,
                component:ClientCase
            },
            {
                path:'solution',
                exact:true,
                component:Solution
            },
            {
                path:'business',
                exact:true,
                component:Business
            },
            {
                path:'about',
                exact:true,
                component:AboutUs
            }
        ]
    }
];
export default router;