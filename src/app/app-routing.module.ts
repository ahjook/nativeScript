import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { Activity4Component } from './activity4/activity4.component';
import { ArtistsComponent } from './artists/artists.component';
import { SockerComponent } from './socker/socker.component';



const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "grid", component: GridLayoutComponent },
    { path: "form", component: Activity4Component },
    { path: "socker", component: SockerComponent },
    { path: "artist", component: ArtistsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
