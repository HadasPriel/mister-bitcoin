import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'statistic', component: StatisticComponent },
  { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolverService } },
  { path: 'edit', component: ContactEditComponent, resolve: { contact: ContactResolverService } },
  { path: 'details/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolverService }, runGuardsAndResolvers: 'paramsChange' },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
