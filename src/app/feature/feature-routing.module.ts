import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavefeatureComponent } from './savefeature/savefeature.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
   {
      path:'cards',
      component:SavefeatureComponent,
      title:'Cards'
    },
    {
      path: 'home',
      component: FlashcardComponent,
      title:'Home'
    },
    {
      path:'about',
      component:AboutComponent,
      title:'About'
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
