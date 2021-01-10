import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CityComponent } from './Master/city/city.component';
import { CountryComponent } from './Master/country/country.component';
import { StateComponent } from './Master/state/state.component';

const routes: Routes = [

  { path: '', redirectTo: '/signin', pathMatch: 'full' },

  { path: 'signin', component: LoginComponent },
  {
    path: 'Home', component: HomeComponent,
    children: [
      { path: 'DasBoard', component: DashboardComponent },
      { path: 'City', component: CityComponent },
      { path: 'State', component: StateComponent },
      { path: 'Country', component: CountryComponent }

    ]

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
