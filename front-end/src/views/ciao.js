import {Component, View, Input} from 'angular2/core';
import {Greeter} from '../services/greeter';

@Component({
  selector: 'ciao',
  template: '<p>{{ message }}</p>'
})

export class Ciao {
  constructor(greeter: Greeter, routeParams: RouteParams) {
    this.message = greeter.say('ciao', routeParams.get('name'));
  }
}