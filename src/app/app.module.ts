import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


import { WordsData } from './Words/Words-data';
//import {AppData} from './app.data';
import { HttpClientModule } from '@angular/common/http';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AuthModule, getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FeatureModule } from './feature/feature.module';
import { AuthModule1 } from './auth/auth.module';
@NgModule({
  declarations: [
    AppComponent,
  NavbarComponent
   
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FeatureModule,
    AuthModule1,
    HttpClientModule,
    //InMemoryWebApiModule.forRoot(AppData,{delay:1000,apiBase:'localapi'})
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"flashlingua-c522f","appId":"1:137326500942:web:c4c2fc40b45404cc29371f","databaseURL":"https://flashlingua-c522f-default-rtdb.firebaseio.com","storageBucket":"flashlingua-c522f.firebasestorage.app","apiKey":"AIzaSyAK9xdPGH4AAuZJTJNhABHneTMDZEI8nIY","authDomain":"flashlingua-c522f.firebaseapp.com","messagingSenderId":"137326500942"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
