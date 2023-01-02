import { GuidService } from "../services/guid.service";

export class Car {
    public image!:string;
    public manufacturer!:string;
    public model!:string;
    public year!:string;
    public price!:string;
    public sellerPhone!:string;
    public vinCode!:string;
    public mile!:number;
    public id:string = GuidService.new()

    // constructor(manufacturer:any,model:any,year:any,price:any,sellerPhone:any,vinCode:any, mile:any){
    //     this.manufacturer = manufacturer;
    //     this.model = model;
    //     this.year = year;
    //     this.price = price;
    //     this.sellerPhone = sellerPhone;
    //     this.vinCode = vinCode;
    //     this.mile = mile
    // }

}