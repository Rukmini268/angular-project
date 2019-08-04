import { Injectable } from '@angular/core';
import { runClass } from './run';
import { RUNS } from './run-data';


@Injectable()
export class PlayerService {
  private stocks:runClass[]=RUNS;
  getveg():runClass[]{
   return this.stocks; 
  }
  addStock(stock:string,veg:string,day:number):void{
    var newstock=
      {stock:'',veg:'',day: };
    
    this.stocks.push(newstock);
  }
  constructor() { }

}
