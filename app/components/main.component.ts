
import {Component ,Inject, Injectable, provide} from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common';
import {HTTP_PROVIDERS } from 'angular2/http';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig,Location, LocationStrategy,AsyncRoute, HashLocationStrategy, Route, Router, RouterLink} from 'angular2/router';
import {DynamicRouting} from './dynamic_routing/dynamic-routing.component';
import {DynamicNavigation} from './dynamic_navigation/dynamic-navigation.component';
import {Header} from '../layout_components/header/header';
import {Navigator} from '../layout_components/navigator/navigator';
import {Sidebar} from '../layout_components/sidebar/sidebar';
import {Footer} from '../layout_components/footer/footer';


declare var jQuery:any;

@Component({
  selector:'main',
  template: '<router-outlet></router-outlet>',
  providers: [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
  ],
  directives: [ROUTER_DIRECTIVES,Header,Navigator,Footer,Sidebar,CORE_DIRECTIVES, RouterLink]
})

@RouteConfig([
  {path:'/', component:DynamicRouting, name:'DynamicRouting'},
  {path:'/dynamic-navigation', component:DynamicNavigation, name:'DynamicNavigation'}
])

export class MainComponent{
  constructor(){
  console.log("MainComponent is up and running");
  }
}
