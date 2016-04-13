import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

declare var jQuery:any;

@Component({
    selector: 'header',
    templateUrl: 'app/layout_components/header/header.html',
    directives:[CORE_DIRECTIVES],
    styleUrls:['app/layout_components/header/resources/css/style.css']
})

export class Header {

    constructor() {
        console.log("header up and running");

    }

}
