
import {Component, provide} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouterLink} from 'angular2/router';


@Component({
  selector:'dynamic-navigation',
  templateUrl:'app/components/dynamic_navigation/dynamic-navigation.component.html'
})

export class DynamicNavigation{

    constructor(){
    console.log("DynamicNavitgation is up and running");

    }
 }
