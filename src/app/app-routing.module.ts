import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { AdminAuthorizationComponent } from './components/admin-authorization/admin-authorization.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationalProgramsComponent } from './components/educational-programs/educational-programs.component';
import { GaleryComponent } from './components/galery/galery.component';
import { InfoComponent } from './components/info/info.component';
import { MapComponent } from './components/map/map.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'admin-authorization', component: AdminAuthorizationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'educational-programs', component: EducationalProgramsComponent },
  { path: 'galery', component: GaleryComponent },
  { path: 'info', component: InfoComponent },
  { path: 'map', component: MapComponent },
  { path: 'news', component: NewsComponent },

  { path: '**', component: MainPageComponent }
];

declarations: [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
