import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostOneComponent } from './components/posts/1/post-1.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact-me/contact.component';
import { PostTwoComponent } from './components/posts/2/post-2.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'post1', component: PostOneComponent },
    { path: 'post2', component: PostTwoComponent },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];
