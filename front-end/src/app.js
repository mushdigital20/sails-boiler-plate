import {Component, View, Input} from 'angular2/core';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {Greeter} from './services/greeter';

//Views
import {Hello} from './views/hello';
//import {Ciao} from './views/ciao';

@Component({
  selector: 'ng-app',
  viewProviders: [Greeter]
})

@View({
  directives: [ROUTER_DIRECTIVES],
  template: '<router-outlet></router-outlet>'
})

@RouteConfig([
  { path: '/', component: Hello, as: 'Hello' },
  //{ path: '/ciao/:name', component: Ciao, as: 'Ciao' }
])

export class App {
}
