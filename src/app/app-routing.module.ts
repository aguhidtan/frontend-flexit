import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceshipComponent } from './components/spaceships/spaceship.component';

const routes: Routes = [
  {path: 'spaceships', component: SpaceshipComponent},
  {path: '**', redirectTo: 'spaceships', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
