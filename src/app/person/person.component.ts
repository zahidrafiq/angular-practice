import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  per:Person = new Person(1,"Zahid",25);
  constructor() { }

  ngOnInit(): void {
  }

}
