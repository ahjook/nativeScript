import { Component, OnInit ,Input} from "@angular/core";
import { Type } from "./item";
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    @Input() Type: Type

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        if (this.Type==Type.soccer){
            this.items = this.itemService.getSoccer()
        }else{
            this.items = this.itemService.getArtist()
        }
    }

    info(datapass){
        // declare new object which is the item
        const item = {
            id:this.items.length + 1,
            name:datapass.name,
            role:datapass.role
        } as Item; 
        this.items.push(item);
    }

}
