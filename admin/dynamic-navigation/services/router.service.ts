/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts"/>

      import {Injectable, Type,ViewEncapsulation} from 'angular2/core'
      import {RouteRegistry,AsyncRoute} from 'angular2/router'
      import {Admin} from '../admin';


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

      getRoutes(component: Type) {
          return Reflect.getMetadata('annotations', component)
              .filter(a => {
                return a.configs!=undefined;
              }).pop();
      }
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
        Reflect.defineMetadata('annotations', annotations, Admin);
      }

      dynamicLoader(routes:any[],target){
        var _this = this;
        for (let i = 0; i < routes.length; i++) {
          if (routes[i].type == 'route') {
            this.setRoutes(routes[i],target)
          }else if(routes[i].type == 'none'){
            this.setRoutes(routes[i], target)
          }

        }
      }

       setRoutes(route,target){
          var _this = this;
           this.addRoute(target.constructor,
                       new AsyncRoute({
                         path: route.path
                         ,loader:() =>   System.import(route.url).then(function(resp){ target.appRoutes = _this.getAppRoutes(target); return resp[route.component]; })
                         ,name:route.name
            }));
        }
          getAppRoutes(target): any[] {
              return this.getRoutes(target.constructor).configs.map(route => {
                    return { link: [`/${route.name}`], title: route.name,icon:'mdi-action-dashboard' };

              });
          }
    }
