/// <reference path="../../../node_modules/reflect-metadata/reflect-metadata.d.ts"/>
System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var DynamicRouteConfigurator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DynamicRouteConfigurator = (function () {
                function DynamicRouteConfigurator(registry) {
                    this.registry = registry;
                }
                DynamicRouteConfigurator.prototype.addRoute = function (component, route) {
                    var routeConfig = this.getRoutes(component);
                    routeConfig.configs.push(route);
                    this.updateRouteConfig(component, routeConfig);
                    this.registry.config(component, route);
                };
                //find the route config anotation among other annotations
                DynamicRouteConfigurator.prototype.getRoutes = function (component) {
                    return Reflect.getMetadata('annotations', component)
                        .filter(function (a) {
                        return a.configs != undefined;
                    }).pop();
                };
                //find the route configs anotation among  other annotations, and redefine it.
                DynamicRouteConfigurator.prototype.updateRouteConfig = function (component, routeConfig) {
                    var annotations = Reflect.getMetadata('annotations', component);
                    var routeConfigIndex = -1;
                    for (var i = 0; i < annotations.length; i += 1) {
                        if (annotations[i].configs != undefined) {
                            routeConfigIndex = i;
                            break;
                        }
                    }
                    if (routeConfigIndex < 0) {
                        throw new Error('No route metadata attached to the component');
                    }
                    annotations[routeConfigIndex] = routeConfig;
                    Reflect.defineMetadata('annotations', annotations, component);
                };
                DynamicRouteConfigurator.prototype.dynamicLoader = function (routes, target) {
                    for (var i = 0; i < routes.length; i++) {
                        this.setRoutes(routes[i], target);
                    }
                };
                /*
                configure the routes for a target component.
                the loader is function that will be called when the route is being activated.
                And it will load the corresponding module using System.import
                */
                DynamicRouteConfigurator.prototype.setRoutes = function (route, target) {
                    var _this = this;
                    this.addRoute(target.constructor, new router_1.AsyncRoute({
                        path: route.path,
                        loader: function () { return System.import(route.url).then(function (resp) {
                            target.appRoutes = _this.getAppRoutes(target);
                            return resp[route.component];
                        }); },
                        name: route.name
                    }));
                };
                // build the final routes that are used in the navigation.html as routerLink attribute.
                DynamicRouteConfigurator.prototype.getAppRoutes = function (target) {
                    return this.getRoutes(target.constructor).configs.map(function (route) {
                        return { link: [("/" + route.name)], title: route.name };
                    });
                };
                DynamicRouteConfigurator = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.RouteRegistry])
                ], DynamicRouteConfigurator);
                return DynamicRouteConfigurator;
            }());
            exports_1("DynamicRouteConfigurator", DynamicRouteConfigurator);
        }
    }
});
