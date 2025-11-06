import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostOneComponent } from './components/posts/post-1.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact-me/contact.component';
import { PostTwoComponent } from './components/posts/post-2.component';
import { RegisterComponent } from './components/account/register/register.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'post-1', component: PostOneComponent },
    { path: 'post-2', component: PostTwoComponent },
    { path: 'register', component: RegisterComponent },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];
