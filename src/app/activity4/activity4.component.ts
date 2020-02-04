import { Component, OnInit,Output,Input ,EventEmitter} from '@angular/core';
import { Item } from '../item/item';
import {ItemService} from '../item/item.service'

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
  item:Array<Item>;

  constructor() { }
  // private itemService: ItemService,

  ngOnInit() :void {
    // this.item = this.itemService.getItems();
  }

  onSubmit(){
    console.log(this.field1, this.field2)
    this.SendInfo.emit({id:this.item.length +1, name:this.field1, role:this.field2, score:this.score})
    alert("Successfully Added!")
  }

  
}

