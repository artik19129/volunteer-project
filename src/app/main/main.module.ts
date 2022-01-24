import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { MainRoutingModule } from "./main-routing.module";
import { PartnershipCompanyComponent } from './pages/partnership-company/partnership-company.component';
import { PartnershipVolunteerComponent } from './pages/partnership-volunteer/partnership-volunteer.component';
import { PartnershipWorkerComponent } from './pages/partnership-worker/partnership-worker.component';



@NgModule({
  declarations: [
    MainComponent,
    PartnershipCompanyComponent,
    PartnershipVolunteerComponent,
    PartnershipWorkerComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
