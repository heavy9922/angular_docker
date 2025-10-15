import { Routes } from '@angular/router';
import { BasicComponent } from './basic.component';
import { IntermediateComponent } from './intermediate.component';
import { AdvancedComponent } from './advanced.component';
import { SpecializedComponent } from './specialized.component';

export const routes: Routes = [
  { path: '', redirectTo: '/basicos', pathMatch: 'full' },
  { path: 'basicos', component: BasicComponent },
  { path: 'intermedios', component: IntermediateComponent },
  { path: 'avanzados', component: AdvancedComponent },
  { path: 'especializados', component: SpecializedComponent }
];
