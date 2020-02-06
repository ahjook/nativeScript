export interface Item {
    id: number;
    name: string;
    role: string;
    score:number;
    type:string;
}

export enum Type{
    artist = "Artist",
    soccer = "Soccer"
}
