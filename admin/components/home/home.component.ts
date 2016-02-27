import {Component, View} from 'angular2/core'
import {CONFIG} from '../../admin.config'

@Component({
	    selector: 'admin-home',
})
@View({
  templateUrl: 'components/home/home.html'
})
export class Home{
  test:string;
  constructor(){

  }
}
