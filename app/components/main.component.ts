
import {Component , provide} from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig,Location, LocationStrategy,AsyncRoute, HashLocationStrategy, Route, Router, RouterLink} from 'angular2/router';
import {DynamicRouting} from './dynamic_routing/dynamic-routing.component';
import {DynamicNavigation} from './dynamic_navigation/dynamic-navigation.component';
import {MyHeader} from '../layout_components/header/header';
import {MyNavigator} from '../layout_components/navigator/navigator';
import {MySidebar} from '../layout_components/sidebar/sidebar';
import {MyFooter} from '../layout_components/footer/footer';

declare var jQuery:any;

@Component({
  selector:'main',
  templateUrl: 'app/components/main.component.html',
  directives: [ROUTER_DIRECTIVES,MyHeader, MyNavigator,MyFooter,MySidebar,CORE_DIRECTIVES, RouterLink],
  providers: [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
  ]
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
