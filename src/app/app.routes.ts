import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostOne } from './components/posts/post1/post1.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact-me/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    {
      path: 'post1',
      component: PostOne,
      data: { title: 'Heroes List' }
    },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];
