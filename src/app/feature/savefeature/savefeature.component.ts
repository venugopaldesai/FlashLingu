import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DictserviceService } from 'src/app/services/dictservice.service';
import { LoadingService } from 'src/app/services/loading.service';
import { UserResolverService } from 'src/app/services/userresolver.service';
import { Word } from 'src/app/Words/Words';

@Component({
  selector: 'app-savefeature',
  templateUrl: './savefeature.component.html',
  styleUrls: ['./savefeature.component.css']
})
export class SavefeatureComponent{

  user:any;
  Words$:Observable<any> | undefined;
  Word$:Observable<any> | undefined;
  constructor(private dict:DictserviceService,
    private userservice:UserResolverService,
    // private flashservice:FlashserviceService,
    private loadingservice:LoadingService
  ) {
    this.user=this.userservice.User$;
    this.user.subscribe((data:any)=>{
      this.user=data.email;
      this.Words$=this.dict.getwords(this.user);
      this.Word$=this.dict.Wordobservable$;
    })
   }





ngOnInit(){
  
  this.dict.getwords(this.user).subscribe(data=>{
    console.log(data);

  })
}

onword(word:any){
this.loadingservice.showloading(true);
this.dict.selectword(word);
console.log(word);
document.getElementById('Modeldiv')?.style.setProperty('display','block');
this.dict.getmeaning(word.word).subscribe((data: any) => {
  {
   const mainCard = document.getElementById('maincard');
   console.log(data);
  
     if (mainCard) {
       mainCard.innerHTML = data[0].word+`&nbsp &nbsp`+data[0].phonetic+`<br><br>`+data[0].meanings.map(
         (a: { partOfSpeech: any; definitions: any})=>`<strong>${a.partOfSpeech} </strong>`
       + `<br><br>`+a.definitions.map(
         (b: { definition: any; })=>b.definition
       ).join('<br><br>')).join('<br><br>');
     }
     
      this.loadingservice.showloading(false);
     // this.text=data[0].word+`&nbsp &nbsp`+data[0].phonetic+`<br><br>`+data[0].meanings.map(
     //     (a: { partOfSpeech: any; definitions: any})=>`${a.partOfSpeech} `
     //   + `<br>`+a.definitions.map(
     //     (b: { definition: any; })=>b.definition
     //   ).join('<br>')).join('<br>');
   
  }
});
}
checkbackground(word:any){
if(word.level=='Add'){
  return 'red';
}
else if(word.level=='Learn'){
  return 'yellow';

}
else{
  return 'green';
}
}
async updatelevel(level:string,word:any){
  await this.dict.updatelevel(level,word,this.user);
  this.Words$=this.dict.getwords(this.user);
}
close(){
  document.getElementById('Modeldiv')?.style.setProperty('display','none');
}
}
