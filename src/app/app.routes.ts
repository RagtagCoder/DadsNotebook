import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/misc/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact-me/contact.component';
import { RegisterComponent } from './components/account/register/register.component';
import { ArticleComponent } from './components/posts/article.component';
import { UnderConstructionComponent } from './components/misc/under-construction.component';
import { SearchComponent } from './components/search/search.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'search', component: SearchComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'articles/:id', component: ArticleComponent},
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    { path: 'under-construction', component: UnderConstructionComponent },
    { path: '**', component: PageNotFoundComponent }
];
