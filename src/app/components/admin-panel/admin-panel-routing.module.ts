import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DeletePostComponent } from './components/delete-post/delete-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { authActivateGuard } from '../../guards/auth-activate.guard';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent,
    canActivate: [authActivateGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: '',  redirectTo: 'home', pathMatch: 'full'},
      { path: 'create-post', component: CreatePostComponent },
      { path: 'delete-post', component: DeletePostComponent },
      { path: 'edit-post', component: EditPostComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
