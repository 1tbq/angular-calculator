import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProjectsComponent } from './components/projects/projects.component';
import { IncomeComponent } from './components/money-tracker/income.component';
import { ExpensesComponent } from './components/money-tracker/expenses.component';

import { CalculatorComponent } from './components/calculator/calculator.component';

const appRoutes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: 'home', component: LandingPageComponent },
  { path: 'projects', component: ProjectsComponent },


  //calculator
  { path: 'calculator', component: CalculatorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


