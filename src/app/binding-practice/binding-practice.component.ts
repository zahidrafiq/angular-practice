import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  templateUrl: './binding-practice.component.html',
  styleUrls: ['./binding-practice.component.css']
})
export class BindingPracticeComponent implements OnInit {

  constructor() { }
  login1:String = "zahid";
  login2:string ="zain";
  login3:string = "abc";
  ngOnInit(): void {
  }
  setText(e)
  {
    this.login1 = e.target.value;
    // alert(e.target.value);
  }
  ShowText(inputField)
  {
    alert(inputField.value);
  }
}
