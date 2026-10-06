import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../../shared/services/articles.services';

@Component({
  standalone: false,
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
})
export class ArticleDetailsComponent implements OnInit {
  article: any = null;
  private route = inject(ActivatedRoute);
  private articlesService = inject(ArticlesService);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.fetchArticleDetails(slug);
    }
  }

  fetchArticleDetails(slug: string): void {
    this.articlesService.getArticleBySlug(slug, 'en').subscribe({
      next: (response) => {
        this.article = response.data;
      },
      error: (error) => {
        console.error('Error fetching article details:', error);
      },
    });
  }
}
