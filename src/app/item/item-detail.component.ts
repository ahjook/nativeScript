import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Button } from "tns-core-modules/ui/button";
import { EventData } from "tns-core-modules/ui/page/page";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    @Output() SendInfo = new EventEmitter();
    item: Item;
    button = true;
    edit = true


    constructor(private itemService: ItemService,private route: ActivatedRoute) {

     }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }

    onTap() {
        this.item.score += 1;
        this.button = false;
       

    }
    remove() {
        this.item.score -= 1;
        if (this.item.score === 0) {
            this.button = true;
        }
    }
    update(item) {
        this.edit = true
        this.item.name = item.name
        this.item.role = item.role
    }
}

