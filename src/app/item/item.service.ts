import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ajoc", role: "Goalkeeper", score:0 },
        { id: 2, name: "Alonzo", role: "Defender", score:0 },
        { id: 3, name: "Amaquin", role: "Defender", score:0 },
        { id: 4, name: "Amoc", role: "Midfielder" , score:0},
        { id: 5, name: "Avila", role: "Midfielder" , score:0},
        { id: 6, name: "Balugo", role: "Midfielder", score:0 },
        { id: 7, name: "Banawan", role: "Midfielder" , score:0},
        { id: 8, name: "Bargaso", role: "Midfielder" , score:0},
        { id: 9, name: "Barlas", role: "Forward" , score:0},
        { id: 10, name: "Belciña", role: "Forward" , score:0},
        { id: 11, name: "Bersaluna", role: "Forward" , score:0},
        { id: 12, name: "Binondo", role: "Midfielder" , score:0},
        { id: 13, name: "Burce", role: "Goalkeeper" , score:0},
        { id: 14, name: "Bustamante", role: "Defender" , score:0},
        { id: 15, name: "But-anon", role: "Defender" , score:0},
        { id: 16, name: "Calbalhao", role: "Defender" , score:0},
        { id: 17, name: "Caballero", role: "Forward" , score:0},
        { id: 18, name: "Cabi-an", role: "Defender" , score:0},
        { id: 19, name: "Cabungag", role: "Defender", score:0 },
        { id: 20, name: "Camay", role: "Midfielder", score:0 },
        { id: 21, name: "Catalvas", role: "Midfielder" , score:0},
        { id: 22, name: "Cauyan", role: "Midfielder" , score:0},
        { id: 23, name: "Cordoto", role: "Defender" , score:0},
        { id: 24, name: "Daganasol", role: "Defender" , score:0},
        { id: 25, name: "Debuayan", role: "Goalkeeper" , score:0},
        { id: 26, name: "Demate", role: "Catcher" , score:0},
        { id: 27, name: "Destacamento", role: "Forwarder" , score:0},
        { id: 28, name: "Devilleres", role: "Goalkeeper" , score:0},
        { id: 29, name: "Diansin", role: "Catcher" , score:0},
        { id: 30, name: "Dinglasa", role: "Midfielder" , score:0}

    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }

    
   
}
