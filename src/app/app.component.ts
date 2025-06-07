import { Component,inject } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { bgimages } from 'C:/Users/venugopal.desai/Desktop/FlashLingua/FlashLingua/src/assets/bg.model';
import { initializeApp } from "firebase/app";
import{getDatabase,ref,push} from 'firebase/database';
import { user } from '@angular/fire/auth';
import { UserResolverService } from './services/userresolver.service';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userservice=inject(UserResolverService);
  User$=this.userservice.user$;
  title = 'FlashLingua';
  bgimage = bgimages;
  loadingservice=inject(LoadingService);
  background = bgimages[Math.floor(Math.random() * bgimages.length)].url;

  ngOnInit() {
    console.log(this.background);
    this.loadingservice.loading$.subscribe((data) => {
      console.log(data);
      if (data) {
        document.getElementById('loading')?.style.setProperty('display', 'flex');
      }
      else {
        document.getElementById('loading')?.style.setProperty('display', 'none');
      }
    })
  }
  reload(){
    window.location.reload();
  }
}
