import { Routes } from '@angular/router';
import { BasicComponent } from './basic.component';
import { IntermediateComponent } from './intermediate.component';
import { AdvancedComponent } from './advanced.component';
import { SpecializedComponent } from './specialized.component';
import { KubernetesBasicComponent } from './kubernetes-basic.component';
import { KubernetesIntermediateComponent } from './kubernetes-intermediate.component';
import { KubernetesAdvancedComponent } from './kubernetes-advanced.component';
import { KubernetesSpecializedComponent } from './kubernetes-specialized.component';

export const routes: Routes = [
  { path: '', redirectTo: '/basicos', pathMatch: 'full' },
  { path: 'basicos', component: BasicComponent },
  { path: 'intermedios', component: IntermediateComponent },
  { path: 'avanzados', component: AdvancedComponent },
  { path: 'especializados', component: SpecializedComponent },
  { path: 'k8s-basicos', component: KubernetesBasicComponent },
  { path: 'k8s-intermedios', component: KubernetesIntermediateComponent },
  { path: 'k8s-avanzados', component: KubernetesAdvancedComponent },
  { path: 'k8s-especializados', component: KubernetesSpecializedComponent }
];
