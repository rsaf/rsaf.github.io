System.register(['angular2/core', 'angular2/common', 'angular2/router', './dynamic_routing/dynamic-routing.component', './dynamic_navigation/dynamic-navigation.component', '../layout_components/header/header', '../layout_components/navigator/navigator', '../layout_components/sidebar/sidebar', '../layout_components/footer/footer'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, dynamic_routing_component_1, dynamic_navigation_component_1, header_1, navigator_1, sidebar_1, footer_1;
    var MainComponent;
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
            function (dynamic_routing_component_1_1) {
                dynamic_routing_component_1 = dynamic_routing_component_1_1;
            },
            function (dynamic_navigation_component_1_1) {
                dynamic_navigation_component_1 = dynamic_navigation_component_1_1;
            },
            function (header_1_1) {
                header_1 = header_1_1;
            },
            function (navigator_1_1) {
                navigator_1 = navigator_1_1;
            },
            function (sidebar_1_1) {
                sidebar_1 = sidebar_1_1;
            },
            function (footer_1_1) {
                footer_1 = footer_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent() {
                    console.log("MainComponent is up and running");
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        templateUrl: 'app/components/main.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, header_1.MyHeader, navigator_1.MyNavigator, footer_1.MyFooter, sidebar_1.MySidebar, common_1.CORE_DIRECTIVES, router_1.RouterLink],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: dynamic_routing_component_1.DynamicRouting, name: 'DynamicRouting' },
                        { path: '/dynamic-navigation', component: dynamic_navigation_component_1.DynamicNavigation, name: 'DynamicNavigation' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
