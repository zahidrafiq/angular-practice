import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPractice';
  SizeHandler(e)
  {
    alert(e.msg + ":" + e.size);
  }
}
