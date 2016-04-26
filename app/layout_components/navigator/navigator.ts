import {Component, Input} from 'angular2/core';

declare var jQuery:any;

@Component({
    selector: 'navigator',
    templateUrl:'app/layout_components/navigator/navigator.html'
})

export class Navigator {
   constructor() {
      console.log('navigator up and running------->>>>>------')
      }
}
