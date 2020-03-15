import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
 @Input() per:Person = new Person(1,"Zahid",25);
 @Output() PersonCounted = new EventEmitter<number>();
 isCounted:boolean = false;
 constructor() { }

  ngOnInit(): void {
  }

  CountPerson(){
    this.isCounted = true;
    this.PersonCounted.emit(this.per.id)
  }
}
