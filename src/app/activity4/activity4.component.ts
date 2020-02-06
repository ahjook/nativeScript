import { Component, OnInit,Output,Input ,EventEmitter} from '@angular/core';
import { Item } from '../item/item';


@Component({
  selector: 'ns-activity4',
  templateUrl: './activity4.component.html',
  styleUrls: ['./activity4.component.css']
})
export class Activity4Component implements OnInit {
  @Output() SendInfo = new EventEmitter();
  @Input() field1:string;
  @Input() field2:string;
  public score=0;
 

  constructor() { }

  ngOnInit() {}

  onSubmit(){
    console.log(this.field1, this.field2)
    this.SendInfo.emit({name:this.field1, role:this.field2, score:this.score})
    alert("Already added!")
  }

  
}

