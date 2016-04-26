import {Component,View} from 'angular2/core'
import {CONFIG} from '../../admin.config'


@Component({
	    selector: 'admin-order',
})

@View({
  templateUrl: 'components/order/order.html'
})
export class Order{
  test:string;
  constructor(){
    this.test = 'order';
  }
}
