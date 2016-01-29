import {Component, View, Input} from 'angular2/core';
import {Greeter} from '../services/greeter';

@Component({
  selector: 'hello',
  templateUrl: './views/hello.html'
})

export class Hello {
  constructor(greeter: Greeter) {
    this.message = greeter.say('hello', 'Angular 2');
  }
}