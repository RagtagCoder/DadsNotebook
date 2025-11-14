import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent {
  safeHtmlContent: SafeHtml;
  title = 'Post list';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.http.get('assets/test.html', { responseType: 'text' })
      .subscribe(html => {
        if (html) {
          console.log(html);
        }
        this.safeHtmlContent = this.sanitizer.bypassSecurityTrustHtml(html);
      });
  }
}
