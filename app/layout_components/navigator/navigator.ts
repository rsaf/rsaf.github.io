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
   navigations:any[];
   constructor() {
      // this.navigations = [
      //     {link:['/Admin','Home'], title:'首页', icon:'dashboard'},
      //     {link:['/Admin','Monitor'], title:'实时监控', icon:'videocam'},
      //     {link:['/Admin','Gps'], title:'GPS ', icon:'my_location'},
      //     {link:['/Admin','Settings'], title:'设置 ', icon:'settings'}
      //   ]

      }
}
