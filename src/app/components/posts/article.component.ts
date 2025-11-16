import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Article } from '../../models/article';
import { OrdinalDatePipe } from "../../utilities/pipes";
import { ActivatedRoute, Router } from '@angular/router';
import { getArticleByRoute } from '../../utilities/post-index';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'article',
    templateUrl: './article.component.html',
    imports: [OrdinalDatePipe, CommonModule],
})
export class ArticleComponent {
    article: Article;
    articleRoute: string;
    articleFilePath: string;
    safeHtmlContent: SafeHtml;
    imageUrl: string;

    constructor(private http: HttpClient, private sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router) {

        this.articleRoute = this.route.snapshot.paramMap.get('id')!;
        this.article = getArticleByRoute(this.articleRoute);
        this.articleFilePath = 'assets/' + this.article.id + '.html';
        this.imageUrl = this.article.imageUrl;

        this.http.get(this.articleFilePath, { responseType: 'text' })
            .subscribe({
                next: (data) => {
                    this.safeHtmlContent = this.sanitizer.bypassSecurityTrustHtml(data);
                },                
                error: (err: Error) => {
                    console.error('Error occurred:', err.message);
                    this.router.navigate(['/under-construction']);
                },
                complete: () => {
                    console.log('Article load complete');
                }
            });
    }
}
