import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { WordpopupComponent } from './savefeature/wordpopup/wordpopup.component';
import{ SavefeatureComponent } from './savefeature/savefeature.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
     SavefeatureComponent,
    FlashcardComponent,
    WordpopupComponent,
   WelcomeComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
