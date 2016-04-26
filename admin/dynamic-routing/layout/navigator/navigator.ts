import {Component,Input} from 'angular2/core';
import {RouterLink,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'demo-nav',
    templateUrl: 'layout/navigator/navigator.html',
    directives: [RouterLink,ROUTER_DIRECTIVES]
})

export class DemoNav{
@Input() navigations: any[];
    constructor(link:RouterLink) {
    }
}
