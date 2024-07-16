import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { AlertComponent } from './alert/alert.component';
import { GridComponent } from './grid/grid.component';
import { SignupComponent } from './signup/signup.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'alert',
    component: AlertComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'phones',
    component: PhoneComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
