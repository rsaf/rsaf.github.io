import {Component, Input} from 'angular2/core';

declare var jQuery:any;

@Component({
    selector: 'my-navigator',
    templateUrl:'app/layout_components/navigator/navigator.html'
})

export class MyNavigator {
   constructor() {
      console.log('navigator up and running------->>>>>------')
      }
}
