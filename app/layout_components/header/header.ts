import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

declare var jQuery:any;

@Component({
    selector: 'my-header',
    templateUrl: 'app/layout_components/header/header.html',
    directives:[CORE_DIRECTIVES]
})

export class MyHeader {
}
