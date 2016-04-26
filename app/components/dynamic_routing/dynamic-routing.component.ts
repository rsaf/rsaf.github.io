
import {Component, provide} from 'angular2/core';

@Component({
  selector:'dynamic-routing',
  templateUrl:'app/components/dynamic_routing/dynamic-routing.component.html'
})

export class DynamicRouting{
  constructor(){
      console.log("DynamicRouting is up and running");
   }
 }
