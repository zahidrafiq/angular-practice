import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {
  @Input() size:number = 16;
  @Output() SizeLimitReached: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if(this.size > 20)
    {
      this.SizeLimitReached.emit({size:this.size, msg:"Size Increased!"}); 
    }
  }
  
  Inc(){
    this.size = +this.size  + 1; // +this.size is for conversion to number
      if(this.size > 20)
      {
        this.SizeLimitReached.emit({size:this.size, msg:"Size Increased!"}); 
      }
    }

  Dec(){
    this.size = this.size - 1;
    if(this.size < 18)
    {
      this.SizeLimitReached.emit({size:this.size, msg:"Size Decreased!"});
    }
  }
}
