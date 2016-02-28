import {Component, View,Input} from 'angular2/core';
import {RouterLink,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'navigator',
})


@View({
	templateUrl: 'layout/navigator/navigator.html',
  directives: [RouterLink,ROUTER_DIRECTIVES]
})
export class Navigator {
@Input() navigations: any[];
    constructor(link:RouterLink) {
    }
}
