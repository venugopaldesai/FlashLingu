import { Component,Input,OnChanges,OnInit, SimpleChanges ,inject} from '@angular/core';
import { DictserviceService } from 'src/app/services/dictservice.service';

@Component({
  selector: 'app-wordpopup',
  templateUrl: './wordpopup.component.html',
  styleUrls: ['./wordpopup.component.css']
})
export class WordpopupComponent implements OnInit , OnChanges{

  @Input() word:any;
  wordData:any;
  constructor() { }
  dict=inject(DictserviceService);
  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges){
    
    // this.dict.getWord(changes['word'].currentValue).subscribe((data) => {
    //   this.wordData=data;
    // }
    //);
  }
}
