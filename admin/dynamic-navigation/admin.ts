import {Component,View,Inject, Injectable, provide} from 'angular2/core'
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig,Location, LocationStrategy,AsyncRoute, HashLocationStrategy, Route, Router, RouterLink} from 'angular2/router';
import {Navigator} from '../layout/navigator/navigator';
import {DynamicRouteConfigurator} from '../services/router';


@Component({
  selector:'admin',
  providers: [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    RouterLink,
    DynamicRouteConfigurator
  ]
})



@RouteConfig([])

@View({
  templateUrl:'components/admin.html',
  directives: [ROUTER_DIRECTIVES, Navigator, CORE_DIRECTIVES]
})

export class Admin{
    appRoutes: any[];
    constructor(private dynamicRouteConfigurator: DynamicRouteConfigurator) {

      // the routes definition can be saved in the data base and loaded before the app boot.
      var routes = [{"url":"/admin/component1.component",   //the url to laoding the component
                    "path":"/component1",                    // the route path used on the browser to navigate to the component
                    "name":"Component1Name",
                    "component":"Component1"
                  },
                  {"url":"/admin/component2.component",
                                "path":"/component2",
                                "name":"Component2Name",
                                "component":"Component2"
                  }];

       this.dynamicRouteConfigurator.dynamicLoader(routes, this);
    }
}
