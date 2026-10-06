import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../shared/services/articles.services';

@Component({
  standalone: false,
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  parentMessage: string = 'مقالات';
  articles: any[] = [];
  article: any = null;


  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles(): void {
    this.articlesService.getAllArticles('en').subscribe({
      next: (response) => {
        this.articles = response.data;
      },
      error: (error) => {
        console.error('Error fetching articles:', error);
      },
    });
  }

  fetchArticleDetails(slug: string): void {
    this.articlesService.getArticleBySlug(slug, 'ar').subscribe({
      next: (response) => {
        this.article = response.data;
      },
      error: (error) => {
        console.error('Error fetching article details:', error);
      },
    });
  }
}
