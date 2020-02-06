import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'ns-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  
  Artists = "Artists"

  constructor() { }

  ngOnInit() {
  }

}
