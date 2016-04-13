import {Component, Input} from 'angular2/core';
import {RouterLink,ROUTER_DIRECTIVES} from 'angular2/router';

declare var jQuery:any;

@Component({
    selector: 'navigator',
    templateUrl:'app/layout_components/navigator/navigator.html',
    directives: [RouterLink, ROUTER_DIRECTIVES],
    styleUrls:['app/layout_components/navigator/resources/css/style.css']
})

export class Navigator {
   constructor() {

      }
}
