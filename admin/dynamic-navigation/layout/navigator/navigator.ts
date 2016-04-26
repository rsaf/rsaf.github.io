import {Component,Input} from 'angular2/core';
import {RouterLink,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'demo-navigator',
    templateUrl: 'layout/navigator/navigator.html',
    directives: [RouterLink,ROUTER_DIRECTIVES]
})

export class DemoNavigator {
@Input() navigations: any[];
    constructor(link:RouterLink) {
    }
}
