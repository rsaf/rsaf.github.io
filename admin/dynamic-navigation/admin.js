System.register(['angular2/core', 'angular2/common', 'angular2/router', '../layout/navigator/navigator', '../services/router'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, navigator_1, router_2;
    var Admin;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navigator_1_1) {
                navigator_1 = navigator_1_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            }],
        execute: function() {
            Admin = (function () {
                function Admin(dynamicRouteConfigurator) {
                    this.dynamicRouteConfigurator = dynamicRouteConfigurator;
                    // the routes definition can be saved in the data base and loaded before the app boot.
                    var routes = [{ "url": "/admin/component1.component",
                            "path": "/component1",
                            "name": "Component1Name",
                            "component": "Component1"
                        },
                        { "url": "/admin/component2.component",
                            "path": "/component2",
                            "name": "Component2Name",
                            "component": "Component2"
                        }];
                    this.dynamicRouteConfigurator.dynamicLoader(routes, this);
                }
                Admin = __decorate([
                    core_1.Component({
                        selector: 'admin',
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                            router_1.RouterLink,
                            router_2.DynamicRouteConfigurator
                        ]
                    }),
                    router_1.RouteConfig([]),
                    core_1.View({
                        templateUrl: 'components/admin.html',
                        directives: [router_1.ROUTER_DIRECTIVES, navigator_1.Navigator, common_1.CORE_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_2.DynamicRouteConfigurator !== 'undefined' && router_2.DynamicRouteConfigurator) === 'function' && _a) || Object])
                ], Admin);
                return Admin;
                var _a;
            }());
            exports_1("Admin", Admin);
        }
    }
});
