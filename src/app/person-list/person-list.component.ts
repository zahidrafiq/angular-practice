import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  pList:Person[] = [];
  constructor() { }

  ngOnInit(): void {
    this.pList.push(new Person(1,"Zahid",25));
    this.pList.push(new Person(1,"Zain",22));
    this.pList.push(new Person(1,"Suleman",19));
  }

}
