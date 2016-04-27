/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts"/>

import {Injectable, Type,ViewEncapsulation} from 'angular2/core'
import {RouteRegistry,AsyncRoute} from 'angular2/router'


@Injectable()
export class DynamicRouteConfigurator {
  constructor(private registry: RouteRegistry) {

  }

  addRoute(component: Type, route) {
    let routeConfig = this.getRoutes(component);
    routeConfig.configs.push(route);
    this.updateRouteConfig(component, routeConfig);
    this.registry.config(component, route);
  }
  //find the route config anotation among other annotations
  getRoutes(component: Type) {
      return Reflect.getMetadata('annotations', component)
          .filter(a => {
            return a.configs!=undefined;
          }).pop();
  }

  //find the route configs anotation among  other annotations, and redefine it.
  updateRouteConfig(component: Type, routeConfig) {
    let annotations = Reflect.getMetadata('annotations', component);
    let routeConfigIndex = -1;
    for (let i = 0; i < annotations.length; i += 1) {
        if (annotations[i].configs!=undefined) {
            routeConfigIndex = i;
            break;
          }
    }
    if (routeConfigIndex < 0) {
      throw new Error('No route metadata attached to the component');
    }
    annotations[routeConfigIndex] = routeConfig;
    Reflect.defineMetadata('annotations', annotations, component);
  }

  dynamicLoader(routes:any[],target){
    for (let i = 0; i < routes.length; i++) {
        this.setRoutes(routes[i],target);
    }
  }

  /*
  configure the routes for a target component.
  the loader is function that will be called when the route is being activated.
  And it will load the corresponding module using System.import
  */
   setRoutes(route,target){
      var _this = this;
       this.addRoute(target.constructor,
                   new AsyncRoute({
                     path: route.path
                     ,loader:() =>   System.import(route.url).then(function(resp){
                        target.appRoutes = _this.getAppRoutes(target); return resp[route.component];
                       })
                     ,name:route.name
        }));
    }

    // build the final routes that are used in the navigation.html as routerLink attribute.
    getAppRoutes(target): any[] {
        return this.getRoutes(target.constructor).configs.map(route => {
              return {link: [`/${route.name}`], title: route.name};
        });
    }
}
