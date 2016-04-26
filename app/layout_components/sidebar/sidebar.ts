import {Component, Input} from 'angular2/core';
import {RouterLink,ROUTER_DIRECTIVES} from 'angular2/router';

declare var jQuery:any;

@Component({
    selector: 'sidebar',
    templateUrl:'app/layout_components/sidebar/sidebar.html',
    directives: [RouterLink]
})

export class Sidebar {
   constructor() {
      console.log('sidebar up and running------->>>>>------')
      }
}
