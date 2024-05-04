import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { FooterComponent } from './components/UI/footer/footer.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ]
})
export class AdminPanelModule { }
