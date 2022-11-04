import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login.guardian.service';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {path: '', component: PersonasComponent, canActivate:[LoginGuardian]},
  {path: 'personas', component: PersonasComponent, canActivate:[LoginGuardian],
    children:[
      {path: 'agregar', component: FormularioComponent},
      {path: ':id', component: FormularioComponent},
    ]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent},

  //{path: 'personas/agregar', component: FormularioComponent},
  //{path: 'personas/:id', component: FormularioComponent},
]

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
