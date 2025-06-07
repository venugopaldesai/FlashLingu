import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FlashserviceService {

 public emits : any;
  constructor() { 
    this.emits = new EventEmitter();
  }


}
