import {Component,View, provide} from 'angular2/core'
import {ROUTER_DIRECTIVES, RouteConfig, RouterLink} from 'angular2/router';
import {Navigator} from './layout/navigator/navigator';
import {Home} from './components/home/home.component';
import {Order} from './components/order/order.component';
import {DynamicRouteConfigurator} from './services/router.service';

@Component({
selector:'admin',
providers: [
  RouterLink,
  DynamicRouteConfigurator
]
})

@RouteConfig([
])

@View({
   templateUrl:'admin.html',
   directives: [ROUTER_DIRECTIVES, Header, Navigator, CORE_DIRECTIVES]
})

export class Admin{
  appRoutes: any[];
constructor(private dynamicRouteConfigurator: DynamicRouteConfigurator) {
  this.appRoutes = this.getAppRoutes();
    let routes = [ { path: '/', component: Home, name: 'Dashboard' },
                { path: '/order', component: Order, name: 'Order' }];
    var i = -1;
    while(++i < routes.length){
       this.dynamicRouteConfigurator.addRoute(this.constructor, routes[i]);
    }
    this.appRoutes = this.getAppRoutes();
}

private getAppRoutes(): any[] {
    return this.dynamicRouteConfigurator
    .getRoutes(this.constructor).configs.map(route => {
      return { link: [`/${route.name}`], title: route.name,icon:'mdi-action-dashboard' };
    });
}

}
