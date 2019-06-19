/* eslint-disable no-unused-vars */
import React,{ Component } from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';
import routers from '../../router.config.js';

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  return reg.test(path);
}

function formatter(data, parentPath = '') {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path: `${path}`.replace(/\/+/g, '/')
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`);
    }
    return result;
  });
}

function getFlatRouteData(menus) {
  let keys = {};
  menus.forEach((item) => {
    if (item.children) {
      keys[item.path] = { ...item };
      keys = { ...keys, ...getFlatRouteData(item.children) };
    } else {
      keys[item.path] = { ...item };
    }
  });
  return keys;
}

export default class RouterView extends Component{
    constructor(props){
        super(props);
        this.state={
            routeData: this.getRouteData(props.basePath, props.authority)
        };
    }
    getRouteData = (basePath, authority) => {
        let resRouter = [];
        if (basePath === undefined || basePath === '') {
          resRouter = routers.map((item) => {
            return {
              exact: item.exact,
              path: item.path,
              component: item.component,
              name: item.name
            };
          });
          return resRouter;
        }
        const flatRouteData = getFlatRouteData(formatter(routers));
        const pathArray = Object.keys(flatRouteData);
        const targetPath = pathArray.find(path => pathToRegexp(path).test(basePath));
        if(targetPath==='/'){
          pathArray.forEach((path) => {
            if(path!=='/'){
            resRouter.push(flatRouteData[path]);
            }
          });
        }else{
          pathArray.forEach((path) => {
            resRouter.push(flatRouteData[path]);
          });
        }
        return resRouter;
      }
    render(){
        const { routeData }=this.state;
        return (
            <Switch>
              <Redirect exact from="/" to="/home" />
                {routeData.length>0&&routeData.map(item=>(
                    <Route
                    key={item.path}
                    exact={item.exact}
                    path={item.path}
                    component={item.component}
            />
                ))
            }
            </Switch>
        );
    }
}