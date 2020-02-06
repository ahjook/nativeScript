import { Injectable } from "@angular/core";

import { Item } from "./item";
import { Type } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ajoc", role: "Goalkeeper", score:0,  type:Type.soccer},
        { id: 2, name: "Alonzo", role: "Defender", score:0,  type:Type.artist},
        { id: 3, name: "Amaquin", role: "Defender",score:0,  type:Type.soccer},
        { id: 4, name: "Amoc", role: "Forward" ,score:0,  type:Type.artist},
        { id: 5, name: "Avila", role: "Midfielder" ,score:0,  type:Type.soccer},
        { id: 6, name: "Balugo", role: "Defender",score:0,  type:Type.artist},
        { id: 7, name: "Banawan", role: "Midfielder" ,score:0,  type:Type.soccer},
        { id: 8, name: "Bargaso", role: "Midfielder" ,score:0,  type:Type.artist},
        { id: 9, name: "Barlas", role: "Forward" ,score:0,  type:Type.soccer},
        { id: 10, name: "Belciña", role: "Forward" ,score:0,  type:Type.artist},
        { id: 11, name: "Bersaluna", role: "Forward" ,score:0,  type:Type.soccer},
        { id: 12, name: "Binondo", role: "Midfielder" ,score:0,  type:Type.artist},
        { id: 14, name: "Bustamante", role: "Defender" , score:0,  type:Type.soccer},
        { id: 15, name: "But-anon", role: "Defender" , score:0,  type:Type.artist},
        { id: 16, name: "Calbalhao", role: "Defender" ,score:0,  type:Type.soccer},
        { id: 17, name: "Caballero", role: "Forward" , score:0,  type:Type.artist},
        { id: 18, name: "Cabi-an", role: "Defender" ,score:0,  type:Type.soccer},
        { id: 19, name: "Cabungag", role: "Defender", score:0,  type:Type.artist},
        { id: 20, name: "Camay", role: "Midfielder",score:0,  type:Type.soccer},
        { id: 21, name: "Catalvas", role: "Midfielder" ,score:0,  type:Type.artist},
        { id: 22, name: "Cauyan", role: "Midfielder" ,score:0, type:Type.soccer},
        { id: 23, name: "Cordoto", role: "Defender" , score:0, type:Type.artist},
        { id: 24, name: "Daganasol", role: "Defender" , score:0, type:Type.soccer},
        { id: 25, name: "Debuayan", role: "Goalkeeper" , score:0, type:Type.artist},
        { id: 26, name: "Demate", role: "Catcher" , score:0, type:Type.soccer},
        { id: 27, name: "Destacamento", role: "Forwarder" ,score:0, type:Type.artist},
        { id: 28, name: "Devilleres", role: "Goalkeeper" ,score:0,  type:Type.soccer},
        { id: 29, name: "Diansin", role: "Catcher" , score:0, type:Type.artist},
        { id: 30, name: "Dinglasa", role: "Midfielder" , score:0, type:Type.soccer},
        { id: 31, name: "Duran", role: "Midfielder" , score:0, type:Type.artist},
        { id: 32, name: "Erim", role: "Defender" , score:0, type:Type.soccer},
        { id: 33, name: "Eulin", role: "Midfielder" , score:0, type:Type.artist},
        { id: 34, name: "Gabutan", role: "Midfielder" , score:0, type:Type.soccer},
        { id: 35, name: "Gamboa", role: "Midfielder" , score:0, type:Type.artist},
        { id: 36, name: "Garrido", role: "Goalkeeper" , score:0, type:Type.soccer},
        { id: 37, name: "Gigante", role: "Midfielder" , score:0, type:Type.artist},
        { id: 30, name: "Gravador", role: "Forward" , score:0, type:Type.soccer},
        { id: 39, name: "Herrera", role: "Midfielder" , score:0, type:Type.artist},
        { id: 40, name: "Iran", role: "Catcher" , score:0, type:Type.soccer},


    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }

    getArtist() {
        return this.items.filter((item) => item.type === Type.artist);
    }

    getSoccer() {
        return this.items.filter((item) => item.type === Type.soccer);
    }
    


    
   
}
