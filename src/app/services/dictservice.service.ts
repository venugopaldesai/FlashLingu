import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of, switchMap, tap } from 'rxjs';
import { Word } from '../Words/Words';
import { initializeApp } from "firebase/app";
import{getDatabase,ref,push,onValue, remove,query,orderByChild,equalTo, update, set} from 'firebase/database';
import { LoadingService } from './loading.service';
  import { UserResolverService } from './userresolver.service';
const firebaseConfig = {
  // apiKey: "AIzaSyAK9xdPGH4AAuZJTJNhABHneTMDZEI8nIY",
  // authDomain: "flashlingua-c522f.firebaseapp.com",
  // projectId: "flashlingua-c522f",
  // storageBucket: "flashlingua-c522f.firebasestorage.app",
  // messagingSenderId: "137326500942",
  // appId: "1:137326500942:web:c4c2fc40b45404cc29371f"
   databaseURL: "https://flashlingua-c522f-default-rtdb.firebaseio.com/"
}; 
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const reference=ref(database,"words");

console.log(database);
@Injectable({
  providedIn: 'root'
})
export class DictserviceService {
 http=inject(HttpClient);
  
  

  constructor(private userservice:UserResolverService,
    private loadingservice:LoadingService
  ) {}
 //this.http.get<Word[]>('localapi/Wordss');
 WordSubject=new BehaviorSubject<undefined|any>(undefined);
 Wordobservable$=this.WordSubject.asObservable();


 selectword(word:any){
  this.WordSubject.next(word);
 }
//  getWord(id:string): Observable<Word> {
//   return this.http.get<Word>(`localapi/Wordss/${id}`);
//  }
 getmeaning(word:string){
  return this.http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).pipe(
    switchMap((data: any) => {
      return this.http.get(`https://www.stands4.com/services/v2/syno.php?uid=13280&tokenid=0CPzX30JWNCJ1WHG&word=${word}&format=json`).pipe(
        map((synonyms: any) => {
          const syno=[];
          console.log(synonyms);
        syno.push( synonyms.result.map((syno1:any)=>{
           return syno1.synonyms;
           }))
        
          return [data[0], ...[...syno]];
        }
      ))
        }))
      
      
    }
    
  //return this.http.get(`https://www.stands4.com/services/v2/syno.php?uid=13280&tokenid=0CPzX30JWNCJ1WHG&word=${word}&format=json`);
 
  updatelevel(level:String,  word:any, user:any){
  const q=query(reference,orderByChild('user'),equalTo(user));
onValue(q,snapshot=>{
  if(snapshot.exists()){

    const data=snapshot.val();
    const keys=Object.keys(data);
    console.log(keys);
    keys.forEach((key:any)=>{
      if(data[key].word==word.word){
        console.log('word already exists');
        update(ref(database,`words/${key}`),{
          level:level
        });
      }
      
    })
  }})

  }
 pushword(word: any,user: any){

  push(reference,{
    word:word,
    user:user,
    level:'Add'
  });
 
setTimeout(() => {
  this.loadingservice.showloading(false);
},100);

  
 }
 getwords(user:any):Observable<any>{
  const q:any=query(reference,orderByChild('user'),equalTo(user));

  return new Observable(observer => {
    onValue(q, snapshot => {
      observer.next(Object.values(snapshot.val()));
      observer.complete();
    });
  });
}

}


