import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item';
import {ItemService} from '../item/item.service'
@Component({
  selector: 'ns-socker',
  templateUrl: './socker.component.html',
  styleUrls: ['./socker.component.css']
})
export class SockerComponent implements OnInit {

  items: Array<Item>;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

//   info(datapass){
//     this.items.push(datapass);
// }

}
