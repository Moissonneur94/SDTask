import { Component } from '@angular/core';

/**
 * Generated class for the ListTaskComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listTask',
  templateUrl: 'listTask.html'
})
export class ListTaskComponent {

  text: string;

  constructor() {
    console.log('Hello ListTaskComponent Component');
    this.text = 'Hello World';
  }

}
