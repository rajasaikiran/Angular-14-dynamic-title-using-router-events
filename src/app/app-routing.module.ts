import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'home-title',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'about-title',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'contact-title',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
