import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsTableComponent } from './components/cats-table/cats-table.component';

const routes: Routes = [
  {path: 'home', component: CatsTableComponent},
  {path: '',  pathMatch: 'full',redirectTo: '/home'},
  {path: '**', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
