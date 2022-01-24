import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./pages/main/main.component";
import { PartnershipCompanyComponent } from './pages/partnership-company/partnership-company.component';
import { PartnershipVolunteerComponent } from './pages/partnership-volunteer/partnership-volunteer.component';
import { PartnershipWorkerComponent } from './pages/partnership-worker/partnership-worker.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'partnership/company',
    component: PartnershipCompanyComponent
  },
  {
    path: 'partnership/volunteer',
    component: PartnershipVolunteerComponent
  },
  {
    path: 'partnership/worker',
    component: PartnershipWorkerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
