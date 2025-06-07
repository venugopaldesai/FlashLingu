import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }
  loadingsubject:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
 loading$=this.loadingsubject.asObservable();


 showloading(value:boolean){
  this.loadingsubject.next(value);
  
 }
}
