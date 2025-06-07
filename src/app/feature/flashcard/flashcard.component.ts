import { Component, OnInit } from '@angular/core';
import { FlashserviceService } from './flashservice.service';
import { DictserviceService } from 'src/app/services/dictservice.service';
import jsPDF from 'jspdf';
import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '@angular/fire/auth';
import { UserResolverService } from 'src/app/services/userresolver.service';
@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  user:User = this.activatedRoute.snapshot.data['user'];
  constructor(private flashservice:FlashserviceService,
    private dict:DictserviceService,
    private loadingservice:LoadingService,
    private activatedRoute:ActivatedRoute,
    private userresolver:UserResolverService

  ) { 
    
  }
word:any='';
words:any = [];
synonyms:any='';
antonyms:any='';
meaning:any='';
text:any='';
mainCard:any;
  savestatus:boolean = false;
ngOnInit(): void {
  
  this.dict.getwords(this.user.email).subscribe((data: any) => {
    this.words=data;
    console.log(this.words);

  }
  )}

  Create(){
    this.loadingservice.showloading(true);

    this.dict.getmeaning(this.word).subscribe((data: any) => {
       {
         this.mainCard = document.getElementById('maincard');
        console.log(data);
       
          if (this.mainCard) {
            this.mainCard.innerHTML = data[0].word+`&nbsp &nbsp`+data[0].phonetic+`<br><br>`+data[0].meanings.map(
              (a: { partOfSpeech: any; definitions: any})=>`<strong>${a.partOfSpeech} </strong>`
            + `<br><br>`+a.definitions.map(
              (b: { definition: any; })=>b.definition
            ).join('<br><br>')).join('<br><br>');
          }
          this.savestatus = true;
          this.loadingservice.showloading(false);
          // this.text=data[0].word+`&nbsp &nbsp`+data[0].phonetic+`<br><br>`+data[0].meanings.map(
          //     (a: { partOfSpeech: any; definitions: any})=>`${a.partOfSpeech} `
          //   + `<br>`+a.definitions.map(
          //     (b: { definition: any; })=>b.definition
          //   ).join('<br>')).join('<br>');
        
       }
    });
  }
  downloadCardAsPDF(): void {
    this.loadingservice.showloading(true);
     if(this.words.map((a: { word: any; })=>a.word).includes(this.word)){
      // this.dict.pushword(this.word,'user');
      console.log('word already exists');
       this.loadingservice.showloading(false);
    }
    else{
      if(this.word !== ''|| this.word !== null){
      this.dict.pushword(this.word,this.user.email);
      console.log('word pushed');
       
    }
  }
    
   
}}
