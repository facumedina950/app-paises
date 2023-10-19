import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  {path:'navBar', component:NavBarComponent},
  {path:'formulario', component:FormularioComponent},
  {path:'home', component:HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
