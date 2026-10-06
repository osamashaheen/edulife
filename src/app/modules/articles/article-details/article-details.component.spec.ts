import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { ArticlesService } from '../../../shared/services/articles.services';
import { ArticleDetailsComponent } from './article-details.component';

@Component({ selector: 'app-header', standalone: true, template: '' })
class HeaderStubComponent {}
@Component({ selector: 'app-footer', standalone: true, template: '' })
class FooterStubComponent {}

describe('ArticleDetailsComponent', () => {
  let component: ArticleDetailsComponent;
  let fixture: ComponentFixture<ArticleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleDetailsComponent],
      imports: [CommonModule, HeaderStubComponent, FooterStubComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({ slug: 'test-article' }) } } },
        { provide: ArticlesService, useValue: { getArticleBySlug: () => of({ data: { name: 'Test article' } }) } },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ArticleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('loads and renders the routed article', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('h1').textContent).toBe('Test article');
  });
});
